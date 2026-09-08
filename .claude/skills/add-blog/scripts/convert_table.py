#!/usr/bin/env python3
"""
Convert a GFM markdown pipe-table (with optional inline $...$ LaTeX in cells,
the shape Notion exports) into the raw HTML <table> markup this site's MDX
tables use.

Usage:
    python3 convert_table.py < table.md > table.html
    python3 convert_table.py table.md

Input: the markdown table block only (header row, |---|---| separator row,
then data rows) — nothing else. Copy just the table out of the .md file into
its own temp file, or pipe it in directly.

Output: a self-contained <table><thead>...</thead><tbody>...</tbody></table>
block, ready to paste into content.mdx in place of the markdown table.

What it does to each cell:
- $...$ math spans are unwrapped (the $ delimiters are dropped) and the LaTeX
  inside is converted to plain HTML/Unicode: subscripts/superscripts become
  <sub>/<sup>, \\frac{a}{b} becomes (a/b), common Greek-letter macros become
  their Unicode character, spacing around "=" is normalized to one space each
  side, and a binary minus (a "-" with text on both sides, i.e. subtraction)
  becomes the Unicode minus sign "−" while a leading negative sign right
  before a digit stays a plain "-".
- Plain text/number cells with no $...$ in them are left completely alone.
"""

import re
import sys

GREEK = {
    r"\alpha": "α", r"\beta": "β", r"\gamma": "γ", r"\delta": "δ",
    r"\epsilon": "ε", r"\varepsilon": "ε", r"\zeta": "ζ", r"\eta": "η",
    r"\theta": "θ", r"\vartheta": "θ", r"\iota": "ι", r"\kappa": "κ",
    r"\lambda": "λ", r"\mu": "μ", r"\nu": "ν", r"\xi": "ξ", r"\pi": "π",
    r"\rho": "ρ", r"\sigma": "σ", r"\tau": "τ", r"\upsilon": "υ",
    r"\phi": "φ", r"\varphi": "φ", r"\chi": "χ", r"\psi": "ψ", r"\omega": "ω",
    r"\Gamma": "Γ", r"\Delta": "Δ", r"\Theta": "Θ", r"\Lambda": "Λ",
    r"\Xi": "Ξ", r"\Pi": "Π", r"\Sigma": "Σ", r"\Upsilon": "Υ",
    r"\Phi": "Φ", r"\Psi": "Ψ", r"\Omega": "Ω",
    r"\leq": "≤", r"\geq": "≥", r"\neq": "≠", r"\approx": "≈",
    r"\infty": "∞", r"\times": "×", r"\cdot": "·", r"\pm": "±",
    r"\rightarrow": "→", r"\to": "→", r"\leftarrow": "←",
}
# longest macro names first so e.g. \varepsilon matches before \epsilon-ish partials
GREEK_KEYS = sorted(GREEK.keys(), key=len, reverse=True)


def convert_math_span(s: str) -> str:
    # \frac{a}{b} -> (a/b), innermost-first for nested fractions
    prev = None
    while prev != s:
        prev = s
        s = re.sub(r"\\frac\{([^{}]*)\}\{([^{}]*)\}", r"(\1/\2)", s)
    # subscripts / superscripts: braced form first, then single-token form
    s = re.sub(r"_\{([^{}]*)\}", r"<sub>\1</sub>", s)
    s = re.sub(r"_([A-Za-z0-9])", r"<sub>\1</sub>", s)
    s = re.sub(r"\^\{([^{}]*)\}", r"<sup>\1</sup>", s)
    s = re.sub(r"\^([A-Za-z0-9])", r"<sup>\1</sup>", s)
    for k in GREEK_KEYS:
        s = s.replace(k, GREEK[k])
    # normalize spacing around "="
    s = re.sub(r"\s*=\s*", " = ", s)
    # binary minus (text - text) -> unicode minus; leaves a unary "-4" style
    # negative sign (no space before the hyphen) untouched
    s = re.sub(r"(?<=\S) - (?=\S)", " − ", s)
    return s.strip()


def convert_cell(cell: str) -> str:
    cell = cell.strip()
    return re.sub(r"\$([^$]+)\$", lambda m: convert_math_span(m.group(1)), cell)


def split_row(line: str) -> list[str]:
    line = line.strip()
    if line.startswith("|"):
        line = line[1:]
    if line.endswith("|"):
        line = line[:-1]
    # split on unescaped pipes
    cells = re.split(r"(?<!\\)\|", line)
    return [c.replace(r"\|", "|").strip() for c in cells]


def is_separator_row(line: str) -> bool:
    cells = split_row(line)
    return all(re.fullmatch(r":?-{2,}:?", c.strip()) for c in cells if c.strip())


def parse_table(text: str):
    lines = [l for l in text.splitlines() if l.strip()]
    if len(lines) < 2:
        raise ValueError("Need at least a header row and a separator row")
    header = split_row(lines[0])
    body_start = 1
    if is_separator_row(lines[1]):
        body_start = 2
    rows = [split_row(l) for l in lines[body_start:]]
    return header, rows


def render_html(header: list[str], rows: list[list[str]]) -> str:
    out = ["<table>", "  <thead>", "    <tr>"]
    for h in header:
        out.append(f"      <th>{convert_cell(h)}</th>")
    out += ["    </tr>", "  </thead>", "  <tbody>"]
    for row in rows:
        out.append("    <tr>")
        for cell in row:
            out.append(f"      <td>{convert_cell(cell)}</td>")
        out.append("    </tr>")
    out += ["  </tbody>", "</table>"]
    return "\n".join(out)


def main():
    if len(sys.argv) > 1:
        with open(sys.argv[1], encoding="utf-8") as f:
            text = f.read()
    else:
        text = sys.stdin.read()
    header, rows = parse_table(text)
    print(render_html(header, rows))


if __name__ == "__main__":
    main()
