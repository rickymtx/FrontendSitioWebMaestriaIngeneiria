import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface Podcast {
  id_podcast: number;
  titulo: string;
  url: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  private apiUrl = `${URL_SERVER}/podcast`;

  constructor(private http: HttpClient) {}

  getPodcasts(): Observable<Podcast[]> {
    return this.http.get<Podcast[]>(this.apiUrl);
  }

  getPodcastById(id: number): Observable<Podcast> {
    return this.http.get<Podcast>(`${this.apiUrl}/${id}`);
  }
}