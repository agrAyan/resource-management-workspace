import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from '../../models/campaigns/campaign';
import { Resource } from '../../models/resources/resource';

@Component({
  selector: 'lib-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  constructor() {}

  @Input() resources: Resource[] = [];

  ngOnInit(): void {
    console.log(this.resources)
  }


}
