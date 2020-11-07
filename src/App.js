import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { ChoiceCityProvider } from './components/City/ChoiceCityContext'
import { useCityList } from './Context/CityListContext'

import './style.scss'


function App() {

    const [city, setCity, weather, setWeather, fetchData, setFetchData] = useCityList()

    useEffect(() => {
        if (city.length) {
            let startUrl = 'http://api.openweathermap.org/data/2.5/weather?lang=ru&units=metric&appid=';
            let apiKey = 'bbeb28bfc486dd19cca5f49278102700';
            let url = startUrl + apiKey + '&q=' + city[city.length - 1].name;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === '404') {
                        let currentCity = city
                        setCity(currentCity.slice(0, currentCity.length - 1))
                        return console.error(`'${currentCity[currentCity.length - 1].name}' города с таким названием не существует. Текст ошибки:`, data.message);
                    } else {
                        setTimeout(() => {
                            let newWeather = weather
                            setWeather(newWeather.concat([data]))
                        }, 300);
                    }
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchData])

    function addCity(cityName) {
        let cityHasReply = false
        city.forEach(item => {
            if (item.name === cityName) {
                cityHasReply = !cityHasReply
                return console.error(`${cityName} - этот город уже есть списке.`)
            }
        })
        if (!cityHasReply) {
            setFetchData(!fetchData)
            setCity(() => [
                ...city,
                {
                    name: cityName,
                    selected: false
                }
            ])
        }
    }

    return (
        <ChoiceCityProvider>
            <Header addCity={addCity} />
            {city.length ? <Main weather={weather} /> : ''}
        </ChoiceCityProvider>
    );
}

export default App;
