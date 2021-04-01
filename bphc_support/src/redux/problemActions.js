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
      .get("https://bphcsupportapi.herokuapp.com/problem/")
      .then((res) => {
        dispatch(fetchProblemsSuccess(res.data));
      })
      .catch((error) => console.log(error.message));
  };
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQHRlc3QuY29tIiwiaWF0IjoxNjE2NDgyMzM5LCJleHAiOjE2MTkwNzQzMzl9.h7f_56PXaBhNJ0FYn4_7zkJI3FIE8qUa1HwhH3ttQIo";
export const postProblem = (data) => {
  return (dispatch) => {
    axios
      .post("https://bphcsupportapi.herokuapp.com/problem/", data, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        console.log(data);
        return dispatch(postProblemSuccess(data));
      })
      .catch((error) => console.log(error.message));
  };
};
