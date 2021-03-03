export const ADD_UPDATE_PICTURE = "ADD_UPDATE_PICTURE";

export const addUpdateDataTransaction = (actionType, payload) => {
  
  return (dispatch) => {
    dispatch({ type: actionType, payload: payload });
  };
};