const { test, expect } = require('@playwright/test');
test('Check title', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(''); // В нашем сервере нет тега title, тест просто проверит доступность
});