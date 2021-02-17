const initialState = {
  notes: [],
  tasks: [],
  token: localStorage.getItem("token"),
  user: null,
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CLEAR_NOTES": {
      return {
        ...state,
        notes: [],
      };
    }
    case "DELETE_NOTE": {
      return {
        ...state,
        notes: [...state.notes.filter((note) => note.id !== action.payload.id)],
      };
    }
    case "ADD_NOTES": {
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            note: action.payload.note,
            category: action.payload.category,
            id: action.payload.id,
          },
        ],
      };
    }
    case "USER_LOGIN": {
      return {
        ...state,
        token: localStorage.getItem("token"),
      };
    }
    case "USER_LOGOUT": {
      localStorage.removeItem("token");
      return {
        notes: [],
        tasks: [],
        token: localStorage.getItem("token"),
        user: null,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
