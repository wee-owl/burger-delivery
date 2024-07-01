import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../utils/initialState";


const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    changeCategory(state, action) {
      console.log("state", state);
      console.log("action", action);

      state.activeCategory = action.payload.indexCategory
    }
  }
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;