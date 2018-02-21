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
            // tslint:disable-next-line:max-line-length
            duties: 'Atuo como o coordenador da equipe de desenvolvimento realizando a construção de especificações técnicas baseadas nas demandas e necessidades do cliente. Também participo do desenvolvimento de projetos para web e desktop utilizando a plataforma Microsoft .Net (C#, ASP.NET MVC, Razor, Entity Framework, WPF, WCF), JavaScript, JQuery, Microsoft SQL Server, Web Services (REST e SOAP) e Delphi.' ,
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
          // tslint:disable-next-line:max-line-length
          duties: ' Na empresa Tino Tech realizei trabalho como analista responsável pela criação de módulo para gestão de cartões coorporativos para a empresa AES Eletropaulo. Entre as atividades executadas, destacan-se: Interpretação dos requisitos, criação dos planos de testes, coleta das evidências de testes, modelagem de dados e desenvolvimento em C#; Já para a empresa Uzy Tecnologia, na qual trabalho atualmente, realizei a contrução de um módulo em C# para o envio de informações fiscais a SEFAZ de Santa Cataria. O módulo é reponsável por interpretar um XML com informações fiscais, validar, assinar digitalmente e enviar via webservice a SEFAZ.',
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
          // tslint:disable-next-line:max-line-length
          duties: 'Coordenei a equipe de desenvolvimento, realizei a definição e prototipação de novos produtos, construção de especificações técnicas baseado nas demandas e necessidades do cliente, criação de casos de testes, coleta de evidências de testes, levantamento de processos e requisitos e colaboração no desenvolvimento de soluções.' ,
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
          // tslint:disable-next-line:max-line-length
          duties: ' Liderei a equipe de desenvolvimento sendo o analista responsável pela homologação do PAF-ECF (Programa Aplicativo Fiscal) no sistema de PDV (Ponto de Venda), realizando a análise dos requisitos e o gerenciamento das alterações para atendê-los.',
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
          // tslint:disable-next-line:max-line-length
          duties: 'Atuei na manutenção e desenvolvimento de sistema de PDV (Ponto de Venda), combinando características como certificação PAF-ECF, transferência de fundos discado e dedicado (TEF), entre outros sendo este desenvolvido em Delphi 5',
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
          // tslint:disable-next-line:max-line-length
          duties: 'Participei da manutenção e desenvolvimento de sistemas para o segmento da saúde, com produtos específicos para cada tipo de negócio: hospitais, clínicas de diagnóstico por imagem e laboratórios.',
          startDate: 'Agosto/2008',
          endDate: 'Setembro/2009'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
