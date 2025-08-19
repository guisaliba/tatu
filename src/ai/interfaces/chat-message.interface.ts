export interface ChatMessage {
  id: string;
  content: string;
  sender: string;
  createdAt: Date;
  sessionId: string;
}
