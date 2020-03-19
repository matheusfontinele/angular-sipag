import { Component, OnInit } from '@angular/core';
import { ComercioService} from '../comercio.service';
import { Cep } from '../models/cep';

@Component({
  selector: 'app-listar-comercio',
  templateUrl: './listar-comercio.component.html',
  styleUrls: ['./listar-comercio.component.css']
})
export class ListarComercioComponent implements OnInit {

  result: string;
  adress: Cep;

  constructor(private comercioService: ComercioService) { 
    this.adress = new Cep();
  } 

  ngOnInit() {
    console.warn(this.comercioService.getComercios(72876316).subscribe(data => {
      this.result = data.logradouro;
    }));
  }

  consulta(cep: number){
    this.comercioService.getComercios(cep).subscribe(data => {
      this.adress.code = data.cep;
      this.adress.logradouro = data.logradouro;
      this.adress.complemento = data.complemento;
    })
  }

}