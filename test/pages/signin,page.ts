
class SigninPage {
    //Main title in Choose an account tab
    get shooseacctabTitle () { return $('//android.widget.TextView[@text="Choose an account"]')}
    //Acc option in Choose an account tab
    get shooseacctabaccOption () { return $('//android.widget.TextView[@text="app.test.app80@gmail.com"]')}


    
    //Wait Main title in Choose an account tab
    async wayshooseacctabTitle () {
        await this.shooseacctabTitle.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Main title is not displayed in Choose an account tab'})
    }
    //Wait and click Acc option in Choose an account tab
    async clickshooseacctabaccOption () {
        await this.shooseacctabaccOption.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Acc option is not displayed in Choose an account tab' })
        await this.shooseacctabaccOption.click()
    }


}

export default new SigninPage();