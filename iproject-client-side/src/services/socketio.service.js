import { io } from 'socket.io-client';

class SocketioService {
    socket;
    constructor() {}
  
    // setupSocketConnection() {
    //   this.socket = io('http://localhost:4000');
    // }


    setupSocketConnection() {  

        this.socket = io('http://localhost:4000');  
        
        this.socket.emit('my message', 'Hello there from Vue.');

        this.socket.on('my broadcast', (data) => {
            console.log(data, 'ini data');
          });
        
      }
      
      disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
    
  }
  
  export default new SocketioService();