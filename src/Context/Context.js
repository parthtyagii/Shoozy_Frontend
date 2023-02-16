import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';


const initial_state = {
    liked: [],
    cart: []
}

const ShoesContext = createContext(initial_state);

const ShoesContextProvider = ({ children }) => {

    const [liked, setLiked] = useState();
    const [cart, setCart] = useState();


    return (
        <ShoesContext.Provider value={{ liked, setLiked, cart, setCart }}>
            {children}
        </ShoesContext.Provider>
    );
}

export { ShoesContext, ShoesContextProvider }; 