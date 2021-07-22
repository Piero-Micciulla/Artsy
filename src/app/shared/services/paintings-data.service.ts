import { PaintingObject } from './../models/paintings-object.model';
import { Painting } from '../models/painting.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// public monitorsWithMonthNames$: Observable<(FastRiserMonitorFragment & { monthName: string })[]>;


@Injectable({
  providedIn: 'root'
})
export class PaintingsDataService {

  readonly ROOT_URL = 'https://www.rijksmuseum.nl/api/en/collection?key=j7OLg4QP';

  // paintingObject: PaintingObject;
  paintingObject: PaintingObject ;
  paintings: Painting[];
  
  // paintings: any;

  constructor(private http: HttpClient) { }

  async getPaintings(): Promise<Painting[]>{
    // this.paintingObject = this.http.get(this.ROOT_URL)
    console.log(this.paintingObject);
    this.paintingObject = await this.http.get<PaintingObject>(this.ROOT_URL).toPromise();
    return this.paintingObject.artObjects;
  }
}

// this.http.get(this.ROOT_URL);