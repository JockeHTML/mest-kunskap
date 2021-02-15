import { createContext, useState } from 'react';

export const TextContext = createContext();

export const TextProvider = ({ children }) => {

    /* state used with useState hook to change headings depending on what page your on */
    const [ saveText, setSaveText ] = useState([]);
    
    return (
    <TextContext.Provider value={{ saveText, setSaveText  }}>
        { children }
    </TextContext.Provider>
    )
}



