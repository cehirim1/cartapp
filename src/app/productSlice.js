import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { enums } from '../utils/status';

export const getProducts = createAsyncThunk('products/get', async ()=>{
  const data = await fetch("https://fakestoreapi.com/products")
  const result = await data.json();
  return result;
})

//can be used this way but cleaner with AsyncThunk
// export function getProducts (){
//   return async function getProductsThunk(dispatch, getState){
//     const data = await fetch("https://fakestoreapi.com/products")
//     const result = await data.json()
//   dispatch(fetchProducts(result))
//   }
// }


const initialState = {
  data:[],
  status:enums.IDLE
}
const productSlice = createSlice({

  //pass reducers here
  name:'products',
  initialState,
  reducers:{
    // fetchProducts(state, action){
    //   state.data = action.payload;
    // }
  }, 
  extraReducers:(builder)=>{
//add cases of your promises
builder
.addCase(getProducts.pending, (state,action)=>{
  state.status = enums.LOADING;
})
.addCase(getProducts.fulfilled, (state, action)=>{
  state.data = action.payload;
  state.status = enums.IDLE;
})

.addCase(getProducts.rejected, (state, action)=>{
  state.status = enums.ERROR;
})

  }
});
export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;
