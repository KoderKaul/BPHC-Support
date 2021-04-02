import axios from "axios";
import { FETCH_ALL_COURIERS, POST_COURIER } from "./courierTypes";

export const fetchCouriersSuccess = (data) => {
  return {
    type: FETCH_ALL_COURIERS,
    payload: data,
  };
};
export const postCourierSuccess = (data) => {
  return {
    type: POST_COURIER,
    payload: data,
  };
};
export const fetchCouriers = () => {
  return (dispatch) => {
    axios
      .get("https://bphcsupportapi.herokuapp.com/courier/")
      .then((res) => {
        dispatch(fetchCouriersSuccess(res.data));
      })
      .catch((error) => console.log(error.message));
  };
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQHRlc3QuY29tIiwiaWF0IjoxNjE2NDgyMzM5LCJleHAiOjE2MTkwNzQzMzl9.h7f_56PXaBhNJ0FYn4_7zkJI3FIE8qUa1HwhH3ttQIo";
export const postCourier = (data) => {
  return (dispatch) => {
    axios
      .post("https://bphcsupportapi.herokuapp.com/courier/", data, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        console.log(data);
        return dispatch(postCourierSuccess(data));
      })
      .catch((error) => console.log(error.message));
  };
};
