import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateTaskSuggestions(
  description: string
): Promise<{
  title: string;
  priority: "low" | "medium" | "high";
  suggestions: string[];
}> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "You are a task management assistant. Given a task description, suggest a clear title, appropriate priority level, and helpful suggestions for completing the task. Respond with JSON in this format: { 'title': string, 'priority': 'low' | 'medium' | 'high', 'suggestions': string[] }"
      },
      {
        role: "user",
        content: description
      }
    ],
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0].message.content);
}
