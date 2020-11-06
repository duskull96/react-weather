import React from 'react'
// import { useCityList } from '../Context/CityListContext'
// import { useChoiceCity } from './ChoiceCityContext'

import './city.scss'



function City(props) {

    // const cityManager = useChoiceCity()
    // const [city,setCity, weather, setWeather] = useCityList()

    const date = new Date(props.weather.dt * 1000)
    const options = {
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
    };
    const day = date.toLocaleString('ru', options)
    const weekday = date.toLocaleString('ru', { weekday: 'long' })

    // const classesCityBlock = ['city', 'city-hover']
    // city.forEach( city => {
    //     if (city.selected) {
    //         classesCityBlock.push('choiced-for-delete')
    //     }
    // })


    function choisedForDelete(event) {
        event.preventDefault();
        // const target = event.target.closest('.city')
        // target.classList.toggle('choiced-for-delete')
        // target.classList.toggle('city-hover')

        // const icon = event.target.closest('.city__delete')
        // icon.classList.toggle('choiced-for-delete-icon')


        // props.city.selected = !props.city.selected ? true : false
        // // setCity(city)
        // console.log(props.weather, 'props.weather');
        // console.log(city, 'city');
        // cityManager.choiceCity(props.weather.name)
        props.choiceCity(props.weather.name)
        console.log('=============================================');
    }

    return (

        // <div className={props.city.selected ? 'city choiced-for-delete ' : 'city city-hover '}>
        <div className='city city-hover '>
            <div className="city__delete">
                <a href='/' onClick={choisedForDelete}>
                    <img src="https://img.icons8.com/material/24/000000/delete-forever--v1.png" alt='' />
                </a>
            </div>
            <div className='city__title'>
                <div className='__name'>{props.weather.name}</div>
                <div className='__update'>{weekday[0].toUpperCase() + weekday.slice(1) + ', ' + day}</div>
                <div className='__description'>{props.weather.weather[0].description[0].toUpperCase() + props.weather.weather[0].description.slice(1, props.weather.weather[0].description.length)}</div>
            </div>
            <div className='city__icon'>
                <img src={'http://openweathermap.org/img/wn/' + props.weather.weather[0].icon + '@2x.png'} alt='' />
            </div>
            <div className='city__info'>
                <div className='__temp'>
                    Температура<span>{props.weather.main.temp}°C</span>
                </div>
                <div className='__feels'>
                    Ощущается<span>{props.weather.main.feels_like}°C</span>
                </div>
                <div className='__humidity'>
                    Влажность<span>{props.weather.main.humidity}%</span>
                </div>
            </div>
        </div>
    )
};

export default City;