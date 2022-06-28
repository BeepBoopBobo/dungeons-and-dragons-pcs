import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import styles from './PCSheet.module.css';

const PCSheet = () => {
    let { pcId } = useParams();
    const [charInfo, setCharInfo] = useState([]);

    const getCharacter = useEffect(() => {
        const fetchCharacterData = async () => {
            const response = await axios.get(`https://dnd-pcs-8dbe6-default-rtdb.europe-west1.firebasedatabase.app/characters/${pcId}.json`);
            setCharInfo(response.data);
        }
        fetchCharacterData()
    }, [])

    const renderAtributes = () => {
        console.log(charInfo)
        let data = Object.entries(charInfo.atributes)
            .map(atribute => (atribute ?
                <li id={`atribute-${atribute[0]}`} className={styles.atributeLi}>
                    <div className={styles.atributeName}>
                        {atribute[0]}
                    </div>
                    <div className={styles.atributeModifier}>
                        {Math.floor((atribute[1] - 10) / 2)}
                    </div>
                    <div className={styles.atributeNumber}>
                        {atribute[1]}
                    </div>
                </li>
                : 'none'));
        return data;
    }

    const renderSavingThrows = () => {
        let data = Object.entries(charInfo.savingthrows)
            .map(st => st ?
                <li id={`savingthrow-${st[0]}`} className={styles.savingThrowsLi}>
                    {st[1] ? '◉' : '○'}
                    <span className={styles.savingThrowsValue}>
                        {st[1] ?
                            (Math.floor((charInfo.atributes[st[0]] - 10) / 2 + charInfo.profbonus))
                            : (charInfo.atributes[st[0]] - 10) / 2}
                    </span>
                    <span className={styles.savingThrowsName}>{st[0]}</span>
                </li>
                : 'none');
        return data;
    }
    const renderProficiencies = () => {
        let data = Object.entries(charInfo.proficiencies)
            .map(proficiency => (proficiency ?
                <li id={`prof-${proficiency[0]}`} className={styles.proficienciesLi}>
                    {proficiency[1].value ? '◉' : '○'}
                    <span className={styles.proficienciesValue}>{proficiency[1].value ?
                        (Math.floor((charInfo.atributes[proficiency[1].atribute] - 10) / 2 + charInfo.profbonus))
                        : (Math.floor((charInfo.atributes[proficiency[1].atribute] - 10) / 2))}</span>
                    <span className={styles.proficienciesName}>{proficiency[0]}
                        <span className={styles.proficienciesAtribute}> ({proficiency[1].atribute.slice(0, 3)})</span></span>
                </li>
                : 'none'));
        return data;
    }
    const charName = pcId.charAt(0).toUpperCase() + pcId.slice(1);




    return <div className={styles.charSheet}>
        <div className={styles.headerContainer}>
            <h1>Player character sheet: {charName}</h1>
            <div className={styles.headerProps}>
                <div className={styles.headerProp}>Class: {charInfo.class}</div>
                <div className={styles.headerProp}>Level: {charInfo.level}</div>
                <div className={styles.headerProp}>Race: {charInfo.race}</div>
            </div>
        </div>

        <div className={styles.Column}>
            <div className={styles.atributeContainer}>
                <ul className={styles.atributeUl}>
                    {charInfo.atributes ? renderAtributes() : 'not loaded'}
                </ul>
            </div>

            <div className={styles.skillsContainer}>
                <div className={styles.proficiency}>
                    <span className={styles.proficiencyValue}> {charInfo.profbonus}</span>
                    <span className={styles.proficiencyTitle}>Proficiency Bonus</span>
                </div>
                <div className={styles.savingThrowsContainer}>
                    <ul className={styles.savingThrowsUl}>
                        <h4>Saving Throws</h4>
                        {charInfo.savingthrows ? renderSavingThrows() : 'not loaded'}

                    </ul>
                </div>

                <div className={styles.proficienciesContainer}>
                    <ul className={styles.proficienciesUl}>
                        <h4>Skills</h4>
                        {charInfo.proficiencies ? renderProficiencies() : 'not loaded'}
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.Column}></div>
        <div className={styles.Column}></div>
    </div >
}

export default PCSheet;