const initialState = {
  referalText: 'Read this value and then mutate it',
};

// eslint-disable-next-line default-param-last
const referalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REFERAL_CHANGE': return {
      ...state,
      referalText: action.referalText,
    };
    default: return state;
  }
};

export default referalReducer;
