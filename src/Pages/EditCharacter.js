import React from "react";
import styles from "./EditCharacter.module.css";
import { pcActions } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const EditCharacter = () => {
    const { pcId } = useParams()
    const dispatch = useDispatch();
    // const level = useSelector((state) => state.level.value);
    function handleChange() {
        dispatch(pcActions.init(pcId));
        dispatch(pcActions.incLevel);
    }

    return <div>
        <form>
            <label>
                Name:
                <input className={styles.pcName} onChange={handleChange} placeholder={'pcname'}></input>
            </label>
            <button>Submit</button>
        </form>
    </div>
}

export default EditCharacter;