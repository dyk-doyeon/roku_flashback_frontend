export default {
  name: 'TheLoginComponent',

  template: `
    <div>
      <div class="main__logo">
        <img src="images/" alt="Roku logo">
      </div>
      <div class="login__container">
        <div class="login__text">
          <h2>Welcome_To_Roku_Flashback_</h2>
          <h3>More_stories_than_ever_before_<br>
          Enter_your_email_to_create_or_restart_your_subscription_
          </h3>
        </div>

        <div class="login__box">
          <label for="inlineFormInputName">Email_</label>
          <input ref="username" v-model="username" type="text" id="inlineFormInputName" required>

          <label for="inlineFormPassword">Password_</label>
          <input ref="password" v-model="password" type="password" id="inlineFormPassword" required>
        </div>
      </div> 

      <div class="login__btn">
        <button
        @click="tryLogIn" 
        type="submit"> Submit
        </button>
      </div>
    </div>
  `,

  data() {
    return {
      username: '',
      password: '',
      authenticated: false,
      signUp: false
    }
  },

  methods: {
    trySignUp() {
      debugger;
    },

    tryLogIn() {
      // debugger;
      // check to see if there are a username and password 
      // and make sure there's no extra white space

      if(this.username.trim().length == 0) {
        // this means the username input is empty
        // the trim() method gets rid of any white space before or after text 
        console.log('username is empty, mark the field and let the user know');
        this.$refs['username'].classList.add('missing-field');
        return;
      } else if (this.password.trim().length == 0) {
        console.log('password is empty, mark the field and let the user know');
        this.$refs['password'].classList.add('missing-field');
        return;
      }

      // end the input checks
      this.$refs['username'].classList.remove('missing-field');
      this.$refs['username'].classList.remove('missing-field');

      // try writing a temp fetch call to the back end login service
      console.log('login script should be good to go');

      // create a user object with the username and password
      // and then pass that to the back end validation service

      let user = {
        username: this.username,
        passowrd: this.password
      }

      // let formData = new FormData();

      // formData.append("username", this.username);
      // formData.append("password", this.password);

      fetch('/ums/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type': 'application/json' 
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(data => {
          if(data.message == 'no user') {
            // check for no user, and then provide a sign up button
            this.signUp = true;

          } else if (data.message == 'wrong password') {
            // password didn't match, try again
            this.$refs['password'].classList.add('missing-field');
            
          } else {
            // if (data.message == 'success')
            this.$emit('setauthenticated');
            debugger;
            // save the user data locally on our system
            window.localStorage.setItem('user', JSON.stringify(data.user));
            this.$router.push({ name: 'allusers' });
          }
        })
        .catch(error => console.error(error));
      // end fetch call

    }
  }
}
