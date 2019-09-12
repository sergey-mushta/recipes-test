import { put, takeEvery, all } from 'redux-saga/effects';
import { API_BASE } from "../../config/";

const api_endpoints = {
    API_ALL_CATEGORIES: API_BASE + "category/all",
    API_CREATE_CATEGORY: API_BASE + "category/create",
    API_EDIT_CATEGORY: API_BASE + "category/update",
    API_DELETE_CATEGORY: API_BASE + "category/"
};

function* fetchApiCall(actionPrefix, method = 'GET', params = [], urlSuffix = '') {
    try {
        let init = { method,  headers: { 'Content-Type': 'application/json'} };
        if (method !== 'GET' && method !== 'HEAD') init.body = JSON.stringify(params);

        const response = yield fetch(api_endpoints['API_' + actionPrefix] + urlSuffix, init);

        const json = yield response.json();
        yield put({type: actionPrefix + "_RECEIVED", ok: response.ok, json: json, params: params, urlSuffix: urlSuffix});
    } catch(err) {
        yield put({type: "SERVER_ERROR", err });
    }
}

export default function* saga() {
    yield all([
        takeEvery('GET_ALL_CATEGORIES', () => fetchApiCall('ALL_CATEGORIES', 'GET')),
        takeEvery('CREATE_CATEGORY', (args) => fetchApiCall('CREATE_CATEGORY', 'POST', args['params'])),
        takeEvery('EDIT_CATEGORY', (args) => fetchApiCall('EDIT_CATEGORY', 'PUT', args['params'])),
        takeEvery('DELETE_CATEGORY', (args) => fetchApiCall('DELETE_CATEGORY', 'DELETE', [], args['params']['_id'])),
//        takeEvery('GET_ALL_RECIPES', () => fetchApiCall('ALL_RECIPES', 'GET')),
//        takeEvery('GET_ALL_ARTICLES', () => fetchApiCall('ALL_ARTICLES', 'GET')),
    ]);
}