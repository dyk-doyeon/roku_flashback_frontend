import SingleUser from './TheSingleUserComponent.js';

export default {
  name: 'TheAllUsersComponent',

  template: `
    <section class="user-panel">
      <div class="gobackbtn">
        <a href="/">
          <i class="fa-solid fa-left-long"></i>
        </a>
      </div>
      <div class="main__logo">
        <h2>_ROKU FLASHBACK_</h2>
      </div>

      <div class="user__box">
        <user v-for="user in users" :user="user"></user>
      </div>
    </section>
  `,

  created() {
    // this is where you should do all of your data retrieval
    // console.log('all users component is mounted');
    fetch('/ums/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // push our users into our Vue data object so we can render a component for each user
        this.users = data;
      })
    .catch(error => console.error(error));
  },

  data() {
    return {
      users: []
    }
  },

  components: {
    user: SingleUser
  }
}