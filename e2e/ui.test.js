const { test, expect } = require('@playwright/test');

test('Проверка текста на главной странице', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const content = await page.textContent('body');
    // Меняем ожидаемый текст, чтобы он совпадал с ответом сервера
    expect(content).toContain('Добро пожаловать'); 
});