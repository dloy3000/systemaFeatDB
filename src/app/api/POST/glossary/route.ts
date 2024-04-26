'use server'

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { params, pageLimit, pageOffset } = await request.json(); //Body content.

    try {
        const { rows } = params.length !== 0 ?
            await sql`SELECT * FROM Glossary WHERE ${params.map((param: string) => (param))} LIMIT ${pageLimit} OFFSET ${pageOffset};` :
            await sql`SELECT * FROM Glossary LIMIT ${pageLimit} OFFSET ${pageOffset};`;
        return NextResponse.json({ rows }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}