import React from "react";
import { OneScene } from "../../widgets/Scenes/OneScene";
import { TwoScene } from "../../widgets/Scenes/TwoScene";

export const Main = () => {
    const [counter, setCounter] = useState(1);
    window.addEventListener('click', handleCounter)

    function handleCounter(){
        setCounter(counter + 1);
    }
    return (
        <>
            {counter === 1 && <OneScene/>}
            {counter === 2 && <TwoScene/>}
        </>
    );
};