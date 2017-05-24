<template>
  <main>

    <ul class="navigation">
      <router-link to="/" tag="li" class="navigation__item navigation__item--home">
        <a>Hasiera</a>
      </router-link>    
      <router-link to="/telebista" tag="li" class="navigation__item navigation__item--tv" :class="{'navigation__item--active': this.isActive('telebista')}">
        <a>Telebista</a>
      </router-link>    
      <router-link to="/irratia"
        tag="li" class="navigation__item navigation__item--radio"
        :class="{'navigation__item--active': this.isActive('irratia')}">
        <a>Irratia</a>
      </router-link>   
    </ul>
    <transition name="fade" appear>
      <router-view></router-view>
    </transition> 
  </main>
</template>

<script>
  export default {
    methods: {
      isActive(str) {
        return this.$route.path.includes(str)
      }
    }
  }

</script>

<style lang="scss">
  // variables  
  $body-font: 'Gudea', sans-serif;
  $regular-weight: 400;
  $bold-weight: 700;

  $body-bg-color: #f1f1f1;

  $primary-color: #3069c7;


  // base styles
  * {
    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  body {
    font-family: $body-font;
    font-weight: $regular-weight;
    background-color: $body-bg-color;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: $bold-weight;
  }

  a {
    text-decoration: none;
    &,
    &:hover,
    &:active,
    &:visited {
      color: $primary-color;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }


  .navigation {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0;
    list-style: none;
    margin: 0 auto;
    background-color: white;
    z-index: 3;
    box-shadow: 0px -19px 20px 17px rgba(0, 0, 0, 0.5);
  }

  .navigation__item {
    height: 50px;
    flex-grow: 1;
    text-align: center;
    border-top: 4px solid rgba(black,0); 
    
    transition: border-top-color 0.5s ease;

    &:not(:last-child) {
      border-right: 1px solid rgba(grey, 0.3);
    }

    a {
      display: block;
      height: 100%;
      position: relative;
      padding-top: 28px;

      &:before {
        content: '\f09b';
        font-family: FontAwesome;
        font-size: 1.5em;
        position: absolute;
        left: 50%;
        top: 5px;
        transform: translateX(-50%);
      }
    }
  }

  .navigation__item--active,
  .router-link-exact-active {
    border-top-color: $primary-color;
  }

  .navigation__item--home {
    a:before {
      content: '\f015';
    }
  }
  .navigation__item--tv {
    a:before {
      content: '\f26c';
    }
  }
  .navigation__item--radio {
    a:before {
      content: '\f1eb';
    }
  }

  .content {
    padding-top: 50px;
    min-height: 100vh;
    width: 80%;
    margin: 0 auto;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
