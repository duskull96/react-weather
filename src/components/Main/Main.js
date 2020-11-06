import React from 'react'
import City from '../City/City'
import { useCityList } from '../Context/CityListContext'
import { useChoiceCity } from '../City/ChoiceCityContext'

import './main.scss'

function Main({ weather }) {

    const [city, setCity] = useCityList()

    const cityManager = useChoiceCity()

    function choiceCity(cityNameFromWeather) {
        setCity(
            city.map(item => {
                if (item.name === cityNameFromWeather) {
                    item.selected = !item.selected
                    cityManager.choiceCity(item.name)
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

