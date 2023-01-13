import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Environment } from '../../constant/environment.constant';

@Component
(
  {
    selector: 'rodape-component',
    templateUrl: './rodape.component.html',
    styleUrls: ['./rodape.component.scss']
  }
)
export class RodapeComponent implements OnInit
{
  version!: string;

  constructor()
  {
    this.version = Environment.version;
  }

  ngOnInit(): void
  {

  }
}