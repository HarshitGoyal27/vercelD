"use client"

import { Dispatch ,createContext,SetStateAction, useState, useContext } from "react";


interface selectedIdContextProps {
  selectedId: string[];
  setSelectedId: React.Dispatch<React.SetStateAction<string[]>>;
}

const GlobalContext = createContext<selectedIdContextProps>({
  selectedId: [],
  setSelectedId: () => {},
});

export const GlobalContextProvider = ({children}:any)=>{
    const [selectedId, setSelectedId] = useState<string[]>([]);
    return (
        <GlobalContext.Provider value={{selectedId,setSelectedId}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext=()=>useContext(GlobalContext);