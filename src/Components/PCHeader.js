import React from "react";
import styles from './PCHeader.module.css';
import { useDispatch, useSelector } from "react-redux";
import { pcActions } from "../store/index";


const PCHeader = (props) => {

    const dispatch = useDispatch();

    const globalState = useSelector((state) => state);
    const charState = globalState.initialState[props.pcId];

    // TODO loading icons instead of empty strings
    return <div className={styles.headerContainer}>

        <h1>Player character sheet: {charState.name ? charState.name : ''}</h1>
        <div className={styles.headerProps}>
            <div className={styles.headerProp}>
                Class: {charState.class ? charState.class : ''}
            </div>
            <div className={styles.headerProp}>
                Level: {charState.level ? charState.level + ' ' : ''}
                <button onClick={() => dispatch(pcActions.incLevel(props.pcId))} >+</button>
                <button onClick={() => dispatch(pcActions.decLevel(props.pcId))} >-</button>
            </div>
            <div className={styles.headerProp}>
                Race: {charState.race ? charState.race : ''}
            </div>
        </div>
    </div>
}

export default PCHeader;