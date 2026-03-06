// TypeScript interface definitions for the MoneyLink Financial app

export interface Section {
    id: string;
    title: string;
    content: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phoneNumber?: string;
}

export interface SystemConfig {
    configId: string;
    appVersion: string;
    apiEndpoint: string;
}

export interface AppNotification {
    id: string;
    userId: string;
    message: string;
    timestamp: Date;
}

export interface Agent {
    id: string;
    name: string;
    specialization: string;
}

export interface Admin {
    id: string;
    name: string;
    email: string;
}

export interface LoanRequest {
    requestId: string;
    userId: string;
    amount: number;
    status: string;
}

export interface Transaction {
    transactionId: string;
    userId: string;
    amount: number;
    date: Date;
}

export interface ChatMessage {
    messageId: string;
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: Date;
}

export interface Notification {
    id: string;
    type: string;
    message: string;
    timestamp: Date;
}

export interface AdminNotification {
    id: string;
    adminId: string;
    message: string;
    timestamp: Date;
}

export interface RecurringPayment {
    paymentId: string;
    userId: string;
    amount: number;
    schedule: string;
}

export interface AppRequest {
    requestId: string;
    userId: string;
    type: string;
}

export interface Meeting {
    meetingId: string;
    subject: string;
    date: Date;
    participants: string[];
}

export interface StreamingApp {
    appId: string;
    name: string;
    version: string;
}

export interface Tool {
    toolId: string;
    name: string;
    description: string;
}

export interface Server {
    serverId: string;
    ipAddress: string;
    status: string;
}

export interface AgentRequest {
    requestId: string;
    agentId: string;
    requestDetails: string;
}
