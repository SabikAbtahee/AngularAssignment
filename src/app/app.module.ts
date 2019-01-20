import { DialogService } from './service/dialog.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatePersonComponent } from './create-person/create-person.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ViewPersonComponent } from './view-person/view-person.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { PersonService } from './service/person.service';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { DeleteModalBoxComponent } from './delete-modal-box/delete-modal-box.component'

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonComponent,
    NavbarComponent,
    ViewPersonComponent,
    UserComponent,
    NotFoundComponent,
    // DashboardComponent,
    FlexLayoutComponent,
    EditPersonComponent,
    DeleteModalBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatDialogModule,
    
  
  ],
  providers: [PersonService,DialogService],
  bootstrap: [AppComponent],
  entryComponents:[DeleteModalBoxComponent]
})
export class AppModule { }
