<template>
  
  <!-- <div class="geeks">
    <h1>Make youre own quotes here...</h1>
  </div> -->
  <section id="header" class="header-one">
	<div class="container">
		<div class="row">

			<div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
          <div class="header-thumb">
              <h1 class="wow fadeIn" data-wow-delay="1.6s">Quotes</h1>
              <h3 class="wow fadeInUp" data-wow-delay="1.9s">Share your quote with others...</h3>
          </div>
			</div>

		</div>
	</div>		
</section>
</template>
<script>
import QuoteCard from "../components/QuoteCard.vue";
import { mapActions } from "pinia";
import { useQuoteStore } from "../stores/qoutes";

export default {
  data() {
    return {
      inputMessage: "",
    };
  },
  components: {
    QuoteCard,
  },

  methods: {
    ...mapActions(useQuoteStore, ["setupSocketConnection", "fetchQuotes"]),
  },

  created() {
    this.fetchQuotes();
  },
};
</script>
<style>
body {
  background: rgb(247, 170, 140);
}
h1 {
  display: flex;
  justify-content: center;
  color: rgb(0, 0, 0);
  font-size: 40px;
  text-align: center;
  margin-top: 50px;
}

.geeks {
  width: 400px;
  height: 250px;
  background: white;
  position: absolute;
  top: 25%;
  left: 35%;
  border-radius: 20px;
}

.geeks::after {
  content: "";
  position: absolute;
  bottom: -30px;
  background: rgb(43, 42, 42);
  width: 90%;
  height: 4px;
  left: 3%;
  border-radius: 50%;
  filter: blur(3px);
}
</style>
