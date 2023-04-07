export default {
  name: 'TheShowBox',

  template:
  `
    <section class="showBox" v-if="visible">
      <div class="showbox__container">
        <div class="videoBox">
          <video autoplay muted loop>
            <source src="video/default_movie.mp4" type="video/mp4">
          </video>
          <div class="closeBtn">
            <i @click="$emit('close-box')" class="fa-solid fa-arrow-left"></i>
          </div>
          <div class="descriptionBox">
            <div class="desBox__first">
              <h2>Interstellar</h2>
              <h4>2014</h4>
            </div>
            <div class="desBox__second">
              <p>In 2067, a global famine caused humanity to abandon scientific pursuits such as space exploration. Ex-NASA pilot Joseph Cooper is forced to work as a farmer.</p>
            </div>
            <div class="desBox__third">
              <h4>User Reviews 1.6k</h4>
              <div class="thirdBox__rating">
                <p>2h 49m</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>
          </div>
          <div class="aboutBox">
            <div class="aboutBox__left">
              <h3>Storyline</h3>
              <h4>In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.</h4>
              <p>MORE>></p>
            </div>
            <div class="aboutBox__right">
              <div class="aboutRight__item">
                <h4>Genres</h4>
                <p>Sci-fi</p>
                <p>Adventure</p>
                <p>Action</p>
              </div>
              <div class="aboutRight__item">
                <h4>Certificate</h4>
                <p>PG</p>
              </div>
              <div class="aboutRight__item">
                <h4>Top Cast</h4>
                <p>Matthew McConaughey</p>
                <p>Anne Hathaway</p>
              </div>
              <div class="aboutRight__item">
                <h4>Director</h4>
                <p>Christopher Nolan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  }
}
