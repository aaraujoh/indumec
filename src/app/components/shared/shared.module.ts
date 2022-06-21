import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatNativeDateModule,
    MatRippleModule
}  from '@angular/material/core';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AddJobOrderComponent } from './add-job-order/add-job-order.component';
import { AddJobsComponent } from './add-job/add-jobs.component';
import { AddPurchasesComponent } from './add-purchases/add-purchases.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CardJobComponent } from './card-job/card-job.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CheckallDirective } from './directives/checkall/checkall.directive';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ColorsService } from './colors/colors.service';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { DetailJobsComponent } from "./detail-job/detail-jobs.component";
import { DocumentsJobComponent } from './documents-job/documents-job.component';
import { DocumentsJobOrderComponent } from './documents-job-order/documents-job-order.component';
import { DocumentsPurchaseComponent } from './documents-purchase/documents-purchase.component';
import { EasypiechartDirective } from './directives/easypiechart/easypiechart.directive';
import { FileUploadModule } from 'ng2-file-upload';
import { FlotDirective } from './directives/flot/flot.directive';
import { HeaderJobComponent } from './header-job/header-job.component';
import { HeaderJobOrderComponent } from './header-job-order/header-job-order.component';
import { HeaderPurchaseComponent } from './header-purchase/header-purchase.component';
import { HeaderRequisitionComponent } from './header-requisition/header-requisition.component';
import { HistoryJobComponent } from './history-job/history-job.component';
import { ImageCropperModule } from 'ng2-img-cropper';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { JqcloudDirective } from './directives/jqcloud/jqcloud.directive';
import { LinkJobComponent } from './link-job/link-job.component';
import {
    MatAutocompleteModule,
} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule, } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule }  from '@angular/material/icon';
import { MatInputModule }  from '@angular/material/input';
import { MatListModule }  from '@angular/material/list';
import { MatMenuModule }  from '@angular/material/menu';
import { MatPaginatorModule }  from '@angular/material/paginator';
import { MatProgressBarModule }  from '@angular/material/progress-bar';
import { MatProgressSpinnerModule }  from '@angular/material/progress-spinner';
import { MatRadioModule }  from '@angular/material/radio';
import { MatSelectModule }  from '@angular/material/select';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatSlideToggleModule }  from '@angular/material/slide-toggle';
import { MatSliderModule }  from '@angular/material/slider';
import { MatSnackBarModule }  from '@angular/material/snack-bar';
import { MatSortModule }  from '@angular/material/sort';
import { MatStepperModule }  from '@angular/material/stepper';
import { MatTableModule }  from '@angular/material/table';
import { MatTabsModule }  from '@angular/material/tabs';
import {MatToolbarModule}  from '@angular/material/toolbar';
import { MatTooltipModule }  from '@angular/material/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSelectModule } from 'ngx-select-ex';
import { NowDirective } from './directives/now/now.directive';
import { OrderModule } from 'ngx-order-pipe';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PicturesJobComponent } from './pictures-job/pictures-job.component';
import { PipesModule } from '../../pipes/pipes.module';
import { PlanesJobComponent } from './planes-job/planes-job.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PrintPurchaseOrdersComponent } from './purchase-orders/print-purchase-orders/print-purchase-orders.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { RouterModule } from '@angular/router';
import { SavePurchaseOrdersComponent } from './purchase-orders/save-purchase-orders/save-purchase-orders.component';
import { ScrollableDirective } from './directives/scrollable/scrollable.directive';
import { SelectJobComponent } from './select-job/select-job.component';
import { SparklineDirective } from './directives/sparkline/sparkline.directive';
import { StatesJobOrderComponent } from './states-job-order/states-job-order.component';
import { StatesPurchaseComponent } from './states-purchase/states-purchase.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { VectormapDirective } from './directives/vectormap/vectormap.directive';
import { WorkRecordBoxComponent } from './work-record-box/work-record-box.component';
import localeEs from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs, 'es-AR');


// https://angular.io/styleguide#!#04-10
@NgModule({
    imports: [
        NgxSelectModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        AccordionModule.forRoot(),
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        DatepickerModule.forRoot(),
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        ProgressbarModule.forRoot(),
        RatingModule.forRoot(),
        TabsModule.forRoot(),
        TimepickerModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot(),
        TypeaheadModule.forRoot(),
        ToasterModule,
        // Material Modules
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatTableModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatSortModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatStepperModule,
        InlineEditorModule,
        FileUploadModule,
        ImageCropperModule,
        OrderModule,
        PipesModule,
        RouterModule
    ],
    providers: [
        ColorsService
    ],
    declarations: [
        FlotDirective,
        SparklineDirective,
        EasypiechartDirective,
        CheckallDirective,
        VectormapDirective,
        NowDirective,
        ScrollableDirective,
        JqcloudDirective,
        DetailJobsComponent,
        AddJobsComponent,
        CardJobComponent,
        SelectJobComponent,
        LinkJobComponent,
        PicturesJobComponent,
        PlanesJobComponent,
        HeaderJobComponent,
        AddJobOrderComponent,
        HeaderJobOrderComponent,
        StatesJobOrderComponent,
        HistoryJobComponent,
        WorkRecordBoxComponent,
        DocumentsJobComponent,
        DocumentsJobOrderComponent,
        AddPurchasesComponent,
        HeaderPurchaseComponent,
        StatesPurchaseComponent,
        DocumentsPurchaseComponent,
        SavePurchaseOrdersComponent,
        PrintPurchaseOrdersComponent,
        HeaderRequisitionComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        RouterModule,
        AccordionModule,
        AlertModule,
        ButtonsModule,
        CarouselModule,
        CollapseModule,
        DatepickerModule,
        BsDatepickerModule,
        BsDropdownModule,
        ModalModule,
        PaginationModule,
        ProgressbarModule,
        RatingModule,
        TabsModule,
        TimepickerModule,
        TooltipModule,
        PopoverModule,
        TypeaheadModule,
        ToasterModule,
        FlotDirective,
        SparklineDirective,
        EasypiechartDirective,
        CheckallDirective,
        VectormapDirective,
        NowDirective,
        ScrollableDirective,
        JqcloudDirective,
        // Material Modules
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatTableModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatSortModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatStepperModule,
        DetailJobsComponent,
        AddJobsComponent,
        AddJobOrderComponent,
        HeaderJobOrderComponent,
        StatesJobOrderComponent,
        WorkRecordBoxComponent,
        DocumentsJobOrderComponent,
        AddPurchasesComponent,
        HeaderPurchaseComponent,
        StatesPurchaseComponent,
        DocumentsPurchaseComponent,
        SavePurchaseOrdersComponent,
        PrintPurchaseOrdersComponent,
        HeaderRequisitionComponent
    ]
})

// https://github.com/ocombe/ng2-translate/issues/209
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}