import { createAsyncThunk } from "@reduxjs/toolkit";

// Own services
import { BaseConfigApi } from "../../services/API/BaseConfigApi";
import { GET_LIST_COMICS } from "../../constants/GetComics";
import { API_KEY } from "../../constants/api";

export const GetListComicsAction = createAsyncThunk(
  GET_LIST_COMICS,
  async(payload:string | undefined, thunkAPI) => {
    try {
      const offset = payload ? payload : "0";
      const response = await BaseConfigApi.get(`/comics?&apikey=${API_KEY}&offset=${offset}`);
      return response.data.data;
    } catch(error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);