import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/share/data.service';
import { MatDialog } from '@angular/material/dialog';
import { NewDialogComponent } from '../dialogs/new-dialog/new-dialog.component';
import { EditDialogComponent } from '../dialogs/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchExpand: boolean;

  constructor(public dataService: DataService, public dialog: MatDialog) { 
    this.searchExpand = false;
  }

  ngOnInit(): void {
  }

  expandSearch(){
    this.searchExpand = !this.searchExpand;
  }

  openNewDialog(){
    this.dialog.open(NewDialogComponent);
  }

  openEditDialog(){
    this.dialog.open(EditDialogComponent);
  }
}