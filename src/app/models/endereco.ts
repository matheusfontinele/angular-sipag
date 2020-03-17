import {Comercio} from "./comercio";

export class Endereco {
  id: number;
  cep: number;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
  complemento: string;
  comercio: Comercio;
}