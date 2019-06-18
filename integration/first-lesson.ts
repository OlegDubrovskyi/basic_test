import {$, browser, protractor} from "protractor";
import {MainPagePo} from "../support/main-page.po";
import {BuyFormPo} from "../support/buy-form.po";
import {PreviewFormPo} from "../support/preview-form.po";

describe('first lesson', async () => {

    const mainPage = new MainPagePo();
    const buyForm = new BuyFormPo();
    const previewForm = new PreviewFormPo();
    const headerMenu = ['blog', 'Table of Contents', 'Testimonials', 'Community', 'Get it now', 'Modern AngularJS', 'ng-book 2'];
    const headerLinks = ['http://blog.ng-book.com/', 'https://www.ng-book.com/#features', 'https://www.ng-book.com/#testimonials',
        'https://www.ng-book.com/#community', 'https://www.ng-book.com/#packages', 'https://www.ng-book.com/modern-ng1/', 'https://www.ng-book.com/2/'];
    const pricePlans = ['39', '79', '299'];

    beforeEach(async () => {
        await mainPage.navigateTo();
    });

    it('Go to page and check that title shown appropriate ', async () => {
        await expect(await mainPage.getTitle()).toContain('ng-book: The Complete Book on AngularJS');
    });

    it('When user opens main page, then he’ll see header menu items', async () => {
        for (let element of headerMenu) {
            expect(await mainPage.headerLinks.get(headerMenu.indexOf(element)).getText()).toContain(element.toUpperCase());
        }
        for (let element of headerLinks) {
            expect(await mainPage.headerLinks.get(headerLinks.indexOf(element)).getAttribute('href')).toContain(element);
        }
        await expect(await mainPage.bannerLink.getAttribute('href')).toContain('https://www.ng-book.com/2');
    });

    it('Go to page and check that title shown appropriate ', async () => {
        await mainPage.introLink.click();
        expect(await browser.getCurrentUrl()).toContain('https://www.ng-book.com/#packages');
        for (let element of pricePlans) {
            expect(await mainPage.pricePlans.get(pricePlans.indexOf(element)).getText()).toContain(element);
        }
    });

    it('When user clicks on “Get it” btn, then Purchasing popup shown with fields ', async () => {
        await mainPage.introLink.click();
        for (let i = 0; i < await mainPage.priceGetButton.count(); i++) {
            await mainPage.priceGetButton.get(i).click();
            await browser.switchTo().frame($('iframe.gumroad-overlay-iframe').getWebElement());
            await buyForm.waitForClickable(buyForm.emailField);
            await buyForm.verifyCardsFields(pricePlans[i]);
            await buyForm.closeBuyForm.click();
            expect(await previewForm.price.getText()).toContain('$' + pricePlans[i]);
            await $('body').sendKeys(protractor.Key.ESCAPE);
            await browser.switchTo().defaultContent();
            await browser.sleep(1000);
        }
    });
});
