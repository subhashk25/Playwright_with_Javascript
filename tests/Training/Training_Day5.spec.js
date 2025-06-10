const {test,expect} = require('@playwright/test');
const { LoginPage } = require('../Training/pageObjects/LoginPage');
const {AdminPage} = require("../Training/pageObjects/AdminPage");


test('orangeHRMLive Admin Add user', async({page})=>{
    let usertext = "user";
    let username = "";
    let i = 1;
    let result = false;
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
    await page.getByRole('textbox').nth(2).pressSequentially('Uniqueusersubh2');
    await page.getByRole('textbox').nth(3).pressSequentially('password1');
    await page.getByRole('textbox').nth(4).pressSequentially('password1');
    await page.getByRole('button',{name:'Save'}).click();
    expect (await page.getByRole('cell', { name: 'Uniqueusersubh3', exact: true }).isVisible());
    await page.getByRole('cell', { name: 'Uniqueusersubh3', exact: true }).waitFor();
    flag = await page.getByRole('cell', { name: 'Uniqueusersubh3', exact: true }).isVisible();
    expect(flag).toBeTruthy();

})
test.only('POM implementation',async({page})=>{
    const lp = new LoginPage(page);
    const ap = new AdminPage(page);

    const url = "https://opensource-demo.orangehrmlive.com";
    lp.goTOURL(url);
    lp.performLogin("Admin","admin123");
    ap.addingUser()


    await page.pause();

})
