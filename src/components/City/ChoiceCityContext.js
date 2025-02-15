import React, { useState, useContext } from 'react'
import { useCityList } from '../../Context/CityListContext'

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
        },
        deleteChoisedCity: () => {
            if (choisedCity.length) {
                const newCity = city
                const newWeather = weather
                const replyId = []
                newCity.forEach((item, index) => {
                    for (let i = 0; i < choisedCity.length + 1; i++) {
                        if (item.name === choisedCity[i]) {
                            replyId.push(index)
                        }
                    }
                })
                function remove(arr, ...indexes) {
                    let set = new Set(indexes)
                    return arr.filter((item, index) => !set.has(index))
                }
                setCity(remove(newCity, ...replyId))
                setWeather(remove(newWeather, ...replyId))
                setChoisedCity([])
            } else return console.error('Вы не выбрали ни одного города для удаления.')
        }
    }

    return (
        <ChoiceCityContext.Provider value={cityManager}>
            { children}
        </ChoiceCityContext.Provider>
    )
}