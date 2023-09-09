import { configureStore } from "@reduxjs/toolkit";
import spendmoneySlice from "./spendmoney/spendmoneySlice";

export const store  =  configureStore({
    reducer:{
       spendmoney: spendmoneySlice
    },
})