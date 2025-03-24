

class HomePage {
    
    //Recipes button in Recipes page
    get recipesButton () { return $("//*[contains(@content-desc, 'Рецепти')]")}
    //Profile button in Recipes page
    get profileButton () { return $("//*[contains(@content-desc, 'Профіль')]")}


    //Wait Recipes button in Recipes page
    async waitrecipesButton () {
        await this.recipesButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Recipes button is not displayed in Recipes page' })
    }
    //Tap Recipes button in Recipes page
    async clickrecipesButton () {
        await this.recipesButton.click()
    }
    //Wait Profile button in Recipes page
    async clickprofileButton () {
        await this.profileButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Profile button is not displayed in Recipes page' })
        await this.profileButton.click()
    }
    


}

export default new HomePage ();