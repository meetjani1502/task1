import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppComponent } from './app.component';
import { FirstNamefieldComponent } from './first-namefield/first-namefield.component';

import { LastNamefieldComponent } from './last-namefield/last-namefield.component';
import { EmailFieldComponent } from './email-field/email-field.component';
import { MoblienumberFieldComponent } from './moblienumber-field/moblienumber-field.component';
import { DepartmentFieldComponent } from './department-field/department-field.component';
import { DepartmentFieldService } from './department-field.service';
import { GenderFieldComponent } from './gender-field/gender-field.component';
import{FormsModule} from '@angular/forms';
import { LanguageFieldComponent } from './language-field/language-field.component';
import { SalaryFieldComponent } from './salary-field/salary-field.component';
import { DobFieldComponent } from './dob-field/dob-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule and other Material modules as needed
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AgeFieldComponent } from './age-field/age-field.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableModule } from 'primeng/table';
import { RegistractionGridComponent } from './registraction-grid/registraction-grid.component';
import { RegistrationManagementComponent } from './registration-management/registration-management.component';
import { RegistractionValidateFormComponent } from './registraction-validate-form/registraction-validate-form.component';
import { RegistractionEntryComponent } from './registraction-entry/registraction-entry.component';
import { DepartmentEntryComponent } from './department-entry/department-entry.component';
import { StudentlistComponent } from './studentlist/studentlist.component';






@NgModule({
  declarations: [AppComponent, FirstNamefieldComponent, LastNamefieldComponent, EmailFieldComponent, MoblienumberFieldComponent, DepartmentFieldComponent, GenderFieldComponent, LanguageFieldComponent, SalaryFieldComponent, DobFieldComponent, AgeFieldComponent, RegistractionGridComponent, RegistrationManagementComponent, RegistractionValidateFormComponent, RegistractionEntryComponent, DepartmentEntryComponent, StudentlistComponent],
  imports: [BrowserModule,ReactiveFormsModule,FormsModule, BrowserAnimationsModule,MatInputModule,MatDatepickerModule,MatTableModule,MatPaginatorModule,MatSortModule,TableModule],
  providers: [DepartmentFieldService],
  bootstrap: [AppComponent],
})
export class AppModule {}
