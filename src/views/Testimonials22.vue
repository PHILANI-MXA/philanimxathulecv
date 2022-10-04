<template>
  <div id="testimonials" class="container h-100 p-3 ">
    <h2 class="text-center bg-black my-5 p-3 fw-bolder text-white">Testimonials</h2>
    <div class="row p-4">
      <div class="col-md-12">
        <div class=" h-100 text-center">
          <div class=" text-black text-center">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators bg-black">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  aria-label="Slide 1" class="nav-circle active" aria-current="true"></button>
                <button id="nav-circle-center" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1" aria-label="Slide 2" class="nav-circle"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                  aria-label="Slide 3" class="nav-circle"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                  aria-label="Slide 4" class="nav-circle "></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                  aria-label="Slide 5" class="nav-circle"></button>
              </div>
              <div class="carousel-inner py-lg-5">
                <div class="carousel-item active">
                  <div class="carousel-con-custom">
                    <img class="pics img-fluid" src="https://i.postimg.cc/1Xqq4J2C/joel2.jpg" alt="Joel carousel">
                    <h5 class="my-3">Joel Mukanya</h5>
                    <h6>Coding Lecture</h6><br>
                    <p class="text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos!
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="pics img-fluid" src="https://i.postimg.cc/kXryQrjr/Sibongile-2.jpg"
                    alt="Sibongile carousel">
                  <h5 class="my-3">Sibongile Rwayi</h5>
                  <h6>Collegues</h6><br>
                  <p class="text-wrap">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim?</p>
                </div>
                <div class="carousel-item">
                  <img class="pics img-fluid" src="https://i.postimg.cc/g0pyf3Cg/Silizwe-2.jpg"
                    alt="Siliziwe Pani carousel">
                  <h5 class="my-3">Silizwe Pani</h5>
                  <h6>Collegues</h6><br>
                  <p class="text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat?</p>
                </div>
                <div class="carousel-item">
                  <img class="pics img-fluid" src="https://i.postimg.cc/1XDdybhR/Khanyiswa-2.jpg"
                    alt="Khanyiswa Ntenqa carousel">
                  <h5 class="my-3">Khanyiswa Ntenqa</h5>
                  <h6>Collegues</h6><br>
                  <p class="text-wrap">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla.</p>
                </div>
                <div class="carousel-item">
                  <img class="pics img-fluid" src="https://i.postimg.cc/DZLSFN1s/Godwin22.jpg"
                    alt="Khanyiswa Ntenqa carousel">
                  <h5 class="my-3">Godwin</h5>
                  <h6>Senior Lecture</h6><br>
                  <p class="text-wrap">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 25%;
  height: 25%;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  margin: auto;
}

.conos {
  background-color: #e8eeef;
}
</style>