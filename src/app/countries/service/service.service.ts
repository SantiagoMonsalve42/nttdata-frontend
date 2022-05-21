import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApihelperService } from 'src/app/commons/services/apihelper.service';
import { IResponseGetAllContries } from '../dto/IResponseGetAllContries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private apiHelper: ApihelperService) { }
  getAll(): Observable<IResponseGetAllContries[]>{
    return this.apiHelper.apiGet<IResponseGetAllContries[]>("/all");
  }
  getByName(name: string): Observable<IResponseGetAllContries[]>{
    return this.apiHelper.apiGet<IResponseGetAllContries[]>("/name/"+name);
  }
  getByZone(name: string): Observable<IResponseGetAllContries[]>{
    return this.apiHelper.apiGet<IResponseGetAllContries[]>("/regionalbloc/"+name);
  }
  getByCode(name: string): Observable<IResponseGetAllContries>{
    return this.apiHelper.apiGet<IResponseGetAllContries>("/alpha/"+name);
  }
}
