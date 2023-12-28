import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @ViewChild("tagInput")
  tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) {}

  logTag():void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.addTag(newTag);
    this.tagInput.nativeElement.value = "";
  }
}
