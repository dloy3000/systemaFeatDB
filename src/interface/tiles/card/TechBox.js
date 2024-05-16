
/**
 * A tilecard with techbox and title styling.
 * @param {*} param0 Text, passed either as a string or html.
 * @returns A tilecard element.
 */
export function TitleTile({ title }) {
    return (
        <div className="techBox title">
            <h1 className="cardTitle">{title}</h1>
        </div>
    )
}

/**
 * A tilecard with techbox and textbox styling.
 * @param {*} param0 Text, passed either as a string or html.
 * @returns A tilecard element.
 */
export function TextTile({ text }) {
    return (
        <div className="techBox text">
            {text}
        </div>
    )
}

/**
 * A tilecard with techbox styling for displaying images.
 * @param {*} param0 An object containing {box size, image source, alt fallback}
 * @returns A tilecard element.
 */
export function ItemTile({ boxSize, imgSrc, alt }) {
    return (
        <div className="techBox display">
            <img src={imgSrc} width={boxSize} height={boxSize} alt={alt} />
        </div>
    )
}

/**
 * A tilecard set containing a title, text, and image tilecard with techbox styling.
 * @param {*} param0 An object containing {title as string or html, text as string 
 * or html, boxsize, image source, alt fallback}
 * @returns A container consisting of tilecard elements. 
 */
export default function TechBox({ title, text, boxSize = 'max-content', imgSrc = "", alt = "" }) {
    return (
        <div className="cardGrid">
            <div className="cardContainer">
                <TitleTile title={title} />
                <TextTile text={text} />
            </div>
            {imgSrc == "" ? <></> :
                <div className="cardContainer">
                    <ItemTile boxSize={boxSize} imgSrc={imgSrc} alt={alt} />
                </div>
            }
        </div>
    )
}