import { InferToolInput, InferToolOutput, InferUITools, UIMessage } from "ai"
import { completeTaskTool, createPlanTool, fetchWebTool, searchWebTool } from "./tools"

const tools = {
  search_web: searchWebTool,
  fetch_web: fetchWebTool,
  create_plan: createPlanTool,
  complete_task: completeTaskTool
}

type MyUITools = InferUITools<typeof tools>

export interface Source {
  url: string
  title?: string
  content?: string
}

export type WebSearchToolResult = {
  toolName: "search_web"
  toolCallId: string
  input: InferToolInput<typeof searchWebTool>
  output: InferToolOutput<typeof searchWebTool>
}

export type WebFetchToolResult = {
  toolName: "fetch_web"
  toolCallId: string
  input: InferToolInput<typeof fetchWebTool>
  output: InferToolOutput<typeof fetchWebTool>
}

export type SubAgentToolCall = WebSearchToolResult | WebFetchToolResult

export type MyUIMessage = UIMessage<
  never,
  {
    subagent: {
      title: string
      state: "streaming" | "done"
      toolCalls: SubAgentToolCall[]
    }
    report: {
      report: string
      sources: Source[]
      phase: "synthesizing" | "citations" | "finished"
    }
  },
  MyUITools
>
