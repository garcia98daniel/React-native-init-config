import {all, fork} from 'redux-saga/effects';
import generalWatcher from './generalEffects/saga';
//
// import loginSagas from './auth/login/sagas';
// import logoutSagas from './auth/logout/sagas';
// import passwordRecoverySagas from './auth/recoverPassword/sagas';


function* IndexSagas() {
    yield all([
        fork(generalWatcher),
        // fork(loginSagas),
        // fork(logoutSagas),
        // fork(passwordRecoverySagas),
    ]);
}
export default IndexSagas
