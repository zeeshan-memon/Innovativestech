import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  StepOne:false,
  StepTwo:false,
  StepThree:false,
}

export const configsSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setStepOne: (state, action) => {
      state.StepOne = action.payload
    },
    setStepTwo: (state, action) => {
      state.StepTwo = action.payload
    },
    setStepThree: (state, action) => {
      state.StepThree = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoading, setStepOne, setStepTwo, setStepThree } = configsSlice.actions

export default configsSlice.reducer