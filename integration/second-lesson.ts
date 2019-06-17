import {MainPagePo} from "../support/main-page.po";
import {NgBook2Po} from "../support/ng-book2.po";
import {expect} from "chai";
import {browser, ExpectedConditions, ElementFinder, $} from "protractor";
import {ChapterPopupPo} from "../support/chapter-popup.po";
import {PendingPo} from "../support/pending.po";

const ngBook2Po = new NgBook2Po();
const chapterPopupPo = new ChapterPopupPo();
const pendingPo = new PendingPo();

const headerMenu = ['Contents', 'Testimonials', 'Blog', 'Get It Now', 'Modern AngularJS', 'ng-book 1'];

class elementFinder {
}

describe('second lesson', async () => {

    beforeEach(async () => {
        ngBook2Po.navigateTo();
    });

    it('The header should contain all menus', async () => {
        headerMenu.forEach(async (element, index) => {
            expect(await ngBook2Po.headerLinks.get(index).getText()).to.equals(element.toUpperCase());
        });
    });

    it('After click on “DOWNLOAD THE FIRST CHAPTER (FOR FREE)”, a popup opens with an animation', async () => {
        ngBook2Po.downloadChapterButton.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(chapterPopupPo.nameField), 5000);
        expect(await chapterPopupPo.campaignCanvas.isDisplayed()).to.equal(true);
    });

    it('After filling incorrect email, user  see “A valid email address is required.” message', async () => {
        ngBook2Po.downloadChapterButton.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(chapterPopupPo.nameField), 5000);
        chapterPopupPo.nameField.sendKeys('Oleg');
        chapterPopupPo.emailField.sendKeys('test');
        chapterPopupPo.sendChapterButton.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(chapterPopupPo.errorMessage), 5000);
        expect(await chapterPopupPo.errorMessage.getText()).to.equal('A valid email address is required.');
        chapterPopupPo.closeButton.click();
        await browser.wait(ExpectedConditions.invisibilityOf(chapterPopupPo.errorMessage), 5000);
        expect(await chapterPopupPo.campaignCanvas.isDisplayed()).to.equal(false);
    });

    it('After filling correct name and email, user click on “SEND MY FREE CHAPTER”, and user redirected to the page', async () => {
        ngBook2Po.downloadChapterButton.click();
        await browser.wait(ExpectedConditions.elementToBeClickable(chapterPopupPo.nameField), 5000);
        chapterPopupPo.nameField.sendKeys('Oleg');
        chapterPopupPo.emailField.sendKeys('test@test.test');
        chapterPopupPo.sendChapterButton.click();
        await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + pendingPo.pageUrl), 10000);
        expect(await browser.getCurrentUrl()).to.equal(browser.baseUrl + pendingPo.pageUrl);
        expect(await pendingPo.stepInformation.count()).to.equal(3);
        pendingPo.navigationBar.click();
        await browser.wait(ExpectedConditions.urlContains(browser.baseUrl + ngBook2Po.pageUrl), 10000);
        expect(await browser.getCurrentUrl()).to.equal(browser.baseUrl + ngBook2Po.pageUrl);
    });

    it('After filling correct name and email, user click on “SEND MY FREE CHAPTER”, and user redirected to the page', async () => {
        await browser.executeScript('arguments[0].scrollIntoView()', await ngBook2Po.bookContentsSection.getWebElement());
        expect(await ngBook2Po.bookContensList.count()).to.equal(20);
        await browser.executeScript('arguments[0].scrollIntoView()', await ngBook2Po.bookContentsSection.getWebElement());
        expect(await ngBook2Po.getYourFreeButton.isDisplayed()).to.be.true;
        expect(await ngBook2Po.goodEmailField.isDisplayed()).to.be.true;
        ngBook2Po.downloadChapterButton.click();
        expect(await ngBook2Po.errorTab.getText()).to.equal('You did not enter a value for: Email');
    });
});
