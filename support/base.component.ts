import {browser, ElementFinder, ExpectedConditions} from "protractor";

export abstract class BaseComponent {
    abstract pageUrl: string;

    async navigateTo() {
        await browser.get(this.pageUrl);
    }

    getTitle() {
        return browser.getTitle();
    }

    async scrollTo(element: ElementFinder) {
        await browser.executeScript('arguments[0].scrollIntoView()', element.getWebElement());
    }

    async waitForClickable(element: ElementFinder) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element), 5000);
    }

    async waitForUrlContanins(url: string) {
        await browser.wait(ExpectedConditions.urlContains(url), 10000);
    }

    async waifForInvisability(element: ElementFinder) {
        await browser.wait(ExpectedConditions.invisibilityOf(element), 5000);
    }
}
