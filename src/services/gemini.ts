import { ChatSession, GoogleGenerativeAI } from '@google/generative-ai';

import {
  ABOUT_ME,
  BLOG_POSTS,
  PROJECTS,
  PUBLICATIONS,
  SKILLS,
} from '@/data/content';

// Construct a context string for the AI
const CONTEXT = `
You are an AI assistant for Rio's personal portfolio website "riothinks.com".
Rio is a Data Engineer and Researcher.
Your goal is to answer visitor questions professionally and concisely based on Rio's background.

Here is Rio's Profile Data:

[Bio]
${ABOUT_ME}

[Skills]
${SKILLS.join(', ')}

[Projects]
${PROJECTS.map((p) => `- ${p.title}: ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n')}

[Publications]
${PUBLICATIONS.map((p) => `- "${p.title}" (${p.year}) in ${p.journal}. Abstract: ${p.abstract}`).join('\n')}

[Recent Blog Posts]
${BLOG_POSTS.map((b) => `- ${b.title} (${b.date}): ${b.excerpt}`).join('\n')}

Guidelines:
1. Be polite, professional, and concise.
2. Only answer questions related to Rio, his work, data engineering, or computer science.
3. If asked about contact info, suggest they use the contact section on the website (email: rio@riothinks.com).
4. Keep answers short (under 100 words) unless asked for detail.
`;

let chatSession: ChatSession | null = null;

function initializeChat(): ChatSession {
  // 1. Use the NEXT_PUBLIC_ prefixed environment variable
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('NEXT_PUBLIC_GEMINI_API_KEY not found in .env.local');
  }

  // 2. Correctly initialize the SDK
  const genAI = new GoogleGenerativeAI(apiKey);

  // 3. Get the model and start the chat with the system instruction
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash', // Use a valid, available model name
    systemInstruction: CONTEXT,
  });

  return model.startChat();
}

export const getChatSession = (): ChatSession => {
  if (!chatSession) {
    chatSession = initializeChat();
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const session = getChatSession();
    // 4. The message is sent directly as a string
    const result = await session.sendMessage(message);
    const response = result.response;
    // 5. The response text is retrieved with response.text()
    return response.text();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Gemini Error:', error);
    return "I'm currently experiencing high traffic. Please try again later.";
  }
};
