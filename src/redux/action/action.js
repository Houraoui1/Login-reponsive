import {

  LOGIN_REQUEST,

} from "../types/Actiontypes";

export const LoginRequest = (datasend) => {
  return { type: LOGIN_REQUEST, payload: datasend };
};
