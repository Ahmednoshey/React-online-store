import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Selectproducts:
    JSON.parse(localStorage.getItem("Selectproducts")) != null
      ? JSON.parse(localStorage.getItem("Selectproducts"))
      : [],
  SelectproductsID:
    JSON.parse(localStorage.getItem("SelectproductsID")) != null
      ? JSON.parse(localStorage.getItem("SelectproductsID"))
      : [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const newSelectProduct = { ...action.payload, quantity: 1 };
      state.Selectproducts.push(newSelectProduct);
      localStorage.setItem(
        "Selectproducts",
        JSON.stringify(state.Selectproducts)
      );
      state.SelectproductsID.push(action.payload.id);
      localStorage.setItem(
        "SelectproductsID",
        JSON.stringify(state.SelectproductsID)
      );
    },
    upQuantity: (state, action) => {
      const selectproduct = state.Selectproducts.find((item) => {
        return item.id === action.payload.id;
      });
      selectproduct.quantity += 1;
      localStorage.setItem(
        "Selectproducts",
        JSON.stringify(state.Selectproducts)
      );
    },
    downQuantity: (state, action) => {
      const selectproduct = state.Selectproducts.find((item) => {
        return item.id === action.payload.id;
      });
      selectproduct.quantity -= 1;
      localStorage.setItem(
        "Selectproducts",
        JSON.stringify(state.Selectproducts)
      );
      if (selectproduct.quantity === 0) {
        const newSelectproducts = state.Selectproducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        const newSelectproductsID = state.SelectproductsID.filter((item) => {
          return item !== action.payload.id;
        });
        state.SelectproductsID = newSelectproductsID;
        localStorage.setItem(
          "SelectproductsID",
          JSON.stringify(newSelectproductsID)
        );
        state.Selectproducts = newSelectproducts;
        localStorage.setItem(
          "Selectproducts",
          JSON.stringify(newSelectproducts)
        );
      }
    },
    DeleteCart: (state, action) => {
      const newSelectproducts = state.Selectproducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      const newSelectproductsID = state.SelectproductsID.filter((item) => {
        return item !== action.payload.id;
      });
      state.SelectproductsID = newSelectproductsID;
      localStorage.setItem(
        "SelectproductsID",
        JSON.stringify(newSelectproductsID)
      );
      state.Selectproducts = newSelectproducts;
      localStorage.setItem("Selectproducts", JSON.stringify(newSelectproducts));
    },
  },
});

export const { AddCart, upQuantity, downQuantity, DeleteCart } =
  counterSlice.actions;

export default counterSlice.reducer;
