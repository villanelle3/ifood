import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [], isOpen: false }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload)
        }, 
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    },
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer