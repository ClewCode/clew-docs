# Providers

Clew Code supports **29 providers**. Set the corresponding environment variable before starting.

## Quick setup

```bash
export OPENAI_API_KEY=sk-...
export GOOGLE_API_KEY=...
export DEEPSEEK_API_KEY=...
export GROQ_API_KEY=...
export OPENROUTER_API_KEY=...
export OLLAMA_HOST=http://localhost:11434
export OPENGATEWAY_API_KEY=ogw_live_...
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
| OpenGateway | `OPENGATEWAY_API_KEY` |
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
| Sakana AI | `SAKANA_API_KEY` |
| Custom | `CUSTOM_API_KEY` |

Switch mid-session with `/model` or `/provider`.

## Provider features

All providers support chat and streaming. Provider-specific capabilities:
- **Tool calling**: OpenAI, DeepSeek, Groq, Anthropic, OpenGateway, Together, Fireworks, OpenRouter, and most OpenAI-compatible providers
- **Vision**: OpenAI, Google Gemini, Groq, OpenGateway (some models), Moonshot, Zhipu
- **Reasoning**: DeepSeek, OpenGateway (MiMo V2.5 Pro, GLM 5.2, Nemotron 3), xAI
- **Free models**: OpenGateway (Tencent HY3, Nemotron 3 Ultra), Groq
- **Local**: Ollama