
class ProfilePage {
    //Settings Button in Profile page
    get profilepageSettButton () { return $('//android.widget.Button[@index="1" and @bounds="[912,74][1038,200]"]')}
    //Profile title in Profile page
    get profilepageTitle () { return $('~Профіль')} 
    //Logout button in Profile page
    get profilepagelogoutButton () { return $('//android.widget.Button[@index="3" and @bounds="[954,74][1080,200]"]')}
    //Logout button in logout tab
    get logouttablogoutButton () { return $('~Вийти')} 

    //Wait Settings Button in Profile page
    async waitprofilepageSettButton () {
        await this.profilepageSettButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Settings Button is not displayed in Profile page' })
    }
    //Tap Settings Button in Profile page
    async clickprofilepageSettButton () {
        await this.profilepageSettButton.click()
    }
    //Wait Profile title in Profile page
    async waitprofilepageTitle () {
        await this.profilepageTitle.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Profile title is not displayed in Profile page' })
    }
    //Wait and tap Logout button in Profile page
    async clickprofilepagelogoutButton () {
        await this.profilepagelogoutButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Logout button is not displayed in Profile page' })
        await this.profilepagelogoutButton.click()
    }
    //Wait and tap Logout button in logout tab
    async clicklogouttablogoutButton () {
        await this.logouttablogoutButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Logout button is not displayed in logout tab' })
        await this.logouttablogoutButton.click()
    }
    






}

export default new ProfilePage ();