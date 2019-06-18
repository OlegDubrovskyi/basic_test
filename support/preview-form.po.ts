import {BaseComponent} from "./base.component";
import {ElementFinder, $} from "protractor";

export class PreviewFormPo extends BaseComponent{
    price: ElementFinder= $('.price');
}
