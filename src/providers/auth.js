import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = (props) => {

    const [items, setItems] = useState([]) //estado que recebe valor do input (nota)
    const [lineFilter, setLineFilter] = useState('all') // 0 all, 1 active, 2 completed

    return(
        <AuthContext.Provider value={{items, setItems, lineFilter, setLineFilter}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)