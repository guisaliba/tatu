import type { ChatMessage, ChatSession, MessageSender } from '@prisma/client';

export type { ChatMessage, ChatSession, MessageSender };

export interface ChatSessionWithMessages extends ChatSession {
  messages: ChatMessage[];
  user: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
  };
  studio: {
    id: string;
    email?: string;
    description?: string;
  };
}

export interface CreateChatMessageInput {
  content: string;
  sender: MessageSender;
  sessionId: string;
}

export interface CreateChatSessionInput {
  userId: string;
  studioId: string;
}

export interface ChatMessageResponse extends ChatMessage {
  // Placeholder
  user: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
  };
}

export interface ChatSessionResponse extends ChatSession {
  messageCount: number;
  lastMessage?: ChatMessage;
}
