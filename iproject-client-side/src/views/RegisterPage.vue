<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-7 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0 m-5 pb-5">
            <div class="row">
              <div class="col-lg-3 d-none d-xl-block"></div>
              <div class="col-lg-7">
                <div class="p-4">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <form class="user" @submit.prevent="onRegisterHandler">
                    <div class="form-group">
                      <label for="name">username</label>
                      <input
                        type="text"
                        class="form-control form-control-user"
                        placeholder="cicak"
                        v-model="registerUsername"
                      />
                    </div>
                    <br />
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="text"
                        class="form-control form-control-user"
                        placeholder="e@gmail.com..."
                        v-model="registerEmail"
                      />
                    </div>
                    <br />
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control form-control-user"
                        placeholder="...."
                        v-model="registerPassword"
                      />
                    </div>
                    <br />
                    <div class="form-group">
                      <label for="phoneNumber">Phonenumber</label>
                      <input
                        type="text"
                        class="form-control form-control-user"
                        placeholder=""
                        v-model="registerPhonenumber"
                      />
                    </div>
                    <br />
                    <div class="form-group">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        class="form-control form-control-user"
                        placeholder=""
                        v-model="registerAddress"
                      />
                    </div>
                    <br />

                    <button type="submit" class="btn btn-primary">
                      Register
                    </button>
                  </form>
                  <hr />
                  <div class="text-center">
                    <a class="small"
                      ><router-link to="/login">
                        have an account? Login!</router-link
                      ></a
                    >
                  </div>
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
import { mapActions } from 'pinia';
import { useQuoteStore } from '../stores/qoutes';

export default {
  data() {
    return {
      registerUsername: "",
      registerEmail: "",
      registerPassword: "",
      registerPhonenumber: "",
      registerAddress: "",
    };
  },
  methods: {
    ...mapActions(useQuoteStore, ['handleRegister']),
    onRegisterHandler() {
      this.handleRegister({
        username: this.registerUsername,
        email: this.registerEmail,
        password: this.registerPassword,
        phoneNumber: this.registerPhonenumber,
        address: this.registerAddress,
      });
    },
  },
  mounted(){
      if(localStorage.getItem('access_token')){
              this.$router.push('/login')
          }
  }
};
</script>