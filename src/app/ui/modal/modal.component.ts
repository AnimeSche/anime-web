// modal.component.ts
import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // @ts-ignore
  @Input() formFields: any[];
  dataForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.dataForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.formFields.forEach((field) => {
      this.dataForm.addControl(field.name, this.formBuilder.control('', Validators.required));
    });
  }

  onSubmit() {
    if (this.dataForm.valid) {
      console.log(this.dataForm.value);
      // Логіка після подання форми
    }
  }
}
