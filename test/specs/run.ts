import MainPage from "../pages/main.page.ts";
import SigninPage from "../pages/signin,page.ts";
import HomePage from "../pages/home.page.ts";
import SettPage from "../pages/settings.page.ts";
import ProfilePage from "../pages/profile.page.ts";






describe('Login cases', () => {
    it('Login via Google acc', async () => {
        await MainPage.waitsigninButton();
        await MainPage.clicksigninButton();
        await driver.pause(3000);
        await SigninPage.wayshooseacctabTitle();
        await SigninPage.clickshooseacctabaccOption();
        await driver.pause(4000);
        await HomePage.waitrecipesButton();
    });

});


describe('Log out cases', () => {
    it('Log out from acc', async () => {
        await HomePage.waitrecipesButton();
        await HomePage.clickprofileButton();
        await ProfilePage.waitprofilepageSettButton();
        await ProfilePage.clickprofilepageSettButton();
        await SettPage.waitsettpageTitle();
        await SettPage.clicksettpageprofButton();
        await ProfilePage.waitprofilepageTitle();
        await ProfilePage.clickprofilepagelogoutButton();
        await ProfilePage.clicklogouttablogoutButton();

    });  
});