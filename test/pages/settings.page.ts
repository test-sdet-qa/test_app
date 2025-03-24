

class SettPage {
    //Title in settings page
    get settpageTitle () { return $('~Налаштування')}
    //Profile button in settings page
    get settpageprofButton () { return $('~Профіль')}
    


    //Wait Title in settings page
    async waitsettpageTitle () {
        await this.settpageTitle.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Title is not displayed in settings page' })
    }
    //Wait and tap Profile button in settings page
    async clicksettpageprofButton () {
        await this.settpageprofButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Profile button is not displayed in settings page' })
        await this.settpageprofButton.click()
    }
    
    



}

export default new SettPage();