import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent {

  public formulario: FormGroup = this.fb.group({
    calle: ['',[Validators.required]],
    numero1: ['',[Validators.required]],
    letra1: ['',[Validators.required]],
    hash: ['#',[Validators.required]],
    numero2: ['',[Validators.required]],
    letra2: ['',[Validators.required]],
    numero3: ['',[Validators.required]],
  })

  constructor(private fb: FormBuilder){

  }

  onSubmit(){

  }
}
