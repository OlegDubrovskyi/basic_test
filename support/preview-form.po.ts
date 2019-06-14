import {BaseComponent} from "./base.component";
import {$$, ElementArrayFinder, ElementFinder, $} from "protractor";
import {expect} from "chai";

export class PreviewFormPo extends BaseComponent{
    price: ElementFinder= $('.price');
}
