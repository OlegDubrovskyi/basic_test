import {BaseComponent} from './base.component';
import {$, $$, ElementArrayFinder, ElementFinder} from 'protractor';

export class PendingPo extends BaseComponent{

    pageUrl = '/pending/';

    stepInformation: ElementArrayFinder= $$('div.step ');
    navigationBar: ElementFinder= $('.navbar-brand');
}
