import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../components/counterSlice";

const store = configureStore({
  reducer: {
    count: counterSlice,
  },
});

export default store;
