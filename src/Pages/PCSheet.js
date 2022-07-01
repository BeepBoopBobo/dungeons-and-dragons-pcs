import React from "react";
import { useParams } from 'react-router-dom';
// import { pcActions } from "../store/index";
// import { useDispatch, useSelector } from "react-redux";

import styles from './PCSheet.module.css';
import PCHeader from "../Components/PCHeader";
import PCAbilities from "../Components/PCAbilities";

const PCSheet = () => {
    let { pcId } = useParams();
    // const dispatch = useDispatch();

    // const globalState = useSelector((state) => state);
    // const charState = globalState.initialState[pcId];

    return <div className={styles.charSheet}>
        <PCHeader pcId={pcId}></PCHeader>
        <PCAbilities pcId={pcId}></PCAbilities>
    </div>

}

export default PCSheet;