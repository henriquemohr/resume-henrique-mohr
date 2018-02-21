import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface ExperienceData {
    title: string;
    company: string;
    companyWebSite: string;
    duties: string;
    deviconArr: Array<string>;
    startDate: string;
    endDate: string;
}

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {

    public experienceArr: ExperienceData[] = [
        {
            title: 'Gerente de Projetos e Desenvolvedor',
            company: 'Uzy Tecnologia , Novo Hamburgo - RS',
            companyWebSite: '',
            duties: 'Coordenação de equipe de desenvolvimento e construção de especificações técnicas ' +
                    'baseadas nas demandas e necessidades do cliente. Desenvolvimento de projetos para web e desktop ' +
                    'na plataforma Microsoft .Net (C#, ASP.NET MVC, Razor, Entity Framework, WPF, WCF), JavaScript, JQuery ' +
                    'Microsoft SQL Server, Web Services (REST e SOAP) e Delphi.' ,
            deviconArr: [
              'devicons-scrum',
              'devicons-git',
              'devicons-code',
              'devicons-dotnet',
              'devicons-visualstudio',
              'devicons-msql_server',
              'devicons-javascript',
              'devicons-html5',
              'devicons-css3',
              'devicons-responsive',
              'devicons-aws',
            ],
            startDate: 'Junho/2017',
            endDate: 'Atual'
        },
        {
          title: 'Freelancer em Analise e Desenvolvimento de Sistemas',
          company: 'Novo Hamburgo, São Leopoldo - RS',
          companyWebSite: '',
          duties: 'Na empresa Tino Tech de São Leopoldo fui o analista responsável pela criação de módulo ' +
                  'para gestão de cartões coorporativos para AES Eletropaulo; Entre as atividades que executei ' +
                  'estão a Interpretação dos requisitos, criação dos planos de testes e coleta das evidências de testes. ' +
                  'Já para a empresa Uzy Tencnolgia, na qual trabalho atualmente, criei um aplicativo em C# ' +
                  'para o envio de informações fiscais a SEFAZ de Santa Cataria. ' +
                  'O módulo é reponsavel por interpretar um arquivo XML com informações fiscais, validar, ' +
                  'assinar digitalmente e enviar via webservice',
          deviconArr: [
            'devicons-code',
            'devicons-dotnet',
            'devicons-visualstudio',
            'devicons-database'
          ],
          startDate: 'Novembro/2016',
          endDate: 'Abril/2017'
        },
        {
          title: 'Analista de Sistemas & Desenvolvedor C# .Net',
          company: 'DigitalDesk , Ivoti - RS',
          companyWebSite: '',
          duties: 'Coordenação de equipe de desenvolvimento, definição e prototipação de novos produtos, ' +
                  'construção de especificações técnicas baseado nas demandas e necessidades do cliente, ' +
                  'modelagem de dados, criação de casos de testes, coleta de evidências de testes, levantamento ' +
                  'de processos/requisitos e colaboração no desenvolvimento de soluções em C# .net utilizando Asp.Net MVC.' +
                  'Desenvolvimento de projetos na plataforma Microsoft .Net (C#, ASP NET webforms, ASP NET MVC, Razor, ' +
                  'Entity Framework. Windows Forms, WPF, WCF), JavaScript, Microsoft SQL Server, MySql, JasperReports ' +
                  'e Web Services (REST e SOAP).',
          deviconArr: [
            'devicons-scrum',
            'devicons-git',
            'devicons-code',
            'devicons-dotnet',
            'devicons-visualstudio',
            'devicons-msql_server',
            'devicons-javascript',
            'devicons-jquery',
            'devicons-html5',
            'devicons-css3',
            'devicons-aws',
            'devicons-android'
          ],
          startDate: 'Janeiro/2014',
          endDate: 'Novembro/2016'
        },
        {
          title: 'Analista de Sistemas & Desenvolvedor Java',
          company: 'Safetech, Sapiranga - RS',
          companyWebSite: 'http://www.safetech.inf.br',
          duties: 'Responsável pela homologação do PAF-ECF (Programa Aplicativo Fiscal) ' +
                  'no sistema de PDV (Ponto de Venda), realizando a análise dos requisitos e o ' +
                  'gerenciamento das alterações para atendê-los. Desenvolvimento em Java com Groovy e Grails',
          deviconArr: [
            'devicons-scrum',
            'devicons-git',
            'devicons-code',
            'devicons-java',
            'devicons-grails',
            'devicons-groovy'
          ],
          startDate: 'Setembro/2013',
          endDate: 'Janeiro/2014'
        },
        {
          title: 'Analista de Sistemas & Desenvolvedor C# .Net / Delphi',
          company: 'Uzy Tecnologia, Novo Hamburgo - RS',
          companyWebSite: 'http://www.uzy.com.br/',
          deviconArr: [
            'devicons-code',
            'devicons-database'
          ],
          duties: 'Manutenção e desenvolvimento de sistema de PDV (Ponto de Venda), ' +
                  'combinando características como certificação PAF-ECF, transferência de fundos ' +
                  'discado e dedicado (TEF). Desenvolvimento em Delphi 5 e C# DotNet.',
          startDate: 'Outubro/2009',
          endDate: 'Setembro/2013'
        },
        {
          title: 'Desenvolvedor Delphi',
          company: 'Grupo Defferrari, Novo Hamburgo - RS',
          companyWebSite: 'http://www.defferrari.com.br',
          deviconArr: [
            'devicons-code',
            'devicons-database'
          ],
          duties: 'Desenvolvimento e manutenção de sistemas para o segmento da saúde, ' +
                  'com produtos específicos para cada tipo de negócio: hospitais, ' +
                  'clínicas de diagnóstico por imagem e laboratórios. ' +
                  'Desenvolvimento em Delphi 7 utilizando banco de dados ORACLE.',
          startDate: 'Agosto/2008',
          endDate: 'Setembro/2009'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
