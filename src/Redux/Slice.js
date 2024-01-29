import { createSlice } from "@reduxjs/toolkit";


const localvalues = JSON.parse(localStorage.getItem("hello1"))
const slice = createSlice({
    name: "hello",
    initialState: {
        value: localvalues || { token:undefined,isLogin:false,type:undefined, },
        list:[],
        plist:[],
        uprlist:[],
        rplist:[],
        upplist:[],
    },
    reducers: {
        forlogin: (state, action) => {
            state.value = action.payload;
            console.log("forlogin data is :",state.value)
            localStorage.setItem("hello1",JSON.stringify(action.payload))
        },
        receptionlist: (state, action) => {
            state.list =action.payload;
            console.log()    
        },
        palist: (state, action) => {
           state.plist = action.payload;
        },

        rdelilsit: (state, action)=>{
            state.list = action.payload;

        },
        recupdatelist : (state, action)=>{
            state.uprlist = action.payload
        },
        rpatlist : (state, action) =>{
           state.rplist = action.payload

        },
        patupdate : (state, action) =>{
            state.upplist =action.payload
        }
       

    },
});

export const { forlogin, receptionlist, palist, rdelilsit,recupdatelist, rpatlist, patupdate} = slice.actions;
export default slice.reducer;
