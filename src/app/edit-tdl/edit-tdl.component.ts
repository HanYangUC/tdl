import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TdlSvcService } from '../tdl-svc.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-tdl',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './edit-tdl.component.html',
  styleUrl: './edit-tdl.component.css'
})

export class EditTdlComponent implements OnInit {
  id: string = '';
  todo: any;

  formData = {
    id: '',
    todo: '',
    todoDesc: '',
    status: true,
  };
  constructor(private route: ActivatedRoute, private TdlSvcService: TdlSvcService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.getTodo(this.id);

  }


  onSubmit(): void {
    console.log("huh?")
    if (!this.formData.todo || !this.formData.todoDesc) {
      this.openSnackBar("Cannot be blank!");
    } else {
      this.openSnackBar("Saved!");
      this.TdlSvcService.updateTodo(this.id, this.formData).subscribe(response => {
      })
      setTimeout(() => {
        this.goToList();
      }, 500);
    }
  }

  goToList($myParam: string = ''): void {
    const navigationDetails: string[] = ['/list'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  getTodo(id: string) {
    this.TdlSvcService.getTodo(id).subscribe(data => {
      this.todo = data;
      this.formData = data;
    })
  }

  openSnackBar(message: string = '') {
    this._snackBar.open(message, "", {
      duration: 2000
    });
  }
}
