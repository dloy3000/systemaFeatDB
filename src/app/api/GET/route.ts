import { NextResponse } from "next/server";

export async function request(request: Request) {
    return NextResponse.json({}, { status: 200 });
}