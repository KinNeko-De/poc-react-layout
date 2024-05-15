import { createSlice } from '@reduxjs/toolkit'

export const titleSlice = createSlice({
    name: 'title',
    initialState: {
        value: "Initial Main Page",
    },
    reducers: {
        ToInvoice: (state) => {
            // Redux Toolkit позволяет нам писать "мутабельную" логику в reducer'ах.
            // Это не изменяет состояние(state) напрямую, потому что внутри используется библиотека Immer,
            // которая следит за изменениями в "черновом state" и создает новое 
            // неизменное состояние на основе этих изменений
            state.value = "Invoice Page";
        },
        ToMain: (state) => {
            state.value = "Main Page"
        },
        NavigateByState: (state, action) => {
            state.value += action.payload
        },
    },
})

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { ToInvoice, ToMain, NavigateByState } = titleSlice.actions

export default titleSlice.reducer