import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID, process.env.OAUTH_CLIENT_SECRET, process.env.OAUTH_REDIRECT_URI);

export const generateAuthUrl = () => {
    const authUrl = client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
    });
    return authUrl;
};

export const getToken = async (code: string) => {
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);
    return tokens;
};

export const verifyToken = async (token: string) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.OAUTH_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
};