<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 col-sm-4 col-xs-4 sidebar1">
        <div class="logo">
          <img
            src="../assets/person.png"
            class="img-responsive center-block"
            alt="Logo"
          />
        </div>
        <br />
        <div class="left-navigation">
          <ul class="list">
            <li><a @click.prevent="fetchProgramming">Programming</a></li>
            <li><a @click.prevent="fetchAnime">Anime</a></li>
            <li><a @click.prevent="onHandleChat">Chat</a></li>
            <li><a @click.prevent="onHandleAdd">Add Quote</a></li>
            <li><a @click.prevent="onFavoritePage">Favorite Quotes</a></li>
          </ul>
          <br />
          <ul class="list">
            <h5><strong>HOBBIES</strong></h5>
            <li>Hiking</li>
            <li>Rafting</li>
            <li>Badminton</li>
            <li>Tennis</li>
            <li>Sketching</li>
            <li>Horse Riding</li>
          </ul>
        </div>
      </div>
      <div class="col-md-10 col-sm-8 main-content">
        <QuoteCard />

        <!--  -->

        <hr />
      


        <hr />

        <!--  -->
        <div class="container mt-3">
          <div class="row mt-3">
            <ul
              class="pagination"
              style="margin-bottom: 10px; margin-top: 10px"
            >
              <li
                class="page-item"
                v-for="(page, index) in pageNumber(totalPages)"
                :key="index"
              >
                <a class="page-link" @click="changePage(page - 1)">
                  {{ page }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QuoteCard from "../components/QuoteCard.vue";
import { mapState, mapActions } from "pinia";
import { useQuoteStore } from "../stores/qoutes";

export default {
  data() {
    return {
      username: localStorage.username,
    };
  },
  components: {
    QuoteCard,
  },

  methods: {
    onFavoritePage() {
      this.$router.push("/favorites");
    },
    ...mapActions(useQuoteStore, [
      "fetchQuotes",
      "quoteOfTheDay",
      "fetchAnime",
      "fetchProgramming",
      "getQuiz",
    ]),

    onHandleAdd() {
      this.$router.push("/add");
    },

    onHandleChat() {
      this.$router.push("/chatting");
    },

    // toQuiz(){

    //   this.getQuiz()
    // },

    pageNumber(quote) {
      let quotes = [];
      for (let i = 0; i <= quote; i++) {
        quotes.push(i);
      }
      return quotes;
    },

    changePage(page) {
      this.fetchQuotes(page);
    },
  },

  computed: {
    ...mapState(useQuoteStore, ["qotd", "totalPages"]),
  },

  created() {
    this.fetchQuotes();

    // if(localStorage.access_token){

    //   console.log(this.qotd, 'hoevmo')

    //   swal({
    //       title: "Error!",
    //       text: "Quote of the day " + this.qotd.quote,
    //       type: "error",
    //       confirmButtonText: "Cool"
    //     });
    // }
  },
};
</script>

<style>


.sidebar1 {
  background: #f17153;
  /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(#f17153, #f58d63, #f1ab53);
  /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(#f17153, #f58d63, #f1ab53);
  /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(#f17153, #f58d63, #f1ab53);
  /* For Firefox 3.6 to 15 */
  background: linear-gradient(#f17153, #f58d63, #f1ab53);
  /* Standard syntax */
  padding: 0px;
  min-height: 100%;
}
.logo {
  max-height: 300px;
}
.logo > img {
  margin-top: 30px;
  padding: 3px;
  border: 3px solid white;
  border-radius: 100%;
  width: 90px;
  height: 100px;
}
.list {
  color: #fff;
  list-style: none;
  padding-left: 0px;
}
.list::first-line {
  color: rgba(255, 255, 255, 0.5);
}
.list > li,
h5 {
  padding: 5px 0px 5px 40px;
}
.list > li:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-left: 5px solid white;
  color: white;
  font-weight: bolder;
  padding-left: 35px;
}
.main-content {
  text-align: center;
}
</style>
