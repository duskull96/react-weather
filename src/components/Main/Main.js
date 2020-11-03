import React from 'react'
import City from '../City/City'

import './main.scss'

function Main({ weather }) {
    function choicedForDelete(event) {
        event.preventDefault();
        const target = event.target.closest('a')
        target.classList.toggle('choiced-for-delete')
    }
    return (
        <div className='container'>

            {weather.map((weather, index) => {
                return (
                    <a href='#' key={index} onClick={choicedForDelete}>
                        <City weather={weather} />
                    </a>
                )
            })}


        </div>
    )
};

export default Main;

