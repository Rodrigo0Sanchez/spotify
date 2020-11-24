import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCTK19FWqK_7Doa_qjZqIM4JR3o693FbpAH3-LpbwElt-xpMz27WTiPilnhSITvEjPppAUKRhmXuCngkNUJ0B7P3eN85OymK4WlOdhRAhEuy9ZMAlKEZZ6iiGI1LF3_iqd7BWZ-KxDOg2ewVjp7ypVCPwHOhR5uN6aPxDZkYRz0LVyp6nX5if_c9a9iC2RVFj9NxAyHJtraIgMLDc4Qswf8Fyin87N21c35HOETnbjgntAMlM-lcfo9mcq8O40N2DLfrJyJl0y1IBU5G89NjRKBQTs'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
