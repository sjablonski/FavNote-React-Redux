import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';

const axiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/sjablonski/jsondb',
});

export const fetchItem = (itemType, id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ITEMS_REQUEST });

    const { data } = await axiosInstance.get(`/${itemType}/${id}`);

    dispatch({
      type: FETCH_ITEMS_SUCCESS,
      payload: {
        itemType,
        items: [data],
      },
    });
  } catch (err) {
    dispatch({
      type: FETCH_ITEMS_FAILURE,
      payload: { err },
    });
  }
};

export const fetchItems = (itemType) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ITEMS_REQUEST });

    const { data } = await axiosInstance.get(`/${itemType}`);

    dispatch({
      type: FETCH_ITEMS_SUCCESS,
      payload: {
        itemType,
        items: data,
      },
    });
  } catch (err) {
    dispatch({
      type: FETCH_ITEMS_FAILURE,
      payload: { err },
    });
  }
};

export const addItem = (itemType, item) => async (dispatch) => {
  try {
    dispatch({ type: ADD_ITEM_REQUEST });

    const { data } = await axiosInstance.post(`/${itemType}`, {
      id: uuidv4(),
      created: Date.now(),
      ...item,
    });
    dispatch({
      type: ADD_ITEM_SUCCESS,
      payload: {
        itemType,
        itemContent: {
          ...data,
        },
      },
    });
  } catch (err) {
    dispatch({
      type: ADD_ITEM_FAILURE,
      payload: { err },
    });
  }
};

export const removeItem = (itemType, id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_ITEM_SUCCESS,
      payload: {
        id,
        itemType,
      },
    });
    return true;
  } catch (err) {
    dispatch({
      type: REMOVE_ITEM_SUCCESS,
      payload: { err },
    });
    return false;
  }
};
