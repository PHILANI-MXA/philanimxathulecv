<template>
  <div id="projects" class="container h-100 overflow-auto">
    <div class="row  justify-content-between">
      <!-- <div v-for="card in projects" class="col-md-4 card d-flex gy-3">
        <div>
          <div class="card-header">
            <h5 class="card-title">{{card.projectname}}</h5>
          </div>
          <div class="card-body">
            <img class="img-fluid" :src="card.img" alt="project image">
            <a :href="card. github" class="btn btn-primaryd-flex btn-success justify-content-between">Ghub</a>
            <a :href="card.live" class="btn btn-primaryd-flex btn-danger justify-content-between">live</a>
          </div>
        </div>
      </div> -->
      <div v-for="card in projects" class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="card.img" class="img-fluid rounded-start" alt="title">
          </div>
          <a :href="card.github" class="btn btn-primaryd-flex btn-success justify-content-between">Ghub</a>
          <a :href="card.live" class="btn btn-primaryd-flex btn-danger justify-content-between">live</a>
          <div class="col-md-8 border border-black">
            <div class="card-body">
              <h5 class="card-title">{{card.projectname}}</h5>
              <p>Please take care of this book and consult us if in need to loan it</p>
            </div>
            <a :href="card.github" class="btn btn-primaryd-flex btn-success justify-content-between">Ghub</a>
            <a :href="card.live" class="btn btn-primaryd-flex btn-danger justify-content-between">live</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  }
}

</script>

<style scoped>
/* .card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  font-family: San-Francisco;
  border-radius: 10px;
  transition: 0.4s ease-out;
  width: 28%;
} */

.card{
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
color: black;
font-family: San-Francisco;
transition: 0.4s ease-out;
margin-bottom: 10px;
width: 40%;
height: 200px;
}

.card:hover {
  transform: translate3d(0px, -1px, 0px);
}

.btn {
  justify-content: space-between;
  align-content: space-around;
}
</style>