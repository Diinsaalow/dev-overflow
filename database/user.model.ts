import { models, Schema, model, Document } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  password: string;
  email: string;
  image: string;
  bio?: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
}

export interface IUserDoc extends IUser, Document { }

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    location: String,
    image: { type: String, required: true },
    portfolioWebsite: { type: String },
    reputation: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

export const User = models?.User || model("User", UserSchema);
