import React, { useState, useEffect } from 'react';
import {textContent} from "../../Context/Context";
import MenuContentComponent from "../../MenuContentComponent/MenuContentComponent";

function Utbildning({changeHeading}) {

    useEffect(() => {
        handleHeading();
    });   
    
    const handleHeading = () => {
        changeHeading("Mest Kunskap");
    }

    const [ saveText, SetSaveText ] = useState([]);

    useEffect(() => {
        getText();
    });

    const getText = () => {
        SetSaveText(textContent[0].Betalt);
    }

    return (
        <MenuContentComponent saveText={saveText}/>
    );
}

export default Utbildning;