import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './home/navbar/navbar.component';
import { DataService } from './share/data.service';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ContentComponent } from './home/content/content.component';
import { CheckListsComponent } from './home/content/check-lists/check-lists.component';
import { DataModelComponent } from './home/content/check-lists/data-model/data-model.component';
import { ServiceLayerComponent } from './home/content/check-lists/service-layer/service-layer.component';
import { UserInterfaceComponent } from './home/content/check-lists/user-interface/user-interface.component';
import { WorkflowComponent } from './home/content/workflow/workflow.component';
import { DevEnvoirementComponent } from './home/content/workflow/dev-envoirement/dev-envoirement.component';
import { RouterModule } from '@angular/router';
import { LocalDatabaseComponent } from './home/content/workflow/dev-envoirement/local-database/local-database.component';
import { LocalServersAndServicesComponent } from './home/content/workflow/dev-envoirement/local-servers-and-services/local-servers-and-services.component';
import { UserInterfaceBuildComponent } from './home/content/workflow/dev-envoirement/user-interface-build/user-interface-build.component';
import { VersionControlComponent } from './home/content/workflow/dev-envoirement/version-control/version-control.component';
import { LegacyUiComponent } from './home/content/workflow/dev-envoirement/user-interface-build/legacy-ui/legacy-ui.component';
import { DesktopUiComponent } from './home/content/workflow/dev-envoirement/user-interface-build/desktop-ui/desktop-ui.component';
import { WebUiComponent } from './home/content/workflow/dev-envoirement/user-interface-build/web-ui/web-ui.component';
import { NavigationTreeComponent } from './home/content/angular/code/navigation-tree/navigation-tree.component';
import { MaterialDesignModuleComponent } from './home/content/angular/code/material-design-module/material-design-module.component';
import { ArrayListComponent } from './home/content/java/code/array-list/array-list.component';
import { HashMapComponent } from './home/content/java/code/hash-map/hash-map.component';
import { NewDialogComponent } from './home/dialogs/new-dialog/new-dialog.component';
import { EditDialogComponent } from './home/dialogs/edit-dialog/edit-dialog.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    CheckListsComponent,
    DataModelComponent,
    ServiceLayerComponent,
    UserInterfaceComponent,
    WorkflowComponent,
    DevEnvoirementComponent,
    LocalDatabaseComponent,
    LocalServersAndServicesComponent,
    UserInterfaceBuildComponent,
    VersionControlComponent,
    LegacyUiComponent,
    DesktopUiComponent,
    WebUiComponent,
    NavigationTreeComponent,
    MaterialDesignModuleComponent,
    ArrayListComponent,
    HashMapComponent,
    NewDialogComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule, 
    AngularEditorModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
