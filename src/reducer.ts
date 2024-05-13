import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: ["Hello World!"],
  reducers: {
    todoAdded(state: any[], action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
  }
})

export const { todoAdded } = todosSlice.actions
export default todosSlice.reducer