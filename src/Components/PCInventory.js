import React from 'react';
import styles from './PCInventory.module.css';
import { useDispatch, useSelector } from "react-redux";

const PCInventory = (props) => {
    const dispatch = useDispatch();
    const charState = useSelector(state => state.initialState[props.pcId]);
    const charInventory = charState.inventory;
    const inventory = [];

    const getInventory = () => {
        if ('armor' in charInventory) {
            Object.keys(charInventory.armor).map(item =>
                item ? inventory.push(item) : null)
        }
        if ('melee' in charInventory.weapons) {
            Object.keys(charInventory.weapons.melee).map(item =>
                item ? inventory.push(item) : null)
        }
        if ('ranged' in charInventory.weapons) {
            Object.keys(charInventory.weapons.ranged).map(item =>
                item ? inventory.push(item) : null)
        }
    }

    getInventory();
    return <div className={styles.inventoryContainer}>
        <h4>Inventory</h4>
        <ul className={styles.inventoryList}>
            {inventory.map(item =>
                <li key={`inventory${item}`} className={styles.inventoryItem}>
                    {item}
                </li>)}
        </ul>

    </div>
}

export default PCInventory;