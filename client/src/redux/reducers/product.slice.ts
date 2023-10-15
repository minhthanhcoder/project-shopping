import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        cart:{},
        getOnePro: "",
    },
    reducers: {
        getOnePro: (state:any, action:any)=> {
            console.log("vào getone");
            
            state = {
                ...state,
                getOnePro: action.payload
            }
            return state;
        },
        cart: (state, action) => {
            
        }
    }
})