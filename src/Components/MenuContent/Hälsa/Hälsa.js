import React, { useState, useEffect } from 'react';
import {textContent} from "../../Context/Context";
import MenuContentComponent from "../../MenuContentComponent/MenuContentComponent";

function Utbildning({changeHeading}) {

    useEffect(() => {
        handleHeading();
        getText();
    });   
    
    const handleHeading = () => {
        changeHeading("Mest Kunskap");
    }

    const [ saveText, SetSaveText ] = useState([]);

    const getText = () => {
        SetSaveText(textContent[0].Hälsa);
    }

    return (
        <MenuContentComponent saveText={saveText}/>
    );
}

export default Utbildning;