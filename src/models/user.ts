import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [
            /^[a-z0-9._%+-]+@(?!conexionex|totalplay|tvazteca|grupojdm|typhoon|omniprinter|asaservice|lawyerup|proactivesolt)[a-z0-9.-]+\.[a-z]{2,}$/,
            "Email is incorrect or invalid",
        ],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            select: false,
        },
        telefono: {
            type: String,
            required: [true, "Phone number is required"],
            match: [
                /^[0-9]{10}$/,
                "Phone number must be 10 digits and only numbers",
            ],
        },
    },
    {
        timestamps: true,
    }
);

const User = models.User || model("User", UserSchema);
export default User;