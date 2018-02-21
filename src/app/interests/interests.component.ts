import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-interests',
    templateUrl: './interests.component.html',
    styleUrls: ['./interests.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InterestsComponent implements OnInit {

    deviconArr: Array<string> = [
      'devicons-angular',
      'devicons-react',
      'devicons-javascript',
      'devicons-linux',
      'devicons-nodejs',
      'devicons-npm',
      'devicons-python',
      'devicons-ruby_on_rails',
      'devicons-css3',
      'devicons-bootstrap',
      'devicons-less',
      'devicons-sass',
      'devicons-github_badge',
      'devicons-jenkins',
      'devicons-mongodb',
      'devicons-ionic',
      'devicons-docker',
      'devicons-rasberry'
    ];

    workflowArr: Array<string> = [
      'AngularJs 5x',
      'ReactJs',
      '.Net Core',
      'Docker',
      'Microservices, Sistemas Distribuídos, Message Queuing Protocol, RabbitMQ',
      'Qualidade de Código (Teste Unitário, Revisão de Código, TDD)',
      'Integração Contínua e Entrega Contínua',
      'Desenvolvimento Ágil, Metodologia Scrum, Kanban, Burndown, Planning Poker',
      'BigData & IOT',
      'Inteligência Artificial'
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
