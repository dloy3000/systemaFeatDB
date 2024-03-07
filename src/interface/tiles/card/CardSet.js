
/**
 * A tilecard with cardbox and title styling.
 * @param {*} param0 Text, passed either as a string or html.
 * @returns A tilecard element.
 */
function TitleCard({ title }) {
    return (
        <div className="cardBox title">
            <h1 className="cardTitle">{title}</h1>
        </div>
    )
}

/**
 * A tilecard with cardbox and textbox styling.
 * @param {*} param0 Text, passed either as a string or html.
 * @returns A tilecard element.
 */
function TextCard({ text }) {
    return (
        <div className="cardBox text">
            {text}
        </div>
    )
}

/**
 * A tilecard with cardbox styling for displaying images.
 * @param {*} param0 An object containing {box size, image source, alt fallback}
 * @returns A tilecard element.
 */
function ItemCard({ boxSize, imgSrc, alt }) {
    return (
        <div className="cardBox display">
            <img src={imgSrc} width={boxSize} height={boxSize} alt={alt} />
        </div>
    )
}

/**
 * A tilecard set containing a title, text, and image tilecard with cardbox styling.
 * @param {*} param0 An object containing {title as string or html, text as string 
 * or html, boxsize, image source, alt fallback}
 * @returns A container consisting of tilecard elements. 
 */
export default function CardBox({ title, text, boxSize = 'max-content', imgSrc = "", alt = "" }) {
    return (
        <div>
            <div className="cardContainer">
                <TitleCard title={title} />
                <TextCard text={text} />
            </div>
            {imgSrc == "" ? <></> :
                <div className="cardContainer">
                    <ItemCard boxSize={boxSize} imgSrc={imgSrc} alt={alt} />
                </div>
            }
        </div>
    )
}