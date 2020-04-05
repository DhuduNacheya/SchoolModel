// types of action
const Types = {
    ADD_SUCCESS: "addSuccess",
    ADD_STARTED: "addStarted",
    ADD_FAILURE: "addFailure"
  };

  
  export const addOperation = ({ anything}) => {
    return dispatch => {
      dispatch(addStarted());
  //do api call
     dispatch(addSuccess());       
    };
  };
  
  const addSuccess = todo => ({
    type: Types.ADD_SUCCESS,
    payload: {
      ...todo
    }
  });
  
  const addStarted = () => ({
    type: Types.ADD_STARTED
  });
  
  const addFailure = error => ({
    type: Types.ADD_FAILURE,
    payload: {
      error
    }
  });

  export default {
    Types,
    addOperation
  };