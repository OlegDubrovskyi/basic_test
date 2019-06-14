import {browser} from "protractor";

export abstract class BaseComponent {
    abstract pageUrl: string;

    navigateTo() {
        browser.get(this.pageUrl);
    }

    getTitle() {
        return browser.getTitle();
    }
}
