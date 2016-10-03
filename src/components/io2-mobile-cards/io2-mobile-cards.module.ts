import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardComponent, TinderCardComponent } from './components/index';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        CardComponent,
        TinderCardComponent
    ],
    exports: [
    ],
    entryComponents: [
        CardComponent,
        TinderCardComponent
    ]
})
export class MobileCardModule { }