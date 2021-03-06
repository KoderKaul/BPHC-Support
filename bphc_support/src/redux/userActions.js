import axios from "axios";
import { USER_DATA } from "./userTypes";
export const fetchUserSuccess = (data) => {
  return {
    type: USER_DATA,
    payload: data,
  };
};
export const fetchUserInfo =    (type, email) => {
  return (dispatch) =>
    axios.get("https://bphcsupportapi.herokuapp.com/" + type + "/" + email).then((res) => {
        console.log(res.data[0]);
      localStorage.setItem(
        "profile",
        JSON.stringify({
          result: {
            email: res.data[0].email,
            studentBhawan: res.data[0].bhawan,
            name: res.data[0].name,
          },
        })
      );
      dispatch(fetchUserSuccess(res.data[0]));
    });
};
