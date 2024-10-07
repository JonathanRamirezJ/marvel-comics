import { createSlice } from "@reduxjs/toolkit";
import { GET_COMICS_ID } from "../../constants/GetComics";
import { GetComicIdAction } from "./GetListComics.actions";
import { State } from "../Store";
import { ComicIdtate } from "../../models/Comics";

const initialState:ComicIdtate = {
  loading: false,
  error: null,
  data: [],
};

export const GetComicIdSlice = createSlice({
  name: GET_COMICS_ID,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetComicIdAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetComicIdAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(GetComicIdAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
});

export const GetComicIdSelector = (state:State) => state.getComicId;