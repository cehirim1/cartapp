import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../app/cartSlice';
import productSlice from '../app/productSlice';




const store = configureStore({
  reducer:{
    cart:cartSlice,
    products:productSlice,
  }
})

export default store;

    //takes slice name and assigns to slice function

//middleware is by default ready to use, comes with configureStore in our project