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

    /* setting a state with useState hook for rendering a list with data */
    const [ saveSpecial, setSaveSpecial ] = useState([]);

    /* getting the right data from context file then setting the right state with the useState hook */
    const [ saveText, SetSaveText ] = useState([]);
    const getText = () => {
        SetSaveText(textContent[0].Starta);
        setSaveSpecial(saveText.special);
    }

    return (
        <MenuContentComponent saveSpecial={saveSpecial} saveText={saveText}/>
    );
}

export default Utbildning;