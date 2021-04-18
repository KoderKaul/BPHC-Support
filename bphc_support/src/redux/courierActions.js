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
      .get("http://localhost:5000/courier/user", {
        email: JSON.parse(localStorage.getItem("profile")).result.email,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch(fetchCouriersSuccess(res.data));
      })
      .catch((error) => console.log(error.message));
  };
};
export const postCourier = (data) => {
  return (dispatch) => {
    axios
      .post(
        "http://localhost:5000/courier/",
        {
          studentEmail: JSON.parse(localStorage.getItem("profile")).result
            .email,
          studentName: JSON.parse(localStorage.getItem("profile")).result.name,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        console.log(data);
        return dispatch(postCourierSuccess(data));
      })
      .catch((error) => console.log(error.message));
  };
};
