import type { StaticImageData } from "next/image"
import type * as React from "react"
import b0Cover from "./a-comprehensive-overview-of-bert/banner.jpg"
import b0Content from "./a-comprehensive-overview-of-bert/content.mdx"
import b1Content from "./a-lagrange-multiplier-approach-to-pca/content.mdx"
import b1Cover from "./a-lagrange-multiplier-approach-to-pca/cover.png"
import b2Cover from "./annoy-and-efficient-approximate-nearest-neighbor-algorithm/banner.jpg"
import b2Content from "./annoy-and-efficient-approximate-nearest-neighbor-algorithm/content.mdx"
import b3Cover from "./attention-mechanism/banner.jpg"
import b3Content from "./attention-mechanism/content.mdx"
import b4Cover from "./encoder-decoder-architecture/banner.jpg"
import b4Content from "./encoder-decoder-architecture/content.mdx"
import b5Cover from "./encoder-decoder-attention-in-the-transformer/banner.jpg"
import b5Content from "./encoder-decoder-attention-in-the-transformer/content.mdx"
import b6Cover from "./evaluation-metrics-for-synthetic-qa-datasets-in-rag-evaluation/banner.jpg"
import b6Content from "./evaluation-metrics-for-synthetic-qa-datasets-in-rag-evaluation/content.mdx"
import b7Cover from "./from-gpt-1-to-gpt-3-a-new-era-in-nlp/banner.jpg"
import b7Content from "./from-gpt-1-to-gpt-3-a-new-era-in-nlp/content.mdx"
import b8Cover from "./lora-low-rank-adaptation-for-efficient-fine-tuning/banner.jpg"
import b8Content from "./lora-low-rank-adaptation-for-efficient-fine-tuning/content.mdx"
import b9Cover from "./model-evaluation-sensitivity-specificity-and-roc-auc/banner.jpg"
import b9Content from "./model-evaluation-sensitivity-specificity-and-roc-auc/content.mdx"
import b10Cover from "./normalization-in-deep-learning/banner.jpg"
import b10Content from "./normalization-in-deep-learning/content.mdx"
import b11Cover from "./rag-enhancing-language-models-with-external-knowledge/banner.jpg"
import b11Content from "./rag-enhancing-language-models-with-external-knowledge/content.mdx"
import b12Cover from "./rag-evaluation-part-1-retriever-evaluation/banner.png"
import b12Content from "./rag-evaluation-part-1-retriever-evaluation/content.mdx"
import b13Cover from "./rag-evaluation-part-2-generator-evaluation/banner.png"
import b13Content from "./rag-evaluation-part-2-generator-evaluation/content.mdx"
import b14Content from "./reinforcement-learning-markov-decision-process/content.mdx"
import b14Cover from "./reinforcement-learning-markov-decision-process/cover.png"
import b15Content from "./reinforcement-learning-model-based-adp-learner/content.mdx"
import b15Cover from "./reinforcement-learning-model-based-adp-learner/cover.png"
import b16Content from "./reinforcement-learning-model-free-monte-carlo-learner/content.mdx"
import b16Cover from "./reinforcement-learning-model-free-monte-carlo-learner/cover.png"
import b17Content from "./reinforcement-learning-multi-armed-bandits/content.mdx"
import b17Cover from "./reinforcement-learning-multi-armed-bandits/mab.png"
import b30Content from "./reinforcement-learning-n-step-sarsa/content.mdx"
import b30Cover from "./reinforcement-learning-n-step-sarsa/cover.png"
import b18Content from "./reinforcement-learning-off-policy-monte-carlo/content.mdx"
import b18Cover from "./reinforcement-learning-off-policy-monte-carlo/cover.png"
import b19Content from "./reinforcement-learning-policy-iteration/content.mdx"
import b19Cover from "./reinforcement-learning-policy-iteration/cover.png"
import b20Content from "./reinforcement-learning-q-learning/content.mdx"
import b20Cover from "./reinforcement-learning-q-learning/cover.png"
import b21Content from "./reinforcement-learning-sarsa/content.mdx"
import b21Cover from "./reinforcement-learning-sarsa/cover.png"
import b22Content from "./reinforcement-learning-value-iteration/content.mdx"
import b22Cover from "./reinforcement-learning-value-iteration/cover.png"
import b23Cover from "./self-attention/banner.jpg"
import b23Content from "./self-attention/content.mdx"
import b24Cover from "./sinusoidal-positional-encoding-in-the-transformer/banner.jpg"
import b24Content from "./sinusoidal-positional-encoding-in-the-transformer/content.mdx"
import b25Cover from "./t5-the-text-to-text-transfer-transformer/banner.jpg"
import b25Content from "./t5-the-text-to-text-transfer-transformer/content.mdx"
import b26Cover from "./the-react-agent-framework/banner.jpg"
import b26Content from "./the-react-agent-framework/content.mdx"
import b27Cover from "./understanding-padding-and-look-ahead-mask-in-the-transformer-decoder/banner.jpg"
import b27Content from "./understanding-padding-and-look-ahead-mask-in-the-transformer-decoder/content.mdx"
import b28Cover from "./understanding-scaling-in-self-attention/banner.jpg"
import b28Content from "./understanding-scaling-in-self-attention/content.mdx"
import b29Cover from "./understanding-the-transformer-architecture/banner.jpg"
import b29Content from "./understanding-the-transformer-architecture/content.mdx"

export interface BlogEntry {
  title: string
  description: string
  cover: StaticImageData
  Content: React.ComponentType
}

export const blogs: Record<string, BlogEntry> = {
  "a-comprehensive-overview-of-bert": {
    title: "A Comprehensive Overview of BERT",
    description:
      "Explore how BERT revolutionized NLP with its bidirectional pre-training, unsupervised learning tasks like Masked Language Modeling (MLM) and Next Sentence Prediction (NSP), and scalable architecture for various downstream tasks.",
    cover: b0Cover,
    Content: b0Content,
  },
  "a-lagrange-multiplier-approach-to-pca": {
    title: "A Lagrange Multiplier Approach to PCA",
    description:
      "Learn how Principal Component Analysis uses Lagrange multipliers to maximize data variance.",
    cover: b1Cover,
    Content: b1Content,
  },
  "annoy-and-efficient-approximate-nearest-neighbor-algorithm": {
    title: "Annoy and Approximate Nearest Neighbor Algorithm",
    description:
      "Explore how Annoy accelerates nearest neighbor search with randomized trees, balancing speed and accuracy in high-dimensional data applications.",
    cover: b2Cover,
    Content: b2Content,
  },
  "attention-mechanism": {
    title: "Attention Mechanism in Encoder - Decoder Architecture",
    description:
      "Dive into the limitations of traditional Seq2Seq models and how attention mechanisms revolutionized neural machine translation.",
    cover: b3Cover,
    Content: b3Content,
  },
  "encoder-decoder-architecture": {
    title: "Seq2Seq Learning - An Encoder-Decoder Approach",
    description:
      "Explore the fundamentals of sequence-to-sequence learning with neural networks, Encoder-Decoder architecture. Learn how this powerful framework drives machine translation, text summarization, and more.",
    cover: b4Cover,
    Content: b4Content,
  },
  "encoder-decoder-attention-in-the-transformer": {
    title: "Encoder - Decoder Attention in the Transformer",
    description:
      "Understand how encoder-decoder attention powers tasks like machine translation by dynamically linking input and output sequences using queries, keys, and values.",
    cover: b5Cover,
    Content: b5Content,
  },
  "evaluation-metrics-for-synthetic-qa-datasets-in-rag-evaluation": {
    title: "Evaluation Metrics for Synthetic QA Datasets in RAG Evaluation",
    description:
      "Learn how to generate high-quality synthetic QA datasets for RAG pipelines evaluation using LLMs, with automated critique.",
    cover: b6Cover,
    Content: b6Content,
  },
  "from-gpt-1-to-gpt-3-a-new-era-in-nlp": {
    title: "From GPT-1 to GPT-3: A New Era in NLP",
    description:
      "Trace the GPT journey: how unsupervised pre-training, scaling model sizes, and few-shot prompting reshaped modern NLP.",
    cover: b7Cover,
    Content: b7Content,
  },
  "lora-low-rank-adaptation-for-efficient-fine-tuning": {
    title: "LoRA: Low-Rank Adaptation for Efficient Fine-Tuning",
    description:
      "Learn how Low-Rank Adaptation (LoRA) enables efficient fine-tuning of large language models by reducing trainable parameters.",
    cover: b8Cover,
    Content: b8Content,
  },
  "model-evaluation-sensitivity-specificity-and-roc-auc": {
    title: "Model Evaluation: Sensitivity, Specificity, and ROC-AUC",
    description:
      "Discover the key metrics—Sensitivity, Specificity, and ROC-AUC—that define effective model evaluation for binary classification problems.",
    cover: b9Cover,
    Content: b9Content,
  },
  "normalization-in-deep-learning": {
    title: "Normalization in Deep Learning",
    description:
      "Explore the critical role of normalization in deep learning and understand how these techniques enhance model training, stability, and efficiency across different applications, from image processing to NLP and transformer-based architectures.",
    cover: b10Cover,
    Content: b10Content,
  },
  "rag-enhancing-language-models-with-external-knowledge": {
    title: "RAG: Enhancing Language Models with External knowledge",
    description:
      "Learn how Retrieval-Augmented Generation (RAG) enhances language models by integrating external knowledge for accurate, context-aware, and up-to-date responses.",
    cover: b11Cover,
    Content: b11Content,
  },
  "rag-evaluation-part-1-retriever-evaluation": {
    title: "RAG Evaluation Part 1: Retriever Evaluation",
    description:
      "A practical guide to measuring retrieval quality in RAG systems, with step-by-step examples of Context Precision and Recall calculations.",
    cover: b12Cover,
    Content: b12Content,
  },
  "rag-evaluation-part-2-generator-evaluation": {
    title: "RAG Evaluation Part 2: Generator Evaluation",
    description:
      "Learn to measure the generator's quality in RAG workflows using faithfulness, relevancy, and noise metrics.",
    cover: b13Cover,
    Content: b13Content,
  },
  "reinforcement-learning-markov-decision-process": {
    title: "Reinforcement Learning: Markov Decision Process",
    description:
      "Beginner-friendly guide to Markov Decision Processes through a drone story, navigates a stochastic grid with rewards.",
    cover: b14Cover,
    Content: b14Content,
  },
  "reinforcement-learning-model-based-adp-learner": {
    title: "Reinforcement Learning: Model Based ADP Learner",
    description:
      "From raw experience to learned MDP models: an introduction to model-based ADP.",
    cover: b15Cover,
    Content: b15Content,
  },
  "reinforcement-learning-model-free-monte-carlo-learner": {
    title: "Reinforcement Learning: Model-free Monte Carlo Learner",
    description:
      "Explore how Monte Carlo methods let a drone learn Q-values without any model.",
    cover: b16Cover,
    Content: b16Content,
  },
  "reinforcement-learning-multi-armed-bandits": {
    title: "Reinforcement Learning: Multi Armed Bandits",
    description:
      "Explore the exploration-exploitation dilemma and understand ε-greedy and UCB algorithms in Multi-Armed Bandits",
    cover: b17Cover,
    Content: b17Content,
  },
  "reinforcement-learning-off-policy-monte-carlo": {
    title: "Reinforcement Learning: Off Policy Monte Carlo",
    description:
      "Explore how importance sampling lets RL evaluate policies without executing them.",
    cover: b18Cover,
    Content: b18Content,
  },
  "reinforcement-learning-policy-iteration": {
    title: "Reinforcement Learning: Policy Iteration",
    description:
      "Explore policy evaluation and improvement to optimize drone navigation and eventually making drone smarter.",
    cover: b19Cover,
    Content: b19Content,
  },
  "reinforcement-learning-q-learning": {
    title: "Reinforcement Learning: Q Learning",
    description:
      "Explore how Q-learning emerges from SARSA by shifting from real actions to optimal ones.",
    cover: b20Cover,
    Content: b20Content,
  },
  "reinforcement-learning-sarsa": {
    title: "Reinforcement Learning: SARSA",
    description:
      "A simple guide to TD learning, step-size dynamics, and SARSA’s on-policy updates.",
    cover: b21Cover,
    Content: b21Content,
  },
  "reinforcement-learning-value-iteration": {
    title: "Reinforcement Learning: Value Iteration",
    description: "Value Iteration: a faster path to optimal policies for MDPs.",
    cover: b22Cover,
    Content: b22Content,
  },
  "self-attention": {
    title: "Self-Attention: Queries, Keys, and Values in Action",
    description:
      "Dive into the core of transformer models. Self-attention mechanism and power of multi-head attention for richer contextual understanding in NLP applications.",
    cover: b23Cover,
    Content: b23Content,
  },
  "sinusoidal-positional-encoding-in-the-transformer": {
    title: "Sinusoidal Positional Encoding in the Transformer",
    description:
      "Learn how sine and cosine functions bring sequence order to Transformer models with detailed explanations and examples.",
    cover: b24Cover,
    Content: b24Content,
  },
  "t5-the-text-to-text-transfer-transformer": {
    title: "T5: The Text-to-Text Transfer Transformer",
    description:
      "Explore how T5 (Text-to-Text Transfer Transformer) simplifies NLP with a unified text-to-text approach.",
    cover: b25Cover,
    Content: b25Content,
  },
  "the-react-agent-framework": {
    title: "The ReACT Agent Framework",
    description:
      "From Reasoning to Action: Understanding ReACT agents and their impact on AI development and innovation.",
    cover: b26Cover,
    Content: b26Content,
  },
  "understanding-padding-and-look-ahead-mask-in-the-transformer-decoder": {
    title: "Padding and Look-Ahead Mask in the Transformer Decoder",
    description:
      "Discover how padding masks and look-ahead masks empower the Transformer model to handle variable-length sequences and maintain autoregressive properties, enabling efficient and accurate sequence processing in NLP tasks.",
    cover: b27Cover,
    Content: b27Content,
  },
  "understanding-scaling-in-self-attention": {
    title: "Understanding Scaling in Self-Attention",
    description:
      "Discover how scaling factor prevents sharp softmax outputs, stabilizes training, and enhances the performance of transformer architectures.",
    cover: b28Cover,
    Content: b28Content,
  },
  "understanding-the-transformer-architecture": {
    title: "Understanding the Transformer Architecture",
    description:
      "Get a bird’s eye view of the Transformer architecture! and learn how attention, positional encoding, and encoder-decoder structures work together to revolutionize NLP tasks.",
    cover: b29Cover,
    Content: b29Content,
  },
  "reinforcement-learning-n-step-sarsa": {
    title: "Reinforcement Learning: N-Step SARSA",
    description:
      "A clear walkthrough of n-step returns, showing how they unify Monte Carlo and temporal-difference methods through a controllable lookahead horizon.",
    cover: b30Cover,
    Content: b30Content,
  },
}

export const blogSlugs = Object.keys(blogs)
