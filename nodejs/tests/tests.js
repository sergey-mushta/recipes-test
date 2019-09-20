const API_BASE_URL = "http://localhost:3010";

const test = require('tape');
const request = require('superagent');

test('/ (check if server is alive)', function (t) {
    request
        .get(API_BASE_URL + '/')
        .end(function (err, res) {
            t.equal(res !== undefined && res.status, 200, 'response code must be 200');
            t.equal(res !== undefined && res.body['status'], 'OK', 'response.body.status must be "OK"');
            t.end();
        });
});

test('404 response', function (t) {
    request
        .get(API_BASE_URL + '/not_valid_url')
        .end(function (err, res) {
            t.equal(res.status, 404, 'response code must be 404');
            t.end();
        });
});