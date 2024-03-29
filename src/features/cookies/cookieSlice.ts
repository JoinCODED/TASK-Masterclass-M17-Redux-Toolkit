import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Cookie } from "../../models";

export interface CookieState {
  cookies: Cookie[];
}

const initialState: CookieState = {
  cookies: [
    {
      id: 1,
      name: "Chocolate Chip Deluxe",
      price: 5,
      flavor: "Chocolate Chip",
    },
  ],
};

export const cookieSlice = createSlice({
  name: "cookie",
  initialState,
  reducers: {
    addCookie: (state, action: PayloadAction<Cookie>) => {},
    removeCookie: (state, action: PayloadAction<number>) => {},
    updateCookie: (state, action: PayloadAction<Cookie>) => {},
  },
});

export const { addCookie, removeCookie } = cookieSlice.actions;

export default cookieSlice.reducer;
