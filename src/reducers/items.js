import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
  LOG_OUT_SUCCESS,
} from 'actions/auth';
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  REMOVE_ITEM_SUCCESS,
} from 'actions/items';

const initState = {
  isPendingFetchAuth: false,
  userId: null,
};

const itemsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_AUTH_REQUEST:
      return {
        ...state,
        isPendingFetchAuth: true,
      };
    case FETCH_AUTH_SUCCESS:
      return {
        ...state,
        userId: payload.userId,
        isPendingFetchAuth: false,
      };
    case FETCH_AUTH_FAILURE:
      return {
        ...state,
        isPendingFetchAuth: false,
      };
    case LOG_OUT_SUCCESS:
      return {
        userId: null,
      };

    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        isPendingFetchItems: true,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        [payload.itemType]: payload.items,
        isPendingFetchItems: false,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        isPendingFetchItems: false,
      };
    case ADD_ITEM_REQUEST:
      return {
        ...state,
        isPending: true,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [payload.itemType]: [payload.itemContent, ...state[payload.itemType]],
        isPending: false,
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        isPending: false,
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType].filter((item) => item.id !== payload.id)],
      };
    default:
      return state;
  }
};

export default itemsReducer;
