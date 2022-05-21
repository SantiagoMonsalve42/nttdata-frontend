import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IResponseGetAllContries } from '../../dto/IResponseGetAllContries';
import { CountriesService } from '../../service/service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  country!: IResponseGetAllContries;
  constructor(private countryService: CountriesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(): void{
    let id = this.route.snapshot.paramMap.get('id');
    if(id!= null){
      this.countryService
          .getByCode(id)
          .subscribe(data=>{
            this.country=data;
          },error=>{
            this.router.navigate(["search"]);
          })
    }else{
      this.router.navigate(["search"]);
    }
  }
  arrayToString(array: any[],key?: string){
    if(key != undefined){

      let string="";
      array.forEach((x:any,index)=>string += array[index][key]);
      return string;
    }else{
      return array.join();
    }
  }
}
