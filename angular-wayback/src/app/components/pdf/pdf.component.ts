import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Incidence } from 'src/app/models/incidence';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {}

  createPDF() {
    const pdfDefinition: any = {
      content: [
        {
          text: 'Hola mundo',
        },
      ],
    };

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

  generateLabel(incidences: Incidence[]) {
    
        
    let arrayContent = [];

    for(let i = 0; i < incidences.length; i++){
      arrayContent.push({
        text: incidences[i].incidence_ref,
        style: 'header',});

      arrayContent.push({
        text: incidences[i].customer_name,
        style: 'header',
      });        
    }

    let docDefinition = {
      content: arrayContent,
    };

    const pdf = pdfMake.createPdf(docDefinition);
    pdf.open();
  }

}
