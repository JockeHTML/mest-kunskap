import React, { useState, useEffect } from 'react';
import {textContent} from "../../Context/Context";
import MenuContentComponent from "../../MenuContentComponent/MenuContentComponent";

function Utbildning({changeHeading}) {

    /* Getting text for this page, setting right heading */
    useEffect(() => {
        handleHeading();
        getText();
    });   
    
    const handleHeading = () => {
        changeHeading("Mest Kunskap");
    }

    /* getting the right data from context file then setting the right state with the useState hook */
    const [ saveText, SetSaveText ] = useState([]);
    const getText = () => {
        SetSaveText(textContent[0].Betalt);
    }

    return (
        <MenuContentComponent saveText={saveText}/>
    );
}

export default Utbildning;