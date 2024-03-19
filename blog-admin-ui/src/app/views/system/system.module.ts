import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { BadgeModule } from 'primeng/badge';
import { PickListModule } from 'primeng/picklist';
import { ImageModule } from 'primeng/image';

import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { SystemRoutingModule } from './system-routing.module';
import { UserComponent } from './users/user.component';
import { RoleComponent } from './roles/role.component';

@NgModule({
  imports: [
    SystemRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ProgressSpinnerModule,
    BlockUIModule,
    PaginatorModule,
    PanelModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    KeyFilterModule,
    BadgeModule,
    PickListModule,
    ImageModule,
  ],
  declarations: [UserComponent, RoleComponent],
})
export class SystemModule {}
