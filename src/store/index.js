import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {};
// class: 'rogue', level: 1, dex: 10, str: 10, int: 10
const pcStats = createSlice({
    name: 'characterStats',
    initialState,
    reducers: {
        incLevel(state, action) {
            if (state.initialState[action.payload].level >= 20) {
                console.log('Level is too high');

            } else {
                state.initialState[action.payload].level++;
            }
        },
        decLevel(state, action) {
            if (state.initialState[action.payload].level <= 1) {
                console.log('Level is too low');
            } else {
                state.initialState[action.payload].level--;
            }
        },
        increaseAtribute(state, action) {
            // console.log(action.payload.atribute);
            // console.log(action.payload.id);
            state.initialState[action.payload.id].atributes[action.payload.atribute]++;
        },
        decreaseAtribute(state, action) {
            state.initialState[action.payload.id].atributes[action.payload.atribute]--;
        },
        init(state, action) {
            // console.log('action.payload: ', action.payload);
            // console.log('INIT initialState: ', state.initialState);
            state.initialState = action.payload;

        }
    }
});


const store = configureStore({
    reducer: pcStats.reducer
});

export const pcActions = pcStats.actions;
export default store;
