import { useDispatch } from "react-redux";

// Own redux files
import { AppDispatch } from "../Redux/Store";
import { GetListComicsAction } from "../Redux/GetListComics/GetListComics.actions";

// Own constants
import { GET_LIST_COMICS_FULFILLED, GET_LIST_COMICS_REJECTED } from "../constants/GetComics";

export const useComics = () => {
  const dispacth = useDispatch<AppDispatch>();

  const getListComicsAll = async (setLoading: (show:boolean) => void, page:number) => {
    setLoading(true);
    const response = await dispacth(GetListComicsAction(page.toString()));

    if(response?.type === GET_LIST_COMICS_FULFILLED) {
      setLoading(false);
    }

    if(response?.type === GET_LIST_COMICS_REJECTED) {
      setLoading(false);
    }
  };

  return {
    getListComicsAll,
  }
};