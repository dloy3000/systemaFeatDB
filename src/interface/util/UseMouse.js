'use client'

const { useEffect } = require("react")
const { useState } = require("react")

/**
 * Gets the {x,y} coords of the mouse pointer.
 * @returns Object containing {x, y} coords.
 */
const UseMousePos = () => {
    const [mousePos, setMousePos] = useState({ x: null, y: null })

    useEffect(() => {
        const updateMousePos = e => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePos);

        return () => {
            window.removeEventListener('mousemove', updateMousePos);
        }
    }, [])

    return mousePos;
};

export default UseMousePos