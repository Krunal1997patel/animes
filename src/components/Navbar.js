import React from 'react'
import { NavLink } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkmode.js'

const Navbar = props => {

    const [DarkMode, setUseDarkMode] = useDarkMode(false)

    const toggleDarkMode = e =>{
        e.preventDefault()
        setUseDarkMode(!DarkMode);
    }

    return(
        <div>
            <div>
            <NavLink exact to='/'>Anime</NavLink>
            </div>

            <div>
                <NavLink exact to='/manga'>Manga</NavLink>
                <NavLink exact to='/schedule'>Schedule</NavLink>
                <NavLink exact to='/news'>News</NavLink>
                {
            DarkMode === true ?
            (<button onClick={toggleDarkMode} className={DarkMode ? 'dark-button dark-mode' : 'dark-button' } >Light Mode</button>)
            :
            (<button onClick={toggleDarkMode} className={DarkMode ? 'dark-button dark-mode' : 'dark-button' } >Dark Mode</button>)   
           }
            </div>
        </div>
    )
}

export default Navbar