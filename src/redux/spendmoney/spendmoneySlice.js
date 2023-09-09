import { createSlice,current } from "@reduxjs/toolkit";
import data from '../../api/data.json'

export const spendmoneySlice = createSlice({
    name:"spendmoney",
    initialState:{
        money: 100000000000,
        initialMoney : 100000000000,
        items : data,
        basket: []
    },
    reducers:{
        buy : (state,action) => {
            if(state.money >= action.payload.price){
                state.money -= action.payload.price
               // action.payload.count += 1
                state.basket.push(action.payload)
              // console.log();
            }
        },
        sell : (state,action) => {
            let index = state.basket.map(e => e.name).indexOf(action.payload.name)
            if(index !== -1){
               state.money += action.payload.price
           //    action.payload.count -= 1
               state.basket.splice(index , 1)
            } 
           // console.log(current(state.basket));
        },

    }
})

export const { buy,sell } = spendmoneySlice.actions
export default spendmoneySlice.reducer