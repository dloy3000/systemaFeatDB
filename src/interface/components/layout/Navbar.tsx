'use client'

import navData from "@/interface/data/navigation/navRef.json"
import { GetSnapGrid } from '@/interface/util/MapRange'
import { useEffect, useState } from "react"

/**
 * Generates the Navigation Ref Page Element.
 * @returns Navref Element.
 */
function NavRef() {
    const { navRef } = navData

    //A list of points used for snapping the diamond to buttons.
    const [snapGrid, setSnapGrid] = useState([0])

    //Pixel positions of the diamond.
    const [topDmdPos, setTopDmdPos] = useState("0px")
    const [accDmdPos, setAccDmdPos] = useState("-3px")

    //Generate a new snapgrid whenever navRef updates.
    useEffect(() => {
        setSnapGrid(GetSnapGrid(navRef, 87, 55))
    }, [navRef])

    return (
        <div className="menuContainer">
            {navRef.map((navItem, i) => (
                <a href={navItem.ref} className="menuRef">
                    <div className="menuTile" onMouseOver={() => {
                        setTopDmdPos((snapGrid[i] - 84).toString().concat("px"))
                        setAccDmdPos((snapGrid[i] - 87).toString().concat("px"))
                    }}>
                        <h1>
                            {navItem.label}
                        </h1>
                    </div>
                </a>
            ))}
            <div className="systemaDiamondShade" style={{ top: topDmdPos }} />
            <div className="systemaDiamondTop" style={{ top: accDmdPos }} />
        </div>
    )
}

/**
 * The container for NavRef.
 * @returns A container containing the NavRef element.
 */
export default function NavBar() {
    return (
        <div className="navContainer">
            <div className="navTile">
                <NavRef />
            </div>
        </div>
    )
}