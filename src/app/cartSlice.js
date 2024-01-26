import {createSlice} from '@reduxjs/toolkit'

const initialState = [];
const cartSlice = createSlice({

  //pass reducers here
  name:'cart',
  initialState,
  reducers:{
    //create actions within the reducers - add or delete elements
    addProduct(state,action){
      state.push(action.payload)
    },
    deleteProduct(state,action){
      return state.filter(item=>item.id !== action.payload)
    }
  }
});
export const {addProduct, deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;
