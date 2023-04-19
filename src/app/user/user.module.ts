import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { SaleComponent } from './sale/sale.component';
import { UserComponent } from './user.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OneComponent } from './one/one.component';
import { HistoryComponent } from './history/history.component';
import { OpenImageComponent } from './open-image/open-image.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
    declarations: [SaleComponent, UserComponent, OneComponent, HistoryComponent, OpenImageComponent, UserDetailsComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgxPaginationModule,
        NgSelectModule,
        MatPaginatorModule,

    ],
    exports: [
        MatPaginatorModule
    ]
})
export class UserModule { }