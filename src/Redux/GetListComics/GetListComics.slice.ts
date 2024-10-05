import { createSlice } from "@reduxjs/toolkit";
import { GET_LIST_COMICS } from "../../constants/GetComics";
import { GetListComicsAction } from "./GetListComics.actions";
import { State } from "../Store";
import { Comicstate } from "../../models/Comics";

const initialState:Comicstate = {
  loading: false,
  error: null,
  data: {
    results: []
  }
};

export const GetListComicsSlice = createSlice({
  name: GET_LIST_COMICS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetListComicsAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetListComicsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload
        state.error = null;
      })
      .addCase(GetListComicsAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
});

export const GetListComicsSelector = (state:State) => state.getListComics;