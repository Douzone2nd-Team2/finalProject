const initialState = {
  authenticated: false,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.token, authenticated: action.result };
    default:
      return state;
  }
};

export { initialState, reducer };
