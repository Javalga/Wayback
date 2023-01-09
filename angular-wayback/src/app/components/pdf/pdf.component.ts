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

  constructor() { }

  ngOnInit() { }

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
        style: 'incidence_ref',});

      arrayContent.push({
        text: 'INCIDENCIA SOLUCIONADA',
        style: 'incidence_text',});

      arrayContent.push({
        image:
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBsRXhpZgAASUkqAAgAAAACAA4BAgA0AAAAJgAAAJiCAgAKAAAAWgAAAAAAAABCYXJjb2RlIGZvciB1c2UgLSBubyBjb3B5cmlnaHQgaXNzdWVzIGFzIGNvbnN0cnVjdGVka2lzY2hpbGxpbv/hBV9odHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgZGM6UmlnaHRzPSJraXNjaGlsbGluIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMiIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIxNzM3NTQ3NDgiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmlzdG9ja3Bob3RvLmNvbS9sZWdhbC9saWNlbnNlLWFn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',
          width: 350,
          height: 50,
          style: 'codigo_barras'
      });

      arrayContent.push({
        text: ' ',
        style: 'codigo_barras_espacio',
      });


      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '90%',
          text: incidences[i].customer_name,
          style: 'customer_name'
        },
      ]
      });
      
      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '90%',
          text: `Teléfono: ${incidences[i].customer_phone}`,
          style: 'customer_phone'
        },
      ]
      });
      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '90%',
          text: incidences[i].customer_address,
          style: 'customer_address'
        },
      ]
      });
      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '90%',
          text: `${incidences[i].customer_cp} - ${incidences[i].customer_city}`,
          style: 'customer_cp'
        },
      ]
      });
      
      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '90%',
          text: 'Fecha de entrega',
          style: 'next_delivery_text'
        },
      ]
      });
      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '90%',
          text: `${new Date(incidences[i].next_delivery).getDate()}-${
            new Date(incidences[i].next_delivery).getMonth() + 1
          }-${new Date(incidences[i].next_delivery).getFullYear()}`,
          style: 'next_delivery_date'
        },
      ]
      });
      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '90%',
          text: 'Horario de entrega',
          style: 'delivery_time_text'
        },
      ]
      });
      console.log(incidences[i].delivery_time_id)
      if(incidences[i].delivery_time_id == 1){
        incidences[i].delivery_time = 'Mañana'
      }else if(incidences[i].delivery_time_id == 2){
        incidences[i].delivery_time = 'Tarde'
      }else{
        incidences[i].delivery_time = 'Todo el Día'
      }

      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '90%',
          text: incidences[i].delivery_time,
          style: 'delivery_time_data'
        },
      ]
      });

      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '35%',
          text: 'Bultos',
          style: 'text_unities'
        },
        {          
          width: '35%',
          text: 'Peso',
          style: 'text_unities'
        },
      ]
      });
      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '35%',
          text: '1/1',
          style: 'data_unities'
        },
        {          
          width: '35%',
          text: '5,55kg',
          style: 'data_unities'
        },
      ]
      });
      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '35%',
          text: 'Reembolso',
          style: 'text_unities'
        },
        {          
          width: '35%',
          text: 'Seguro',
          style: 'text_unities'
        },
      ]
      });
      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '35%',
          text: '0.00€',
          style: 'data_unities'
        },
        {          
          width: '35%',
          text: '0.00€',
          style: 'data_unities'
        },
      ]
      });
      
      
      if((incidences.length - 1) == i){
        arrayContent.push({
          text: '',
          style: '',
          
        });
      }else{
        arrayContent.push({
          text: '',
          style: '',
          pageBreak: 'after'
        });
      }               
    }

    let docDefinition = {
      pageSize: 'A5',
      content: arrayContent,
      styles: {
        incidence_ref: {
          fontSize: 24,
          alignment: 'right',
          lineHeight: 1.6,
          bold: true,
        },
        incidence_text: {
          fontSize: 18,
          alignment: 'center',
          lineHeight: 1.5,
          bold: true,
        },
        codigo_barras_espacio: {
          lineHeight: 2,
        },
        customer_name: {
          bold: true,
          fontSize: 14,
          lineHeight: 1.4,
        },
        customer_phone: {
          bold: true,
          fontSize: 14,
          lineHeight: 1.4,
        },
        customer_address: {
          fontSize: 10,
          lineHeight: 1.4,
        },
        customer_cp: {
          bold: true,
          fontSize: 14,
          lineHeight: 3,
        },
        next_delivery_text: {
          lineHeight: 1.4,
        },
        next_delivery_date: {
          fontSize: 24,
          lineHeight: 1.4,
          bold: true,
        },
        delivery_time_text: {
          lineHeight: 1.4,
        },
        delivery_time_data: {
          fontSize: 24,
          lineHeight: 2,
          bold: true,
        },
        text_unities: {
          fontSize: 12,
        },
        data_unities: {
          fontSize: 16,
          bold: true,
          lineHeight: 2,
        },
      },
    };
     const pdf = pdfMake.createPdf(docDefinition);
    pdf.open();
  }

  returnsPagePdf(selected) {

    var docDefinition = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],

            body: [
              ['First', 'Second', 'Third', 'The last one'],
              ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
              [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4']
            ]
          }
        }
      ]
    };

    const pdf = pdfMake.createPdf(docDefinition);
    pdf.open();
  }
  
  

}


