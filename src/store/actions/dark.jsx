// actions/dark.js
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const SET_THEME = 'SET_THEME'; // Add this line




export const toggleDarkMode = () => {
  return {
    type: TOGGLE_DARK_MODE,
  };
};

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};
