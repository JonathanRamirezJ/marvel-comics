import { createAsyncThunk } from "@reduxjs/toolkit";

// Own services
import { BaseConfigApi } from "../../services/API/BaseConfigApi";
import { GET_COMICS_ID } from "../../constants/GetComics";
import { API_KEY } from "../../constants/api";

export const GetComicIdAction = createAsyncThunk(
  GET_COMICS_ID,
  async(payload:number | string, thunkAPI) => {
    try {
      const comicId = payload;
      const response = await BaseConfigApi.get(`/comics/${comicId}?&apikey=${API_KEY}`);
      return response.data.data.results;
    } catch(error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);