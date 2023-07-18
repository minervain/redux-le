import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
    name: 'site',
    initialState: {
        dark: false,
        language: 'tr'
    },
    reducers: {
        setDarkmode: state => {
            state.dark = !state.dark
        },
        setLanguage:(state,action)=>
        {
            state.language=action.payload
        }
    }
})

export const { setDarkmode, setLanguage} = site.actions
export default site.reducer