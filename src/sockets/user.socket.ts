import { Server, Socket } from 'socket.io';
import { handleGetUsers } from '../events/userEvents';

const registerUserSocket = (socket: Socket, io: Server): void => {
  socket.on('user:find', (data) => {
    handleGetUsers(socket, data);
  });
};

export default registerUserSocket;
