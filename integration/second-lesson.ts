import {browser} from "protractor";
import {NgBook2Po} from "../support/ng-book2.po";
import {ChapterPopupPo} from "../support/chapter-popup.po";
import {PendingPo} from "../support/pending.po";

describe('second lesson', async () => {

    const ngBook2page = new NgBook2Po();
    const chapterPopup = new ChapterPopupPo();
    const pendingPage = new PendingPo();

    const headerMenu = ['Contents', 'Testimonials', 'Blog', 'Get It Now', 'Modern AngularJS', 'ng-book 1'];

    beforeEach(async () => {
        await ngBook2page.navigateTo();
    });

    it('The header should contain all menus', async () => {
        for (let element of headerMenu) {
            expect(await ngBook2page.headerLinks.get(headerMenu.indexOf(element)).getText()).toContain(element.toUpperCase());
        }
    });

    it('After click on “DOWNLOAD THE FIRST CHAPTER (FOR FREE)”, a popup opens with an animation', async () => {
        await ngBook2page.downloadChapterButton.click();
        await ngBook2page.waitForClickable(chapterPopup.nameField);
        expect(await chapterPopup.campaignCanvas.isDisplayed()).toBeTruthy()
    });

    it('After filling incorrect email, user  see “A valid email address is required.” message', async () => {
        await ngBook2page.downloadChapterButton.click();
        await ngBook2page.waitForClickable(chapterPopup.nameField);
        await chapterPopup.nameField.sendKeys('Oleg');
        await chapterPopup.emailField.sendKeys('test');
        await chapterPopup.sendChapterButton.click();
        await ngBook2page.waitForClickable(chapterPopup.errorMessage);
        expect(await chapterPopup.errorMessage.getText()).toContain('A valid email address is required.');
        await chapterPopup.closeButton.click();
        await chapterPopup.waifForInvisability(chapterPopup.errorMessage);
        expect(await chapterPopup.campaignCanvas.isDisplayed()).toBeFalsy();
    });

    it('After filling correct name and email, user click on “SEND MY FREE CHAPTER”, and user redirected to the page', async () => {
        await ngBook2page.downloadChapterButton.click();
        await ngBook2page.waitForClickable(chapterPopup.nameField);
        await chapterPopup.nameField.sendKeys('Oleg');
        await chapterPopup.emailField.sendKeys('test@test.test');
        await chapterPopup.sendChapterButton.click();
        await pendingPage.waitForUrlContanins(browser.baseUrl + pendingPage.pageUrl);
        expect(await pendingPage.stepInformation.count()).toEqual(3);
        await pendingPage.navigationBar.click();
        await ngBook2page.waitForUrlContanins(browser.baseUrl + ngBook2page.pageUrl);
        expect(await browser.getCurrentUrl()).toContain(browser.baseUrl + ngBook2page.pageUrl);
    });

    it('After filling correct name and email, user click on “SEND MY FREE CHAPTER”, and user redirected to the page', async () => {
        await ngBook2page.scrollTo(ngBook2page.bookContentsSection);
        expect(await ngBook2page.bookContensList.count()).toEqual(20);
        await ngBook2page.scrollTo(ngBook2page.getYourFreeButton);
        expect(await ngBook2page.getYourFreeButton.isDisplayed()).toBeTruthy();
        expect(await ngBook2page.goodEmailField.isDisplayed()).toBeTruthy();
        await ngBook2page.scrollTo(ngBook2page.downloadChapterButton);
        await ngBook2page.getYourFreeButton.click();
        await ngBook2page.waitForClickable(ngBook2page.errorTab);
        expect(await ngBook2page.errorTab.getText()).toBeTruthy('You did not enter a value for: Email');
    });
});
