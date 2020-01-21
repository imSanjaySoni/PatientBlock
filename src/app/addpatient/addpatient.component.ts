import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.scss']
})
export class AddpatientComponent implements OnInit {
  personalDetails = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[6-9]\\d{9}')]),
    addressLine1: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  });
  medicalDetails:FormGroup;
  // ({
  //   diseaseName: new FormControl('', Validators.required),
  //   medicneName: new FormArray([]),
  //   doadmit: new FormControl('', Validators.required),
  //   dodischarge: new FormControl('', Validators.required),
  // })
  isLinear = false;
  constructor(private fb: FormBuilder) {
    this.medicalDetails = this.fb.group({
      diseaseName: ['',Validators.required],
      medicne_Name: this.fb.array([this.fb.group({ medicineName: '' })]),
      doadmit: ['',Validators.required],
      dodischarge: ['',Validators.required],
    });
   }

  ngOnInit() {
  }
  get medicine(): FormArray {
    return this.medicalDetails.get("medicne_Name") as FormArray
  }
  newMedicine(): FormGroup {
    return this.fb.group({
      medicineName: '',
    })
  }
  addMedicine() {
    this.medicine.push(this.newMedicine());
  }
  deleteMedicine(index) {
    this.medicine.removeAt(index);
  }
}
