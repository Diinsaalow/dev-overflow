import { models, Schema, model } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  password: string;
  email: string;
  bio?: string;
  image: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    image: { type: String, required: true },
    location: { type: String, required: true },
    portfolioWebsite: { type: String },
    reputation: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const User = models?.user || model("User", UserSchema);
