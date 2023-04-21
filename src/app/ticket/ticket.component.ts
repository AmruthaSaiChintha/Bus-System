import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class ticketComponent implements OnInit {
  source: string = '';
  destination: string = '';
  departureDate: string = '';
  departureTime: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.source = history.state.source;
    this.destination = history.state.destination;
    this.departureDate = history.state.departureDate;
    this.departureTime = history.state.departureTime;
    
  }
  downloadTicket(): void {
    // create new jsPDF instance
    const doc = new jsPDF();

    // add content to PDF
    doc.text(`Source: ${this.source}`, 20, 20);
    doc.text(`Destination: ${this.destination}`, 20, 30);
    doc.text(`Departure Date: ${this.departureDate}`, 20, 40);
    doc.text(`Departure Time: ${this.departureTime}`, 20, 50);

    // save PDF file
    doc.save('ticket.pdf');
  }

}





