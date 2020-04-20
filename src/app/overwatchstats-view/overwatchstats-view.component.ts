import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-overwatchstats-view',
  templateUrl: './overwatchstats-view.component.html',
  styleUrls: ['./overwatchstats-view.component.scss']
})
export class OverwatchstatsViewComponent implements OnInit {

  selected = 'Option';
  runs: any;
  searchControl: FormControl;
  debounce = 400;

  constructor() { }

  ngOnInit(): void {
  }

}
