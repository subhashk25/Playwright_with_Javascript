const dataset = JSON.parse(JSON.stringify(require("../Utils/Training_Day5_TestData.json")))
class AdminPage{
    constructor(page){
        this.page = page;
        this.adminsection = this.page.locator('xpath=//div[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span');
        this.addbutton = this.page.locator('xpath=//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button');
        this.formelement = this.page.locator('form i');
        this.adminUserRoledrpdown = this.page.getByRole('option',{name: dataset.userRole});
        this.employeeName = page.getByPlaceholder('Type for hints...').pressSequentially('Ranga');
        this.employeeFrmDropDown = page.getByRole('option',{name: dataset.empName});
        this.statusDropDown = page.getByRole('option',{name:dataset.status});
        this.usernameValue = "subhash1";
        this.username = page.getByRole('textbox').nth(2);
        this.password = page.getByRole('textbox').nth(3);
        this.confirmpassword = page.getByRole('textbox').nth(4);
        this.saveButton = page.getByRole('button',{name:'Save'});

    //     this.adminsection = this.page.locator('');
     }
     async addingUser(){
        await this.adminsection.click();
        await this.addbutton.click();
        await this.formelement.first().click();
        await this.adminUserRoledrpdown.click();
        await this.employeeFrmDropDown.click();
        await this.formelement.nth(1).click();
        await this.statusDropDown.click();
        await this.username.pressSequentially(this.usernameValue);
        await this.password.pressSequentially("password1");
        await this.confirmpassword.pressSequentially('password1')
        await this.saveButton.click();

     }
}
module.exports ={AdminPage}