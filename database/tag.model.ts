import { model, models, Schema } from "mongoose";

export interface ITag {
  name: string;
  questions: number;
}

const TagSchema = new Schema<ITag>(
  {
    name: { type: String, required: true, unique: true },
    questions: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

export const Tag = models?.Tag || model("Tag", TagSchema);
