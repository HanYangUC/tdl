import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TdlSvcService } from '../tdl-svc.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-edit-tdl',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-tdl.component.html',
  styleUrl: './edit-tdl.component.css'
})

export class EditTdlComponent implements OnInit {
  id: string = '';
  todo: any;
  constructor(private route: ActivatedRoute, private TdlSvcService: TdlSvcService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.getTodo(this.id);

  }


  onSubmit(): void {
    this.TdlSvcService.updateTodo(this.id, this.todo).subscribe(response => {
      console.log(response);
    })
    setTimeout(() => {
      this.goToList();
    }, 500);
    
  }

  goToList($myParam: string = ''): void {
    const navigationDetails: string[] = ['/list'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    console.log(navigationDetails);
    this.router.navigate(navigationDetails);
  }

  getTodo(id: string) {
    this.TdlSvcService.getTodo(id).subscribe(data => {
      this.todo = data;
      console.log(this.todo);
    })
  }
}
