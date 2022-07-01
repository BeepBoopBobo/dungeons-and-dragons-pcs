import React from "react";
import styles from './PCAbilities.module.css';
import { useDispatch, useSelector } from "react-redux";
import { pcActions } from "../store/index";


const PCAbilities = (props) => {

    const dispatch = useDispatch();

    const globalState = useSelector((state) => state);
    const charState = globalState.initialState[props.pcId];



    const renderAtributes = () => {
        // console.log(charState);
        let data = Object.entries(charState.atributes)
            .map(atribute => (atribute ?
                <li key={`${props.pcID}-atribute-${atribute[0]}`} className={styles.atributeLi}>
                    <div className={styles.atributeName}>
                        {atribute[0]}
                    </div>
                    <div className={styles.atributeModifier}>
                        {Math.floor((atribute[1] - 10) / 2)}
                    </div>
                    <div className={styles.atributeNumContainer}>
                        <button className={styles.atributeNumButton}
                            onClick={() => dispatch(pcActions.decreaseAtribute({ id: props.pcId, atribute: atribute[0] }))}>-</button>
                        <div className={styles.atributeNumber}>
                            {atribute[1]}
                        </div>
                        <button className={styles.atributeNumButton}
                            onClick={() => dispatch(pcActions.increaseAtribute({ id: props.pcId, atribute: atribute[0] }))}>+</button>

                    </div>
                </li>
                : 'none'));
        return data;
    }

    const renderSavingThrows = () => {
        let data = Object.entries(charState.savingthrows)
            .map(st => st ?
                <li key={`${props.pcID}-savingthrow-${st[0]}`} className={styles.savingThrowsLi}>
                    {st[1] ? '◉' : '○'}
                    <span className={styles.savingThrowsValue}>
                        {st[1] ?
                            (Math.floor((charState.atributes[st[0]] - 10) / 2 + charState.profbonus))
                            : Math.floor((charState.atributes[st[0]] - 10) / 2)}
                    </span>
                    <span className={styles.savingThrowsName}>{st[0]}</span>
                </li>
                : 'none');
        return data;
    }
    const renderProficiencies = () => {
        let data = Object.entries(charState.proficiencies)
            .map(proficiency => (proficiency ?
                <li key={`${props.pcID}-proficiency-${proficiency[0]}`} className={styles.proficienciesLi}>
                    {proficiency[1].value ? '◉' : '○'}
                    <span className={styles.proficienciesValue}>{proficiency[1].value ?
                        (Math.floor((charState.atributes[proficiency[1].atribute] - 10) / 2 + charState.profbonus))
                        : (Math.floor((charState.atributes[proficiency[1].atribute] - 10) / 2))}</span>
                    <span className={styles.proficienciesName}>{proficiency[0]}
                        <span className={styles.proficienciesAtribute}> ({proficiency[1].atribute.slice(0, 3)})</span></span>
                </li>
                : 'none'));
        return data;
    }
    return <div className={styles.Column}>
        <div className={styles.atributeContainer}>
            <ul className={styles.atributeUl}>
                {charState.atributes ? renderAtributes() : 'not loaded'}
            </ul>
        </div>

        <div className={styles.skillsContainer}>
            <div className={styles.proficiency}>
                <span className={styles.proficiencyValue}> {charState.profbonus}</span>
                <span className={styles.proficiencyTitle}>Proficiency Bonus</span>
            </div>
            <div className={styles.savingThrowsContainer}>
                <ul className={styles.savingThrowsUl}>
                    <h4>Saving Throws</h4>
                    {charState.savingthrows ? renderSavingThrows() : 'not loaded'}

                </ul>
            </div>

            <div className={styles.proficienciesContainer}>
                <ul className={styles.proficienciesUl}>
                    <h4>Skills</h4>
                    {charState.proficiencies ? renderProficiencies() : 'not loaded'}
                </ul>
            </div>

        </div>
    </div>

}

export default PCAbilities;