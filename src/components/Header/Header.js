import React, { useState } from 'react'
import { useChoiceCity } from '../City/ChoiceCityContext'
import { useCityList } from '../Context/CityListContext'
import './header.scss'


function useInputValue(defaultValue = '') {
    
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function Header({ addCity }) {
    let styles = {}
    const [city] = useCityList()
    const cityManager = useChoiceCity()
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            addCity(input.value())
            input.clear()
        }
    }

    city.length > 0 ? styles = {height: "40%"} : styles = {height: "100%"}
    
    return (
        <header style={styles} className='header'>
            {console.log(styles)}
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
                        {...input.bind}
                    />
                    <div className='form__btns'>
                        <button type='submit'>Добавить</button>
                        <button type='button' className='delete__city' onClick={cityManager.deleteChoisedCity}>Удалить</button>
                    </div>
                </form>
            </div>
        </header>
    );
}

export default Header;
