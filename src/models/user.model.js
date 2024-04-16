import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name:
        {
            tyepe:String,
            require: true
        },
        email:
        {
            tyepe:String,
            require: true,
            unique:true
        },
        password:
        {
            tyepe:String,
            require: true
        },
        avatar:
        {
            tyepe:String,
            require: true
        }

    });

    export const User = mongoose.model("User", userSchema)