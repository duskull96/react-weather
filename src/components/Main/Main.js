import React from 'react'
import City from '../City/City'

import './main.scss'

function Main(props) {
    function choicedForDelete(event) {
        event.preventDefault();
        const target = event.target.closest('a')
        target.classList.toggle('choiced-for-delete')
    }
    return (
        <div className='container'>

            {props.city.map((city, index) => {
                return (
                    <a href='#' key={index} onClick={choicedForDelete}>
                        <City city={city} />
                    </a>
                )
            })}


        </div>
    )
};

export default Main;



// {
//     () => {
//         for (let city in props.city) {
//             return (
//                 <a href='#'  onClick={choicedForDelete}>
//                     <City city={city} />
//                 </a>
//             )
//         }
//     }
// }