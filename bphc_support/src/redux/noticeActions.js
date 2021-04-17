import axios from "axios";
import { FETCH_ALL_NOTICES, POST_NOTICE } from "./noticeTypes";

export const fetchNoticesSuccess = (data) => {
  return {
    type: FETCH_ALL_NOTICES,
    payload: data,
  };
};
export const postNoticeSuccess = (data) => {
  return {
    type: POST_NOTICE,
    payload: data,
  };
};
export const fetchNotices = () => {
  return (dispatch) => {
    axios
      .get("https://bphcsupportapi.herokuapp.com/notice/")
      .then((res) => {
        dispatch(fetchNoticesSuccess(res.data));
      })
      .catch((error) => console.log(error.message));
  };
};
export const postNotice = (data) => {
  return (dispatch) => {
    axios
      .post("https://bphcsupportapi.herokuapp.com/notice", data, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        console.log(data);
        return dispatch(postNoticeSuccess(data));
      })
      .catch((error) => console.log(error.message));
  };
};
