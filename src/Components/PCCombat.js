import React from "react";
import styles from './PCCombat.module.css';
import { useDispatch, useSelector } from "react-redux";
import { pcActions } from "../store";

const PCCombat = (props) => {
    const dispatch = useDispatch();
    const charState = useSelector(state => state.initialState[props.pcId]);
    let armor = {}
    const dexmod = Math.floor((charState.atributes.dexterity - 10) / 2);


    const getArmor = () => {
        Object.values(charState.inventory.armor).map(item =>
            item.equipped ? armor = item : null);
    }
    getArmor();

    const deathSavePoints = (data) => {
        let numOfSaves = data;
        let arr = [];
        for (let i = 0; i < 3; i++) {
            if (numOfSaves > i) {
                arr.push('◉');
            }
            else {
                arr.push('○');
            }
        }
        return arr;
    }

    return <div className={styles.combatColumn}>
        <div className={styles.combatStats}>
            <div className={styles.combatStatsRow}>
                <div className={styles.armorClass}>

                    <span className={styles.statHeader}>Armor Class</span><br />
                    <span className={styles.statValue}>{armor.dexmodifier ? armor.armorclass + dexmod : armor.armorclass}</span>

                </div>
                <div className={styles.statContainer}>
                    <span className={styles.statHeader}>Initiative</span><br />
                    <span className={styles.statValue}>+{Math.floor((charState.atributes.dexterity - 10) / 2)}</span>
                </div>
                <div className={styles.statContainer}>
                    <span className={styles.statHeader}>Speed</span><br />
                    <span className={styles.statValue}>{charState.speed} feet</span>

                </div>
            </div>
            <div className={styles.combatStatsRow}>
                <div className={styles.statContainer}>
                    <span className={styles.statHeader}>Hit points</span><br />
                    <span className={styles.statValue}>{charState.currhp}/{charState.maxhp}</span>
                </div>
            </div>
            <div className={styles.combatStatsRow}>
                <div className={styles.statContainer}>
                    <span className={styles.statHeader}>Temporal hit points</span><br />
                    <span className={styles.statValue}>{charState.temphp}</span>
                </div>
            </div>
            <div className={styles.combatStatsRow}>
                <div className={styles.statContainer}>
                    <span className={styles.statHeader}>Hit dice </span><br />
                    <span className={styles.statValue}></span>{charState.hitdie}
                </div>
                <div className={styles.statContainer}>
                    <span className={styles.statHeader}>Death Saves: </span><br />
                    Saves: {deathSavePoints(charState.deathsaveSave)}
                    <button onClick={() => dispatch(pcActions.increaseDeathSaves({ id: props.pcId, type: 'deathsaveSave' }))}>+</button>
                    <button onClick={() => dispatch(pcActions.decreaseDeathSaves({ id: props.pcId, type: 'deathsaveSave' }))}>-</button>
                    {/*charState.deathsaveSave*/}<br />
                    Fails: {deathSavePoints(charState.deathsaveFail)}
                    <button onClick={() => dispatch(pcActions.increaseDeathSaves({ id: props.pcId, type: 'deathsaveFail' }))}>+</button>
                    <button onClick={() => dispatch(pcActions.decreaseDeathSaves({ id: props.pcId, type: 'deathsaveFail' }))}>-</button>
                    {/*charState.deathsaveFail*/}
                </div>
            </div>
        </div>
    </div >
}

export default PCCombat;