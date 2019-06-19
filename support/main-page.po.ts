import {BaseComponent} from './base.component';
import {$, $$, ElementArrayFinder, ElementFinder} from 'protractor';

export class MainPagePo extends BaseComponent{

    pageUrl = '/';

    headerLinks: ElementArrayFinder= $$('.nav a');
    bannerLink: ElementFinder= $('.banner a');
    introLink: ElementFinder= $('.intro a');
    pricePlans: ElementArrayFinder= $$('.pricing-table span');
    priceGetButton: ElementArrayFinder = $$('.pricing-table .getit');
    pricePreview: ElementFinder= $('.price');

    emailField: ElementFinder= $('.payment-container .first.email');
    cardNumberField : ElementFinder= $('.payment-container .cc_number');
    expiryDate: ElementFinder= $('.payment-container .expiry_date');
    fullNameField: ElementFinder= $('.js-full-name-input');
    cvCodeField: ElementFinder= $('.payment-container input.cv_code');
    price: ElementFinder= $('.price');
    closeBuyForm: ElementFinder= $('.buy-form-main  .close');

    async verifyCardsFields(priceValue: string) {
        expect(await this.emailField.isDisplayed()).toBeTruthy();
        expect(await this.cardNumberField.isDisplayed()).toBeTruthy();
        expect(await this.expiryDate.isDisplayed()).toBeTruthy();
        expect(await this.cvCodeField.isDisplayed()).toBeTruthy();
        expect(await this.fullNameField.isDisplayed()).toBeTruthy();
        expect(await this.price.getText()).toContain('$' + priceValue);
        expect(await this.closeBuyForm.isDisplayed()).toBeTruthy();
    }
}
