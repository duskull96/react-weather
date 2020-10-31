import React, { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import FetchData from './service/FetchData'
import Context from './context'


import './style.scss'

function App() {


    const [cities, setCity] = useState([
        // {
        //     name: 'Москва',
        //     main: {
        //         temp: 20,
        //         feels_like: 17,
        //         humidity: 60
        //     },
        //     dt: null,
        //     weather: [{
        //         description: 'солнечно',
        //         icon: null
        //     }]
        // },
        // {
        //     name: 'Санкт-Петербург',
        //     main: {
        //         temp: 15,
        //         feels_like: 10,
        //         humidity: 91
        //     },
        //     dt: null,
        //     weather: [{
        //         description: 'дождь',
        //         icon: null
        //     }]
        // },
        // {
        //     name: 'Новосибирск',
        //     main: {
        //         temp: 19,
        //         feels_like: 15,
        //         humidity: 76
        //     },
        //     dt: null,
        //     weather: [{
        //         description: 'пасмурно',
        //         icon: null
        //     }]
        // }
    ])

    const cache = []

    function updateWeather(value) {
        let weather = []
        console.log(value, 'app', Date.now())
        cache.push(value)
        weather = (cache.pop())
        console.log(weather, 'app')
        setCity(cities.concat(weather))
}
    console.log(cities,'cities')
return (
    <Context.Provider>
        <Header updateWeather={updateWeather} />
        <Main city={cities} />
    </Context.Provider>
);
}

export default App;
