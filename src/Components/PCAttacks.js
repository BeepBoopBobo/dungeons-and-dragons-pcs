import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './PCAttacks.module.css';

const PCAttacks = (props) => {
    const dispatch = useDispatch();
    const charState = useSelector(state => state.initialState[props.pcId]);

    const melee = charState.inventory.weapons.melee;
    const ranged = charState.inventory.weapons.ranged;
    const proficiency = charState.profbonus;
    const dexmod = Math.floor((charState.atributes.dexterity - 10) / 2);
    const strmod = Math.floor((charState.atributes.strength - 10) / 2);

    return <div className={styles.weaponsContainer}>
        <table className={styles.weaponsTable}>
            <thead>
                <tr key={`${charState.name}-attacks`}>
                    <th>weapon</th>
                    <th>atk bonus</th>
                    <th>damage/type</th>
                    <th>range</th>
                </tr>
            </thead>
            <tbody>
                {melee ? Object.entries(melee).map(item =>
                    <tr key={`${charState.name}-${item}`}>
                        <td>{item[0]}</td>
                        <td>+{strmod + proficiency}</td>
                        <td>{melee[item[0]].damage.numofdice}d{melee[item[0]].damage.die}+{strmod} {melee[item[0]].damage.type}</td>
                        <td>-</td>
                    </tr>
                ) : ''}
                {ranged ? Object.entries(ranged).map(item =>
                    <tr key={`${charState.name}-${item}`}>
                        <td>{item[0]}</td>
                        <td>+{dexmod + proficiency}</td>
                        <td>{ranged[item[0]].damage.numofdice}d{ranged[item[0]].damage.die}+{dexmod} {ranged[item[0]].damage.type}</td>
                        <td>{ranged[item[0]].normalrange}/{ranged[item[0]].maxrange}</td>
                    </tr>
                ) : ''}

            </tbody>
        </table>

    </div>
}

export default PCAttacks;