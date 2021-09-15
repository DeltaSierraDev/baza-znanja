import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ActivatedRoute, Router } from '@angular/router';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Check Lists',
    children: [
      {name: 'Data model'},
      {name: 'Service layer'},
      {name: 'User interface'},
    ]
  }, 
  
  {
    name: 'Workflow',
    children: [
      {
        name: 'Dev envoirement',
        children: [
          {name: 'Local Database'},
          {name: 'Local Servers and Services'},
          {name: 'User Intefrace build',
            children: [
              {name: 'Legacy UI'},
              {name: 'Desktop UI'},
              {name: 'Web UI'},
            ]
          },
          {name: 'Version Control'},
        ]
      }                  
    ]
  },

  {
    name: 'Angular',
    children: [
      {
        name: 'Code',
        children: [
          {name: 'Navigation tree'},
          {name: 'Material design module'},
        ]
      }                  
    ]
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  nodeDestination: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.dataSource.data = TREE_DATA;
    this.nodeDestination = "";
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  navigateToPage(name: string) {
    if (name === 'Workflow') {
      this.router.navigate(["/workflow"]);
    }

    if (name === 'Dev envoirement') {
      this.router.navigate(["/workflow/dev-envoirement"]);
    }

    if (name === 'Local Database') {
      this.router.navigate(["/workflow/dev-envoirement/local-database"]);
    }

    if (name === 'Local Servers and Services') {
      this.router.navigate(["/workflow/dev-envoirement/local-servers-and-services"]);
    }

    if (name === 'User Intefrace build') {
      this.router.navigate(["/workflow/dev-envoirement/user-interface-build"]);
    }

    if (name === 'Legacy UI') {
      this.router.navigate(["/workflow/dev-envoirement/user-interface-build/legacy-ui"]);
    }

    if (name === 'Desktop UI') {
      this.router.navigate(["/workflow/dev-envoirement/user-interface-build/desktop-ui"]);
    }

    if (name === 'Web UI') {
      this.router.navigate(["/workflow/dev-envoirement/user-interface-build/web-ui"]);
    }

    if (name === 'Version Control') {
      this.router.navigate(["/workflow/dev-envoirement/version-control"]);
    }

    if (name === 'Check Lists') {
      this.router.navigate(["/check-lists"]);
    }

    if (name === 'Data model') {
      this.router.navigate(["/check-lists/data-model"]);
    }

    if (name === 'Service layer') {
      this.router.navigate(["/check-lists/service-layer"]);
    }
    if (name === 'User interface') {
      this.router.navigate(["/check-lists/user-interface"]);
    }

    if (name === 'Navigation tree') {
      this.router.navigate(["/angular/code/navigation-tree"]);
    }
    if (name === 'Material design module') {
      this.router.navigate(["/angular/code/material-design-module"]);
    }
  }

}
