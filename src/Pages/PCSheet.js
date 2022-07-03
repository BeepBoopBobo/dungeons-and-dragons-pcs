import React from "react";
import { useParams } from 'react-router-dom';

import styles from './PCSheet.module.css';
import PCHeader from "../Components/PCHeader";
import PCAbilities from "../Components/PCAbilities";
import PCCombat from "../Components/PCCombat";
import PCAttacks from "../Components/PCAttacks";
import PCInventory from "../Components/PCInventory";

const PCSheet = () => {
    let { pcId } = useParams();

    return <div className={styles.charSheet}>
        <PCHeader pcId={pcId}></PCHeader>
        <div className={styles.charContent}>

            <div className={styles.firstColumn}>
                <PCAbilities pcId={pcId}></PCAbilities>
            </div>

            <div className={styles.secondColumn}>
                <PCCombat pcId={pcId}></PCCombat>
                <PCAttacks pcId={pcId}></PCAttacks>
            </div>

            <div className={styles.thirdColumn}>
                <PCInventory pcId={pcId}></PCInventory>
            </div>

        </div>

    </div>
}

export default PCSheet;