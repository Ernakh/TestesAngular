import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  data: any;

  cadastro = new FormGroup(
    {
      nome: new FormControl(''),
      sobrenome: new FormControl(''),
      idade: new FormControl('')
    }
  );

  constructor()
  {

  }

  ngOnInit(): void
  {

  }

  obter()
  {
    this.data = this.cadastro.value;
  }

}
