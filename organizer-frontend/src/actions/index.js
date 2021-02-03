import axios from "axios";

export const fetchNotes = () => (dispatch) =>
  axios
    .get("http://localhost:5000/notes")
    .then(({ data }) => {
      console.log(data);
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
            id: note._id,
          },
        })
      );
    })
    .catch(() => console.log('Server error. Data was not downloaded'));

export const CreateNotes = (title, note, category) => (dispatch) =>
  axios
    .post("http://localhost:5000/notes", {
      title: title,
      note: note,
      category: category,
    })
    .then(console.log('note created succesfully'))
    .catch(() => console.log('Server error. Note was not created'));

export const DeleteNote = (id) => (dispatch) =>
  axios.delete(`http://localhost:5000/notes/${id}`).then(
    dispatch({
      type: "DELETE_NOTE",
      payload: {
        id,
      },
    })
  ).catch(()=>console.log('Server error. Note was not deleted'));
