import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

    deviconArr: Array<string> = [
        'devicons-scrum',
        'devicons-windows',
        'devicons-dotnet',
        'devicons-msql_server',
        'devicons-visualstudio',
        'devicons-java',
        'devicons-html5',
        'devicons-css3',
        'devicons-javascript',
        'devicons-jquery',
        'devicons-aws'
    ];

    workflowArr: Array<string> = [
        'Análise, gerenciamento e implantação de projetos;',
        'Desenvolvimento Ágil, Metodologia Scrum, Kanban, Burndown, Planning Poker;',
        'Qualidade de Código (Teste Unitário, Revisão de Código);',
        'Design orientado a objetos, Padrões de Projeto;',
        'Desenvolvimento C# .Net Framework e Asp.Net MVC;',
        'Web Services (REST, SOAP);',
        'Oracle, SQL Server, SQL, PL/SQL;',
        'Ferramentas de Controle de Versão (GIT, SVN, TFS -Team Foundation Server);',
        'Amazon AWS e Amazon S3 - Simple Storage Service.'
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
