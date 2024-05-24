import { all } from 'redux-saga/effects';
import { watchLogin } from './UserSagas/userhandler/Userhandler';


function* rootSaga() {
  yield all([
watchLogin(), 
  ]);
}

export default rootSaga;