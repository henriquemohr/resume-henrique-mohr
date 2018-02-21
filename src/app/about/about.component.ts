import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  address: Address;
  email: string;
  descriptions: Array<Description>;
  phoneNumber: string;
}

export interface Description {
  line: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface SocialInfo {
  iconClassInfo: string;
  url: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  public personalInfo: PersonalInformation = {
    firstName: 'Henrique',
    lastName: 'Mohr',
    phoneNumber: '(51) 99188-3050',
    address: {
      street: '',
      city: 'Ivoti',
      state: 'RS',
      zipCode: ''
    },
    email: 'henriquemohr@gmail.com',
    descriptions: [
      {
        line:
          'Apaixonado por tecnologia, com 9 anos de experiência em análise e ' +
          'desenvolvimento de projetos para a plataforma cloud/web e desktop. ' +
          'Sou entusiasta de Métodos Ágeis, Gestão Moderna e Melhoria Contínua. ' +
          'Aberto a novas oportunidades e desafios buscando um ambiente ágil e ' +
          'dinâmico para utilizar minha criatividade, inovação e determinação ' +
          'objetivando oferecer soluções de software de alta qualidade.'
      }
    ]
  };

  public socialData: SocialInfo[] = [
    {
      iconClassInfo: 'fa fa-github fa-stack-1x fa-inverse',
      url: 'https://github.com/henriquemohr'
    },
    {
      iconClassInfo: 'fa fa-linkedin fa-stack-1x fa-inverse',
      url: 'https://www.linkedin.com/in/henriquemohr/'
    },
    {
      iconClassInfo: 'fa fa-twitter fa-stack-1x fa-inverse',
      url: 'https://twitter.com/henriquemohr'
    },
    {
      iconClassInfo: 'fa fa-google-plus fa-stack-1x fa-inverse',
      url: 'https://plus.google.com/u/0/+HenriqueMohr'
    },
    {
      iconClassInfo: 'fa fa-facebook fa-stack-1x fa-inverse',
      url: 'https://www.facebook.com/henrique.o.mohr'
    },
    {
      iconClassInfo: 'fa fa-spotify fa-stack-1x fa-inverse',
      url: 'https://open.spotify.com/user/22mfpj624b6hesl2l3mjnldli?si=jhpLEThkTbKfvH8o1pAEMw'
    },
    {
      iconClassInfo: 'fa fa-whatsapp fa-stack-1x fa-inverse',
      url: 'tel:' + this.personalInfo.phoneNumber
    }

  ];

  constructor() {}

  ngOnInit() {}
}
