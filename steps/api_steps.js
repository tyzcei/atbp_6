const { Given } = require('@cucumber/cucumber');
const http = require('http');

Given('Я отправляю GET запрос на {string}', function (path) {
    return new Promise((resolve, reject) => {
        http.get(`http://localhost:3000${path}`, (res) => {
            if (res.statusCode === 200) resolve();
            else reject(new Error(`Статус: ${res.statusCode}`));
        });
    });
});