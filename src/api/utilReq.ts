import { NextResponse } from "next/server";
import { ConstructURLParams } from "./utilConstruct";

/**
 * Performs an internal API request to PostGres.
 * @param selectors An object containing query parameters as strings.
 * @param endpoint Endpoint for the request, not including url params.
 * @param restMethod REST method used for request.
 * @param docType Doctype for request body.
 * @returns A response containing the requested data, or an error. 
 */
export async function ReqAPI(selectors: { [key: string]: number | string | string[] | boolean | undefined },
    endpoint: string = 'http://localhost:3000/api/POST/glossary',
    restMethod: string = 'POST', docType: string = 'application/json') {
    const reqHeaders = new Headers();
    reqHeaders.append("Accept", docType);

    if (restMethod === 'POST') {
        reqHeaders.append("Content-Type", docType);
    } else if (restMethod === 'GET') {
        endpoint = endpoint.concat(ConstructURLParams(selectors));
    }

    const options = {
        method: restMethod,
        headers: reqHeaders,
        body: restMethod === 'POST' ? JSON.stringify(selectors) : undefined
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