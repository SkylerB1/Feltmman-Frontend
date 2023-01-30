import React, { createContext, useState } from 'react'

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [token, setToken] = useState('dummyToken');

    return <Context.Provider value={{token}}>{children}</Context.Provider>;
}


