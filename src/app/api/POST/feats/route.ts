'use server'

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const selectors = await request.json(); //Body content.

    try {
        const { rows } = await sql`SELECT * FROM Feats`;
        NextResponse.json({ rows }, { status: 200 })
    } catch (error) {
        console.log(error);
        NextResponse.json({ error }, { status: 200 });
    }
}