import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { TdlSvcService } from '../tdl-svc.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
  todos: any;

  constructor(private TdlSvcService: TdlSvcService, private router: Router) { }

  ngOnInit(): void {
    this.listAll();
    console.log(123);
  }

  listAll() {
    this.TdlSvcService.fetchData().subscribe(data => {
      this.todos = data;
    })
  }

  edit($param: string = ''): void {
    console.log($param);
    const navigationDetails: string[] = ['/edit', $param]
    if($param.length) {
      navigationDetails.push($param);
    }
    console.log(navigationDetails);
    this.router.navigate(navigationDetails);
  }
}
