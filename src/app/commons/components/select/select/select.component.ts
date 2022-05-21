import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() controlName: any;
  @Output() valueChange = new EventEmitter<any>();
  @Input() datos?: any[];
  @Input() label?: string="";
  @Input() nombreDescripcion: string='';
  @Input() nombreId?: string;

  constructor(private parentF: FormGroupDirective) { }
  ngOnInit(): void {
  }

  valueDefault() { return null; }
  get parentform() { return this.parentF.form; }
  get control() { return this.parentF.form.get(this.controlName); }
  get valid() {
    let result = null;
    const isSubmitted = this.parentF && this.parentF.submitted;
    if (this.control?.dirty || this.control?.touched || isSubmitted)
      result = this.control?.errors;
    return result;
  }
  getDescripcion(object: any) {
    if (object != undefined)
      return object[this.nombreDescripcion as keyof typeof object];
  }
  getId(object: any) {
    if (object != undefined)
      return object[this.nombreId as keyof typeof object];
  }

  change(event: any) {
    if (this.valueChange) {
      this.valueChange.emit(event);
    }
  }


}
