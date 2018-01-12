import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
  FETCHING_COIN_DETAILS,
  FETCHING_COIN_DETAILS_SUCCESS,
  FETCHING_COIN_DETAILS_FAIL
} from "./../Utils/ActionTypes";

const initialState = {
  isFetching: false,
  data: [],
  coinDetails: {},
  hasError: false,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return { ...state, isFetching: true };

    case FETCHING_COIN_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      };

    case FETCHING_COIN_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        coinDetails: null,
        hasError: true,
        errorMessage: action.payload
      };
    case FETCHING_COIN_DETAILS:
      return { ...state, isFetching: true };

    case FETCHING_COIN_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        coinDetails: action.payload,
        hasError: false,
        errorMessage: null
      };

    case FETCHING_COIN_DETAILS_FAIL:
      return {
        ...state,
        isFetching: false,
        coinDetails: null,
        hasError: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
