import React from 'react'
import City from '../City/City'
import { useCityList } from '../../Context/CityListContext'
import { useChoiceCity } from '../City/ChoiceCityContext'
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite'

import './main.scss'

const styles = StyleSheet.create({
    fadeInUp: {
        animationName: fadeInUp,
        animationDuration: '1s',
    },
    transition: {
        transition: '2s'
    }
})

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
    }

    return (
        <div className='container'>
            {weather.map((weather, index) => {
                return (
                    <div className={css(styles.fadeInUp)}>
                        <City choiceCity={choiceCity} city={city[index]} weather={weather} />
                    </div>
                )
            })}
        </div>
    )
};

export default Main;
