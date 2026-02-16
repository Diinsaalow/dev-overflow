import { model, models, Schema, Types } from "mongoose";

export interface IModel {
  title: Types.ObjectId;
}

const ModelSchema = new Schema<IModel>({}, { timestamps: true, versionKey: false });

export const Model = models?.Model || model("Model", ModelSchema);
