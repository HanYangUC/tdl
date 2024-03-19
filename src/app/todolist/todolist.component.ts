import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { TdlSvcService } from '../tdl-svc.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
  todos: any;
  displayedColumns: string[] = ['task', 'desc', 'status', 'edit', 'delete'];
  constructor(private TdlSvcService: TdlSvcService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.listAll();
  }

  listAll() {
    this.TdlSvcService.fetchData().subscribe(data => {
      this.todos = data;
    })
  }

  edit($param: string = ''): void {
    // console.log($param);
    const navigationDetails: string[] = ['/edit', $param]
    if ($param.length) {
      navigationDetails.push($param);
    }
    // console.log(navigationDetails);
    this.router.navigate(navigationDetails);
  }

  delete(id: string = ''): void {
    this.TdlSvcService.deleteTodo(id).subscribe()
    this.openSnackBar("Deleted!")
    setTimeout(() => {
      this.ngOnInit();
    }, 100);
  }

  openSnackBar(message: string = '') {
    this._snackBar.open(message, "", {
      duration: 2000
    });
  }
}
