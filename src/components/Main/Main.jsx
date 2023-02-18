import React from 'react';
import './Main.css';
import Shoe from '../Shoe/Shoe';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import axios from 'axios';



function Main({ allShoes }) {

    return (
        <>
            <main>

                {allShoes &&
                    allShoes.map((s) => {
                        return (
                            <Shoe key={s._id} title={s.shoeName} desc={s.description} thumbnail={s.thumbnail} shoeId={s.styleID} price={s.retailPrice} />
                        );
                    })
                }


            </main>
        </>
    );
}

export default Main;
