const {test,expect} = require('@playwright/test')
test('Fetch Product name',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();
    await page.locator('xpath=//div[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span').click();
    await page.pause();
})