import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface ExperienceData {
    title: string;
    company: string;
    companyWebSite: string;
    duties: string;
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
            duties: 'Coordenação de equipe de desenvolvimento e construção de especificações técnicas baseado nas demandas e necessidades do cliente.',
            startDate: 'Junho/2017',
            endDate: 'Atual'
        },
        {
          title: 'Freelancer em Analise e Desenvolvimento de Sistemas',
          company: 'Novo Hamburgo, São Leopoldo - RS',
          companyWebSite: '',
          duties: '',
          startDate: 'Novembro/2016',
          endDate: 'Abril/2017'
        },
        {
          title: 'Analista de Sistemas & Desenvolvedor C# .Net',
          company: 'DigitalDesk , Ivoti - RS',
          companyWebSite: '',
          duties: 'Coordenação de equipe de desenvolvimento, definição e prototipação de novos produtos, construção de especificações técnicas baseado nas demandas e necessidades do cliente, modelagem de dados, criação de casos de testes, coleta de evidências de testes, levantamento de processos/requisitos e colaboração no desenvolvimento de soluções em C# .net utilizando Asp.Net MVC.',
          startDate: 'Janeiro/2014',
          endDate: 'Novembro/2016'
        },
        {
          title: 'Analista de Sistemas & Desenvolvedor Java',
          company: 'Safetech, Sapiranga - RS',
          companyWebSite: 'http://www.safetech.inf.br',
          duties: 'Responsável pela homologação do PAF-ECF (Programa Aplicativo Fiscal) no sistema de PDV, realizando a análise dos requisitos e o gerenciamento das alterações para atendê-los. Desenvolvimento em Java',
          startDate: 'Setembro/2013',
          endDate: 'Janeiro/2014'
        },
        {
          title: 'Analista de Sistemas & Desenvolvedor C# .Net / Delphi',
          company: 'Uzy Tecnologia, Novo Hamburgo - RS',
          companyWebSite: 'http://www.uzy.com.br/',
          duties: 'Manutenção e desenvolvimento de sistema de ponto de venda (PDV), combinando características como certificação PAF-ECF, transferência de fundos discado e dedicado (TEF). Desenvolvimento em Delphi 5.',
          startDate: 'Outubro/2009',
          endDate: 'Setembro/2013'
        },
        {
          title: 'Desenvolvedor Delphi',
          company: 'Grupo Defferrari, Novo Hamburgo - RS',
          companyWebSite: 'http://www.defferrari.com.br',
          duties: 'Desenvolvimento e manutenção de sistemas para o segmento da saúde, com produtos específicos para cada tipo de negócio: hospitais, clínicas de diagnóstico por imagem e laboratórios. Desenvolvimento em Delphi 7.',
          startDate: 'Agosto/2008',
          endDate: 'Setembro/2009'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
