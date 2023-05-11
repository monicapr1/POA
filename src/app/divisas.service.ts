import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface ICurrency {
  name: string;
  currency: string;
  unit: number;
}


@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  private apiUrl = 'https://us-central1.gcp.data.mongodb-api.com/app/mtwdm-drwqq/endpoint/unit/converter';

  constructor() { }

  getDivisas(): Promise<ICurrency[]> {
    return fetch(this.apiUrl).then((response) => response.json()).catch((ex) => console.log(ex));
  }


}


