import { Component, OnInit } from '@angular/core';

interface Componentes{
  icon:string;
  name:string;
  redirecTo:string;
};

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public componentes: Array<Componentes>;

  constructor() {
    this.componentes = new Array<Componentes>();
  }

  ngOnInit() {
    this.componentes.push(
      {
        icon: 'american-football-outline',
        name: 'Action-sheet',
        redirecTo: '/action-sheet'
      },
      {
        icon: 'alert-circle-outline',
        name: 'Alert',
        redirecTo: '/alert'
      },
      {
        icon: 'people-circle-outline',
        name: 'Avatar',
        redirecTo: '/avatar'
      }
      ,
      {
        icon: 'radio-button-off-outline',
        name: 'Button',
        redirecTo: '/button'
      },
      {
        icon: 'card-outline',
        name: 'Cards',
        redirecTo: '/card'
      },
      {
        icon: 'checkmark-circle-outline',
        name: 'Checks',
        redirecTo: '/check'
      },
      {
        icon: 'calendar-outline',
        name: 'DateTime',
        redirecTo: '/date-time'
      },
      {
        icon: 'car-outline',
        name: 'Fab',
        redirecTo: '/fab'
      },
      {
        icon: 'apps-outline',
        name: 'Grid',
        redirecTo: '/grid'
      },
      {
        icon: 'infinite-outline',
        name: 'Infinite Scroll',
        redirecTo: '/infinite'
      },
      {
        icon: 'infinite-outline',
        name: 'Inputs',
        redirecTo: '/inputs'
      }
      );
  }

}
