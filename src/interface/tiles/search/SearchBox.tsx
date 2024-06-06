'use client'

import { FormEvent, useEffect, useState } from "react"

export function SearchBox() {
    const [search, openSearch] = useState(false);
    const [fields, setFields] = useState("");

    return (
        <div className="cardGrid">
            {search ? <input className="searchBox" type='search' id='keywordSearch' name='search-bar'
                onInput={(event: FormEvent<HTMLInputElement>) => {
                    //@ts-ignore
                    const value = event.target.value; //event.target.value shows a non-existence error for some reason even though it does exist on callback.
                    setFields(typeof value === 'string' ? value : "");
                }} /> : <></>}
            <button className={search ? "searchButton open" : "searchButton closed"} onClick={() => {
                openSearch(!search);
            }}></button>
        </div>
    )
}