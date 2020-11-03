import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import City from './components/City/City'
import FetchData from './service/FetchData'
import Context from './context'


import './style.scss'


function App() {


    const [weather, setWeather] = useState([
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
        // }
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
        { "coord": { "lon": 30.26, "lat": 59.89 }, "weather": [{ "id": 804, "main": "Clouds", "description": "пасмурно", "icon": "04n" }], "base": "stations", "main": { "temp": 3.54, "feels_like": -1.55, "temp_min": 3.33, "temp_max": 4, "pressure": 1014, "humidity": 93 }, "visibility": 10000, "wind": { "speed": 5, "deg": 150 }, "clouds": { "all": 90 }, "dt": 1604332485, "sys": { "type": 1, "id": 8926, "country": "RU", "sunrise": 1604294626, "sunset": 1604325671 }, "timezone": 10800, "id": 498817, "name": "Санкт-Петербург", "cod": 200 }
    ])

    const [city, setCity] = useState([
        "Санкт-Петербург"
    ])

    // function fetchWeather(city) {
    //     city.map(city => {
    //         let startUrl = 'http://api.openweathermap.org/data/2.5/weather?lang=ru&units=metric&appid=';
    //         let apiKey = '47765400ad97b7c36c3d970d3dc8f2d9';
    //         let url = startUrl + apiKey + '&q=' + city;
    //         fetch(url)
    //             .then(response => response.json())
    //             .then(data => {
    //                 setTimeout(() => {
    //                     setWeather([data])
    //                 }, 2000);
    //             })
    //         console.log(weather, 'fetch');
    //     })

    // }
    function updateWeather(city) {
        city.map(city => {
            let startUrl = 'http://api.openweathermap.org/data/2.5/weather?lang=ru&units=metric&appid=';
            let apiKey = 'bbeb28bfc486dd19cca5f49278102700';
            let url = startUrl + apiKey + '&q=' + city;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setTimeout(() => {
                        setWeather(weather.concat([data]))
                    }, 0);
                })
            console.log(weather, 'fetch');
        })
    }

    useEffect(() => {
        console.log(weather, 'effect');
        // if (JSON.stringify(weather[weather.length - 2]) !== JSON.stringify(weather[weather.length - 1])) {
        //     console.log(JSON.stringify(weather[weather.length - 2]), JSON.stringify(weather[weather.length - 1]), 'effect2');
        //     let startUrl = 'http://api.openweathermap.org/data/2.5/weather?lang=ru&units=metric&appid=';
        //     let apiKey = 'bbeb28bfc486dd19cca5f49278102700';
        //     let url = startUrl + apiKey + '&q=' + city[city.length - 1];
        //     fetch(url)
        //         .then(response => response.json())
        //         .then(data => {
        //             setTimeout(() => {
        //                 setWeather(weather.concat([data]))
        //             }, 0);
        //         })
        // }
        // if (cityName === city[city.length - 1]) {
        //     let startUrl = 'http://api.openweathermap.org/data/2.5/weather?lang=ru&units=metric&appid=';
        //     let apiKey = 'bbeb28bfc486dd19cca5f49278102700';
        //     let url = startUrl + apiKey + '&q=' + city[city.length - 1];
        //     fetch(url)
        //         .then(response => response.json())
        //         .then(data => {
        //             setTimeout(() => {
        //                 setWeather(weather.concat([data]))
        //             }, 0);
        //         })
        // }
    })

    function updateCity(cityName) {
        setCity(city.concat(cityName))
        console.log(city, 'ather fetch');
        let startUrl = 'http://api.openweathermap.org/data/2.5/weather?lang=ru&units=metric&appid=';
        let apiKey = 'bbeb28bfc486dd19cca5f49278102700';
        let url = startUrl + apiKey + '&q=' + city[city.length - 1];
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setWeather(weather.concat([data]))
                }, 0);
            })
        console.log(weather, 'fetch');
    }

    console.log(city, 'city');
    console.log(weather, 'weather');

    return (
        <Context.Provider>
            <Header addCity={updateCity} />
            {city}
            {weather.length}
            {weather.length ? 
            <Main weather={weather} /> 
            : <p className='title'>Empty</p>}
            {console.log(weather)}
            {JSON.stringify(weather, ' ', 2)}
            {/* {weather.lenght ? console.log(weather.forEach(weather.weather[0].icon)) : 'empty'} */}
        </Context.Provider>
    );
}

export default App;
