import { AUTH } from "./authTypes";

export const loginSuccess = (result, token) => {
  return {
    type: AUTH,
    data: { result, token },
  };
};
export const logoutAction = () => {
  return { type: AUTH };
};
