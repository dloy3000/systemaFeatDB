'use server'

import { ConstructQuery } from "@/api/utilConstruct";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { tableID, pageLimit, pageOffset, nameOnly, params } = await request.json(); //Body content.
    const query = ConstructQuery(tableID, nameOnly ? (tableID === 'glossary' ? 'keyword' : 'name') : '*',
        "SELECT", pageLimit, pageOffset, params);

    try {
        const paramValues: any[] = params.map((param: { key: string, comparator: string, value: string | number }) => (param.value))
        const { rows } = await sql.query(query, paramValues);
        return NextResponse.json({ rows }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}