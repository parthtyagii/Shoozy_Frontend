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
                            <Shoe key={s._id} title={s.shoeName} desc={s.description} thumbnail={s.thumbnail} shoeId={s.styleID} />
                        );
                    })
                }


            </main>

            {/* <div className="paginationContainer">
                <div className="pagination">
                    <BiChevronLeft className='pageIcon' />
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <BiChevronRight className='pageIcon' />
                </div>
            </div> */}
        </>
    );
}

export default Main;
