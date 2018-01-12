import axios from "axios";
import { apiBaseURL } from "./../Utils/Constants";
import {
  FETCHING_COIN_DETAILS,
  FETCHING_COIN_DETAILS_SUCCESS,
  FETCHING_COIN_DETAILS_FAIL
} from "./../Utils/ActionTypes";

export default function FetchCoinDetails(id) {
  console.log(id);
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DETAILS });

    return axios
      .get(`${apiBaseURL}/v1/ticker/${id}/?convert=INR`)
      .then(res => {
        dispatch({ type: FETCHING_COIN_DETAILS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DETAILS_FAIL, payload: err.data });
      });
  };
}
