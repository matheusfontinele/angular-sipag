import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComercioService {

  constructor(private http: HttpClient) { }

  getComercios(){
    return this.http.get("https://viacep.com.br/ws/01001000/json/");
  }

}