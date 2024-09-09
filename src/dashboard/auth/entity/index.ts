import mongoose from "mongoose";

export class Admin {
    name: string;
    email: string;
    password: string;
    readonly _id?: mongoose.Types.ObjectId;
}