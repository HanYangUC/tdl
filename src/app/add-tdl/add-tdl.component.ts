import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TdlSvcService } from '../tdl-svc.service';

@Component({
  selector: 'app-add-tdl',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  constructor(private TdlSvcService: TdlSvcService) {}
  
  onSubmit(todo: any, todoDesc: any) {
    this.formData.status = true;
    this.submitDataAPI();

  }

  submitDataAPI() {
    this.TdlSvcService.submitData(this.formData.todo, this.formData.todoDesc).subscribe(response => {
      console.log('POST request successful:', response);
    });
  }
}
