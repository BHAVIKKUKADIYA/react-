import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

    const changeTheme = () => {
        if(theme === 'dark') setTheme('light')
        else setTheme('dark')
    }
    return (
        <div >
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default Button