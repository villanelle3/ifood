import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [], isOpen: false }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            const dish = state.items.find(item => item.id === action.payload.id)
            if (!dish){
                state.items.push(action.payload)
            } else{
                alert("O prato ja está no carrinho!")
            }
        }, 
        remove: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    },
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer