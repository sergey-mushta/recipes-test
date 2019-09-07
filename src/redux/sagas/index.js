import { put, takeLatest, all } from 'redux-saga/effects';

import * as api_urls from "../../config/";
import * as actions from "../actions/"

function* fetchAllCategories() {
    try {
        const response = yield fetch(api_urls.API_CATEGORY_ALL);
        const json = yield response.json();
        yield put({type: "ALL_CATEGORIES_RECEIVED", ok: response.ok, json: json});
    } catch(err) {
        yield put({type: "SERVER_ERROR", err });
    }
}

function* actionWatcher() {
    yield takeLatest(actions.getAllCategories, fetchAllCategories)
}


export default function* saga() {
    yield all([
        actionWatcher(),
    ]);
}