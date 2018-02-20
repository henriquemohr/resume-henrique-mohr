import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-awards',
    templateUrl: './awards.component.html',
    styleUrls: ['./awards.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AwardsComponent implements OnInit {

    public awardArr: Array<string> = [
      'Angular 2.x e 4.x e TypeScript - <Loiane.training/> - Janeiro/2018 (Em Andamento)',
      'Brasil JS Conf 2017 - Porto Alegre - Agosto/2017',
      'Maratona Xamarin - Microsoft - Março/2017',
      'Meetup Vale dos Desenvolvedores (4a. edição) - Universidade Feevale - 25/03/2017',
      'React JS - Build real world JS apps & deploy on cloud - Udemy - 17/03/2017',
      'Front in POA - SENAC-RS - 10/12/2016',
      'Learn Angular 2 from Beginner to Advanced - Udemy - 10/12/2016',
      'Gerenciamento de Projetos com Scrum - Universidade Feevale - Fevereiro/2013 - Março/2014 - Universidade Feevale'
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
