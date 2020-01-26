import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: any[] = ['java' , 'node' , 'angular'];

  constructor() {
      this.nomePortal = 'http://tavernawalker.com.br';
   }

  ngOnInit() {
  }

}
