const LayoutReducer = (state, action) => {
  switch (action.type) {
    case 'SET_HEADER_HEIGHT':
      return {
        ...state,
        headerHeight: action.payload,
      };
    case 'SET_CONTENT_HEIGHT':
      return {
        ...state,
        contentHeight: action.payload,
      };
    case 'SET_FOOTER_HEIGHT':
      return {
        ...state,
        footerHeight: action.payload,
      };
    default:
      return state;
  }
};

export default LayoutReducer;