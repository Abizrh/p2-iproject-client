import { defineStore } from "pinia";
import io from 'socket.io-client'


export const useSocket = defineStore({
    id: 'socket',
    state: () => ({

        messages: [],
        users: [],
        socket: io('ttps://my-quotesapp.herokuapp.com')
    }),

    actions: {

        readMessage(){
            this.socket.on('read-msg', (msg) => {
                this.messages.push({
                    text: msg.text,
                    user: msg.user
                })
                console.log(this.messages, 'halo, readMessage')
            })
        },

        userConnect(){
            this.socket.on('user-connected', (userId) => {

                this.users.push(userId)
            })
        },

        initChat(){
            
            this.socket.on('init-chat', (msg) => {

                console.log(msg, 'init-chat')
                this.messages = msg
            })
        },

        updateUser(){

            this.socket.on('update-users', (user) => {

                console.log(user, 'update-users')
                this.users = user
            })
        }
    }
})