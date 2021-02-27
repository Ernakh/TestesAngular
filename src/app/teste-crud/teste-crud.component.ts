import { Component, OnInit } from '@angular/core';
import { Images } from '../model/Images.Model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-teste-crud',
  templateUrl: './teste-crud.component.html',
  styleUrls: ['./teste-crud.component.css']
})
export class TesteCRUDComponent implements OnInit {

  images:Images;
  erro:any;

  constructor( private crudService: CrudService) 
  {
    this.getter();
  }

  ngOnInit(): void 
  {

  }

  getter()
  {
    this.crudService.getFotos().subscribe(
      //data => 
      (data: Images) => 
      {
        this.images = data;
        console.log('Variavel preenchida', this.images)
        console.log('recebido: ', data)
        //}, error => 
      }, (error: any) => 
      {
        this.erro = error;
        console.error('ERROOO:', error);
      }
    );
  }
}
