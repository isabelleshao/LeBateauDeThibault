import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket : {}, nbItems:0,
  },
  reducers: {
    addToBasket: (state, action) => {
      if(!state.basket[action.payload]){
        state.basket[action.payload] = 1;
        state.nbItems++;
      } else {
        state.basket[action.payload] +=1;
        state.nbItems++
      }
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    removeFromBasket: (state, action) => {
      if(state.basket[action.payload] > 0){
        state.basket[action.payload] -= 1;
        state.nbItems--;
      }
    },
    removeAllFromBasket: (state) => {
      state.basket = {};
      state.nbItems = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket,decrement, incrementByAmount, removeAllFromBasket } = basketSlice.actions

export default basketSlice.reducer