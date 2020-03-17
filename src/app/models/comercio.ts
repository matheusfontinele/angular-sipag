import {Endereco} from "./endereco";
import {Telefone} from "./telefone";
import {Email} from "./email";

export class Comercio {
  cnpj: number;
  nome: string;
  endereco: Endereco;
  emails: Array<Email>;
  telefones: Array<Telefone>;
}