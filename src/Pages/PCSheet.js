import React from "react";
import { useParams } from 'react-router-dom';

import styles from './PCSheet.module.css';
import PCHeader from "../Components/PCHeader";
import PCAbilities from "../Components/PCAbilities";
import PCCombat from "../Components/PCCombat";
import PCInventory from "../Components/PCInventory";

const PCSheet = () => {
    let { pcId } = useParams();

    return <div className={styles.charSheet}>
        <PCHeader pcId={pcId}></PCHeader>
        <div className={styles.charContent}>
            <PCAbilities pcId={pcId}></PCAbilities>
            <PCCombat pcId={pcId}></PCCombat>
            <PCInventory></PCInventory>
        </div>

    </div>
}

export default PCSheet;