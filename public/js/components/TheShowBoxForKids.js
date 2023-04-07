export default {
  name: 'TheShowBoxForKids',

  template:
  `
    <section class="showBox" v-if="visible">
      <div class="showbox__container">
        <div class="videoBox__kid">
          <video autoplay muted loop>
            <source src="video/kid_movie.mp4" type="video/mp4">
          </video>
          <div class="closeBtn">
            <i @click="$emit('close-box')" class="fa-solid fa-arrow-left"></i>
          </div>
          <div class="descriptionBox__kid">
            <div class="desBox__first">
              <h2>Frozen</h2>
              <h4>2013</h4>
            </div>
            <div class="desBox__second">
              <p>Princess Elsa of Arendelle possesses magical powers allowing her to control ice and snow, often using them to play with her younger sister Anna.</p>
            </div>
            <div class="desBox__third">
              <h4>User Reviews 1.6k</h4>
              <div class="thirdBox__rating">
                <p>1h 48m</p>
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
              <h4>When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna's sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winter's cold grip.</h4>
              <p>MORE>></p>
            </div>
            <div class="aboutBox__right">
              <div class="aboutRight__item">
                <h4>Genres</h4>
                <p>Animation</p>
                <p>Kids & family</p>
                <p>Musical</p>
              </div>
              <div class="aboutRight__item">
                <h4>Certificate</h4>
                <p>G</p>
              </div>
              <div class="aboutRight__item">
                <h4>Top Cast</h4>
                <p>Idina Menzel</p>
                <p>Kristen Bell</p>
              </div>
              <div class="aboutRight__item">
                <h4>Director</h4>
                <p> Jennifer Lee</p>
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
