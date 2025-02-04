import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState{
    arr:string[]
}

const initialState :DataState={
    arr:[]
}


const dataSlice = createSlice({
    name:"data",
    initialState
    ,
    reducers:{

        addData:(state,action:PayloadAction<string>)=>{
            
            state.arr.push(action.payload)
        },

        deleteItem:(state,action:PayloadAction<string>)=>{

            state.arr = state.arr.filter(task => task !== action.payload);

        }



    }
})


export default dataSlice.reducer;
export const {addData,deleteItem} = dataSlice.actions