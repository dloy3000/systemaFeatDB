import { NextResponse } from "next/server";

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
    let query = operation.concat(' ', columns, ' ', operation === 'SELECT' ? 'FROM' : '', ' ', table);

    if (params.length !== 0) {
        params.map((param: string, i: number) => {
            query.concat(' ', param);

            if (i !== params.length - 1) {
                query.concat(',');
            }
        })
    }

    return { method, query };
}

export async function ReqAPI(selectors: object,
    endpoint: string = 'http://localhost:3000/api/POST',
    restMethod: string = 'POST', docType: string = 'application/json') {
    const reqHeaders = new Headers();
    reqHeaders.append("Accept", docType);
    reqHeaders.append("Content-Type", docType);

    const options = {
        method: restMethod,
        headers: reqHeaders,
        body: JSON.stringify(selectors)
    }

    const response = await fetch(endpoint, options)
        .then(resp => resp.json())
        .then(data => {
            return {
                response: data,
                loaded: true
            }
        })
        .catch(err => {
            console.error("ERROR FROM ENDPOINT %s : %s", endpoint, err);
        });

    return NextResponse.json({ response }, { status: 200 })
}