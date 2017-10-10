import * as io from 'socket.io-client';

export default class Client {
    static socket: any;

    constructor() {
        Client.socket = io();
    }
}