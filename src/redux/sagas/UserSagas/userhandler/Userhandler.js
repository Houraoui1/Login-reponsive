import { call, put, takeEvery } from "redux-saga/effects";
import {
  LOGIN_FAILURE_SAGA,
  LOGIN_REQUEST,
  LOGIN_SUCCESS_SAGA,
} from "../../../types/Actiontypes";
import { Request } from "../Usersaga/Usersaga";
import {
  LoginRequest,
  LoginSuccsess,
  loginFailure,
} from "../../../action/action";


import { toast } from "react-hot-toast";


export function* HandleFindEmployee(action) {
  const { payload, type } = action;
  try {
    const response = yield call(Request, payload);
    console.log(response, "data from backend ");

    if (response.MessageSuccess) {
      yield put({ type: LOGIN_SUCCESS_SAGA, payload: response.MessageSuccess});
     
    } else {
        
      yield put({ type: LOGIN_FAILURE_SAGA, payload: response.MessageFailure });
     
    }
  } catch (error) {
    console.error("Saga Error:", error);
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, HandleFindEmployee);
}
