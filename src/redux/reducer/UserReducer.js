import {
  LOGIN_FAILURE_SAGA,
  LOGIN_SUCCESS_SAGA,
} from "../types/Actiontypes";

import { toast } from "react-hot-toast";

const initialState = {
  Message: "",
};

const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS_SAGA:
      console.log(payload, "login success frome reducer ");

      toast.success(payload);
      return {
        ...state
      };
    case LOGIN_FAILURE_SAGA:
      toast.error(payload);
      console.log(payload, "login failuur frome reducer ");
      return {
        ...state
      };
    default:
      return state;
  }
};
export default UserReducer;
