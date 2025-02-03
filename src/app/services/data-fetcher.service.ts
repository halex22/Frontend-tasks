import { DestroyRef, inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageBoard, Message } from './data.models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {
  private baseUrl = 'http://localhost:8080/api/v1/'
  private httpClient = inject(HttpClient)
  messageBoards: MessageBoard[] = []
  destroyRef = inject(DestroyRef)

  fetchBoards(): Observable<MessageBoard[]> {
    return this.httpClient.get<MessageBoard[]>(`${this.baseUrl}message-boards/`)
  }

  fetchDetailedBoard(boardId: string): Observable<Message[]> {
    const params = new HttpParams()
    params.set('board_id', boardId)
    return this.httpClient.get<Message[]>(`${this.baseUrl}messages`, {params})
  }


}
