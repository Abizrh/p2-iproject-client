<template>
  <div class="container content">
    <div class="row">
      <div class="col-xl-9 col-lg-12 col-md-9 col-sm-16 col-12">
        <div class="card">
          <div class="card-header">Chat</div>
          <div class="card-body height3">
            <ul class="chat-list">
              <li class="in"></li>
              <li class="out"></li>
              <li class="in">
                <div class="chat-body">
                  <div class="chat-message">
                    <h5 style="font-size: 20px">{{ message }}</h5>
                  </div>
                </div>
              </li>
              <li class="out">
                <div class="chat-body">
                  <div class="chat-message">
                    <h4 class="name"></h4>
                    <h5 style="font-size: 20px ;" >{{ myMessage }}</h5>
                    <h2></h2>
                  </div>
                </div>
              </li>
            </ul>
            <form action="" class="" @submit.prevent="toSendMessage">
              <div class="form-input">
                <textarea
                  class="form-control"
                  rows="2"
                  id="comment"
                  v-model="inputMessage"
                ></textarea>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useQuoteStore } from "../stores/qoutes";
import { useSocket } from "../stores/socket";
import { io } from "socket.io-client";

export default {
  data() {
    return {
      inputMessage: "",
      iniPesan: "",

      username: localStorage.username,
      socket: io('https://my-quotesapp.herokuapp.com'),

      messages: [],
      users: []
      
    };
  },

  methods: {
    ...mapActions(useQuoteStore, ["setupSocketConnection", "testing"]),

    toSendMessage() {
      this.$emit('send-message', this.inputMessage);
      this.inputMessage = ''
    },

    readMsg(){
      let self  = this
      this.socket.on('read-msg', (message) => {

        self.messages.push({
          text: message.text,
          user: message.user
        })
      })

    },

    userConnect(){

      let self = this
      this.socket.on('user-connected', (userId) => {

        self.users.push(userId)
      })

    },

    initChat(){

      let self = this

      this.socket.on('init-chat', (msg) => {
        self.messages = msg
      })
    },

    updateUser(){

      let self = this

      this.socket.on('update-users', (user) => {

        self.users = user

      })
    },

    sendMessage(message){

      if(message){
        this.socket.emit('send-msg', {message: message, user: this.username})
      }
    },

    setName(username){

      this.username = username
      this.socket.emit('add-users', username)
    },  
  },
  computed: {
    ...mapState(useQuoteStore, ["message", "testingValue", "myMessage"]),
  },

  mounted() {

    this.readMsg(),
    this.initChat()
    this.updateUser()
    this.userConnect()
  },
};
</script>
<style>
body {
  background: #eee;
}
.chat-list {
  padding: 0;
  font-size: 0.8rem;
}

.chat-list li {
  margin-bottom: 10px;
  overflow: auto;
  color: #ffffff;
}

.chat-list .chat-img {
  float: left;
  width: 48px;
}

.chat-list .chat-img img {
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  width: 100%;
}

.chat-list .chat-message {
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  background: #5a99ee;
  display: inline-block;
  padding: 10px 20px;
  position: relative;
}

.chat-list .chat-message:before {
  content: "";
  position: absolute;
  top: 15px;
  width: 0;
  height: 0;
}

.chat-list .chat-message h5 {
  margin: 0 0 5px 0;
  font-weight: 600;
  line-height: 100%;
  font-size: 0.9rem;
}

.chat-list .chat-message p {
  line-height: 18px;
  margin: 0;
  padding: 0;
}

.chat-list .chat-body {
  margin-left: 20px;
  float: left;
  width: 70%;
}

.chat-list .in .chat-message:before {
  left: -12px;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #5a99ee;
}

.chat-list .out .chat-img {
  float: right;
}

.chat-list .out .chat-body {
  float: right;
  margin-right: 20px;
  text-align: right;
}

.chat-list .out .chat-message {
  background: #fc6d4c;
}

.chat-list .out .chat-message:before {
  right: -12px;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #fc6d4c;
}

.card .card-header:first-child {
  -webkit-border-radius: 0.3rem 0.3rem 0 0;
  -moz-border-radius: 0.3rem 0.3rem 0 0;
  border-radius: 0.3rem 0.3rem 0 0;
}
.card .card-header {
  background: #17202b;
  border: 0;
  font-size: 1rem;
  padding: 0.65rem 1rem;
  position: relative;
  font-weight: 600;
  color: #ffffff;
}

.content {
  margin-top: 40px;
}
</style>
