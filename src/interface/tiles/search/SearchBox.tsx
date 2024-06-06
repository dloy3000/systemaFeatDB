'use client'

import { Dispatch, FormEvent, SetStateAction, useState } from "react"

/**
 * Primary searchbar component. 
 * @param setStateFunc A prop containing a useState function passed in order to retrieve data from the searchbar.
 * @returns Searchbar element.
 */
export function SearchBox(setStateFunc: { setFields: Dispatch<SetStateAction<string>> }) {
    const [search, openSearch] = useState(false);
    const { setFields } = setStateFunc;

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