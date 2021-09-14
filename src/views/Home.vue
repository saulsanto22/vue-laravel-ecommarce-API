<template>
  <div class="home">
    <Header />
    <section-hero />
    <women-banner />
    <instagram-profile/>
    <patner-logo/>
    <footer-shayna />
    
 
  </div> 
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import SectionHero from '../components/SectionHero.vue'
import WomenBanner from '../components/WomenBanner.vue'
import InstagramProfile from '../components/InstagramProfile.vue'
import PatnerLogo from '../components/PatnerLogo.vue'
import FooterShayna from '../components/FooterShayna.vue'




export default {
  name: 'Home',
  components: {
    // HelloWorld
    Header ,
    SectionHero,
    WomenBanner,
    InstagramProfile,
    PatnerLogo,
    FooterShayna
  

 
  }
}
</script>
