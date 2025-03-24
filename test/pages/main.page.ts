
class MainPage {
    //Sign In button in Main page
    get signinButton () { return $('~увійти з Google')}
    



    //Wait First login button in Login page
    async waitsigninButton () {
        await this.signinButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Sign In button is not displayed in Main page' })
    }
    //Click First login button in Login page
    async clicksigninButton () {
        await this.signinButton.click()
    }
}

export default new MainPage();