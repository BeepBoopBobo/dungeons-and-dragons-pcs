import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const PCList = () => {

    const [characters, setCharacters] = useState([]);


    const getCharacters = useEffect(() => {
        const characterList = [];
        const loadChars = async () => {
            await axios.get('https://dnd-pcs-8dbe6-default-rtdb.europe-west1.firebasedatabase.app/characters.json')
                .then(response => {
                    for (const res in response.data) {
                        characterList.push(res);
                    }
                })
            setCharacters(characterList);
        }
        loadChars();
    }, []);


    return <div>
        <h1>List of Characters</h1>
        <ul>
            {characters.map(char => (<li key={char}><Link to={`/pcs/${char}`}>{char}</Link></li>))}
        </ul>
    </div>

}

export default PCList;