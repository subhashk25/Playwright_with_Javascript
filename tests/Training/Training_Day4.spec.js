const{test,expect} = require('@playwright/test')
test('OrangeHRM add use testcase',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();
    //await page.screenshot({path:'scrinshot.png'});
    await page.locator('xpath=//div[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span').click();
    await page.locator('//div[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span').click();
    await page.locator('xpath=//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button').click();
    await page.locator('form i').first().click();
    await page.getByRole('option',{name:'Admin'}).click();
    await page.getByPlaceholder('Type for hints...').pressSequentially('Peter');
    await page.getByRole('option',{name:'Peter Mac Anderson'}).click();
    await page.locator('form i').nth(1).click();
    await page.getByRole('option',{name:'Enabled'}).click();
    await page.getByRole('textbox').nth(2).pressSequentially('Uniqueusersubh');
    await page.getByRole('textbox').nth(3).pressSequentially('password1');
    await page.getByRole('textbox').nth(4).pressSequentially('password1');
    await page.getByRole('button',{name:'Save'}).click();
    // await page.locator().click();
    // await page.locator().click();
    // await page.locator().click();
    // await page.locator().click();
    
    await page.pause();
})