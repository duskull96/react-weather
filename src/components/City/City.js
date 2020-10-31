import React from 'react'

import './city.scss'



function City({ weather }) {

    return (
        <div className='city'>
            <div className='city__title'>
                <div className='__name'>{weather.name}</div>
                <div className='__update'>Четверг 20:10</div>
                <div className='__description'>{weather.weather[0].description[0].toUpperCase() + weather.weather[0].description.slice(1, weather.weather[0].description.length)}</div>
            </div>
            <div className='city__icon'>
                <img src={'http://openweathermap.org/img/wn/' + '10n' + '@2x.png'} alt='' />
            </div>
            <div className='city__info'>
                <div className='__temp'>
                    Температура<span>{weather.main.temp}°C</span>
                </div>
                <div className='__feels'>
                    Ощущается<span>{weather.main.feels_like}°C</span>
                </div>
                <div className='__humidity'>
                    Влажность<span>{weather.main.humidity}%</span>
                </div>
            </div>
        </div>
    )
};

export default City;