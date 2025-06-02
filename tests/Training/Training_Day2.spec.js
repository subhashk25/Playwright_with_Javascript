const {test, expect} = require('@playwright/test');

test('User locked out',async ({page})=>{
    // const context = await browser.newPage();
    // const page = context.newPage();
    page.goto('https://www.saucedemo.com/v1/index.html');
    const username = page.locator('#user-name');
    const password = page.locator('#password');
    const login_button = page.locator('#login-button');
    const username_value = 'standard_user';
    const password_value = 'secret_sauce';
    const inventory_item_list = page.locator('.inventory_item_name');
    //const error_value = "Epic sadface: Sorry, this user has been locked out.";

    await username.fill(username_value); // For id locator we use # as short
    await password.fill(password_value);
    await login_button.click();
    // console.log(await page.locator('.inventory_item_name').nth(0).textContent());
    // console.log(await page.locator('.inventory_item_name').first().textContent());
    // console.log(await page.locator('.inventory_item_name').last().textContent());
    // //console.log(await page.locator("[data-test='error']").textContent())
    //await expect(page.locator("[data-test='error']")).toContainText(error_value);
    //await page.pause();
    //console.log(await inventory_item_list.first().textContent());
    await page.waitForLoadState('networkidle');//deprecated
    console.log(await inventory_item_list.first().waitFor());
    console.log(await inventory_item_list.allTextContents());
});