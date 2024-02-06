import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./reducer";

export default configureStore({
  reducer: {
    notes: noteReducer,
  },
});