import React, { useEffect, useContext } from 'react';
import {textContent} from "../../Data/Data";
import MenuContentComponent from "../../MenuContentComponent/MenuContentComponent";
import {AppContext} from "../../Context/Context";

function Utbildning () {

    const { setDefaultHeading, saveText, setSaveText } = useContext(AppContext);


    /* Getting text for this page, setting right heading */
    useEffect(() => {
        setDefaultHeading("Mest Kunskap")
        getText();
    });

    /* getting the right data from Data file then setting the right state with the useState hook */
    const getText = () => {
        setSaveText(textContent[0].Utbildning);
    }

    return (
        <MenuContentComponent saveText={saveText} />
    );
}

export default Utbildning;