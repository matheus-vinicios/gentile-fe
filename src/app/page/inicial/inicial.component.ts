import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
//import { FormGroup } from "@angular/forms";
//import { FormControl } from "@angular/forms";
//import { Validators } from "@angular/forms";
//import { ToastrService } from 'ngx-toastr';
//import { Response } from '../../core';
//import { ContatoService } from '../../service';

@Component
(
  {
    selector: 'wp-inicial',
    templateUrl: './inicial.component.html',
    styleUrls: ['./inicial.component.scss']
  }
)
export class InicialComponent implements OnInit
{
  //contato!: FormGroup;
  //submitted: boolean = false;

  constructor
  (
    //private contatoService: ContatoService,
    //private toastrService: ToastrService
  )
  {

  }

  ngOnInit(): void
  {
    //this.contato = new FormGroup
    //(
    //  {
    //    nome: new FormControl('', Validators.required),
    //    email: new FormControl('', [Validators.required, Validators.email]),
    //    mensagem: new FormControl('', Validators.required)
    //  }
    //);
  }

  //enviar()
  //{
    //try
    //{
    //  this.submitted = true;

    //  if (this.contato.invalid)
    //    return;

    //  this.contatoService
    //    .enviar(this.frmContato.value)
    //    .subscribe
    //    (
    //      response =>
    //      {
            /*if (response.code == 200 && resposta.dados == true)
            {
              this.toastrService
              .success
              (
                resposta.mensagem,
                'Notificação',
                {
                  enableHtml: true
                }
              );
            }*/
        //  },
        //
        // ERRO
        //
        //(erro: any) =>
        //{
        //  this.toastrService
        //  .error
        //  (
        //    erro,
        //    'Notificação'
        //  );
        //},
        //
        //
        //
        //() =>
        //{
        //  this.submitted = false;
        //  this.frmContato.reset();
        //}
        //);
    //}
    //catch(ex)
    //{
    //  this.toastrService
    //  .error
    //  (
    //    ex,
    //    'Notificação'
    //  );
    //}
  //}
}