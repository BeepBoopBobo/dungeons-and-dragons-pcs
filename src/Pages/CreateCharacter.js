import React, { useState } from "react";
import styles from './CreateCharacter.module.css';


const CreateCharacter = () => {
    const atrMin = 8;
    const atrMax = 16;
    const atrPlaceholder = 10;

    const armor = ['leatherarmor', 'scalemail', 'chainmail'];
    const weapons = ['club', 'dagger', 'greataxe', 'handaxe', 'longsword', 'maul', 'rapier', 'shield', 'spear', 'warhammer', 'heavycrossbow', 'lightcrossbow', 'longbow', 'shortbow'];
    const races = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'halfling', 'half-orc', 'human', 'orc', 'tiefling'];

    const [selectedRace, setSelectedRace] = useState('');
    const [selectedPrimaryWeapon, setSelectedPrimaryWeapon] = useState('');
    const [selectedSecondaryWeapon, setSelectedSecondaryWeapon] = useState('');
    const [selectedArmor, setSelectedArmor] = useState('');



    const selectItemHandler = (event) => {
        console.log();
        let value = event.target.alt;
        let weaponContainerId = event.target.parentElement.parentElement.id;

        weapons.includes(value) ? console.log('yes') : console.log('no');
        if (weapons.includes(value) && weaponContainerId === 'primaryweapon') {
            setSelectedPrimaryWeapon(value);
        } else if (weapons.includes(value) && weaponContainerId === 'secondaryweapon') {
            setSelectedSecondaryWeapon(value);
        } else if (armor.includes(value)) {
            setSelectedArmor(value);
        } else {
            console.log('not weapon nor armor');
        }
    }

    const renderIcons = (type, itemState, listOfItems) => {
        let icons = listOfItems.map(item =>
            itemState === item ?
                < div className={styles.itemSelected} onClick={selectItemHandler} id={item}>
                    <img alt={item} src={require(`../icons/${type}/${item}.png`)} />
                    <span className={styles.itemSelectedHeader}>{item}</span>
                </div > :
                <div className={styles.item} onClick={selectItemHandler} id={item}>
                    <img alt={item} src={require(`../icons/${type}/${item}.png`)} />
                    <span className={styles.itemHeader}>{item}</span>
                </div>
        )

        return icons;
    }
    const nameInputHandler = (event) => {
        console.log('name:', event.target.value);
    }



    return <div className={styles.createCharContainer}>
        <h1>Create a character:</h1>
        <form>
            <label>Name:
                <input type='text' placeholder='Name of your character' name='name' onChange={nameInputHandler}></input>
            </label>
            <label>Charisma:
                <input name='charisma' type='number' placeholder={atrPlaceholder} min={atrMin} max={atrMax}></input>
            </label>
            <label>Constitution:
                <input name='constitution' type='number' placeholder={atrPlaceholder} min={atrMin} max={atrMax}></input>
            </label>
            <label>Dexterity:
                <input name='dexterity' type='number' placeholder={atrPlaceholder} min={atrMin} max={atrMax}></input>
            </label>
            <label>Intelligence:
                <input name='intelligence' type='number' placeholder={atrPlaceholder} min={atrMin} max={atrMax}></input>
            </label>
            <label>Wisdom:
                <input name='wisdom' type='number' placeholder={atrPlaceholder} min={atrMin} max={atrMax}></input>
            </label>
            <button>Submit</button>
        </form>
        <h3>Select a race:</h3>
        <div className={styles.raceIconsContainer}>
            {renderIcons('races', selectedRace, races)}
        </div>
        <h3>Select your primary weapon:</h3>
        <div className={styles.weaponsIconsContainer} id='primaryweapon'>
            {renderIcons('weapons', selectedPrimaryWeapon, weapons)}
        </div>
        <h3>Select your secondary weapon:</h3>
        <div className={styles.weaponsIconsContainer} id='secondaryweapon'>
            {renderIcons('weapons', selectedSecondaryWeapon, weapons)}
        </div>

    </div>
}

export default CreateCharacter;