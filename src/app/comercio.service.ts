import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComercioService {

  constructor(private http: HttpClient) { }

  getComercios(cep:number) {
    return this.http.get<any>("https://viacep.com.br/ws/"+cep+"/json/");
  }

}