const initialState = {
  notes: [],
  tasks: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    
    case "CLEAR_NOTES": {
      return {
        ...state,
        notes: [],
      };
    }
    case "ADD_NOTES": {
      return {
        ...state,
        notes: [
          ...state.notes,
          { title: action.payload.title, note: action.payload.note,category: action.payload.category },
        ],
      };
    }
    default:
      return state;
  }
}
export default rootReducer;
