'use client'

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

/**
 * Helper function used to make a request to the DB.
 * @param query Query String.
 * @param restMethod String detailing the type of REST method to use for the request.
 * @returns A response containing either the data or an error in the specified doctype.
 */
export async function TableQuery(query: string, restMethod: string = 'GET') {
    try {
        const resp = await sql`${query}`;
        console.log(resp);
        return NextResponse.json({ resp }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ err }, { status: 500 });
    }
}

/**
 * Dynamically constructs a query from passed values.
 * @param table Table to lookup or transact.
 * @param operation Type of Operation (Such as SELECT).
 * @param columns Columns to lookup or transact.
 * @param params List of extra parameters. This is constructed elsewhere.
 * @returns An object containing a REST Method type and a SQL query string.
 */
export function ConstructQuery(table: string, operation: string = 'SELECT', columns: string = '*', params: string[] = []) {
    const method = operation === 'SELECT' ? 'GET' : 'POST';
    let query = operation.concat(' ', columns, operation === 'SELECT' ? 'FROM' : '', table);

    if (params.length > 0) {
        params.map((param: string, i: number) => {
            query.concat(' ', param);

            if (i !== params.length - 1) {
                query.concat(',');
            }
        })
    }

    return { operation, query };
}