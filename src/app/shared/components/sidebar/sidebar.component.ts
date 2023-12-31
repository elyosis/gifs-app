import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tagsHistory() {
    return this.gifsService.tagsHistory;
  }

  clickTag(tag: string) {
    this.gifsService.addTag(tag);
  }

  resetHistory():void {
    this.gifsService.resetTagHistory();
  }
}
