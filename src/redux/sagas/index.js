import { put, takeLatest, all } from 'redux-saga/effects';

import * as api_urls from "../../config/";

function* fetchAllCategories() {
    try {
        const json = yield fetch(api_urls.API_CATEGORY_ALL)
            .then(response => response.json());
        yield put({type: "ALL_CATEGORIES_RECEIVED", json: json});
    } catch(err) {
        yield put({type: "API_ERROR", errorMsg: err });
    }
}

function* actionWatcher() {
    yield takeLatest('GET_ALL_CATEGORIES', fetchAllCategories)
}


export default function* saga() {
    yield all([
        actionWatcher(),
    ]);
}