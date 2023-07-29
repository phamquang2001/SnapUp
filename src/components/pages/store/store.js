import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice, {sidebarReducer} from "./sidebarSlice"
const store = configureStore({
  reducer: {
    sidebar: {sidebarReducer}
  },
});

export default store;