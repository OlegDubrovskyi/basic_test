import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class ChapterPopupPo extends BaseComponent{

    campaignCanvas: ElementFinder = $('.Campaign__canvas');
    emailField: ElementFinder = $('.greensboro-field-email');
    sendChapterButton: ElementFinder = $('.greensboro-field-submit');
    nameField: ElementFinder = $('.greensboro-field-name');
    errorMessage:  ElementFinder = $('.om-field-error');
    closeButton: ElementFinder = $('.greensboro-CloseButton');
}
