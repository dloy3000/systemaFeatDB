'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ConstructSelector } from "../util/utilConstruct";
import { ReqAPI } from "../util/utilReq";

/**
 * Takes a selector object, makes a query request to PostGres,
 * and returns the resultant data.
 * @param selectors Selector Object. Use ConstructSelector(...) to create selectors.
 * @returns Query result or error.
 */
export default function LoadResults(setRows:
    Dispatch<SetStateAction<{
        data: {}[],
        loaded: boolean
    }>>,
    selectors: {
        tableID: string,
        pageLimit: number,
        pageOffset: number,
        nameOnly: boolean,
        params: { key: string, comparator: string, value: string | number }[]
    }) {

    const dat = ReqAPI(selectors)
        .then(resp => resp.json())
        .then(({ response }) => {
            setRows({ data: response.response.rows, loaded: response.loaded });
        }).catch(err => {
            console.error("ERROR: %s", err);
            setRows({ data: [{ err }], loaded: true });
        });
}