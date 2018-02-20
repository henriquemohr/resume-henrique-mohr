import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NavigationItem } from './navigationItem';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

    public title: String = 'Henrique Mohr';

    public navigation: Array<NavigationItem> = [];

    constructor() {
      this.createNavigationMenu();
    }

    createNavigationMenu() {
      this.navigation.push(new NavigationItem('about', 'Sobre'));
      this.navigation.push(new NavigationItem('experience', 'Experiência'));
      this.navigation.push(new NavigationItem('education', 'Formação Acadêmica'));
      this.navigation.push(new NavigationItem('skills', 'Especialização'));
      this.navigation.push(new NavigationItem('interests', 'Áreas de Interesse'));
      this.navigation.push(new NavigationItem('awards', 'Cursos & Eventos'));
      this.navigation.push(new NavigationItem('resume-file', 'Currículo'));
    }

    ngOnInit() {
    }

    makeLowerCase(value: String): String {
        return value.toLocaleLowerCase();
    }

}


