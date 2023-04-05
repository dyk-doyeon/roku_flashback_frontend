export default {
  name: 'TheUserComponent',

  props: ['user'],

  template: `
  <div @click="navToHomePage">
    <div class="user__info">
      <img :src='"images/" + user.avatar'>
      <h2>{{ user.username }}</h2>
    </div>
  </div>
  `,

  methods: {
    navToHomePage() {
      console.log('This user has this access level:', this.user.permissions);

      // every user has permissions as part of their data (this is coming from the database)
      // it's set in the permissions colum / permissions field
      // we can use that data to figure out what home page they should have access to - it's like a rating
      // if the access level is less than 3, then they're probably not an adult and shouldn't see the adult page
      // if it's GREATER than 3, then they get access to everything. Because they ARE an adult.

      // Way 1
      // let targetHome = '';
      // if (this.user.permissions < 4) {
      //   targetHome = "kidshome";
      // } else {
      //   targetHome = "home";
      // }

      let targetHome = (this.user.permissions < 18) ? "kidshome" : "home";

      this.$router.push({ name: targetHome });
      // debugger;
    }
  }
}