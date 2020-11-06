import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { ChoiceCityProvider } from './components/City/ChoiceCityContext'
import { useCityList } from './components/Context/CityListContext'
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
                            console.log(weather, 'получили погоду из фетч');
                        }, 0);
                    }

                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchData])

    function addCity(cityName) {
        console.log(city, cityName, 'TEST');
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

        // console.log(!city[0].name.length);
        // if (city[0].name.length > 2) {
        //     let newCity = city
        //     setCity(newCity.slice(1))
        // }
        console.log(city, 'ather fetch');
        console.log(weather, 'fetch');
    }

    console.log(city, 'city');
    console.log(weather, 'weather');

    return (
        <ChoiceCityProvider>
            <Header addCity={addCity} />
            {/* {city}
            {weather.length} */}
            {city.length ?
                <Main weather={weather} />
                : <br></br>}
            {/* {console.log(weather)}
            {JSON.stringify(weather, ' ', 2)} */}
            {/* {weather.lenght ? console.log(weather.forEach(weather.weather[0].icon)) : 'empty'} */}
        </ChoiceCityProvider>
    );
}

export default App;
