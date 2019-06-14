import {BaseComponent} from "./base.component";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class MainPagePo extends BaseComponent{

    pageUrl = '/';

    headerLinks: ElementArrayFinder= $$('.nav a');
    bannerLink: ElementFinder= $('.banner');
    introLink: ElementFinder= $('.intro a');
    packagesSection: ElementFinder= $('.intro a');
    pricePlans: ElementArrayFinder= $$('.pricing-table span');
    priceGetButton: ElementArrayFinder = $$('.pricing-table .getit');
}
