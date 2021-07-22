import { Painting } from './../../shared/models/painting.model';
import { PaintingObject } from './../../shared/models/paintings-object.model';
import { Component, OnInit } from '@angular/core';
import {PaintingsDataService} from '../../shared/services/paintings-data.service';



@Component({
  selector: 'app-paintings-grid',
  templateUrl: './paintings-grid.component.html',
  styleUrls: ['./paintings-grid.component.scss']
})
export class PaintingsGridComponent implements OnInit{

  paintings: Promise<Painting[]>;

  constructor(
    private paintingsDataService: PaintingsDataService
) {
}

  ngOnInit(): void {
    this.paintings = this.paintingsDataService.getPaintings();
    console.log(this.paintings);
  }

}
