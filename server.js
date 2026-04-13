const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Правильный рабочий ответ для успешного прохождения тестов
  res.status(200).send('Добро пожаловать');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});