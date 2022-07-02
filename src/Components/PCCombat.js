import React from "react";
import styles from './PCCombat.module.css';

const PCCombat = (props) => {
    return <div className={styles.combatColumn}>
        <div className={styles.combatStats}>
            <div className={styles.combatStatsRow}>
                <div className={styles.armorClass}>
                    <p>14</p>
                    armor class
                </div>
                <div className={styles.statContainer}>
                    +5
                </div>
                <div className={styles.statContainer}>
                    25 ft
                </div>
            </div>
            <div className={styles.combatStatsRow}>
                <div className={styles.statContainer}>
                    hit points/max hp
                </div>
            </div>
            <div className={styles.combatStatsRow}>
                <div className={styles.statContainer}>
                    temp hp
                </div>
            </div>
            <div className={styles.combatStatsRow}>
                <div className={styles.statContainer}>
                    hit dice
                </div>
                <div className={styles.statContainer}>
                    death saves
                </div>
            </div>
        </div>
        <div className={styles.attacks}>
            attacks
        </div>
    </div>
}

export default PCCombat;