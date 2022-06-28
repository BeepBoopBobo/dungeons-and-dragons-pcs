import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styles from './PCList.module.css';

const PCList = () => {

    const [characters, setCharacters] = useState([]);


    const getCharacters = useEffect(() => {
        const characterList = [];
        const loadChars = async () => {
            await axios.get('https://dnd-pcs-8dbe6-default-rtdb.europe-west1.firebasedatabase.app/characters.json')
                .then(response => {
                    for (const res in response.data) {
                        console.log(response.data[res].class);
                        characterList.push(res);
                    }
                })
            setCharacters(characterList);
            console.log(characterList);
        }
        loadChars();
    }, []);

    // console.log('chars', characters)
    console.log(characters)


    return <div className={styles.listContainer}>
        <h1>List of Characters</h1>
        <ul className={styles.listUl}>
            {characters ? characters.map(char => (
                <li key={char} className={styles.listLi}>
                    <Link className={styles.listLink} to={`/pcs/${char}`}>{char}</Link>
                </li>
            )) : ''}
            <Link to={'/edit/hope'}> edit Hope</Link>
        </ul>
    </div>

}

export default PCList;