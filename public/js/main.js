// imports always go at the top
import LogInPage from './components/TheLoginComponent.js';
// import UsersComponent from './components/TheUserComponent.js';
import AllUsersPage from './components/TheAllUsersComponent.js';
import DefaultHome from './components/TheHomePage.js';
import KidsHome from './components/TheKidsHomePage.js';
// import ErrorPage from './modules/ErrorPage.js';


const { createApp } = Vue; 
// import the createApp method from the Vue library

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes: [
    { 
      path: '/', // browser location bar looks like this
      name: 'login', // for programmatic navigation
      component: LogInPage // the component to render
    },
    // this is a temp route for testing our DB connection
    { 
      path: '/users', // browser location bar looks like this
      name: 'allusers', // for programmatic navigation
      component: AllUsersPage // the component to render
    },

    {
      path: '/home', // this would be the adult home page
      name: 'home', 
      component: DefaultHome 
    },

    {
      path: '/kidshome', // this would be the kid home page
      name: 'kidshome', 
      component: KidsHome 
    },
  ]
})

// 5. Create and mount the root instance.
const app = Vue.createApp({
  mounted() {
    // check for a previous login in localStorage
    if(window.localStorage.getItem('user')) {
      this.authenticated = true;
      this.$router.push({name: 'allusers'});
    }
  },

  methods: {
    logUserOut() {
      this.authenticated = false;
      window.localStorage.removeItem('user');
      this.$router.push({name: "login"});
    },

    loggedIn() {
      this.authenticated = true;
    }
  }
});
app.use(router);
app.mount('#app')
