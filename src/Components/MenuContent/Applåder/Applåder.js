import React, { useEffect, useContext } from "react";
import { textContent } from "../../Data/Data";
import MenuContentComponent from "../../MenuContentComponent/MenuContentComponent";
import { AppContext } from "../../Context/Context";
import Header from "./Header";

function Utbildning() {
  /* Getting text for this page, setting right heading */

  const { setDefaultHeading, saveText, setSaveText } = useContext(AppContext);
  /* const { saveText, setSaveText } = useContext(TextContext); */

  useEffect(() => {
    setDefaultHeading("Mest Kunskap");
    getText();
  });

  /* getting the right data from context file then setting the right state with the useState hook */
  const getText = () => {
    setSaveText(textContent[0].Applåder);
  };

  return (
    <>
      <Header text="Utbildning & Föreläsningar" />
      <MenuContentComponent saveText={saveText} />
    </>
  );
}

export default Utbildning;
