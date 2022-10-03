<template>
    <section class="button">
        <div class="container-lg py-2">
            <button class="btn btn-dark btn-sm text-uppercase" onclick="myFunction()" id="btnValue" type="button">Dark
                mode</button>
        </div>
    </section>
    <!-- START POSTS SECTION -->
    <section id="posts" class="posts-section">
        <div class="container-lg py-5">
            <div class="container-lg px-0">
                <div class="row">
                    <div class="col">
                        <h2 class="title-section">POSTS</h2>
                    </div>
                    <div class="col clearfix">
                        <span class="title-section d-flex justify-content-end">
                            <button class="btn btn-archive btn-sm" type="button" data-bs-target="#postSlider"
                                data-bs-slide="prev"><i class="fas fa-arrow-left"></i>
                                <span class="visually-hidden">Previous</span>
                            </button><span class="mx-1">&nbsp;</span>
                            <button class="btn btn-archive btn-sm" type="button" data-bs-target="#postSlider"
                                data-bs-slide="next"><i class="fas fa-arrow-right"></i>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="container-lg px-0">
                <div id="postSlider" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="container-lg bg-card">
                                <div class="row d-flex align-items-center">
                                    <div class="col-md-6 p-3 p-md-1">
                                        <div class="container post-body">
                                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                                            <div class="post-info"><i class="far fa-calendar-alt"></i>&nbsp;
                                                Rome, 28 September 1997
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 order-first order-md-last px-0">
                                        <div class="text-img-over">
                                            <img src="https://source.unsplash.com/user/erondu/800x600"
                                                class="card-img-top" alt="...">
                                            <div class="overlay">
                                                <div class="social-hover"><a href="#"><i
                                                            class="fas fa-share-alt"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="container-lg bg-card">
                                <div class="row d-flex align-items-center">
                                    <div class="col-md-6 p-3 p-md-1">
                                        <div class="container post-body">
                                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                                            <div class="post-info"><i class="far fa-calendar-alt"></i>&nbsp;
                                                Rome, 28 September 1997
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-6 order-first order-md-last px-0">
                                        <div class="text-img-over">
                                            <img src="https://source.unsplash.com/user/nasa/800x600"
                                                class="card-img-top" alt="...">
                                            <div class="overlay">
                                                <div class="social-hover"><a href="#"><i
                                                            class="fas fa-share-alt"></i></a></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="container-lg bg-card">
                                <div class="row d-flex align-items-center">
                                    <div class="col-md-6 p-3 p-md-1">
                                        <div class="container post-body">
                                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                                            <div class="post-info"><i class="far fa-calendar-alt"></i>&nbsp;
                                                Rome, 28 September 1997
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 order-first order-md-last px-0">
                                        <div class="text-img-over">
                                            <img src="https://source.unsplash.com/user/jlondonbaker/800x600"
                                                class="card-img-top" alt="...">
                                            <div class="overlay">
                                                <div class="social-hover"><a href="#"><i
                                                            class="fas fa-share-alt"></i></a></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="small text-muted py-4">Images by <a target="_blank"
                href="https://source.unsplash.com/">https://source.unsplash.com/</a></div>

    </section>
    <!-- END POSTS SECTION -->
</template>

<style scoped>

</style>