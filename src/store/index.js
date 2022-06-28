import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

let data = {}

async function fetchData(char) {
    const response = await axios.get(`https://dnd-pcs-8dbe6-default-rtdb.europe-west1.firebasedatabase.app/characters/${char}.json`)
    console.log(response.data);
}

// class: 'rogue', level: 1, dex: 10, str: 10, int: 10
const pcStats = createSlice({
    name: 'characterStats',
    initialState: {},
    reducers: {
        incLevel(state) {
            // state.level++;
            console.log(state);
        },
        decLevel(state) {
        },
        incDex(state) {
        },
        decDex(state) {
        },
        incStr(state) {
        },
        decStr(state) {
        },
        incInt(state) {
        },
        decInt(state) {
        },
        init(state, action) {
            fetchData(action.payload);
        }
    }
});


const store = configureStore({
    reducer: pcStats.reducer
});

export const pcActions = pcStats.actions;
export default store;
