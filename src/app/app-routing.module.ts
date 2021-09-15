import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignModuleComponent } from './home/content/angular/code/material-design-module/material-design-module.component';
import { NavigationTreeComponent } from './home/content/angular/code/navigation-tree/navigation-tree.component';
import { CheckListsComponent } from './home/content/check-lists/check-lists.component';
import { DataModelComponent } from './home/content/check-lists/data-model/data-model.component';
import { ServiceLayerComponent } from './home/content/check-lists/service-layer/service-layer.component';
import { UserInterfaceComponent } from './home/content/check-lists/user-interface/user-interface.component';
import { ContentComponent } from './home/content/content.component';
import { ArrayListComponent } from './home/content/java/code/array-list/array-list.component';
import { HashMapComponent } from './home/content/java/code/hash-map/hash-map.component';
import { DevEnvoirementComponent } from './home/content/workflow/dev-envoirement/dev-envoirement.component';
import { LocalDatabaseComponent } from './home/content/workflow/dev-envoirement/local-database/local-database.component';
import { LocalServersAndServicesComponent } from './home/content/workflow/dev-envoirement/local-servers-and-services/local-servers-and-services.component';
import { DesktopUiComponent } from './home/content/workflow/dev-envoirement/user-interface-build/desktop-ui/desktop-ui.component';
import { LegacyUiComponent } from './home/content/workflow/dev-envoirement/user-interface-build/legacy-ui/legacy-ui.component';
import { UserInterfaceBuildComponent } from './home/content/workflow/dev-envoirement/user-interface-build/user-interface-build.component';
import { WebUiComponent } from './home/content/workflow/dev-envoirement/user-interface-build/web-ui/web-ui.component';
import { VersionControlComponent } from './home/content/workflow/dev-envoirement/version-control/version-control.component';
import { WorkflowComponent } from './home/content/workflow/workflow.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'check-lists', component: CheckListsComponent },
  { path: 'check-lists/data-model', component: DataModelComponent },
  { path: 'check-lists/service-layer', component: ServiceLayerComponent },
  { path: 'check-lists/user-interface', component: UserInterfaceComponent },
  { path: 'workflow', component: WorkflowComponent },
  { path: 'angular/code/navigation-tree', component: NavigationTreeComponent },
  { path: 'angular/code/material-design-module', component: MaterialDesignModuleComponent },
  { path: 'java/code/array-list', component: ArrayListComponent },
  { path: 'java/code/hash-map', component: HashMapComponent },
  { path: 'workflow/dev-envoirement', component: DevEnvoirementComponent },
  { path: 'workflow/dev-envoirement/local-database', component: LocalDatabaseComponent },
  { path: 'workflow/dev-envoirement/local-servers-and-services', component: LocalServersAndServicesComponent },
  { path: 'workflow/dev-envoirement/user-interface-build', component: UserInterfaceBuildComponent },
  { path: 'workflow/dev-envoirement/user-interface-build/legacy-ui', component: LegacyUiComponent },
  { path: 'workflow/dev-envoirement/user-interface-build/desktop-ui', component: DesktopUiComponent },
  { path: 'workflow/dev-envoirement/user-interface-build/web-ui', component: WebUiComponent },
  { path: 'workflow/dev-envoirement/version-control', component: VersionControlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }