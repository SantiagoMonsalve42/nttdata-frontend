import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {


  @Input() label: string = "";
  @Input() descripcion?: string = "";
  @Input() placeholder?: string = "";
  @Input() type: any;
  @Input() controlName: any;
  @Output() valueChange = new EventEmitter<any>();

  constructor(private parentF: FormGroupDirective) {
  }
  change() {
    if (this.valueChange)
      this.valueChange.emit(this.parentF.form.get(this.controlName)?.value);
  }
  ngOnInit(): void {
  }
  get parentform() { return this.parentF.form; }
  get control() {
    return this.parentF.form.get(this.controlName);
  }
  get valid() {
    let result = null;
    const isSubmitted = this.parentF && this.parentF.submitted;
    if (this.control?.dirty || this.control?.touched || isSubmitted)
      result = this.control?.errors;
    return result;
  }
  reset() {
    this.parentF.form.controls[this.controlName].setValue(null);
  }
  get msgRequired() { return "es requerido"; }


}
