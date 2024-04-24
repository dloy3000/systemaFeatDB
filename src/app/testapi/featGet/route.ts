import { db, sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const client = await db.connect();
    const glossary = await client.sql`SELECT * FROM Glossary LIMIT 2;`;
    return NextResponse.json({ glossary }, { status: 200 });
}