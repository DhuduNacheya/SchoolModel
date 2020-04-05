
import Types from "./action";

const defaultState = {
  items: []
};

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Types.ADD_SUCCESS:
          return {
            ...state,
            loading: true
          };
        case Types.ADD_STARTED:
          return {
            ...state,
            loading: false,
            error: null,
            todos: [...state.todos, action.payload]
          };
        case Types.ADD_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error
          };
        default:
          return state;
        };
};

export default rootReducer;