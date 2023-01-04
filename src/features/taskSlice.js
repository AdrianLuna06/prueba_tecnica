import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'task',
  
  initialState: {
    value: 0,
  },
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = taskSlice.actions

export default taskSlice.reducer