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
        state.basket[action.payload] += Number(1);
        state.nbItems++
      }
    },
    
    removeFromBasket: (state, action) => {
      if(state.basket[action.payload] > 0){
        state.basket[action.payload] -= Number(1);
        state.nbItems--;
      }
    },

    removeAllFromBasket: (state) => {
      state.basket = {};
      state.nbItems = 0;
    },

    setQuantity: (state, action) => {
      const selectedId = action.payload.selectedId;
      state.nbItems -= Number(state.basket[selectedId]);
      state.basket[selectedId] = Number(action.payload.option);
      state.nbItems += Number(state.basket[selectedId]);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket,decrement, setQuantity, removeAllFromBasket } = basketSlice.actions

export default basketSlice.reducer