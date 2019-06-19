import {BaseComponent} from './base.component';
import {$, $$, ElementArrayFinder, ElementFinder} from 'protractor';

export class NgBook2Po extends BaseComponent{

    pageUrl = '/2/';

    headerLinks: ElementArrayFinder= $$('.nav a');
    downloadChapterButton: ElementFinder= $('.hero-cta');
    bookContentsSection: ElementFinder = $('.curriculum');
    bookContensList: ElementArrayFinder = $$('.curriculum-list-item-name');
    goodEmailField: ElementFinder = $('.infusion-field-input-container');
    getYourFreeButton: ElementFinder = $('[value="Get your free chapter"]');
    errorTab: ElementFinder = $('[id="webformErrors"] li');

    campaignCanvas: ElementFinder = $('.Campaign__canvas');
    emailField: ElementFinder = $('.greensboro-field-email');
    sendChapterButton: ElementFinder = $('.greensboro-field-submit');
    nameField: ElementFinder = $('.greensboro-field-name');
    errorMessage:  ElementFinder = $('.om-field-error');
    closeButton: ElementFinder = $('.greensboro-CloseButton');
}
