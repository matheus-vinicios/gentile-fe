import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from './../core';
import { ServiceBase } from './../core';
import { Contato } from './../model';

@Injectable
(
  {
    providedIn: 'root'
  }
)
export class ContatoService extends ServiceBase<Contato, number>
{
  constructor
  (
    @Inject(HttpClient) httpClient: HttpClient
  )
  {
    super(httpClient, `/${Contato.name.toLowerCase()}`);
  }

  enviar
  (
    contato: Contato
  )
  {
    return this.httpClient.post<boolean>
    (
      Environment.api + this.path,
      contato
    )
  }
}