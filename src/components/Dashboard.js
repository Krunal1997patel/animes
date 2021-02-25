import React, { useState, useEffect } from 'react';
import axios from 'axios'


const Dashboard = props => {

    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.jikan.moe/v3/top/anime/1/airing')
        .then(res =>{
            setAnimes(res.data.top.slice(0,5))
        })
        .catch(err => {
            console.log(err)
        })

    }, [])
    console.log(animes)

    return (
        <div>
            <h1>Home page</h1>
            {animes.map(anime => (
                <div key={anime.title}>
                    <h1>{anime.title}</h1>
                    <img src={anime.image_url} alt={`${anime.title}`} />
                </div>
            ))}
        </div>
    )
}

export default Dashboard