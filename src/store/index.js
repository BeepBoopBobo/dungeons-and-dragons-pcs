import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {};
const pcStats = createSlice({
    name: 'characterStats',
    initialState,
    reducers: {
        incLevel(state, action) {
            if (state.initialState[action.payload].level >= 20) {
                // TODO some sorf of a pop-up or modal warning
                console.log('Level is too high');

            } else {
                state.initialState[action.payload].level++;
            }
        },
        decLevel(state, action) {
            if (state.initialState[action.payload].level <= 1) {
                // TODO some sorf of a pop-up or modal warning
                console.log('Level is too low');
            } else {
                state.initialState[action.payload].level--;
            }
        },
        // 
        increaseAtribute(state, action) {
            state.initialState[action.payload.id].atributes[action.payload.atribute]++;
        },
        decreaseAtribute(state, action) {
            state.initialState[action.payload.id].atributes[action.payload.atribute]--;
        },
        increaseDeathSaves(state, action) {
            if (state.initialState[action.payload.id][action.payload.type] <= 2) {
                state.initialState[action.payload.id][action.payload.type]++;

            } else {
                console.log('death save is too high')
            }
        },
        decreaseDeathSaves(state, action) {
            if (state.initialState[action.payload.id][action.payload.type] >= 1) {
                state.initialState[action.payload.id][action.payload.type]--;

            } else {
                console.log('death save is too low')
            }
        },
        addToInventory(state, action) {

        },
        //initialize state with payload content
        init(state, action) {
            state.initialState = action.payload;
        }
        //TODO update database with changed state
    }
});


const store = configureStore({
    reducer: pcStats.reducer
});

export const pcActions = pcStats.actions;
export default store;
