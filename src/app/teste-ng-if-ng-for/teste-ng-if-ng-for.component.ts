import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-ng-if-ng-for',
  templateUrl: './teste-ng-if-ng-for.component.html',
  styleUrls: ['./teste-ng-if-ng-for.component.css']
})
export class TesteNgIfNgForComponent implements OnInit {

  numero1:number;  
  numero2:number;  
  arrayNumeros = [0,1,2,3,4,5,6,7,8,9];

  demoNumber = 5 ;
  
  counter = Array;
  
  numberReturn(length){
    return new Array(length);
  }
  
  constructor() { }

  ngOnInit(): void 
  {

  }
  
  sequencia(n: number): Array<number> { 
    return Array(n); 
  } 
}
