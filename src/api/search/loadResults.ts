'use client'

import { useEffect, useState } from "react";
import { ConstructSelector } from "../util/utilConstruct";
import { ReqAPI } from "../util/utilReq";

export default function LoadResults(table: string,) {
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const testItem = {
            key: 'Keyword',
            comparator: 'NOT LIKE',
            value: 'Stockpile'
        };

        const selectors = ConstructSelector(table, true, [testItem]);

        const dat = ReqAPI(selectors)
            .then(resp => resp.json())
            .then(({ response }) => {
                setData(response.response.rows);
                setLoaded(response.loaded);
            }).catch(err => console.error("ERROR: %s", err));
    }, [])

    return { data, loaded };
}