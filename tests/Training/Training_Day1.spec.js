const {test, expect} = require('@playwright/test');

test('First Test in Playwright',async ({browser}) =>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    //await page.goto("https://www.google.com/");
    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator('#user-name').fill('standard_user'); // For id locator we use # as short
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    console.log(await page.locator('.app_logo').textContent()); //For class locator we use . as short

    await expect(page.locator('.app_logo')).toContainText("Swag Labs");
    //await page.pause();
});
test('User locked out',async ({page})=>{
    // const context = await browser.newPage();
    // const page = context.newPage();
    page.goto('https://www.saucedemo.com/v1/index.html');
    const username = page.locator('#user-name');
    const password = page.locator('#password');
    const login_button = page.locator('#login-button');
    const username_value = 'locked_out_user';
    const password_value = 'secret_sauce';
    const error_value = "Epic sadface: Sorry, this user has been locked out.";

    await username.fill(username_value); // For id locator we use # as short
    await password.fill(password_value);
    await login_button.click();
    //console.log(await page.locator("[data-test='error']").textContent())
    await expect(page.locator("[data-test='error']")).toContainText(error_value);
    //await page.pause();
});