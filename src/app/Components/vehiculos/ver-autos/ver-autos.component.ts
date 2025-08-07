import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-autos',
  templateUrl: './ver-autos.component.html',
  styleUrls: ['./ver-autos.component.css']
})
export class VerAutosComponent implements OnInit {
  autos: any[] = [];
  sinAutos: boolean = false;

  constructor(
    private BackendService: BackendService,
    private router: Router
  ) {}

  ngOnInit() {
    this.BackendService.getautos().subscribe(
      (data: any) => {
        console.log("hasta aca llego", data);
        this.autos = data;

        if (this.autos.length === 0) {
          this.sinAutos = true;
        }
      },
      error => {
        console.error('Error al obtener autos:', error);
      }
    );
  }
}
