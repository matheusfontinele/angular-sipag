import { Component, OnInit } from '@angular/core';
import { ComercioService} from '../comercio.service';

@Component({
  selector: 'app-listar-comercio',
  templateUrl: './listar-comercio.component.html',
  styleUrls: ['./listar-comercio.component.css']
})
export class ListarComercioComponent implements OnInit {

  result: string;

  constructor(private comercioService: ComercioService) { } 

  ngOnInit() {
    console.warn(this.comercioService.getComercios().subscribe(data => {
      this.result = data.cep;
    }));
  }

}