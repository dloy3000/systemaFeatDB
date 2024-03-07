
//Title Card
function TitleTile({ title }) {
    return (
        <div className="techBox title">
            <h1 className="cardTitle">{title}</h1>
        </div>
    )
}

//Text Card
function TextTile({ text }) {
    return (
        <div className="techBox text">
            {text}
        </div>
    )
}

//Image Card
function ItemTile({ boxSize, imgSrc, alt }) {
    return (
        <div className="techBox display">
            <img src={imgSrc} width={boxSize} height={boxSize} alt={alt} />
        </div>
    )
}

//Full Set.
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