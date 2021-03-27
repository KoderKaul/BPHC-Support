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
      .get("http://localhost:5000/notice/")
      .then((res) => {
        dispatch(fetchNoticesSuccess(res.data));
      })
      .catch((error) => console.log(error.message));
  };
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQHRlc3QuY29tIiwiaWF0IjoxNjE2NDgyMzM5LCJleHAiOjE2MTkwNzQzMzl9.h7f_56PXaBhNJ0FYn4_7zkJI3FIE8qUa1HwhH3ttQIo";
export const postNotice = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/notice/", data, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        console.log(data);
        return dispatch(postNoticeSuccess(data));
      })
      .catch((error) => console.log(error.message));
  };
};
