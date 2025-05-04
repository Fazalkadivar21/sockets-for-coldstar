import { Server, Socket } from "socket.io";
import { connect } from "../../lib/dbConn";
import { chatModel } from "../../models/chats/chat.model";
import { User } from "../../models/users/user.model";

interface UserData {
  userId: string;
}

export const handleGetUsers = (socket: Socket, data: UserData): void => {
  socket.on("user:find", async (data) => {
    await connect();
    
    const getUsersIds = await chatModel.find(
      {
        participants: {
          $regex: data,
          $options: "i",
        },
      },
      { _id: 0, participants: 1 }
    );
    
    const userIds = getUsersIds.map((userIds)=>{
      return userIds.participants[userIds.participants.length - 1 - userIds.participants.indexOf(data)]
    })
    
    const users = await Promise.all(
      userIds.map(async (ids) => {
        return await User.findOne({
          id: {
            $regex: ids,
            $options: "i",
          },
        });
      })
    );

    socket.emit("user:found", users);
  });
};
