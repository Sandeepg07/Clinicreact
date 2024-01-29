import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./Slice";

const store = configureStore({
    reducer: {
        hello1: helloReducer,
      
    }
   
});

export default store;