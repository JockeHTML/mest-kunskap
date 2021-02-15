import { createContext, useState } from 'react';

export const HeadingContext = createContext();

export const HeadingProvider = ({ children }) => {

    /* state used with useState hook to change headings depending on what page your on */
    const [ defaultHeading, setDefaultHeading ] = useState("Mest Kunskap");
    
    return (
    <HeadingContext.Provider value={{ defaultHeading, setDefaultHeading  }}>
        { children }
    </HeadingContext.Provider>
    )
}



