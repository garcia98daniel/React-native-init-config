import { call, all, put, takeEvery } from 'redux-saga/effects';
import { changeMenuIsOpen, changeSideMenuOptionSelected } from "./slice";

function* changeSideMenuOptionSelectedFlow(action: any): Generator<any, void, any> {
    try {
        // const { token, visitFilterParams } = action.payload;
        yield put(changeMenuIsOpen(false));
    } catch (error:any) {
        // yield put(getVisitError(error.message));
    }
}



function* generalWatcher(): Generator {
    yield all([
        takeEvery(changeSideMenuOptionSelected.type, changeSideMenuOptionSelectedFlow),
    ]);
}

export default generalWatcher;
