const {test} = require('@playwright/test');

test('First Test in Playwright',async ({browser}) =>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
    await page.pause();
});