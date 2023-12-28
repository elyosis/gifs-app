import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input() url!: string;
  @Input() altText: string = "";
  hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) {
      throw new Error("The URL property is required");
    }
  }

  onLoad():void {
    this.hasLoaded = true;
  }

}
