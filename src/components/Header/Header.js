import React, { useState } from 'react'
// import FetchData from '../../service/FetchData'
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

    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            addCity(input.value())
            input.clear()
        }
    }

    function writeCityForDelete() {
        
    }

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
                        {...input.bind}
                    />
                    <div className='form__btns'>
                        <button type='submit'>Добавить</button>
                        <button className='delete__city' onClick={writeCityForDelete}>Удалить</button>
                    </div>
                </form>
            </div>
        </header>
    );
}

export default Header
