import {MainPagePo} from "../support/main-page.po";
import {BuyFormPo} from "../support/buy-form.po";
import {PreviewFormPo} from "../support/preview-form.po";
import { expect } from "chai"
import {$, browser, ExpectedConditions, protractor} from "protractor";
const mainPage = new MainPagePo();
const buyForm = new BuyFormPo();
const previewForm= new PreviewFormPo();
const headerMenu = ['blog', 'Table of Contents', 'Testimonials', 'Community', 'Get it now', 'Modern AngularJS', 'ng-book 2'];
const headerLinks = ['http://blog.ng-book.com/', 'https://www.ng-book.com/#features', 'https://www.ng-book.com/#testimonials',
    'https://www.ng-book.com/#community','https://www.ng-book.com/#packages', 'https://www.ng-book.com/modern-ng1/', 'https://www.ng-book.com/2/'];
const pricePlans = ['39', '79', '299'];

describe('', async ()=> {

    beforeEach (async () => {
        mainPage.navigateTo();
    });

    it('Go to page and check that title shown appropriate ',  async () => {
        expect(await mainPage.getTitle()).equal('ng-book: The Complete Book on AngularJS');
    });

    it('When user opens main page, then he’ll see header menu items',  async () => {
        headerMenu.forEach(async (element, index) => {
            expect(await mainPage.headerLinks.get(index).getText()).to.equals(element.toUpperCase());
        });
        headerLinks.forEach( async (element, index) => {
            expect(await mainPage.headerLinks.get(index).getAttribute('href')).to.equals(element);
        });
        expect(await  mainPage.bannerLink).to.equals('https://www.ng-book.com/2/');
    });

    it('Go to page and check that title shown appropriate ',  async () => {
        mainPage.introLink.click();
        expect(await browser.getCurrentUrl()).to.equals('https://www.ng-book.com/#packages');
        pricePlans.forEach( async (element, index) => {
            expect( await mainPage.pricePlans.get(index).getText()).to.equals(element);
        });
    });

    it('When user clicks on “Get it” btn, then Purchasing popup shown with fields ',  async () => {
        mainPage.introLink.click();
        for (let i = 0; i < await mainPage.priceGetButton.count(); i++) {
            mainPage.priceGetButton.get(i).click();
            await browser.switchTo().frame($('iframe.gumroad-overlay-iframe').getWebElement());
            await browser.wait(ExpectedConditions.elementToBeClickable(buyForm.emailField), 5000);
            await buyForm.verifyCardsFields(pricePlans[i]);
            buyForm.closeBuyForm.click();
            expect(await previewForm.price.getText()).to.equal('$' + pricePlans[i]);
            $('body').sendKeys(protractor.Key.ESCAPE);
            await browser.switchTo().defaultContent();
            browser.sleep(1000);
        }
    });
});
