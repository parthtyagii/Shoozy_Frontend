import React from 'react';
import './Main.css';
import Shoe from '../Shoe/Shoe';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';



function Main() {
    return (
        <>
            <main>

                <Shoe />
                <Shoe />
                <Shoe />
                <Shoe />
                <Shoe />
                <Shoe />
                <Shoe />
                <Shoe />
                <Shoe />
                <Shoe />
                <Shoe />
                <Shoe />
                <Shoe />
                <Shoe />
                <Shoe />


            </main>

            <div className="paginationContainer">
                <div className="pagination">
                    <BiChevronLeft className='pageIcon'/>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <BiChevronRight className='pageIcon'/>
                </div>
            </div>
        </>
    );
}

export default Main;
