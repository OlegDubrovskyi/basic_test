import {MainPagePo} from "./pages/main-page.po";
import { expect } from "chai"
import {browser, element} from "protractor";
const mainPage = new MainPagePo();
const headderMenu = ['blog', 'Table of Contents', 'Testimonials', 'Community', 'Get it now', 'Modern AngularJS', 'ng-book 2'];
const headerLinks = ['http://blog.ng-book.com/', '#features', '#testimonials','#community','#packages', '/modern-ng1/', '/2/'];
const pricePlans = ['39', '79', '299'];

describe('', async ()=> {

    beforeEach (async () => {
        mainPage.navigateTo();
    });

    it('Go to page and check that title shown appropriate ',  async () => {
        expect(await mainPage.getTitle()).equal('ng-book: The Complete Book on AngularJS');
    });

    it('Go to page and check that title shown appropriate ',  async () => {
        // headderMenu.forEach(async (element, index) => {
        //     expect(await mainPage.headerLinks.get(index).getText()).to.equals(element.toUpperCase());
        // });
        headerLinks.forEach(async (element, index) => {
            expect(await mainPage.headerLinks.get(index).getAttribute('href')).equal(element)
        });
    });

    it('Go to page and check that title shown appropriate ',  async () => {
        mainPage.introLink.click();
        pricePlans.forEach(async (element, index) => {
            expect(await mainPage.pricePlans.get(index).getText()).equal(element);
        });
    });
});
