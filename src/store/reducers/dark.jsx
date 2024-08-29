// reducers/dark.js
import { TOGGLE_DARK_MODE, SET_THEME } from '../actions/dark';


const initialState = {
    darkMode: false, // Initial state
  };

const darkReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode, // Toggle the dark mode state
      };
    case SET_THEME:
      return {
        ...state,
        darkMode: action.payload, // Set the theme based on the payload (true/false)
      };
    default:
      return state;
  }
};

export default darkReducer;
