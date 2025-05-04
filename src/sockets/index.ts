import { Server, Socket } from 'socket.io';
import registerUserSocket from './user.socket';
// import registerProductSocket from './product.socket';

const registerSockets = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`✅ Client connected: ${socket.id}`);

    registerUserSocket(socket, io);
  });
};

export default registerSockets;
