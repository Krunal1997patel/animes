import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = props => {
    return(
        <div>
            <div>
            <NavLink exact to='/'>Anime</NavLink>
            </div>

            <div>
                <NavLink exact to='/manga'>Manga</NavLink>
            </div>
        </div>
    )
}

export default Navbar