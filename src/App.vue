<template>
  <NavComp/>
  <HomeView/>
  <AboutView/>
  <AboutV/>
  <AboutC/>
  <Clone/>
  <Contact2/>
  <FooterComp />
</template>

<script>
import NavComp from './components/navComp.vue';
import FooterComp from './components/footerComp.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ProView from './views/proView.vue';
import AboutV from './views/aboutV.vue';
import AboutC from './views/AboutC.vue';
import Clone from './views/clone.vue';
import ContactView from './views/contactView.vue';
import TestimonialView from './views/TestimonialView.vue';
import Contact2 from './views/contact2.vue';
import Testimonials22 from './views/Testimonials22.vue';



export default {
  name: "",
  components: { NavComp, FooterComp, HomeView, AboutView, ProView, AboutV, AboutC, Clone, ContactView, TestimonialView, Contact2, Testimonials22 }
}

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>