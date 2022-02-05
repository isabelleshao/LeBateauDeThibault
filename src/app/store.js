import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../component/BasketSlice";

export default configureStore({
  reducer: {
    basket: basketReducer,
  },
});
