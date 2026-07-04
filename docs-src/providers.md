# Providers

Clew Code supports **27 providers**. Set the corresponding environment variable before starting.

## Quick setup

```bash
export OPENAI_API_KEY=sk-...
export GOOGLE_API_KEY=...
export DEEPSEEK_API_KEY=...
export GROQ_API_KEY=...
export OPENROUTER_API_KEY=...
export OLLAMA_HOST=http://localhost:11434
export GEMINI_API_KEY=...
```

## All providers

| Provider | Env Key |
|---|---|
| OpenAI | `OPENAI_API_KEY` |
| Google Gemini | `GOOGLE_API_KEY` |
| Google Code Assist | `GEMINI_API_KEY` |
| DeepSeek | `DEEPSEEK_API_KEY` |
| Groq | `GROQ_API_KEY` |
| xAI (Grok) | `XAI_API_KEY` |
| Mistral | `MISTRAL_API_KEY` |
| Cohere | `COHERE_API_KEY` |
| Perplexity | `PERPLEXITY_API_KEY` |
| Cerebras | `CEREBRAS_API_KEY` |
| Moonshot (Kimi) | `MOONSHOT_API_KEY` |
| Zhipu (GLM) | `ZHIPU_API_KEY` |
| NVIDIA NIM | `NVIDIA_API_KEY` |
| OpenRouter | `OPENROUTER_API_KEY` |
| OpenCode | `OPENCODE_API_KEY` |
| OpenCode Go | `OPENCODE_GO_API_KEY` |
| KiloCode | `KILOCODE_API_KEY` |
| Ollama (local) | `OLLAMA_API_KEY` |
| Together AI | `TOGETHER_API_KEY` |
| Fireworks AI | `FIREWORKS_API_KEY` |
| Deep Infra | `DEEPINFRA_API_KEY` |
| SiliconFlow | `SILICONFLOW_API_KEY` |
| Hugging Face | `HUGGINGFACE_API_KEY` |
| Poe | `POE_API_KEY` |
| DigitalOcean | `DIGITALOCEAN_API_KEY` |
| Cline | `CLINE_API_KEY` |
| Custom | `CUSTOM_API_KEY` |

Switch mid-session with `/model` or `/provider`.
