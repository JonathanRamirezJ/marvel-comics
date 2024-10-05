import { useDispatch } from "react-redux";

// Own redux files
import { AppDispatch } from "../Redux/Store";
import { GetListComicsAction } from "../Redux/GetListComics/GetListComics.actions";

// Own constants
import { GET_LIST_COMICS_FULFILLED, GET_LIST_COMICS_REJECTED } from "../constants/GetComics";

export const useComics = () => {
  const dispacth = useDispatch<AppDispatch>();

  const getListComicsAll = async (setLoading: (show:boolean) => void) => {
    setLoading(true);
    const response = await dispacth(GetListComicsAction());

    if(response?.type === GET_LIST_COMICS_FULFILLED) {
      setLoading(false);
    }

    if(response?.type === GET_LIST_COMICS_REJECTED) {
      setLoading(false);
      console.log(response.payload);
    }
  };

  return {
    getListComicsAll,
  }
};