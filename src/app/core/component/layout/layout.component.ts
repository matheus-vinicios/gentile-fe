import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

declare var $: any;

@Component
(
  {
    selector: 'layout-component',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
  }
)
export class LayoutComponent implements OnInit
{
  ngOnInit(): void
  {
    $(document).ready
    (
      function()
      {
        $('#preloader').delay(200).fadeOut('slow');
      }
    );
  }
}