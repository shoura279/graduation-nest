import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true,
    discriminatorKey: "type"
})
export class User {
    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: String, required: true, unique: true, lowercase: true })
    email: string;

    @Prop({ type: String, required: true })
    password: string;
    readonly _id: mongoose.Types.ObjectId
}
export const userSchema = SchemaFactory.createForClass(User)