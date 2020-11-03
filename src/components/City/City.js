import React from 'react'

import './city.scss'



function City(props) {

    return (
        <div className='city'>
            <div className='city__title'>
                <div className='__name'>{props.weather.name}</div>
                <div className='__update'>{props.weather.dt}</div>
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