import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, POSTFIX } from "../../utils/const";


const initialState = {
  category: [],
  error: "",
  activeCategory: 0,
  loading: false,
};

export const categoryRequestAsync = createAsyncThunk(
  "category/fetch", () => fetch(`${API_URL}${POSTFIX}/category`)
    .then(req => req.json())
    .catch(error => ({ error }))
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory(state, action) {
      state.activeCategory = action.payload.indexCategory;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(categoryRequestAsync.pending, (state) => {
        state.error = "";
        state.loading = true;
      })
      .addCase(categoryRequestAsync.fulfilled, (state, action) => {
        state.error = "";
        state.category = action.payload;
        state.loading = false;
      })
      .addCase(categoryRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
        state.loading = false;
      })
    }
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;