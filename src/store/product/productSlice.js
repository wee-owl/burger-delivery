import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, POSTFIX } from "../../utils/const";


const initialState = {
  products: [],
  load: false,
  error: "",
};

export const productRequestAsync = createAsyncThunk(
  "product/fetch", (category) => 
    fetch(`${API_URL}${POSTFIX}?category=${category}`)
      .then(req => req.json())
      .catch(error => ({ error }))
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: builder => {
    builder
    .addCase(productRequestAsync.pending, (state) => {
      state.error = "";
      state.load = true;
    })
    .addCase(productRequestAsync.fulfilled, (state, action) => {
      state.error = "";
      state.load = false;
      state.products = action.payload;
    })
    .addCase(productRequestAsync.rejected, (state, action) => {
      state.error = action.payload.error;
      state.load = false;
    })
  }
});

export default productSlice.reducer;