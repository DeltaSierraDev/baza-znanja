import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

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
    name: 'Databases',
    children: [
      {
        name: 'PostgreSQL',
        children: [
          {name: 'DBA'},
          {name: 'Scripts'},
        ]
      }, {
        name: 'Firebase',
        children: [
          {name: 'DBA'},
          {name: 'Scripts'},
        ]
      },
    ]
  },

  {
    name: 'Service layer',
    children: [
      {
        name: 'Data transfer objects',
        children: [
          {name: 'JPA'},
          {name: 'Hibernate'},
          {name: 'Hessian'},
        ]
      }, {
        name: 'Logic',
        children: [
          {name: 'Guidelines'},
        ]
      },
    ]
  },

  {
    name: 'User Interface',
    children: [
      {
        name: 'Angular',
        children: [
          {name: 'Guidelines'},
          {name: 'Framework'},
        ]
      }, 
    ]
  },

  {
    name: 'Workflow',
    children: [
      {name: 'Dev envoirement'}, 
      {name: 'Production'}, 
      {name: 'Project Management'}, 
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

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
