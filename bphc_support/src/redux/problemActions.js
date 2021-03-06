import axios from "axios";
import { FETCH_ALL, POST_PROBLEM } from "./problemTypes";

export const fetchProblemsSuccess = (data) => {
  return {
    type: FETCH_ALL,
    payload: data,
  };
};
export const postProblemSuccess = (data) => {
  return {
    type: POST_PROBLEM,
    payload: data,
  };
};
export const fetchProblems = () => {
  return (dispatch) => {
    axios
      .get(
        "https://bphcsupportapi.herokuapp.com/problem/user/" +
          JSON.parse(localStorage.getItem("profile")).result.email,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        // console.log(res);
        dispatch(fetchProblemsSuccess(res.data));
      })
      .catch((error) => console.log(error.message));
  };
};
export const fetchAllProblems = () => {
  return (dispatch) => {
    axios
      .get(
        "https://bphcsupportapi.herokuapp.com/problem/admin/" +
          JSON.parse(
            localStorage.getItem("profile")
          ).result.studentBhawan.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
            letter.toUpperCase()
          ),
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        dispatch(fetchProblemsSuccess(res.data));
      })
      .catch((error) => console.log(error.message));
  };
};

export const postProblem = (data) => {
  return (dispatch) => {
    axios
      .post("https://bphcsupportapi.herokuapp.com/problem/", data, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        // console.log(data);
        return dispatch(postProblemSuccess(data));
      })
      .catch((error) => console.log(error.message));
  };
};
