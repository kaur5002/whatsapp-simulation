import { Server } from "socket.io";

let io: Server;

export const initSocket = (httpServer: any) => {
    io = new Server(httpServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });
};

export const getSocket = () => {
    if (!io) {
        throw new Error("Socket.io not initialized. Call initSocket first.");
    }
    return io;
};

export const onConnection = (callback: (socket: any) => void) => {
    if (!io) {
        throw new Error("Socket.io not initialized. Call initSocket first.");
    }
    io.on("connection", callback);
};