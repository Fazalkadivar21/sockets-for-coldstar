import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true
  },
  avatar: {
    type: {
      avatarId: String,
      avatarUrl: String,
    },
    default: undefined,
  },
  isOnline: {
    type: Boolean,
    default: true,
  },
  lastSeen: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.models.users || mongoose.model("users", userSchema);
