import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http : HttpClient) { }

  getVideosForWord(word:String): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+word+'&maxResults=6&type=video&key=AIzaSyBYOpIKGiwmsJvbdIZ4j-aHkhQgwbnskk4&id'
    return this.http.get(url)
  }
  getVideosForChanel(): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCyXhrXcTFZIsbp_jUJzyo1Q&maxResults=6&order=date&type=video&key=AIzaSyBYOpIKGiwmsJvbdIZ4j-aHkhQgwbnskk4&id'
    
    return this.http.get(url)
  }


}
