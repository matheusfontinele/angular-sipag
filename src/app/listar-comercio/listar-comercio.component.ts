import { Component, OnInit } from '@angular/core';
import { ComercioService} from '../comercio.service';

@Component({
  selector: 'app-listar-comercio',
  templateUrl: './listar-comercio.component.html',
  styleUrls: ['./listar-comercio.component.css']
})
export class ListarComercioComponent implements OnInit {

  result: string;
  result2: string;

  constructor(private comercioService: ComercioService) { } 

  ngOnInit() {
    console.warn(this.comercioService.getComercios(72876316).subscribe(data => {
      this.result = data.logradouro;
    }));
  }

  consulta(cep: number){
    this.comercioService.getComercios(cep).subscribe(data => {
      this.result2 = data.logradouro
    })
  }

}