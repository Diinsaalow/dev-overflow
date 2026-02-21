import { User } from "@/database/user.model";
import connectDB from "@/lib/db";
import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import { UserSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";
import {  NextResponse } from "next/server";



export async function GET() {
    try {
        await connectDB();

        const users = await User.find()

        return NextResponse.json({
            success: true,
            data: users,
        }, { status: 200 });
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}

export async function POST(request: Request) {
    try {
        await connectDB();
        const body = await request.json();

        const validatedData = UserSchema.safeParse(body);

        if (!validatedData.success) {
            throw new ValidationError(validatedData.error.flatten().fieldErrors
            )
        }
        const { email, username } = validatedData.data;

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });

        if (existingUser) {
            throw new Error("Email or username already exists");
        }

        const user = await User.create(validatedData.data);

        return NextResponse.json({
            success: true,
            data: user,
        }, { status: 201 });

    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}

