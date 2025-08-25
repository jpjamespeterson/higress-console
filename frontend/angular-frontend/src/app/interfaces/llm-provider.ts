export interface LlmProvider {
  name: string;
  type: string;
  endpoints: string[];
  tokens: string[];
  proxyName: string;
  version: string;
  key: string;
}

export const aiModelProviders = [
  {
    value: "openai",
    label: "OpenAI/OpenAI Compatible"
  },
  {
    value: "qwen",
    label: "Tongyi Qianwen"
  },
  {
    value: "moonshot",
    label: "Moonshot"
  },
  {
    value: "ai360",
    label: "360 Zhinao|"
  },
  {
    value: "azure",
    label: "Azure OpenAI"
  },
  {
    value: "baichuan",
    label: "Baichuan AI"
  },
  {
    value: "baidu",
    label: "ERNIE Bot"
  },
  {
    value: "claude",
    label: "Anthropic Claude"
  },
  {
    value: "cloudflare",
    label: "Cloudflare Workers AI"
  },
  {
    value: "cohere",
    label: "Cohere"
  },
  {
    value: "coze",
    label: "Coze"
  },
  {
    value: "deepl",
    label: "DeepL"
  },
  {
    value: "deepseek",
    label: "DeepSeek"
  },
  {
    value: "doubao",
    label: "Doubao"
  },
  {
    value: "gemini",
    label: "Google Gemini"
  },
  {
    value: "github",
    label: "GitHub Models"
  },
  {
    value: "groq",
    label: "Groq"
  },
  {
    value: "hunyuan",
    label: "Tencent Hunyuan"
  },
  {
    value: "minimax",
    label: "MiniMax"
  },
  {
    value: "mistral",
    label: "Mistral"
  },
  {
    value: "ollama",
    label: "Ollama"
  },
  {
    value: "together-ai",
    label: "Together AI"
  },
  {
    value: "stepfun",
    label: "Stepfun"
  },
  {
    value: "spark",
    label: "iFlyTek Spark"
  },
  {
    value: "yi",
    label: "01.AI"
  },
  {
    value: "zhipuai",
    label: "Zhipu AI"
  }
];
