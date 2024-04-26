/**
 * Some of these methods may be obsolete, but are kept here for future reference.
 */

/**
 * Dynamically constructs a SQL query from passed values.
 * @param table Table to lookup or transact.
 * @param operation Type of Operation (Such as SELECT).
 * @param columns Columns to lookup or transact.
 * @param params List of extra parameters. This is constructed elsewhere.
 * @returns An object containing a REST Method type and a SQL query string.
 */
export function ConstructQuery(table: string, operation: string = 'SELECT', columns: string = '*', params: string[] = []) {
    let query = operation.concat(' ', columns, ' ', operation === 'SELECT' ? 'FROM' : '', ' ', table);

    if (params.length !== 0) {
        params.map((param: string, i: number) => {
            query = query.concat(' ', param);

            if (i !== params.length - 1) {
                query = query.concat(',');
            }
        })
    }

    return query;
}

/**
 * Returns a string of url params which can be appended
 * to an endpoint to perform a GET request. 
 * @param queryParam An object containing query parameters as strings. 
 * @returns a string to be used for url params. 
 */
export function ConstructURLParams(queryParam: { [key: string]: number | string | string[] | boolean | undefined }) {
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
 * @param table Table ID (1 : Glossary, 2 : Feats, 3 : Items, 4 : Monsters).
 * @param nameOnly Boolean. Determines whether to return name/keyword only, or all columns (*). 
 * @param params Paramaters used to filter query results. 
 * @param pageLim Max number of rows to be returned.
 * @param pageNum Offset for rows. 
 * @returns 
 */
export function ConstructSelector(table: number,
    nameOnly: boolean = false, params: string[] = [],
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