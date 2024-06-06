'use client'

import LoadResults from "@/api/search/loadResults";
import { ConstructSelector } from "@/api/util/utilConstruct";
import { TextTile, TitleTile } from "@/interface/tiles/card/TechBox";
import { SearchBox } from "@/interface/tiles/search/SearchBox";
import { useEffect, useState } from "react";

export default function GetPage(pageData: { page: string, pageNum: number, pageLim: number }) {
    const { page, pageNum, pageLim } = pageData

    const [fields, setFields] = useState("");
    const [selector, setselector] = useState(ConstructSelector(page, true));

    const [{ data, loaded }, setRows] = useState({
        data: [{}],
        loaded: false
    });

    console.log(selector);
    LoadResults(setRows, selector);
    console.log(data);

    useEffect(() => {
        const param = {
            key: 'Keyword',
            comparator: 'LIKE',
            value: fields
        };

        setselector(ConstructSelector(page, true, fields === "" ? [] : [param], pageLim, pageNum));
        //LoadResults(setRows, selector);
        console.log(fields);
    }, [fields])

    return (
        <>
            <SearchBox setFields={setFields} />
            {data.map((item, i) => {
                return (
                    <div className="cardGrid" key={i}>
                        <div className="cardContainer">
                            <TextTile text={
                                //@ts-ignore
                                item.keyword
                            } />
                        </div>
                    </div>
                )
            })}
        </>
    )
}