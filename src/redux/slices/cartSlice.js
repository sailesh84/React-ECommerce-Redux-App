import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {   //"addItem" is an action
            const stateIndex = state.findIndex(object => object.id === action.payload.id);
            if (stateIndex === -1) {
                state.push(action.payload);
            }
        },
        removeItem: (state, action) => {   //"removeItem" is an action
            const stateIndex = state.findIndex(object => object.id === action.payload.id);
            if (stateIndex !== -1) {
                state.pop(action.payload);
            }
        }
    }
});

export const getItemSelector = createSelector(
    (state) => state.cart,
    (state) => state
)

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;