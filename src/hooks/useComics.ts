import { useDispatch } from "react-redux";

// Own redux files
import { AppDispatch } from "../Redux/Store";
import { GetListComicsAction } from "../Redux/GetListComics/GetListComics.actions";
import { GetComicIdAction } from "../Redux/GetComicId/GetComicId.actions";

// Own constants
import {
  GET_COMICS_ID_FULFILLED,
  GET_COMICS_ID_REJECTED,
  GET_LIST_COMICS_FULFILLED,
  GET_LIST_COMICS_REJECTED,
} from "../constants/GetComics";

export const useComics = () => {
  const dispacth = useDispatch<AppDispatch>();

  const getListComicsAll = async (
    setLoading: (show: boolean) => void,
    page: number
  ) => {
    setLoading(true);
    const response = await dispacth(GetListComicsAction(page.toString()));

    if (response?.type === GET_LIST_COMICS_FULFILLED || response?.type === GET_LIST_COMICS_REJECTED) {
      setLoading(false);
    }
  };

  const getComicId = async (
    setLoading: (show: boolean) => void,
    id: number
  ) => {
    setLoading(true);
    const response = await dispacth(GetComicIdAction(id));

    if (response?.type === GET_COMICS_ID_FULFILLED || response?.type === GET_COMICS_ID_REJECTED) {
      setLoading(false);
    }
  };

  return {
    getListComicsAll,
    getComicId,
  };
};
