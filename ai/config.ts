export const CURRENT_DATE = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeZone: "UTC"
}).format(new Date())

export const SEARCH_CONFIG = {
  MAX_SEARCH_RESULTS: 5
} as const

export const MODEL_CONFIG = {
  MODEL: "openai/gpt-5.6-luna",
  REASONING: "low",
  REASONING_OPTIONS: {
    openai: {
      reasoningEffort: "low",
      reasoningSummary: "auto"
    }
  },
  MAX_OUTPUT_TOKENS: 65536
} as const

export const AGENT_CONFIG = {
  LEAD_AGENT_MAX_STEPS: 3,
  SUB_AGENT_MAX_STEPS: 5
} as const
