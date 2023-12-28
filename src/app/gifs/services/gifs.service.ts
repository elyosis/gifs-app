import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchResults } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gifs[] = [];
  private _tagsHistory: string[] = [];
  // TODO: delete key once the app's done
  private apiKey: string = "Bd744kPTO3Ouh7vZAYYGbRlpt0bBknle";
  private url: string = "https://api.giphy.com/v1/gifs/search";

  constructor(private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  organizeTagsHistory(newTag: string): void {
    if (this._tagsHistory.includes(newTag)) {
      this._tagsHistory = this._tagsHistory.filter(tag => tag !== newTag);
    }

    this._tagsHistory.unshift(newTag);
    this._tagsHistory = this._tagsHistory.slice(0, 11);
  }

  addTag(newTag: string): void {
    if (newTag.length === 0) { return }
    this.organizeTagsHistory(newTag);

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("q", newTag)
      .set("limit", 10)

    this.http.get<SearchResults>(this.url, { params })
      .subscribe(res => {
        this.gifsList = res.data;
      })
  }
}
