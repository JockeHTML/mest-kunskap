import React, { useState, useEffect, useContext } from "react";
import { textContent } from "../../Data/Data";
import MenuContentComponent from "../../MenuContentComponent/MenuContentComponent";
import { AppContext } from "../../Context/Context";
import Header from "../Applåder/Header";

function Utbildning() {
  /* Getting text for this page, setting right heading */
  const { setDefaultHeading, saveText, setSaveText } = useContext(AppContext);

  useEffect(() => {
    setDefaultHeading("Mest Kunskap");
    getText();
  });

  /* setting a state with useState hook for rendering a list with data */
  const [StartaEgetList, setStartaEgetList] = useState([]);

  /* getting the right data from Data file then setting the right state with the useState hook */
  const getText = () => {
    setSaveText(textContent[0].Starta);
    setStartaEgetList(saveText.StartaEgetList);
  };

  return (
    <>
      <Header text="Utbildning & Föreläsningar" />
      <MenuContentComponent StartaEgetList={StartaEgetList} />
    </>
  );
}

export default Utbildning;
