import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';


let initial_state = {
    liked: [],
    cart: []
}

const ShoesContext = createContext(initial_state);

const ShoesContextProvider = ({ children }) => {

    let [LikedShoes, setLikedShoes] = useState([]);
    let [CartShoes, setCartShoes] = useState([]);


    return (
        <ShoesContext.Provider value={{ LikedShoes, setLikedShoes, CartShoes, setCartShoes }}>
            {children}
        </ShoesContext.Provider>
    );
}

export { ShoesContext, ShoesContextProvider }; 