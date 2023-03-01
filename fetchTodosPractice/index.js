"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// GOAL IS TO FETCH DATA FROM A FAKE API
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
