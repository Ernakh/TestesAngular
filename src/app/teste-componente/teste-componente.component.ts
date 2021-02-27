import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-componente',
  templateUrl: './teste-componente.component.html',
  styleUrls: ['./teste-componente.component.css']
})
export class TesteComponenteComponent implements OnInit 
{
  numero:number;  

  constructor() { }

  ngOnInit(): void 
  {

  }

  pegarNumero(numero:number)
  {
    this.numero = numero;
  }

}
