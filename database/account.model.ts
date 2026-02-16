import { model, models, Schema, Types } from "mongoose";

export interface IAccount {
  userId: Types.ObjectId;
  name: string;
  portfolioImage?: string;
  password?: string;
  provider: string;
  providerId: string;
}

const AccountSchema = new Schema<IAccount>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    password: { type: String },
    portfolioImage: { type: String },
    provider: { type: String, required: true },
    providerId: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const Account = models?.Account || model("Account", AccountSchema);
