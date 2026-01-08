
import { GoogleGenAI } from "@google/genai";
import { HAMMAD_INFO } from "../constants";

// Initialize AI client using the API_KEY environment variable directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHammadAIResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are an AI Personal Assistant for Hammad Sheikh bin Nadeem. 
        Hammad is a professional AI Engineer, Software Developer, and Teacher from Pakistan.
        He specializes in Artificial Intelligence, AI chat applications, and next-generation solutions.
        His mission is to educate and empower students in Pakistan.
        
        Information about Hammad:
        - Full Name: Hammad Sheikh bin Nadeem
        - Role: AI Engineer & Teacher
        - Location: Pakistan
        - Expertise: LLMs, AI Chat systems, modern AI tech, Python, Software Engineering.
        
        Guidelines:
        - Be professional, encouraging, and helpful.
        - Speak in the third person about Hammad.
        - If someone asks how to learn AI from him, encourage them to contact him through the website.
        - Keep answers concise but informative.`,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    // Directly access the .text property from the response
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is temporarily offline. Please reach out to Hammad directly via the contact form!";
  }
};