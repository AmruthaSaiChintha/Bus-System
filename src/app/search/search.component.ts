import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Bus {
  source: string;
  destination: string;
  departureTime: string;
  departureDate: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class searchComponent implements OnInit {
  source = '';
  destination = '';
  buses: Bus[] = [];
  filteredBuses: Bus[] = [];
  selectedBus: Bus | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<Bus[]>('https://localhost:44365/api/BusDetails').subscribe((buses: Bus[]) => {
      this.buses = buses;
    });
  }

  searchBuses(): void {
    this.filteredBuses = this.buses.filter((bus) => {
      return bus.source.toLowerCase().includes(this.source.toLowerCase()) && bus.destination.toLowerCase().includes(this.destination.toLowerCase());
    });
    
    if (this.filteredBuses.length === 0) {
      alert('No buses found for this route!');
    }
  }

  continueWith(bus: Bus): void {
    this.selectedBus = bus;
    this.bookNow();
  }

  bookNow(): void {
    if (!this.selectedBus) {
      alert('Please select a bus to book!');
      return;
    }

    this.router.navigate(['/ticket'], {
      state: {
        source: this.selectedBus.source,
        destination: this.selectedBus.destination,
        departureDate: this.selectedBus.departureDate,
        departureTime: this.selectedBus.departureTime
      }
    });
    
  }
}
