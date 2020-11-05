import React from 'react'
import {useChoiceCity} from './ChoiceCityContext'

import './city.scss'



function City(props) {

    const cityManager = useChoiceCity()

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

    

    function choicedForDelete(event) {
        event.preventDefault();
        const target = event.target.closest('.city')
        target.classList.toggle('choiced-for-delete')
        
        const icon = event.target.closest('.city__delete')
        
        icon.classList.toggle('choiced-for-delete-icon')
        target.classList.toggle('city-hover')
        
        cityManager.choiceCity(props.weather.name)
    }
    return (
        <div className='city city-hover'>
            <div className="city__delete">
                <a href='/' onClick={choicedForDelete}>
                <img src="https://img.icons8.com/material/24/000000/delete-forever--v1.png" alt=''/>
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