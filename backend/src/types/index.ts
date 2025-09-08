export interface User {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Session {
    id: string;
    userId: string;
    createdAt: Date;
    expiresAt: Date;
}

export interface AuthPayload {
    username: string;
    password: string;
}

export interface OAuthToken {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}