const initialState = {
  selectedColor: {
    h: 312.0096036621094,
    s: 0.6593152414957681,
    v: 0.6593152414957681,
  },
  brightness: 0.25,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_COLOR':
      return {
        ...state,
        selectedColor: action.payload,
      };
    case 'RESET_COLOR':
      return {
        ...state,
        selectedColor: initialState.selectedColor,
      };
    case 'SELECT_BRIGHTNESS':
      return {
        ...state,
        brightness: action.payload,
      };
    default:
      return state;
  }
};

export default user;
