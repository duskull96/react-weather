import React from 'react'

import './city.scss'



function City({ city }) {

    return (
        <div className='city'>
            <div className='city__title'>
                <div className='__name'>{city.name}</div>
                <div className='__update'>Четверг 20:10</div>
                <div className='__description'>{city.weather[0].description[0].toUpperCase() + city.weather[0].description.slice(1, city.weather[0].description.length)}</div>
            </div>
            <div className='city__icon'>
                <img src={'http://openweathermap.org/img/wn/' + '10n' + '@2x.png'} alt='' />
            </div>
            <div className='city__info'>
                <div className='__temp'>
                    Температура<span>{city.main.temp}°C</span>
                </div>
                <div className='__feels'>
                    Ощущается<span>{city.main.feels_like}°C</span>
                </div>
                <div className='__humidity'>
                    Влажность<span>{city.main.humidity}%</span>
                </div>
            </div>
        </div>
    )
};

export default City;