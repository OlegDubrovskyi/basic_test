import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class NgBook2Po extends BaseComponent{

    pageUrl = '/2/';

    headerLinks: ElementArrayFinder= $$('.nav a');
    campaignCanvas: ElementFinder= $('.Campaign__canvas');
    downloadChapterButton: ElementFinder= $$('.hero-cta');
    bookContentsSection: ElementFinder = $('.curriculum');
    bookContensList: ElementArrayFinder = $$('.curriculum-list-item-name');
    goodBeTrueSection: ElementFinder = $('.too-good');
    goodEmailField: ElementFinder = $('.infusion-field-input-container');
    getYourFreeButton: ElementFinder = $('[value="Get your free chapter"]');
    errorTab: ElementFinder = $('[id="webformErrors"] li');
}
