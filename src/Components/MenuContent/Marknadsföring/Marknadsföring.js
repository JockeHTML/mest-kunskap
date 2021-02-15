import React, { useEffect, useContext } from 'react';
import {textContent} from "../../Data/Data";
import MenuContentComponent from "../../MenuContentComponent/MenuContentComponent";
import {HeadingContext} from "../../Context/Context";
import {TextContext} from "../../Context/TextContext";

function Utbildning () {

    /* Getting text for this page, setting right heading */

    const { setDefaultHeading } = useContext(HeadingContext);
    const { saveText, setSaveText } = useContext(TextContext);

    useEffect(() => {
        setDefaultHeading("Mest Kunskap");
        getText();
    });   
 
    /* getting the right data from context file then setting the right state with the useState hook */
    const getText = () => {
        setSaveText(textContent[0].Marknadsföring);
    }

    return (
        <MenuContentComponent saveText={saveText}/>
    );
}

export default Utbildning;