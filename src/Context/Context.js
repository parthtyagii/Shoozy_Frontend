import React, { createContext, useContext, useState } from 'react';


let initial_state = {
    liked: [],
    cart: [],
    searched: ''
}

const ShoesContext = createContext(initial_state);

const ShoesContextProvider = ({ children }) => {

    let [LikedShoes, setLikedShoes] = useState([]);
    let [CartShoes, setCartShoes] = useState([]);
    const [searched, setSearched] = useState([]);


    return (
        <ShoesContext.Provider value={{ LikedShoes, setLikedShoes, CartShoes, setCartShoes, searched, setSearched }}>
            {children}
        </ShoesContext.Provider>
    );
}

export { ShoesContext, ShoesContextProvider }; 