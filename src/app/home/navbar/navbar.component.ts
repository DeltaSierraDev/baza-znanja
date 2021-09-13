import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/share/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  value = '';

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
