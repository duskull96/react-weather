import React, {useState, useEffect} from 'react'
import City from '../City/City'

import './main.scss'

function Main({ weather , deleteCity}) {
    // const [choicedCity, setChoicedCityCity] = useState([])
    // function choiceCity(cityName) {
    //     let replyId = choicedCity.findIndex( item => cityName === item)
    //     if (replyId === -1) {
    //         setChoicedCityCity(choicedCity.concat(cityName))
    //     } else {
    //         choicedCity.splice(replyId,1)
    //         setChoicedCityCity(choicedCity)
    //     }
    // }

    // useEffect( () => {
    //     deleteCity(choicedCity)
    //     console.log('effect');
    // }, [choicedCity])

    // console.log(choicedCity,'choicedCity')
    return (
        <div className='container'>

            {weather.map((weather, index) => {
                return (
                        <City weather={weather} key={index}/>
                )
            })}
        </div>
    )
};

export default Main;

