import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Manga = props => {

    const [mangas, setMangas] = useState([])

    useEffect(() => {
        axios
        .get('https://api.jikan.moe/v3/top/manga/1/manga')
        .then(res =>{
            setMangas(res.data.top)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    console.log(mangas)

    return(
        <div>
            <h1>Manga</h1>
            {
                mangas.map(manga => (
                    <div>
                        


                    </div>
                ))
            }
        </div>
    )
}

export default Manga