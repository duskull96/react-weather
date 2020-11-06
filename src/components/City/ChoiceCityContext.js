import React, { useState, useContext } from 'react'
import { useCityList } from '../Context/CityListContext'

const ChoiceCityContext = React.createContext()

export const useChoiceCity = () => {
    return useContext(ChoiceCityContext)
}

export const ChoiceCityProvider = ({ children }) => {


    const [city, setCity, weather, setWeather] = useCityList()

    const [choisedCity, setChoisedCity] = useState([])
    const cityManager = {
        choiceCity: (cityName) => {
            let replyId = choisedCity.findIndex(item => cityName === item)
            if (replyId === -1) {
                let newchoisedCity = choisedCity
                setChoisedCity(newchoisedCity.concat(cityName))
            } else {
                let newchoisedCity = choisedCity
                newchoisedCity.splice(replyId, 1)
                setChoisedCity(newchoisedCity)
            }
        }
        ,
        deleteChoisedCity: () => {
            console.log(city, weather, setCity, setWeather);
            if (choisedCity.length) {
                console.log('Удалили выбранные города - ', choisedCity);
                const newCity = city
                const newWeather = weather
                newCity.forEach((item, index) => {
                    for (let i = 0; i < choisedCity.length; i++) {
                        console.log(item.name, ' и ', choisedCity[i]);
                        if (item.name === choisedCity[i]) {
                            newCity.splice(index, 1)
                            newWeather.splice(index - 1, 1)
                        }
                    }
                })
                setCity(newCity)
                setWeather(newWeather)
                setChoisedCity([])
            }
        }
    }
    console.log(choisedCity, 'choised list');

    return (
        <ChoiceCityContext.Provider value={cityManager}>
            { children}
        </ChoiceCityContext.Provider>

    )
}