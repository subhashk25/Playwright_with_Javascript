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
test('End to End happy flow ',async({page})=>
{
    page.goto('https://www.saucedemo.com/v1/');
    const username = page.locator('#user-name');
    const password = page.locator('#password');
    const login_button = page.locator('#login-button');
    const username_value = 'standard_user';
    const password_value = 'secret_sauce';
    await username.fill(username_value); // For id locator we use # as short
    await password.fill(password_value);
    await login_button.click();
    await page.locator('xpath=//div[@id="inventory_container"]/div/div[1]/div[3]/button').click();
    await page.locator('xpath=//div[@id="inventory_container"]/div/div[2]/div[3]/button').click();
    await page.locator('.product_sort_container').selectOption('za');
    await page.locator('xpath=//div[@id="shopping_cart_container"]/a[@class="shopping_cart_link fa-layers fa-fw"]').click();
    await page.locator('xpath=//div[@id="cart_contents_container"]/div/div[2]/a[2]').click();
    await page.locator('#first-name').fill('subhash');
    await page.locator('#last-name').fill('Kumar');
    await page.locator('#postal-code').fill('560016');
    await page.locator("[type='submit']").click();
    await page.locator('xpath=//div[@id="checkout_summary_container"]/div/div[2]/div[8]/a[2]').click();
    await expect(page.locator('xpath=//div[@id="checkout_complete_container"]/h2')).toContainText("THANK YOU FOR YOUR ORDER");
    await page.pause();

})