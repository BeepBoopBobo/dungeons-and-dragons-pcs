import React from "react";
import { useSelector } from "react-redux";

import { Link } from 'react-router-dom';
import styles from './PCSList.module.css';

const PCList = () => {

    const charInfo = useSelector((state) => state);

    return <div className={styles.listContainer}>
        <h1>List of Characters</h1>
        <ul className={styles.listUl}>
            {charInfo.initialState ?
                Object.keys(charInfo.initialState).map(char =>
                    // TODO loading icon
                    <li key={char} className={styles.listLi}>
                        <Link className={styles.listLink} to={`/pcs/${char}`}>
                            {char.toUpperCase()}
                            <span className={styles.charProps}>
                                [{charInfo.initialState[char].class}, level: {charInfo.initialState[char].level}]
                            </span>
                        </Link>
                    </li>) : 'not loaded'}
        </ul>
        <Link to='create' className={styles.listLink}>
            <button>Add a character</button>
        </Link>
    </div>

}

export default PCList;