import {$, browser, protractor} from 'protractor';
import {MainPagePo} from '../support/main-page.po';

describe('Tests for main page', async () => {

    const mainPage = new MainPagePo();
    const headerMenu = ['blog', 'Table of Contents', 'Testimonials', 'Community', 'Get it now', 'Modern AngularJS', 'ng-book 2'];
    const headerLinks = ['http://blog.ng-book.com/', '#features', '#testimonials',
        '#community', '#packages', 'modern-ng1/', '/2/'];
    const pricePlans = ['39', '79', '299'];

    beforeEach(async () => {
        await mainPage.navigateTo();
    });

    it('Go to page and check that title shown appropriate ', async () => {
        expect(await mainPage.getTitle()).toEqual('ng-book: The Complete Book on AngularJS');
    });

    it('When user opens main page, then he’ll see header menu items', async () => {
        for (let element of headerMenu) {
            expect(await mainPage.headerLinks.get(headerMenu.indexOf(element)).getText()).toEqual(element.toUpperCase());
        }
        for (let element of headerLinks) {
            expect(await mainPage.headerLinks.get(headerLinks.indexOf(element)).getAttribute('href')).toContain(element);
        }
        expect(await mainPage.bannerLink.getAttribute('href')).toEqual('https://www.ng-book.com/2');
    });

    it('Go to page and check that title shown appropriate ', async () => {
        await mainPage.introLink.click();
        expect(await browser.getCurrentUrl()).toEqual('https://www.ng-book.com/#packages');
        for (let element of pricePlans) {
            expect(await mainPage.pricePlans.get(pricePlans.indexOf(element)).getText()).toEqual(element);
        }
    });

    it('When user clicks on “Get it” btn, then Purchasing popup shown with fields ', async () => {
        await mainPage.introLink.click();
        for (let i = 0; i < await mainPage.priceGetButton.count(); i++) {
            await mainPage.priceGetButton.get(i).click();
            await browser.switchTo().frame($('iframe.gumroad-overlay-iframe').getWebElement());
            await mainPage.waitForClickable(mainPage.emailField);
            await mainPage.verifyCardsFields(pricePlans[i]);
            await mainPage.closeBuyForm.click();
            expect(await mainPage.pricePreview.getText()).toEqual('$' + pricePlans[i]);
            await $('body').sendKeys(protractor.Key.ESCAPE);
            await browser.switchTo().defaultContent();
            await browser.sleep(500);
        }
    });
});
