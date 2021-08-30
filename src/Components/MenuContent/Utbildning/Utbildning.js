import React, { useEffect, useContext } from "react";
import { textContent } from "../../Data/Data";
import MenuContentComponent from "../../MenuContentComponent/MenuContentComponent";
import { AppContext } from "../../Context/Context";
import ForWhoProducts from "../../ForWho/ForWhoProducts";
import Header from "../Applåder/Header";

function Utbildning() {
  const { setDefaultHeading, saveText, setSaveText } = useContext(AppContext);

  /* Getting text for this page, setting right heading */
  useEffect(() => {
    setDefaultHeading("Mest Kunskap");
    getText();
  });

  /* getting the right data from Data file then setting the right state with the useState hook */
  const getText = () => {
    setSaveText(textContent[0].Utbildning);
  };

  return (
    <>
      <Header text="Utbildning & Föreläsningar" />
      <div style={{ marginBottom: "-6rem" }}>
        <MenuContentComponent saveText={saveText} />
      </div>
      <ForWhoProducts />
    </>
  );
}

export default Utbildning;
