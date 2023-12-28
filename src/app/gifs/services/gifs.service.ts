import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  organizeTagsHistory(newTag: string):void {
    if (this._tagsHistory.includes(newTag)) {
      this._tagsHistory = this._tagsHistory.filter(tag => tag !== newTag);
    }

    this._tagsHistory.unshift(newTag);
    this._tagsHistory = this._tagsHistory.slice(0, 11);
  }

  addTag(newTag: string): void {
    if (newTag.length === 0) {
      return;
    }

    this.organizeTagsHistory(newTag);
  }
}
