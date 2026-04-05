import mongoose, { Schema, models } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Optional for Google Login users
    role: { type: String, default: 'student' },
  },
  { timestamps: true },
);

const User = models.User || mongoose.model('User', userSchema);
export default User;
