import {BaseComponent} from "./base.component";
import {$$, ElementArrayFinder, ElementFinder, $} from "protractor";
import {expect} from "chai";

export class BuyFormPo extends BaseComponent{

    emailField: ElementFinder= $('.payment-container .first.email');
    cardNumberField : ElementFinder= $('.payment-container .cc_number');
    expiryDate: ElementFinder= $('.payment-container .expiry_date');
    fullNameField: ElementFinder= $('.js-full-name-input');
    cvCodeField: ElementFinder= $('.js-full-name-input');
    price: ElementFinder= $('.price');
    closeBuyForm: ElementFinder= $('.buy-form-main  .close');

    async verifyCardsFields(priceValue: string) {
        expect(await this.emailField.isDisplayed()).to.be.true;
        expect(await this.cardNumberField.isDisplayed()).to.equal(true);
        expect(await this.expiryDate.isDisplayed()).to.equal(true);
        expect(await this.cvCodeField.isDisplayed()).to.equal(true);
        expect(await this.fullNameField.isDisplayed()).to.equal(true);
        expect(await this.price.getText()).to.equal('$' + priceValue);
        expect(await this.closeBuyForm.isDisplayed()).to.equal(true);
    }
}
