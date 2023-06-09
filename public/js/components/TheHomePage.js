import Showbox from "./TheShowBox.js";

export default {
  name: 'TheHomePageComponent',

  template: `
  <!--Navbar-->
  <nav id="navbar">
  <div class="navbar__box">
    <i class="fa-solid fa-ellipsis-vertical onlyTablet"></i>
    <a href="/"><h2>_ROKU FLASHBACK_</h2></a>
    <ul class="navbar__menu">
      <li class="navbar__menu__item"><a href="/"><h4>MOVIES</h4></a></li>
      <li class="navbar__menu__item"><a href="/"><h4>TV_SERIES</h4></a></li>
      <li class="navbar__menu__item"><a href="/"><h4>MUSIC</h4></a></li>
      <li class="navbar__menu__item"><a href="/"><h4>WATCH_LIST</h4></a></li>
    </ul>
    <div class="navbar__serachbar">
      <input>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="navbar__user">
      <a href="/">
        <img src="images/amelia.png" alt="User Image">
      </a>
    </div>
  </div>
  <div class="onlyTabletInput">
    <input>
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  </nav>

  <!-- HERO IMG-->
  <div id="hero__img">
  </div>

  <!--Main-->
  <section id="home">
    <!--Top 5-->
    <div class="topFive">
      <h3>TOP5_IN_CANADA</h3>
      <div class="topFive__movie" @click="showBox">
      </div>
    </div>

    <Showbox :visible="showBoxVisible" @close-box="closeBox"></Showbox>

    <!--TV Show-->
    <div class="tvShows">
      <h3>TV_SHOWS</h3>
      <div class="tvshows__list" @click="showBox"></div>
    </div>

    <!--Music-->
    <div class="music">
      <h3>MUSIC</h3>
      <div class="music__box">
        <div class="music__box__item">
          <img src="images/music_1.png" alt="Music Image">
        </div>
        <div class="music__box__item">
          <img src="images/music_2.png" alt="Music Image">
        </div>
        <div class="music__box__item">
          <img src="images/music_3.png" alt="Music Image">
        </div>
        <div class="music__box__item">
          <img src="images/music_4.png" alt="Music Image">
        </div>
      </div>
    </div>
  </section>


  <!--Footer-->
  <footer id="footer">
    <div class="backToTop">
      <a href="/">
        <h3>BACK_TO_TOP</h3>
        <i class="fa-solid fa-caret-up"></i>
      </a>
    </div>
    <h2>_ROKU FLASHBACK_</h2>
    <h4>
      UNLINITED_MOVIES_TV_SHOWS_AND_MORE
      MORE_STORIES_THAN_EVER_BEFORE
    </h4>
    <p>Copyright © 2023 _ROKU FLASHBACK_</p>
  </footer>
  `,

  data() {
    return {
      showBoxVisible: false,
    };
  },

  components: {
    Showbox,
  },

  methods: {
    showBox() {
      this.showBoxVisible = true;
    },
    closeBox() {
      this.showBoxVisible = false;
    },
  },

  created() {
    // Movies 
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '27f4f88fb9msh56e4535fa65bdfap1f539bjsn7c01bb61481d',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };

    fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20', options)
      .then(response => response.json())
      .then(data => {
        const list = data.d;
      
        list.map((item) => {
          const name = item.l;
          const poster = item.i.imageUrl;
          const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`;
          document.querySelector(".topFive__movie").innerHTML += movie;
          document.querySelector(".tvshows__list").innerHTML += movie;
        })
      })
      .catch(err => console.error(err));
  }
}

