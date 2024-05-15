/**
 * Some of these methods may be obsolete, but are kept here for future reference.
 */

/**
 * Dynamically constructs a SQL query from passed values.
 * Currently this function is only built for SELECT, but may
 * have functionality for other SQL commands implemented in
 * the future if needed.
 * @param table Table to lookup or transact.
 * @param operation Type of Operation (Such as SELECT).
 * @param columns Columns to lookup or transact.
 * @param params List of extra parameters. This is constructed elsewhere.
 * @returns An object containing a REST Method type and a SQL query string.
 */
export function ConstructQuery(table: string,
    columns: string = '*',
    operation: string = 'SELECT',
    pageLimit: number = 20,
    pageOffset: number = 0,
    params: { key: string, comparator: string, value: string | number }[] = []) {
    let query = operation.concat(` ${columns} ${operation === 'SELECT' ? 'FROM' : ''} ${table}`); //Base Query.

    /**
     * Params are constructed in the proper format {['KEY'] = 'PARAM'} externally.
     * The param headers are matched such that the query can be parameterized ('KEY=$index').
     */
    if (params.length !== 0) {
        //Used for modular mapping.
        const paramCommand: { [key: string]: string } = {
            SELECT: 'WHERE',
            INSERT: 'VALUES'
        };

        query = query.concat(` ${paramCommand[operation]}`);
        params.map((param: { key: string, comparator: string, value: string | number }, i: number) => {
            const { key, comparator } = param;

            query = query.concat(` ${key} ${comparator} $${i + 1}`);

            if (i !== params.length - 1) {
                query = query.concat(` ${operation === 'SELECT' ? 'AND' : ','}`);
            }
        })
    }

    query = query.concat(` LIMIT ${pageLimit} OFFSET ${pageOffset}`); //Page limit and number.

    return query;
} //I've learned that doing this sort of thing isn't typically a good idea... Maybe I can be smart about it?

/**
 * Returns a string of url params which can be appended
 * to an endpoint to perform a GET request. 
 * @param queryParam An object containing query parameters as strings. 
 * @returns a string to be used for url params. 
 */
export function ConstructURLParams(queryParam: {
    [key: string]: number | string | string[] | boolean |
    { key: string, comparator: string, value: string | number }[] | undefined
}) {
    let paramStr = "?";

    Object.keys(queryParam).map((key: string, i: number) => {
        if (queryParam[key] !== undefined) {
            paramStr = paramStr.concat(i !== 0 ? '&' : '', `${key}=${queryParam[key]}`);
        }
    })

    return paramStr;
}

/**
 * Creates a selector object. This method/object is just for standardization purposes.
 * @param table Table (1 : Glossary, 2 : Feats, 3 : Items, 4 : Monsters).
 * @param nameOnly Boolean. Determines whether to return name/keyword only, or all columns (*). 
 * @param params Parameters used to filter query results. 
 * @param pageLim Max number of rows to be returned.
 * @param pageNum Offset for rows. 
 * @returns 
 */
export function ConstructSelector(table: string,
    nameOnly: boolean = false, params: { key: string, comparator: string, value: string | number }[] = [],
    pageLim: number = 20, pageNum: number = 0) {
    const offset = pageNum * pageLim;

    return {
        tableID: table,
        pageLimit: pageLim,
        pageOffset: offset,
        nameOnly: nameOnly,
        params: params
    }
}