import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISelectDto } from 'src/app/commons/dto/ISelectDto';
import { IResponseGetAllContries } from '../../dto/IResponseGetAllContries';
import { CountriesService } from '../../service/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  all: IResponseGetAllContries[]=[];
  regions: ISelectDto[]=[
    {id: "EU",description:"European Union"},
    {id: "EFTA",description:"European Free Trade Association"},
    {id: "CARICOM",description:"Caribbean Community"},
    {id: "PA",description:"Pacific Alliance"},
    {id: "AU",description:"African Union"},
    {id: "USAN",description:"Union of South American Nations"},
    {id: "EEU",description:"Eurasian Economic Union"},
    {id: "AL",description:"Arab League"},
    {id: "ASEAN",description:"Association of Southeast Asian Nations"},
    {id: "CAIS",description:"Central American Integration System"},
    {id: "CEFTA",description:"Central European Free Trade Agreement"},
    {id: "NAFTA",description:"North American Free Trade Agreement"},
    {id: "SAARC",description:"South Asian Association for Regional Cooperation"},
  ]
  form !: FormGroup;
  constructor(private countryService: CountriesService,
              private fb: FormBuilder,
              private router: Router
    ) {
      console.log("se cargo");

     }

  ngOnInit(): void {
    this.initForm();
    this.getAll();
  }
  initForm(): void{
    this.form = this.fb.group({
      search: [''],
      select: ['']
    })
  }
  getAll(): void{
    this.countryService
        .getAll()
        .subscribe((response:IResponseGetAllContries[])=>{
          this.all=response;
        })
  }
  inputChanged(event: string): void{
    if(event != ""){
      this.countryService
          .getByName(event)
          .subscribe((response:IResponseGetAllContries[])=>{
            this.all=response;
          },error=>{
            this.all=[];
          })
    }else{
      this.getAll();
    }
  }
  selectChanges(event: any): void{
    this.form.get("search")?.setValue('');
    if(event != ""){
      this.countryService
          .getByZone(event)
          .subscribe((response:IResponseGetAllContries[])=>{
            this.all=response;
          },error=>{
            this.all=[];
          })
    }else{
      this.getAll();
    }
  }

}
