import axios from "axios";

export const fetchNotes = () => (dispatch) =>
  axios.get("http://localhost:5000/notes").then(({ data }) => {
    dispatch({
      type: "CLEAR_NOTES",
    });
    data.map((note) =>
      dispatch({
        type: "ADD_NOTES",
        payload: {
          title: note.creatorName,
          note: note.note,
        },
      })
    );
  });
