import { Component, OnInit } from '@angular/core';
import { DivisasService, ICurrency } from '../divisas.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  divisas: ICurrency[] = [];
  fromCurrency!: ICurrency;
  toCurrency!: ICurrency;
  result!: number;
  amount! : number;
  divisaMXN = {"name":"Peso Mexicano","currency":"MXN","unit": 1}
  selectDisabled : 1| 2 =2 ;

  constructor(private divisasService: DivisasService) {



  }
ngOnInit(){
  this.divisasService.getDivisas().then(data => {
    this.divisas = data;
    this.fromCurrency = this.divisas[0];
    this.toCurrency = this.divisaMXN;
  });
}
  convertCurrency() {
    this.result = (this.amount * this.fromCurrency.unit ) / this.toCurrency.unit;
 }
 swapCurrencies(): void {
  [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
  this.selectDisabled = this.selectDisabled === 1 ? 2 : 1;
}

}








