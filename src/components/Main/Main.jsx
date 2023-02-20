import React from 'react';
import './Main.css';
import Shoe from '../Shoe/Shoe';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function Main({ allShoes, loadingMain }) {

    return (
        <>
            {loadingMain &&
                <div className="mainLoader">
                    <ClipLoader color="#0014FF" size={40} />
                </div>
            }

            <main>

                {!loadingMain && allShoes &&
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
