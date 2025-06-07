const{test,expect}=require('@playwright/test');
test.beforeAll('SauceDemo session test', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await context.storageState({path:'state.json'});
    //await page.pause();

});
test('without login check inventory',async({browser})=>
{
    let webcontext =await browser.newContext({storageState:'state.json'});
    const webpage = await webcontext.newPage();
    await webpage.goto("https://www.saucedemo.com/v1/inventory.html");
    console.log(await webpage.title());
    await webpage.pause();
});