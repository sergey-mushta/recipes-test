import { put, takeEvery, all } from 'redux-saga/effects';
import { API_BASE } from "../../config/";

const api_endpoints = {
    API_ALL_CATEGORIES: API_BASE + "category/all",
    API_ARTICLES_BY_CATEGORY: API_BASE + "article/byCategory/",
    API_RECIPES_BY_CATEGORY: API_BASE + "recipe/byCategory/",
    API_ARTICLE: API_BASE + "article/item/",
    API_RECIPE: API_BASE + "recipe/item/",

};

function* fetchApiCallGet(actionPrefix, urlSuffix = '') {
    try {
        let init = { headers: { 'Content-Type': 'application/json'} };
        const response = yield fetch(api_endpoints['API_' + actionPrefix] + urlSuffix, init);
        const json = yield response.json();
        yield put({type: actionPrefix + "_RECEIVED", ok: response.ok, json, urlSuffix});
    } catch(err) {
        yield put({type: "SERVER_ERROR", err });
    }
}

export default function* saga() {
    yield all([
        takeEvery('GET_ALL_CATEGORIES', () => fetchApiCallGet('ALL_CATEGORIES')),
        takeEvery('GET_ARTICLES_BY_CATEGORY', (args) => fetchApiCallGet('ARTICLES_BY_CATEGORY', args['_id'])),
        takeEvery('GET_RECIPES_BY_CATEGORY', (args) => fetchApiCallGet('RECIPES_BY_CATEGORY', args['_id'])),
        takeEvery('GET_ARTICLE', (args) => fetchApiCallGet('ARTICLE', args['_id'])),
        takeEvery('GET_RECIPE', (args) => fetchApiCallGet('RECIPE', args['_id'])),
    ]);
}