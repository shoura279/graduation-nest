import { Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
export type AdminDocument = Admin & Document
@Schema({
    timestamps: true,
    discriminatorKey: "type"
})
export class Admin {
    name: string;
    email: string;
    password: string;
    readonly _id?: mongoose.Types.ObjectId;
}
export const adminSchema = SchemaFactory.createForClass(Admin)