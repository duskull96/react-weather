import React from 'react'
import City from '../City/City'
import { useCityList } from '../Context/CityListContext'

import './main.scss'

function Main({ weather }) {

    const [city, setCity] = useCityList()
    function choiceCity(cityNameFromWeather) {
        setCity(
            city.map(item => {
                if (item.name === cityNameFromWeather) {
                    item.selected = !item.selected
                }
                return item
            })
        )
        console.log('Кукусики мы нажали на кнопку', cityNameFromWeather);
    }
    return (
        <div className='container'>
            {weather.map((weather, index) => {
                return (
                    <City choiceCity={choiceCity} city={city[index]} weather={weather} key={Math.floor(Math.random() * 1000)} />
                )
            })}
            {console.log('RENDER MOTHERFUCKER ---------------------------------------')}
        </div>
    )
};

export default Main;

