/**
 * Decorator at the bottom of the webpage.
 * Just contains a copyright label for now.
 * @returns Footer element.
 */
export default function Footer() {
    return (
        <div className="copyTile">
            <div className="menuTile">
                <h2 className="cardTitle">{`AQUASCULPT ©. ${new Date().getFullYear()}`}</h2>
            </div>
        </div>
    )
}