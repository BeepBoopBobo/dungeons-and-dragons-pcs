// import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

import { Link } from 'react-router-dom';
import styles from './PCList.module.css';

const PCList = () => {

    const charInfo = useSelector((state) => state);

    return <div className={styles.listContainer}>
        <h1>List of Characters</h1>
        <ul className={styles.listUl}>
            {charInfo.initialState ?
                Object.keys(charInfo.initialState).map(char =>
                    <li key={char} className={styles.listLi}>
                        <Link className={styles.listLink} to={`/pcs/${char}`}>{char}</Link>
                    </li>) : 'not loaded'}
        </ul>
    </div>

}

export default PCList;