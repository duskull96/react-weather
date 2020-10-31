import React, { useState } from 'react'
// import FetchData from '../../service/FetchData'
import './header.scss'


function Header(props) {
    let [city, setCity] = useState('')
    const [weather, setWeather] = useState({})

<<<<<<< HEAD


    return (
        <header className='header'>
=======
    function submitHandler(event) {
        event.preventDefault()
        if (city.trim()) {
            
            // let startUrl = 'api.openweathermap.org/data/2.5/weather?lang=ru&appid=';
            // let apiKey = '47765400ad97b7c36c3d970d3dc8f2d9';
            // let url = startUrl + apiKey + '&q=' + city;
            fetch('http://api.openweathermap.org/data/2.5/weather?lang=ru&appid=47765400ad97b7c36c3d970d3dc8f2d9&units=metric&q=' + city)
                .then(response => response.json())
                .then(commits => {
                    setWeather(commits)
                    setCity('')
                    setWeather({})
                })
                // .then(() => event.target.children[0].value = '')
                
            // setTimeout(() => {
            //     props.updateWeather(weather)
            // }, 2000);
            console.log(weather,'fetch');
        }

    }

    // function updateDate(weather) {
    //     if (JSON.stringify(weather) !== '{}') {
    //         props.updateWeather(weather)
    //     }  
    // }

    return (
        <header className='header'>
            {  (JSON.stringify(weather) === '{}' 
            || JSON.stringify(weather) === JSON.stringify())? submitHandler : props.updateWeather(weather)}
>>>>>>> main
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

