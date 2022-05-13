import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Subject } from 'rxjs';
import { LoaderService} from "../../servicios/loader.service";

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {


  color="accent"


  
  isLoading : Subject <boolean> = this.loaderService.isLoading;
  constructor(public loaderService:LoaderService) { }

  ngOnInit(
  ): void {
    
   

  }

}
