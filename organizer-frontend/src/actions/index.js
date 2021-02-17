import axios from "axios";
const authToken = (getState) => {
  const token = getState().token;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (token) {
    config.headers["auth-token"] = token;
  }
  return config;
};
export const fetchNotes = () => (dispatch, getState) =>
  axios
    .get("http://localhost:5000/notes", authToken(getState))
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
    .catch(() => console.log("Server error. Data was not downloaded"));

export const CreateNotes = (title, note, category) => (dispatch, getState) =>
  axios
    .post("http://localhost:5000/notes", {
      title: title,
      note: note,
      category: category,
    },authToken(getState))
    .then(console.log("note created succesfully"))
    .catch(() => console.log("Server error. Note was not created"));

export const DeleteNote = (id) => (dispatch, getState) =>
  axios
    .delete(`http://localhost:5000/notes/${id}`, authToken(getState))
    .then(
      dispatch({
        type: "DELETE_NOTE",
        payload: {
          id,
        },
      })
    )
    .catch(() => console.log("Server error. Note was not deleted"));

export const userRegister = (
  userName,
  email,
  password,
  success,
  failure
) => () =>
  axios
    .post("http://localhost:5000/user/register", {
      userName: userName,
      email: email,
      password: password,
    })
    .then(() => {
      success(true);
      console.log("User created !");
    })
    .catch((err) => {
      failure(true);
      console.log(err);
    });

export const userLogin = (email, password, success, failure) => (dispatch) =>
  axios
    .post("http://localhost:5000/user/login", {
      email: email,
      password: password,
    })
    .then(({ data }) => {
      success(true);
      console.log("Congratulation ! ");
      localStorage.setItem("token", data);
      dispatch({
        type: "USER_LOGIN",
        payload: data,
      });
    })
    .catch((err) => {
      failure(true);
      console.log(err);
    });

export const logOut = ()=>({
  type:"USER_LOGOUT"
})