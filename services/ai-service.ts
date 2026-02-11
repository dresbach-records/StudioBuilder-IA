
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const aiService = {
  generateCode: async (prompt: string) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `You are an expert software architect. Generate clean, efficient, and well-documented React/Next.js code for the following request: ${prompt}. Return only the code block if possible.`,
      });
      return response.text;
    } catch (error) {
      console.error("AI Generation Error:", error);
      throw error;
    }
  },

  streamChat: async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
    try {
      const chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: 'You are Studio AI, a senior software engineer assistant integrated into a professional IDE. Help the user build, refactor, and understand code. You can suggest file structures and provide complete code snippets.',
        }
      });
      // Note: In a real streaming implementation with standard fetch/eventsource we would use generateContentStream
      // For this architecture, we provide a structured response that mimics the flow.
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [...history.map(h => ({ role: h.role, parts: h.parts })), { role: 'user', parts: [{ text: message }] }]
      });
      return response.text;
    } catch (error) {
      console.error("Chat Error:", error);
      throw error;
    }
  },
  
  refactorCode: async (code: string, instructions: string) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Refactor the following code according to these instructions: "${instructions}". Code:\n\n${code}\n\nReturn the refactored code and a brief summary of changes.`,
      });
      return response.text;
    } catch (error) {
      console.error("Refactoring Error:", error);
      throw error;
    }
  },

  explainCode: async (code: string) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Explain how this code works in a way a senior engineer would understand, highlighting potential bottlenecks or architectural patterns: \n\n ${code}`,
      });
      return response.text;
    } catch (error) {
      console.error("Explanation Error:", error);
      throw error;
    }
  },
  
  analyzeSecurity: async (code: string) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Perform a security audit on this code. Look for XSS, CSRF, insecure dependencies, or data leaks: \n\n ${code}`,
      });
      return response.text;
    } catch (error) {
      console.error("Security Analysis Error:", error);
      throw error;
    }
  }
};
