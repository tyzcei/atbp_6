const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Намеренная ошибка: возвращаем статус 500 и другой текст
  res.status(500).send('Критическая ошибка сервера');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});