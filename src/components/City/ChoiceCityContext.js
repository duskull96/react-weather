import React, { useState, useEffect, useContext } from 'react'

const ChoiceCityContext = React.createContext()

export const useChoiceCity = () => {
    return useContext(ChoiceCityContext)
}

export const ChoiceCityProvider = ({ children }) => {

    const [choicedCity, setChoicedCityCity] = useState([])
    const cityManager = {
        choiceCity: (cityName) => {
            let replyId = choicedCity.findIndex(item => cityName === item)
            if (replyId === -1) {
                setChoicedCityCity(choicedCity.concat(cityName))
            } else {
                choicedCity.splice(replyId, 1)
                setChoicedCityCity(choicedCity)
            }
        }
        ,
        deleteChoicedCity: () => {
            console.log('Удалили выбранные города - ', choicedCity);
        }
    }
    // function choiceCity(cityName) {
    //     let replyId = choicedCity.findIndex(item => cityName === item)
    //     if (replyId === -1) {
    //         setChoicedCityCity(choicedCity.concat(cityName))
    //     } else {
    //         choicedCity.splice(replyId, 1)
    //         setChoicedCityCity(choicedCity)

    //     }
    // }
    console.log(choicedCity, 'choiced list');
    // useEffect( () => {
    //     deleteCity(choicedCity)
    //     console.log('effect');
    // }, [choicedCity])

    return (
        <ChoiceCityContext.Provider value={cityManager}>
            { children}
        </ChoiceCityContext.Provider>

    )
}