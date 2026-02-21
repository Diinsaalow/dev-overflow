import { Account } from "@/database/account.model";
import connectDB from "@/lib/db";
import handleError from "@/lib/handlers/error";
import { NotFoundError } from "@/lib/http-errors";
import { AccountSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    if (!id) throw new NotFoundError('Account');

    try {
        await connectDB()
        const account = await Account.findById(id);
        if (!account) throw new NotFoundError('Account')
        return NextResponse.json({ success: true, data: account }, { status: 200 })
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse
    }

}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    if (!id) throw new NotFoundError('Account');

    try {
        await connectDB();
        const account = await Account.findByIdAndDelete(id);
        if (!account) throw new NotFoundError("Account")
        return NextResponse.json({ success: true, data: account }, { status: 200 })
    } catch (error) {
        return handleError(error, 'api') as APIErrorResponse
    }

}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    if (!id) throw new NotFoundError('Account');

    try {
        await connectDB();

        const body = await request.json()
        const validatedData = AccountSchema.partial().parse(body)

        const account = await Account.findByIdAndUpdate(id, validatedData, { returnDocument: "after" });
        if (!account) throw new NotFoundError("Account")
        return NextResponse.json({ success: true, data: account }, { status: 200 })
    } catch (error) {
        return handleError(error, 'api') as APIErrorResponse
    }
}