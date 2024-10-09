import { configureStore } from "@reduxjs/toolkit";
import configsReducer from "../features/configs.js";
import usersReducer from "../features/user.js";

export const store = configureStore({
  reducer: {
    configs: configsReducer,
    users: usersReducer,
  },
});
