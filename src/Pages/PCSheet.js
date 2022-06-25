import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const PCSheet = () => {
    let { pcId } = useParams();
    const [charInfo, setCharInfo] = useState([]);
    const getCharacter = useEffect(() => {
        const loadCharacter = async () => {
            await axios.get(`https://dnd-pcs-8dbe6-default-rtdb.europe-west1.firebasedatabase.app/characters/${pcId}.json`)
                .then(response => {
                    console.log(response.data);
                    setCharInfo(response.data);
                })
        }
        loadCharacter();
    }, [])
    const charName = pcId.charAt(0).toUpperCase() + pcId.slice(1)

    return <>
        <h1>Player character sheet: {charName}</h1>
        {charInfo.class}
    </>;
}

export default PCSheet;