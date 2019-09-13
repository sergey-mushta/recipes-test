import { put, takeEvery, all } from 'redux-saga/effects';
import { API_BASE } from "../../config/";

const api_endpoints = {
    API_ALL_CATEGORIES: API_BASE + "category/all",
    API_ADD_CATEGORY: API_BASE + "category/create",
    API_EDIT_CATEGORY: API_BASE + "category/update",
    API_DELETE_CATEGORY: API_BASE + "category/",

    API_ALL_RECIPES: API_BASE + "recipe/all",
    API_ADD_RECIPE: API_BASE + "recipe/create",
    API_EDIT_RECIPE: API_BASE + "recipe/update",
    API_DELETE_RECIPE: API_BASE + "recipe/",

    API_ALL_ARTICLES: API_BASE + "article/all",
    API_ADD_ARTICLE: API_BASE + "article/create",
    API_EDIT_ARTICLE: API_BASE + "article/update",
    API_DELETE_ARTICLE: API_BASE + "article/"
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
        takeEvery('ADD_CATEGORY', (args) => fetchApiCall('ADD_CATEGORY', 'POST', args['params'])),
        takeEvery('EDIT_CATEGORY', (args) => fetchApiCall('EDIT_CATEGORY', 'PUT', args['params'])),
        takeEvery('DELETE_CATEGORY', (args) => fetchApiCall('DELETE_CATEGORY', 'DELETE', [], args['params']['_id'])),

        takeEvery('GET_ALL_RECIPES', () => fetchApiCall('ALL_RECIPES', 'GET')),
        takeEvery('ADD_RECIPE', (args) => fetchApiCall('ADD_RECIPE', 'POST', args['params'])),
        takeEvery('EDIT_RECIPE', (args) => fetchApiCall('EDIT_RECIPE', 'PUT', args['params'])),
        takeEvery('DELETE_RECIPE', (args) => fetchApiCall('DELETE_RECIPE', 'DELETE', [], args['params']['_id'])),

        takeEvery('GET_ALL_ARTICLES', () => fetchApiCall('ALL_ARTICLES', 'GET')),
        takeEvery('ADD_ARTICLE', (args) => fetchApiCall('ADD_ARTICLE', 'POST', args['params'])),
        takeEvery('EDIT_ARTICLE', (args) => fetchApiCall('EDIT_ARTICLE', 'PUT', args['params'])),
        takeEvery('DELETE_ARTICLE', (args) => fetchApiCall('DELETE_ARTICLE', 'DELETE', [], args['params']['_id'])),

    ]);
}