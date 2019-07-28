import { Injectable } from '@angular/core';
import { Socket } from 'phoenix';
import { environment } from '@src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhoenixChannelService {
  private ws = environment.ws;
  private socket: any;
  constructor() {
    this.socket = new Socket(this.ws);
    this.socket.connect();
  }

  joinTopic(topic): any {
    return this.socket.channel(topic);
  }
}
