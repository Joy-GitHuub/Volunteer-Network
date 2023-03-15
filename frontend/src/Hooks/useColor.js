import { useEffect, useState } from "react";

const useColor = (event) => {
    const [color, setColor] = useState("")
    const generateColor = () => {
        setColor(Math.random().toString(16).substr(-6));
    };
    useEffect(() => {
        generateColor();
    }, [event])
    return { color };
};

export default useColor;