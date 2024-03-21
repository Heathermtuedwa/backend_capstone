<template>
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
 <section class="section-a">
      <div class="container">
        <div>
          <h1>Where Dreams Meet Fabric.</h1>
          <p>
            Welcome to our bridal haven, where every stitch holds a story of love and dreams.
             At Royalty, we specialize in curating the perfect ensemble for your special day.
              With a passion for timeless elegance and an eye for the latest trends, we offer a handpicked selection of exquisite wedding dresses that reflect the unique essence of every bride. 
              From ethereal lace to luxurious silks, our collection embodies grace, sophistication, and unparalleled craftsmanship.
               Our dedicated team is committed to providing a personalized experience, ensuring that each bride feels confident, radiant, and utterly beautiful as she walks down the aisle. 
               Discover the gown of your dreams and embark on this unforgettable journey with us at Royalty.
          </p>
        </div>
        <img src="https://i.ibb.co/cXJv0ry/6ee7729522b1cae03004185263a78fff.jpg" alt="" />
      </div>
    </section>

    <!-- Large Text -->
    <section id="about" class="section-b">
      <div class="overlay">
        <div class="section-b-inner py-5">
          <h2 class="text-5 mt-1">Elegance for your Everlasting Moment</h2>
          <p class="mt-1">
            As the beacon of bridal elegance, 
            we pride ourselves on offering an exquisite array of wedding dresses that encapsulate the essence of romance and individuality. 
            From classic ball gowns to modern mermaids, our curated collection showcases the finest fabrics, 
            intricate details, and flattering silhouettes, ensuring every bride finds her perfect match. 
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="section-c">
      <div class="gallery">
        <a href="#" class="big"
          ><img src="https://i.ibb.co/X54Jwjp/Luxury-Ball-Gown-Wedding-Dresses-Long-Sleeves-V-Neck-Gloves-Veil-Appliques-Beaded-Pearls-Ruffles-Bri.webp" alt=""
        /></a>
        <a href="#" class="big"
          ><img src="https://i.ibb.co/2krPYVd/54b1474ca47db4ec53bf7c929246ec92.jpg" alt=""
        /></a>
        <a href="#" class="big"
          ><img src="https://i.ibb.co/2M8fGXY/3ba35a8b08cb5122e5721a5fd4477efa.jpg" alt=""
        /></a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="section-footer py-4 bg-secondary">
      <div class="container">
        <div>
          <h2 class="text-2 mb-1">Follow Us</h2>
          <a href="http://twitter.com">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="http://facebook.com">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="http://youtube.com">
            <i class="fab fa-youtube fa-2x"></i>
          </a>
        </div>
        <div>
          <h3>Company Info</h3>
          <ul>
            <li><a href="#">All Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3>Blog Posts</h3>
          <ul>
            <li><a href="#">The Art of Custom Wedding Dress Design</a></li>
            <li><a href="#"> Vintage Vibes</a></li>
            <li><a href="#">Accessorizing Your Wedding Dress</a></li>
          </ul>
        </div>
        <div>
          <h3>Subscribe</h3>
          <p>
          Place enter your email address to subscribe 
          </p>
          <form
            class="mt-1"
            name="email-form"
            method="POST"
            data-netlify="true"
          >
            <div class="email-form">
              <span class="form-control-wrap"
                ><input
                  type="email"
                  name="email"
                  id="email"
                  size="40"
                  class="form-control"
                  placeholder="E-mail"/></span
              ><button type="submit" value="Submit" class="form-control submit">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
</template>

<script>

</script>

<style scoped>
/* *{
  background-color: #333;
} */
body {
  font-family: 'Catamaran', sans-serif;
  line-height: 1.6;
  color: #333;
  font-size: 1.1rem;
 
}

h1,
h2,
h3,
h4 {
  line-height: 1.3;
}

a {
  color: #444;
  text-decoration: none;
 
}

ul {
  list-style: none;
}

img {
  width: 100%;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
}


.section-a {
  margin: 2rem 0;
}

.section-a .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  align-items: center;
  justify-content: center;
  
}

.section-a h1 {
  font-size: 4rem;
  color: var(--primary-color);
}

.section-a p {
  margin: 1rem 0;
}

.section-b {
  position: relative;
  background: url('https://i.ibb.co/Zcsy3fX/luxurious-princess-ball-gown-long-sleevess-sparkly-sequins-bridal-gowns-with-sweep-train-wedding-dre.jpg') no-repeat bottom center/cover;
  height: 600px;
}

.section-b-inner {
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  max-width: 860px;
  padding: 5rem 0;
}

.section-b-inner h3 {
  font-size: 2rem;
}

.section-b-inner h2 {
  font-size: 5rem;
  margin-top: 1rem;
}

.section-b-inner p {
  margin-top: 1rem;
  font-size: 1.5rem;
}

.section-c .gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.section-c .gallery a:first-child {
  grid-row: 1/3;
  grid-column: 1/3;
}

.section-c .gallery a:nth-child(2) {
  grid-column-start: 3;
  grid-column-end: 5;
}

.section-c .gallery img,
.section-c .gallery a {
  width: 100%;
  height: 100%;
}

.section-footer {
  background: var(--primary-color);
  color: #fff;
  padding: 4rem 0;
}

.section-footer .container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}

.section-footer h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.section-footer h3 {
  margin-bottom: 0.7rem;
}

.section-footer a {
  line-height: 1.9;
  color: #ccc;
}

.section-footer a > i {
  color: #555;
  margin-right: 0.5rem;
}

.container h1
.section-b-inner h3,
.section-b-inner h2,
.section-b-inner p {
  opacity: 0; /* Initially set opacity to 0 */
}

/* Define slide-in animation for headings from the left */
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Define slide-in animation for paragraphs from the right */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Apply animations to headings and paragraphs */
.section-b-inner h3 {
  animation: slideInFromLeft 1s ease forwards;
}

.section-b-inner h2 {
  animation: slideInFromLeft 1s ease forwards;
}

.section-b-inner p {
  animation: slideInFromRight 1s ease forwards;
}
.container h1 {
  animation: slideInFromLeft 1s ease forwards;
}

.email-form {
  width: 100%;
  display: inline-block;
  background-color: #555;
  position: relative;
  border-radius: 20px;
  line-height: 0;
  margin-top: 1rem;
}


.email-form .form-control {
  display: inline-block;
  border: 0;
  outline: 0;
  font-size: 1rem;
  color: #ddd;
  background-color: transparent;
  font-family: inherit;
  margin: 0;
  padding: 0 3rem 0 1.5rem;
  width: 100%;
  height: 45px;
  border-radius: 20px;
}

.email-form .submit {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background-color: #eee;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  color: #333;
  cursor: pointer;
  border-radius: 0 20px 20px 0;
}

.btn {
  display: inline-block;
  background: var(--primary-color);
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 30px;
}

.btn:hover {
  background: var(--secondary-color);
}

.overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--overlay-color);
}

@media (max-width: 700px) {
  .section-a .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .section-a .container div:first-child {
    order: 2;
  }

  .section-a .container div:nth-child(2) {
    order: -1;
  }

  .section-a img {
    width: 80%;
    margin: auto;
  }

  .section-c .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .section-c .gallery a:first-child {
    grid-row: 1/1;
    grid-column: 1/1;
  }

  .section-c .gallery a:nth-child(2) {
    grid-column: 2/4;
    grid-row: 2/2;
  }

  .section-c .gallery a:last-child {
    display: none;
  }

  .section-footer {
    padding: 2rem 0;
  }
  .section-footer .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .section-footer div:nth-child(2),
  .section-footer div:nth-child(3) {
    display: none;
  }
}

</style>
