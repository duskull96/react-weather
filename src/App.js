import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import {ChoiceCityProvider} from './components/City/ChoiceCityContext'
import './style.scss'



function App() {


    const [weather, setWeather] = useState([])

    const [city, setCity] = useState([])

    const [deleteCityConfirm, setDeleteCityConfirm] = useState(false)

    useEffect(() => {
        if (city.length) {
            let startUrl = 'http://api.openweathermap.org/data/2.5/weather?lang=ru&units=metric&appid=';
        let apiKey = 'bbeb28bfc486dd19cca5f49278102700';
        let url = startUrl + apiKey + '&q=' + city[city.length - 1];
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    let currentCity = city.pop()
                    return console.error(`'${currentCity}' города с таким названием не существует. Текст ошибки:`, data.message);
                } else {
                    setTimeout(() => {
                        setWeather(weather.concat([data]))
                    }, 0);
                }
                
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city])

    function addCity(cityName) {
        setCity(city.concat(cityName))
        console.log(city, 'ather fetch');
        console.log(weather, 'fetch');
    }
    

    // function deleteCity(choicedCity) {
    //     console.log(choicedCity, deleteCityConfirm,  'app');
    //     if (choicedCity && deleteCityConfirm) {
    //         const newCity = city.filter(item => !choicedCity.includes(item))
    //         const newWeather = weather.filter(item => !choicedCity.includes(item.name))
    //         setCity(newCity)
    //         setWeather(newWeather)
    //         console.log(city,'удалили города');
    //         setDeleteCityConfirm(false)
    //     }
    //     console.log('CityList',city,'DeleteList', choicedCity, deleteCityConfirm, 'app');
    // }
        
    
    console.log(city, 'city');
    console.log(weather, 'weather');

    return (
        <ChoiceCityProvider>
            <Header addCity={addCity}/>
            {/* {city}
            {weather.length} */}
            {city.length ?
                <Main weather={weather}  />
                : <br></br>}
            {/* {console.log(weather)}
            {JSON.stringify(weather, ' ', 2)} */}
            {/* {weather.lenght ? console.log(weather.forEach(weather.weather[0].icon)) : 'empty'} */}
        </ChoiceCityProvider>
    );
}

export default App;
