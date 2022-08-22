<template>
<div id="about" class="container text-start h-100 justify-content-between overflow-auto">
<h2 class="text-center bg-black my-2 p-3 fw-bolder">Testimonials</h2>
<div class="row p-4">
<div class="col-md-12">
 <div class=" h-100 text-center">
            <div class=" text-black text-center">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators bg-black">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 1" class="nav-circle active" aria-current="true"></button>
                        <button id="nav-circle-center bg-black" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" class="nav-circle"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" class="nav-circle"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" class="nav-circle "></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" class="nav-circle"></button>
                    </div>
                    <div class="carousel-inner py-lg-5">
                        <div class="carousel-item active">
                            <div class="carousel-con-custom">
                                <img class="pics img-fluid" src="https://i.postimg.cc/1Xqq4J2C/joel2.jpg" alt="Joel carousel">
                                <h5 class="my-3">Joel Mukanya</h5>
                                <h6>Coding Lecture</h6>
                                <p class="text-wrap"> Philani is one of the best students at Lifechoices Coding Academy. He has great communication and intellectual skills. Philani is able to learn new programming tools quickly. I highly recommend him a position where he gets to work on both the back-end and front-end.
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="pics img-fluid" src="https://i.postimg.cc/kXryQrjr/Sibongile-2.jpg" alt="Sibongile carousel">
                            <h5 class="my-3">Sibongile Rwayi</h5>
                            <h6>Collegues</h6>
                            <p class="text-wrap">Philani is an extremely hard-working and creative web developer. Besides the fact that he's extremely good at coding, I feel that he's best trait is that he never shies away from helping any of his peers. I have no doubt that Philani will be a successful web developer or animator one day.</p>
                        </div>
                        <div class="carousel-item">
                            <img class="pics img-fluid" src="https://i.postimg.cc/g0pyf3Cg/Silizwe-2.jpg" alt="Siliziwe Pani carousel">
                            <h5 class="my-3">Silizwe Pani</h5>
                            <h6>Collegues</h6>
                            <p class="text-wrap">Philani is an open-minded person and I work well with him. He is a dedicated and hard worker and he always gets the job done.</p>
                        </div>
                        <div class="carousel-item">
                            <img class="pics img-fluid" src="https://i.postimg.cc/1XDdybhR/Khanyiswa-2.jpg" alt="Khanyiswa Ntenqa carousel">
                            <h5 class="my-3">Khanyiswa Ntenqa</h5>
                            <h6>Collegues</h6>
                            <p class="text-wrap"> If you have knowledge, let others light their candles in it."- Margaret Fuller. Philani has often been described as a sensei and g.o.a.t by his peers and deservedly so, as he's always lending a helping hand whenever asked. Philani is already a top achiever, but it's his willingness to share his knowledge that speaks to his character. He will be an invaluable asset wherever he decides to go next</p>
                        </div>
                        <div class="carousel-item">
                            <img class="pics img-fluid" src="https://i.postimg.cc/DZLSFN1s/Godwin22.jpg" alt="Khanyiswa Ntenqa carousel">
                            <h5 class="my-3">Godwin</h5>
                            <h6>Senior Lecture</h6>
                            <p class="text-wrap">Philani is really passionate about what tech and improving day by day. Philani is very hardworking and possesses a keen attention to detail. He is always ready and willing to assist his peers.</p>
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

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.pics {
    width: 25%;
    height: 25%;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
    object-position: 0 0px;
}



</style>


