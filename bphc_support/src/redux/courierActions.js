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

export const fetchAllCouriers = () => {
  return (dispatch) => {
    axios
      .get(
        "https://bphcsupportapi.herokuapp.com/courier/admin/" +
          JSON.parse(localStorage.getItem("profile")).result.studentBhawan,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        dispatch(fetchCouriersSuccess(res.data));
      })
      .catch((error) => console.log(error.message));
  };
};

export const fetchCouriers = () => {
  return (dispatch) => {
    axios
      .get(
        "https://bphcsupportapi.herokuapp.com/courier/user/" +
          JSON.parse(localStorage.getItem("profile")).result.email,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        dispatch(fetchCouriersSuccess(res.data));
      })
      .catch((error) => console.log(error.message));
  };
};
export const postCourier = (data) => {
  return (dispatch) => {
    axios
      .post("https://bphcsupportapi.herokuapp.com/courier/", data, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        console.log(data);
        return dispatch(postCourierSuccess(data));
      })
      .catch((error) => console.log(error.message));
  };
};
