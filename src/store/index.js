import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import categoryReducer from "./category/categorySlice";
import modalReducer from "./modalDelivery/modalDeliverySlice";
import orderReducer, { lsmiddleware } from "./order/orderSlice";


export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    modal: modalReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lsmiddleware), 
});