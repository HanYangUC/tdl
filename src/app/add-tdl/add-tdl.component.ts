import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TdlSvcService } from '../tdl-svc.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-tdl',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-tdl.component.html',
  styleUrl: './add-tdl.component.css'
})
export class AddTdlComponent {
  todo: any;
  todoDesc: any;
  
  formData = {
    id: '',
    todo: '',
    todoDesc: '',
    status: true,
  };

  constructor(private TdlSvcService: TdlSvcService, private router: Router) {}
  
  onSubmit(todo: any, todoDesc: any) {
    this.formData.status = true;
    this.submitDataAPI();
    setTimeout(() => {
      this.goToList();
    }, 500);
  }

  submitDataAPI() {
    this.TdlSvcService.submitData(this.formData.todo, this.formData.todoDesc).subscribe(response => {
      // console.log('POST request successful:', response);
    });
  }
  goToList($myParam: string = ''): void {
    const navigationDetails: string[] = ['/list'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    // console.log(navigationDetails);
    this.router.navigate(navigationDetails);
  }
}
