const { Given } = require('@cucumber/cucumber');
const http = require('http');

// Эта функция должна дословно повторять фразу из вашего .feature файла
Given('I send a GET request', function () {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/',
            method: 'GET'
        };

        const req = http.request(options, (res) => {
            if (res.statusCode === 200) {
                resolve();
            } else {
                reject(new Error(`Сервер вернул статус: ${res.statusCode}`));
            }
        });

        req.on('error', (e) => {
            reject(new Error(`Ошибка запроса: ${e.message}`));
        });

        req.end();
    });
});