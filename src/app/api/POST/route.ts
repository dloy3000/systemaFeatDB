'use server'

import { ConstructQuery } from "@/api/util";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const selectors = await request.json();
    const { method, query } = ConstructQuery(selectors.table, selectors.operation, selectors.columns, selectors.params);

    try {
        const { rows } = await sql`${query}`; //For some reason string formatting the SQL throws an error, but a pure string doesn't...
        return NextResponse.json({ rows }, { status: 200 });
    } catch (err) {
        console.error("Error in request: %s", err);
        return NextResponse.json({ err }, { status: 500 });
    }
}