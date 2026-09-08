---
name: add-blog
description: Migrate a raw Notion export sitting in this repo's blogs/ folder into a fully wired-up MDX blog post for vatsal-website (rename to slug, convert content.mdx, wire images, fix MDX-breaking LaTeX, register in blogs/index.ts and app/blogs/data.ts). Use this whenever the user runs /add-blog, says they've "added a blog folder", "dropped a Notion export", or asks to "add a new blog post" / "publish this blog" in this repo — even if they don't name the skill directly, since a raw export sitting in blogs/ with a loose .md file is the trigger, not just the phrase "add blog".
---

# Add Blog

This skill turns a raw Notion export into a real post on vatsal.website. Notion
exports are structurally nothing like this repo's posts — a loose `.md` file,
default filenames like `image.png`, and markdown image syntax that Next's MDX
pipeline can't consume — so nearly every export needs the same handful of
mechanical fixes before it can be wired in. Do them the same way every time so
the site stays consistent and nothing breaks the build.

## 1. Find the pending import

Every finished post lives in `blogs/<slug>/` as a `content.mdx` plus its
images. A pending, unprocessed import looks different: it's a folder in
`blogs/` that contains a loose `.md` file instead of `content.mdx` (Notion
names it after the page title plus a hash, e.g. `REINFORCE (Policy
Gradient) 316bb8....md` — don't assume any particular folder name, just look
for the `.md` file). List `blogs/` and find that folder.

- If none exists, tell the user there's nothing to import and ask them to
  drop the exported folder into `blogs/` first. Don't guess at content.
- If more than one exists, ask the user which one to process now.
- Before doing anything else, check whether this content has already been
  published under a different name — skim `blogs/index.ts` for a `title` or
  slug that's clearly the same post (Notion drafts sometimes linger in the
  repo after someone already finished migrating them by hand). If you find a
  match, don't create a second copy: tell the user the post already exists
  at that slug, ask whether they want to update the existing post instead or
  delete the stale raw export, and stop here rather than guessing. Silently
  creating a duplicate post is worse than asking.

Once found, look at what's inside:
- The `.md` file itself (the post body).
- Usually a cover/banner image sitting *parallel* to the `.md` file (same
  directory, not nested) — this is the post's hero image. It can be `.png`
  or `.jpg`, any filename; don't rename it.
- Sometimes a subfolder (Notion's default attachment folder, typically named
  after the page) holding any images referenced inline in the body via
  `![...](Some%20Folder/image.png)` — these need to move, see step 4.

## 2. Ask the two required questions

Before doing anything irreversible (renaming folders), get from the user:

1. **The blog's title.** This becomes the slug (see step 3), the page's H1,
   and the registry `title`. Read the draft first and propose 4 options that
   fit this site's naming convention — nearly every post in the "reinforcement
   learning" series is titled `Reinforcement Learning: <Something>`, so match
   that pattern when the post is part of a series, otherwise mirror how other
   standalone posts are titled (skim a few entries in `blogs/index.ts` for
   calibration).
2. **An SEO description, ~80 characters.** This becomes both the registry's
   `description` field *and* the subtitle `<span>` rendered under the H1 on
   the page itself — they're always the same text in this codebase, so you
   only need to write it once. Propose 4 options, each under ~80 characters,
   each emphasizing a different angle of the post (the mechanism, the
   algorithm name, a contrast with what came before, the practical takeaway).

If you have a tool for structured multiple-choice questions (like
AskUserQuestion), use it — offer the 4 options plus the tool's own free-text
"other" as the way to write a custom answer. If not, just list the 4 options
in your reply and ask the user to pick one or write their own; wait for their
answer before continuing. Don't pick for them — the title and description are
the two things about a post that are genuinely the author's call, everything
else below is mechanical.

## 3. Derive the slug and rename

The slug is the chosen title, lowercased, with punctuation (colons, parens,
etc.) dropped and spaces turned into hyphens — e.g. "Reinforcement Learning:
The REINFORCE Algorithm" becomes `reinforcement-learning-the-reinforce-algorithm`.
Check `blogs/index.ts` for the exact pattern if a title has unusual
punctuation; every existing slug in that file is plain lowercase words joined
by single hyphens, nothing else.

- Rename the import folder from whatever Notion called it to `blogs/<slug>/`.
- Rename the `.md` file inside it to `content.mdx`.

## 4. Handle inline images

If the export had a nested attachment subfolder, every image inside it needs
to become a *sibling* of `content.mdx` — MDX imports use flat relative paths
like `./buffer.png`, not nested ones. Move each image out of the subfolder to
sit directly in `blogs/<slug>/`, then delete the now-empty subfolder.

While moving them, rename anything Notion left generic (`image.png`,
`image 1.png`) to something that actually describes what the image shows —
skim the surrounding prose in the `.md` file for context (e.g. a diagram of a
replay buffer becomes `buffer.png`, not `image.png`). This matches how every
other post in the repo names its images and makes the `content.mdx` you're
about to write much more readable.

## 5. Rewrite content.mdx

Every post follows the same opening shape. Build it like this:

```mdx
import Image from "next/image"

import CoverImage from "./cover.png"
import SomeDiagram from "./some-diagram.png"

# <Chosen Title>

<span className="text-base leading-snug text-neutral-500">
  <Chosen SEO description>
</span>

<Image src={CoverImage} alt={"<Descriptive alt text>"} placeholder="blur" />

<rest of the post body, unchanged>
```

Concretely:

- Add one `import Image from "next/image"` line, then one import per image
  (cover plus every inline image), each with a descriptive PascalCase
  variable name matching the file it points at.
- Replace the original `# Title` line with the chosen title.
- Add the subtitle `<span>` immediately after the title, containing the exact
  SEO description text chosen in step 2.
- Add the cover `<Image>` immediately after the subtitle, before the first
  paragraph of body text.
- Write a real, specific `alt` for every image — never reuse the same alt
  text across images or copy-paste one from another post; describe what that
  particular image actually shows.
- Convert every inline `![...](...)` markdown image in the body to
  `<Image src={ImportedVar} alt={"..."} placeholder="blur" />`, in the same
  spot in the text.
- **Dark mode**: add `className="dark:invert"` to an `<Image>` only when that
  image's *original filename* contains "transparent" (case-insensitive) —
  that's the site's signal that the PNG has a transparent background and
  needs inverting so it reads correctly against the dark theme. Leave every
  other image, including the cover, without that class unless its filename
  says so.
- Leave everything else in the body — every sentence, every `$$...$$` math
  block, every code block — exactly as written. This step is about wiring,
  not editing the author's words.

### Converting tables

Notion exports every table as a plain markdown pipe-table, and its cells are
often full of inline `$...$` LaTeX (subscripts, fractions, Greek letters).
This site doesn't render tables that way — every table in this codebase is
written as raw HTML (`<table><thead>...<tbody>`), with the math inside cells
flattened to plain HTML/Unicode instead of left as `$...$` KaTeX spans (dense
KaTeX inside table cells renders inconsistently — taller than the surrounding
text, misaligned row heights). So every markdown table in the source needs
converting, not just copying over.

Use the bundled script rather than hand-converting cell by cell — it's easy
to miss a row or get a minus sign wrong by hand across a 10+ row table, and
the script is deterministic:

```
python3 scripts/convert_table.py path/to/extracted_table.md
```

(the script lives at `scripts/convert_table.py` right next to this SKILL.md
file — run it from that directory, or give it the full path)

Copy just the table block (header row, `|---|` separator, data rows) out of
the `.md` file into its own temp file, run the script, and paste the printed
`<table>...</table>` block into `content.mdx` in place of the original
markdown table. The script:

- Unwraps every `$...$` span (drops the `$` delimiters) and converts the
  LaTeX inside to plain HTML: `X_n` / `X_{nn}` → `X<sub>n</sub>`, `X^n` /
  `X^{nn}` → `X<sup>n</sup>`, `\frac{a}{b}` → `(a/b)`, common Greek-letter
  macros (`\alpha`, `\gamma`, `\theta`, ...) → their Unicode character, and
  normalizes spacing around `=` to one space each side.
- Converts a binary minus (subtraction between two operands, e.g. `8 - 3`)
  to the proper Unicode minus sign `−`, while leaving a unary negative sign
  right before a digit (e.g. `-4`) as a plain hyphen — matching how this
  site's existing tables distinguish "negative four" from "eight minus
  three".
- Leaves plain text/number cells with no `$...$` in them completely alone.

If a table doesn't fit this pattern (nested tables, a cell containing a
`|`, math the script mangles), fix it up by hand afterward rather than
fighting the script — read its output, spot the one or two cells that need a
manual touch, and edit those directly in `content.mdx`.

### Fixing math that will break the MDX compiler

MDX parses the whole file as JSX-in-Markdown, which means two characters that
are completely normal in LaTeX will break the build if they show up bare in
the text (inside or outside a math block):

- A bare `<` (e.g. `\beta < \varepsilon`) looks like the start of a JSX tag
  to MDX's parser. Replace it with the LaTeX command `\lt`.
- A literal escaped brace pair `\{` / `\}` used for set notation (e.g.
  `\{(s,a,r,s')\}`) still contains a raw `{` character, which MDX reads as
  the start of a JS expression. Replace `\{` with `\lbrace` and `\}` with
  `\rbrace`. **Don't touch** ordinary LaTeX command-grouping braces like
  `\text{UP}`, `\mathbb{E}`, `_{a'}`, `^{T}` — those are fine everywhere in
  this codebase and are not the same pattern; only the bare escaped-brace
  set-notation form needs fixing.

Before moving on, grep the file for `<` and confirm every remaining
occurrence is a real tag (`<Image`, `<span`, `</span>`) — if you find a bare
`<` anywhere else, it wasn't caught and needs the `\lt` fix.

## 6. Register the post

Two files make a post live. Both are append-only in the sense that you should
match existing conventions rather than reorganize them:

**`blogs/index.ts`**
- Find the highest existing `bNN` import number in the file (search for
  `import b` and take the max N) and use `N+1` for this post's two imports.
- Insert the two new import lines (`b<N>Content` and `b<N>Cover`) in
  alphabetical order among the existing imports, sorted by the path they
  import from — the whole import block is kept alphabetical, so find where
  the new slug sorts and insert there, not at the end.
- Append a new entry to the `blogs: Record<string, BlogEntry>` object, keyed
  by the slug, with `title`, `description` (identical text to the subtitle
  span), `cover`, and `Content` fields. Append it at the very end of the
  object — newer posts in this codebase are tacked onto the end rather than
  inserted alphabetically, so match that.

**`app/blogs/data.ts`**
- Add the new slug as a new first entry in the `orderedSlugs` array, ahead of
  whatever was previously first — this array is the display order on
  `/blogs/`, newest first.

Nothing else needs editing. `app/blogs/[slug]/page.tsx` generates its static
params from `blogSlugs` (derived from the `blogs` object), and
`app/sitemap.ts` derives its post list from `app/blogs/data.ts` — both update
automatically once the two files above are correct.

## 7. Verify

Run the project's own checks before calling it done — they'll catch quoting,
import-order, or type mistakes far more reliably than re-reading the diff:

```
bun run lint          # biome check — matches this repo's formatting rules
bun run type-check     # tsc --noEmit
```

If either fails, fix the reported issue and re-run rather than leaving it —
don't run `--fix` blindly on the whole repo since that can touch unrelated
files; scope fixes to the files you just changed. If `bun` isn't available
for some reason, fall back to `npx tsc --noEmit` for the type check at least.

## 8. Hand back to the user

Don't commit or stage anything — leave the changes in the working tree so the
user can review and commit them themselves, same as they would for any other
edit. Summarize what changed: the new slug/folder, the title and description
used, which images were moved or renamed, and confirm lint/type-check passed.
