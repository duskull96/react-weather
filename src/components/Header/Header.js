import React, { useState } from 'react'
// import FetchData from '../../service/FetchData'
import './header.scss'


function Header(props) {
    let [city, setCity] = useState('')
    const [weather, setWeather] = useState({})



    return (
        <header className='header'>
            <div className='__title'>
                <h1>React Weather</h1>
                <h3>введи название любого города мира</h3>
            </div>
            <div className='__form'>
                <form onSubmit={submitHandler}>
                    <input
                        type='text'
                        id='cityname'
                        className='__cityname'
                        autoComplete='on'
                        value={city}
                        onChange={event => setCity(event.target.value)}
                    />
                    <button  type='submit'>Добавить</button>
                </form>
            </div>
            
            <pre>{JSON.stringify(weather, ' ', 2)}</pre>
        </header>
    );
};

export default Header;

