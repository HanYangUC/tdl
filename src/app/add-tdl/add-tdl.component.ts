import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TdlSvcService } from '../tdl-svc.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-tdl',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-tdl.component.html',
  styleUrl: './add-tdl.component.css'
})
export class AddTdlComponent {
  formData = {
    id: '',
    todo: '',
    todoDesc: '',
    status: true,
  };

  constructor(private TdlSvcService: TdlSvcService, private router: Router, private _snackBar: MatSnackBar) { }

  onSubmit() {
    if (!this.formData.todo || !this.formData.todoDesc) {
      this.openSnackBar("Cannot be blank!");
    } else {
      this.openSnackBar("Saved!");
      this.submitDataAPI();
      setTimeout(() => {
        this.goToList();
      }, 500);
    }
  }

  submitDataAPI() {
    this.TdlSvcService.submitData(this.formData.todo, this.formData.todoDesc).subscribe(response => {
    });
  }
  goToList($myParam: string = ''): void {
    const navigationDetails: string[] = ['/list'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  openSnackBar(message: string = '') {
    this._snackBar.open(message, "", {
      duration: 2000
    });
  }
}
