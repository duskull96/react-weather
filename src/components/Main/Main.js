import React, {useState} from 'react'
import City from '../City/City'

import './main.scss'

function Main({ weather }) {
    const [choicedCity, setChoicedCityCity] = useState([])
    function choiceCity(cityName) {
        let replyId = choicedCity.findIndex( item => cityName === item)
        if (replyId === -1) {
            setChoicedCityCity(choicedCity.concat(cityName))
        } else {
            choicedCity.splice(replyId,1)
            setChoicedCityCity(choicedCity)
        }
    }
    console.log(choicedCity,'stat')
    return (
        <div className='container'>

            {weather.map((weather, index) => {
                return (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    // <a key={index} onClick={choicedForDelete}>
                        <City weather={weather} key={index} choiceCity={choiceCity}/>
                    // </a>
                )
            })}
        </div>
    )
};

export default Main;

