import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-resume-file',
  templateUrl: './resume-file.component.html',
  styleUrls: ['./resume-file.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeFileComponent implements OnInit {

  public fileURL: String = 'https://www.dropbox.com/s/tk15888inyskjyu/CV_HenriqueMohr.pdf?dl=0';
  public lastUpdate: String = '21 de Fevereiro de 2018';

  constructor() { }

  ngOnInit() {
  }

}
