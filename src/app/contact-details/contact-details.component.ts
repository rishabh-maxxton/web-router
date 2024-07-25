import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {
  title = 'Contact Us';
   angForm!: FormGroup;
   constructor(private fb: FormBuilder) {
	this.createForm();
  }
   createForm() {
	this.angForm = this.fb.group({
   	name: ['', Validators.required ],
   	address: ['', Validators.required ]
	});
  }
}
