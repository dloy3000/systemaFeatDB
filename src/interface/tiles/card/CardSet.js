//Title Card
function TitleCard({ title }) {
    return (
        <div className="cardBox title">
            <h1 className="cardTitle">{title}</h1>
        </div>
    )
}

//Text Card
function TextCard({ text }) {
    return (
        <div className="cardBox text">
            {text}
        </div>
    )
}

//Image Card
function ItemCard({ boxSize, imgSrc, alt }) {
    return (
        <div className="cardBox display">
            <img src={imgSrc} width={boxSize} height={boxSize} alt={alt} />
        </div>
    )
}

//Full Set.
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