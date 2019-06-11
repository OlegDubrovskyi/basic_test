import {BaseComponent} from "../shared/components/base.component";
import {$$, ElementArrayFinder, ElementFinder} from "protractor";

export class MainPagePo extends BaseComponent{

    pageUrl = 'https://www.ng-book.com/';

    headerLinks: ElementArrayFinder= $$('.nav a');
    bannerLink: ElementFinder= $('.banner');
    introLink: ElementFinder= $('.intro a');
    packagesSection: ElementFinder= $('.intro a');
    pricePlans: ElementArrayFinder= $$('.pricing-table span');
}
