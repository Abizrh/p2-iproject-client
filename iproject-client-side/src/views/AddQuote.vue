<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-7 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 rounded-10 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-3 d-none d-lg-block"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">
                      Add your Quote here...
                    </h1>
                  </div>
                  <form action="">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        rows="5"
                        id="comment"
                        v-model="inputQuote"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <select name="CategoryId" v-model="inputCategory">
                        <option disabled selected>-- select --</option>
                        <option value="1">Motivation</option>
                        <option value="2">Programmer</option>
                        <option value="3">Anime</option>
                        <option value="4">Jokes</option>
                      </select>
                    </div>
                      <button type="submit" @click.prevent="toAdd">Add</button>
                  </form>
                  <p v-if="!isStat">may you want to know what is that word meaning
                      only works in english. 
                    <a @click.prevent="showInput" >Click here</a>
                  </p>
                  <!-- <textarea name="" id="" cols="15" rows="3"></textarea> -->
                  <form action="" @submit.prevent="toSendWord" v-if="isStat">
                    <label for=""></label>
                    <input type="text" v-model="inputWord"
                      placeholder="input word here..."
                      >
                    <button type="submit">send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useQuoteStore } from '../stores/qoutes';

export default {
  data() {
    return {
      inputQuote: "",
      inputCategory: '',

      inputWord: '',

      isStat: false
    };
  },

  methods: {

    ...mapActions(useQuoteStore, ['addQuote', 'getWord']),
    toAdd(){
      this.addQuote({
        desc: this.inputQuote,
        CategoryId: this.inputCategory
      })
    },

    toSendWord(){

      this.getWord(this.inputWord)
    },  

    showInput(){

      this.isStat = true
    },

  },

  computed: {

    ...mapState(useQuoteStore, ['allWord'])
  },

  created(){

    this.getWord()

    // if(!this.allWord){

    //   console.log('error')
    // }else{

    //   for( let i = 0 ; i < this.allWord.length; i++){

    //     console.log(i)
    //   }

    // }
  }
};
</script>
