import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DUIPaginator } from 'david-ui-angular';



@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, RouterModule, MatPaginator, MatSort, DUIPaginator],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})


export class ActivitiesComponent {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  userArr: any[] =[];
  user: any = {
    username: '',
    time:'',
    workout:''
  };
  constructor(private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    const users = localStorage.getItem('users');
    
    if(users != null) {
      this.userArr = JSON.parse(users);
      this.user.paginator = this.paginator;
      this.user.sort = this.sort;
      this.cdr.detectChanges();
    }
    else {
      alert("Localstorage is empty")
    }
  }

  // users: Array<user> = localStorage.getItem(userData)
}
