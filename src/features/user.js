import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addAllUsers: (state, action) => {
        state.users = action.payload;
      },
    addUser: (state, action) => {
      state.users.unshift(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.users.findIndex(user => user.id === id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...updatedData }; 
      }
    },
  },
});

export const { addAllUsers, addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
