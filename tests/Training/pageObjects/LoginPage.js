class LoginPage{
    
    constructor(page){
        this.page = page;
        this.userName = page.locator("[name='username']");
        this.password = page.locator("[name='password']");
        this.submitButton = page.locator("[type='submit']");

    }
    async goTOURL(url){
        this.page.goto(url);
    }
    async performLogin(username,password){
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.submitButton.click();
    }
}
module.exports = {LoginPage}