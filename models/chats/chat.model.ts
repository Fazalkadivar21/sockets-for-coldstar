import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    participants: [{
      type: String,
      required: true
    }],
    messages: [
      {
        sender: {
          type: String,
          required: true,
        },
        content: {
          type: String,
        },
        file: {
          type: {
            url: String,
            fileType: String,
            fileName: String,
          },
          default: undefined,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
);  

export const chatModel = mongoose.models.chats || mongoose.model("chats", chatSchema);
