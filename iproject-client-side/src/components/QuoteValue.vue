<template>
  <div class="col-xs-4 col-sm-6 col-md-3 col-lg-3">
    <a>
      <div class="card-flyer">
        <div class="text-box">
          <div class="image-box"></div>
          <div class="text-container">
            <h6>{{ quote.User.username }}</h6>
            <p>
              {{ quote.desc }}
            </p>
            <br />
            <span><span class="span">{{ quote.Category.name }}</span></span>
          </div>
          <hr />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bookmarks"
            viewBox="0 0 16 16"
            @click.prevent="onClick(quote.id)"
          >
            <path
              d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"
            />
            <path
              d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
            />
          </svg>
        </div>
      </div>
    </a>
  </div>

</template>
<script>
import { mapActions } from "pinia";
import { useQuoteStore } from "../stores/qoutes";

export default {
  props: ["quote"],

  methods: {
    ...mapActions(useQuoteStore, ["addFavorite"]),

    onClick(PostId) {
      // this.$router.push('/favorites')
      this.addFavorite(PostId);
    },
  },
};
</script>
<!-- <style>
/*
 * Copyright (c) 2012-2013 Thibaut Courouble
 * http://www.cssflow.com
 * Licensed under the MIT License
 *
 * Sass/SCSS source: https://goo.gl/8hncj
 * PSD by Liam McCabe: https://goo.gl/md3Dj
 */

body {
  font: 12px/20px "Lucida Grande", Tahoma, Verdana, sans-serif;
  color: #404040;
  background: #dce1e1;
}

.notepaper {
  position: relative;
  margin: 30px auto;
  padding: 29px 20px 20px 45px;
  width: 280px;
  line-height: 30px;
  color: #6a5f49;
  text-shadow: 0 1px 1px white;
  background-color: #f2f6c1;
  background-image: -webkit-radial-gradient(
      center,
      cover,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.1) 90%
    ),
    -webkit-repeating-linear-gradient(top, transparent 0%, transparent 29px, rgba(
            239,
            207,
            173,
            0.7
          )
          29px, rgba(239, 207, 173, 0.7) 30px);
  background-image: -moz-radial-gradient(
      center,
      cover,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.1) 90%
    ),
    -moz-repeating-linear-gradient(top, transparent 0%, transparent 29px, rgba(
            239,
            207,
            173,
            0.7
          )
          29px, rgba(239, 207, 173, 0.7) 30px);
  background-image: -o-radial-gradient(
      center,
      cover,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.1) 90%
    ),
    -o-repeating-linear-gradient(top, transparent 0%, transparent 29px, rgba(
            239,
            207,
            173,
            0.7
          )
          29px, rgba(239, 207, 173, 0.7) 30px);
  border: 1px solid #c3baaa;
  border-color: rgba(195, 186, 170, 0.9);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.5),
    inset 0 0 5px #d8e071, 0 0 1px rgba(0, 0, 0, 0.1), 0 2px rgba(0, 0, 0, 0.02);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.5), inset 0 0 5px #d8e071,
    0 0 1px rgba(0, 0, 0, 0.1), 0 2px rgba(0, 0, 0, 0.02);
}

.notepaper:before,
.notepaper:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
}

.notepaper:before {
  left: 28px;
  width: 2px;
  border: solid #efcfad;
  border-color: rgba(239, 207, 173, 0.9);
  border-width: 0 1px;
}

.notepaper:after {
  z-index: -1;
  left: 0;
  right: 0;
  background: rgba(242, 246, 193, 0.9);
  border: 1px solid rgba(170, 157, 134, 0.7);
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  transform: rotate(2deg);
}

.quote {
  font-family: Georgia, serif;
  font-size: 14px;
}

.curly-quotes:before,
.curly-quotes:after {
  display: inline-block;
  vertical-align: top;
  height: 30px;
  line-height: 48px;
  font-size: 50px;
  opacity: 0.2;
}

.curly-quotes:before {
  content: "\201C";
  margin-right: 4px;
  margin-left: -8px;
}

.curly-quotes:after {
  content: "\201D";
  margin-left: 4px;
  margin-right: -8px;
}

.quote-by {
  display: block;
  padding-right: 10px;
  text-align: right;
  font-size: 13px;
  font-style: italic;
  color: #84775c;
}

.lt-ie8 .notepaper {
  padding: 15px 25px;
}
</style> -->

<style>


 .span {
  display: block;
  border-radius: 3px;
  margin: 1em 1em 0 1em;
  background-color: #a3a3a3;
} 

</style>
