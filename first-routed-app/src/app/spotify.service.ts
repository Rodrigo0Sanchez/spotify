import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
        'Bearer BQBt9Ai0Lcd0xnczKivODSe8gWuUCCKOoWBN9ybH4_5MO3RHAZqVJVnJD_1yG3__4N9QiR3_BuNRrR45SnaujzvcDA0oDfDV-NV0xyHoMa_xo9NlM9IcXZzfb5Oeypy_GdiFQvd2nibOjTlHuvHX4546HIrL5l_s1rH5LjBZz01gjBZceVkt_Mbb_R50vvDS6svK35QZXisvQW4YSG-uGvhfqYJpUWZXdEIdfxayvuS0TyWrlvEvPW0nZeybNgkKmP7glYx_V2iyoscJG1gNXYJFWoE'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken});

    return this.http.get(url, { headers });
  }



}
