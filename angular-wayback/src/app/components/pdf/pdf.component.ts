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

      // arrayContent.push({
        
      //   // height: 100
      // });

      arrayContent.push({
        columns: [
        {
          width: '10%',
          text: ''
        },
        {          
          width: '70%',
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
          width: '70%',
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
          width: '70%',
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
          width: '70%',
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
          width: '70%',
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
          width: '70%',
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
          width: '70%',
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
          width: '70%',
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
        incidence_ref:{
          fontSize: 24,
          alignment: 'right',
          lineHeight: 1.6,
          bold: true,           
        }, 
        incidence_text: {
          fontSize: 18,
          alignment: 'center',
          lineHeight: 4,
          bold: true,
        },
        customer_name:{
          bold: true,
          fontSize: 14,
          lineHeight: 1.4
        },
        customer_phone:{
          bold: true,
          fontSize: 14,
          lineHeight: 1.4
        },
        customer_address:{
          fontSize: 10,
          lineHeight: 1.4
        },
        customer_cp:{
          bold: true,
          fontSize: 14,
          lineHeight: 3
        },   
        next_delivery_text:
        {
          lineHeight: 1.4,
        },
        next_delivery_date: {
          fontSize: 24,
          lineHeight: 1.4,
          bold: true,
        },
        delivery_time_text:
        {
          lineHeight: 1.4,
        },
        delivery_time_data: {
          fontSize: 24,
          lineHeight: 2,
          bold: true,
        },
        text_unities:{
          fontSize: 12
        },
        data_unities:{
          fontSize: 16,
          bold: true, 
          lineHeight: 2
        }
      }
    }
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


