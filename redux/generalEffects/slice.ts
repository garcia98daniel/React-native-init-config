import { createSlice } from "@reduxjs/toolkit";

export const generalsEffectsSlice = createSlice({
    name:"general",
    initialState:{
        sideMenuOptionSelected:"dashboard",    
        menu_isopen: true, 
    },
    reducers:{
        changeSideMenuOptionSelected:(state, action) =>{
            state.sideMenuOptionSelected = action.payload;
        },
        changeMenuIsOpen:(state, action) =>{
            state.menu_isopen = action.payload;
        }
    }
})

export const {
    changeSideMenuOptionSelected,
    changeMenuIsOpen
} = generalsEffectsSlice.actions;
