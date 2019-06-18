import {BaseComponent} from "./base.component";
import {ElementFinder, $} from "protractor";

export class BuyFormPo extends BaseComponent{

    emailField: ElementFinder= $('.payment-container .first.email');
    cardNumberField : ElementFinder= $('.payment-container .cc_number');
    expiryDate: ElementFinder= $('.payment-container .expiry_date');
    fullNameField: ElementFinder= $('.js-full-name-input');
    cvCodeField: ElementFinder= $('.js-full-name-input');
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
