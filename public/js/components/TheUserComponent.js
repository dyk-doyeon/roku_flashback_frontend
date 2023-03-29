export default {
  name: 'TheAllUserComponent',

  created() {
    // get all of our users from the database - everyone with a profile.
    // connected to Roku.

    // We would then render a profile panel for each user using a sub-component
    // inside of this main component
  },

  template: `
    <section>
      <h1>This is the all users component</h1>
      <p>Render a panel for every user in the database</p>
    </section>
  `,

  methods: {
    navToUserHome() {
      // navigate to the user's home page (parents / kids view)
      // we'll pass along the user object that goes with the user "panel"
      // we click on
    }
  }
} 
