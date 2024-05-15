import { configureStore } from '@reduxjs/toolkit'
import titleReducer from '../features/title/titleSlice'

export default configureStore({
    reducer: {
        title: titleReducer,
    },
})