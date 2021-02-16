import React, { useEffect, useContext } from 'react';
import {textContent} from "../../Data/Data";
import MenuContentComponent from "../../MenuContentComponent/MenuContentComponent";
import {AppContext} from "../../Context/Context";

function Utbildning () {

    /* Getting text for this page, setting right heading */

    const { setDefaultHeading, saveText, setSaveText } = useContext(AppContext);

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