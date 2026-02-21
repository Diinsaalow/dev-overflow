import { User } from "@/database/user.model";
import connectDB from "@/lib/db";
import handleError from "@/lib/handlers/error";
import { NotFoundError } from "@/lib/http-errors";
import { UserSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";



export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    if (!id) throw new NotFoundError('User');

    try {
        await connectDB()
        const user = await User.findById(id).lean();
        if (!user) throw new NotFoundError('User')
        return NextResponse.json({ success: true, data: user }, { status: 200 })
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse
    }

}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    if (!id) throw new NotFoundError('User');

    try {
        await connectDB();
        const user = await User.findByIdAndDelete(id);
        if (!user) throw new NotFoundError("User")
        return NextResponse.json({ success: true, data: user }, { status: 200 })
    } catch (error) {
        return handleError(error, 'api') as APIErrorResponse
    }

}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    if (!id) throw new NotFoundError('User');

    try {
        await connectDB();

        const body = await request.json()
        const validatedData = UserSchema.partial().parse(body)

        const user = await User.findByIdAndUpdate(id, validatedData, { returnDocument: "after" });
        if (!user) throw new NotFoundError("User")
        return NextResponse.json({ success: true, data: user }, { status: 200 })
    } catch (error) {
        return handleError(error, 'api') as APIErrorResponse
    }
}
