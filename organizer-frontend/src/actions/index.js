import axios from "axios";

export const fetchNotes = () => (dispatch) =>
  axios
    .get("http://localhost:5000/notes")
    .then(({ data }) => {
      dispatch({
        type: "CLEAR_NOTES",
      });
      data.map((note) =>
        dispatch({
          type: "ADD_NOTES",
          payload: {
            title: note.title,
            note: note.note,
            category: note.category,
          },
        })
      );
    })
    .catch((err) => console.log(err));

export const CreateNotes = (title,note,category,) => () =>
  axios
    .post("http://localhost:5000/notes", { title:title, note:note, category:category})
    .then(({ data }) => console.log(data.category))
    .catch((err) => console.log(err));
