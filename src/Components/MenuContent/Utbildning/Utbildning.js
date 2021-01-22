import React, { useState, useEffect } from 'react';
import {textContent} from "../../Context/Context";
import MenuContentComponent from "../../MenuContentComponent/MenuContentComponent";

function Utbildning({changeHeading}) {

    const handleHeading = () => {
        changeHeading("Mest Kunskap");
    }

    const [ saveText, SetSaveText ] = useState([]);

    useEffect(() => {
        handleHeading();
        getText();
    });

    const getText = () => {
        SetSaveText(textContent[0].Utbildning);
    }

    return (
        <MenuContentComponent saveText={saveText} />
    );
}

export default Utbildning;