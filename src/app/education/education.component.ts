import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface EducationData {
    school: string;
    schoolUrl: string;
    degree: string;
    startDate: string;
    endDate: string;
}

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {

    public educationArr: EducationData[] = [
        {
            school: 'Universidade Feevale',
            schoolUrl: 'http://www.feevale.br/',
            degree: 'Tecnólogo em Sistemas para Internet',
            startDate: 'Fevereiro/2013',
            endDate: 'Fevereiro/2016'
        },
        {
            school: 'Fundação Escola Técnica Liberato Salzano Vieira da Cunha',
            schoolUrl: 'http://www.liberato.com.br/',
            degree: 'Qualificação Técnica em Desenvolvimento de Software',
            startDate: 'Agosto/2008',
            endDate: ' Julho/2009'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
