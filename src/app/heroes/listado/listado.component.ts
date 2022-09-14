import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America']
  heroeBorrado:string=''

  constructor() { }

  ngOnInit(): void {

  }

  borrarHeroe() {
    console.log('Borrando');
    this.heroes.splice(0, 1)
    this.heroeBorrado=this.heroes[0]||''
  }

}
