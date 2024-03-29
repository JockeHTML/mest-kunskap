import { createContext, useState } from "react";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /* state used with useState hook to change headings depending on what page your on and what text the page will render*/
  const [defaultHeading, setDefaultHeading] = useState("Mest Kunskap");
  const [saveText, setSaveText] = useState([]);

  return (
    <AppContext.Provider
      value={{
        theme,
        defaultHeading,
        setDefaultHeading,
        saveText,
        setSaveText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
