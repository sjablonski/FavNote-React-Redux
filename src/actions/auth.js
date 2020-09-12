export const FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE';

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';

export const auth = (login, password) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_AUTH_REQUEST });

    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (login !== '' && password !== '') {
          resolve('822bf1a1-73ed-4787-b28c-b96977fa7593');
        } else {
          reject(new Error('Invalid user'));
        }
      }, 1000);
    });

    dispatch({
      type: FETCH_AUTH_SUCCESS,
      payload: { userId: result },
    });
  } catch {
    dispatch({ type: FETCH_AUTH_FAILURE });
  }
};

export const logOut = () => ({
  type: LOG_OUT_SUCCESS,
});
