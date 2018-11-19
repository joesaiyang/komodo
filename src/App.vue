<template>
  <div id="app">
    <app-navigation></app-navigation>
    <app-header></app-header>
    <app-examples></app-examples>
    <app-card></app-card>
    <app-footer></app-footer>
  </div>
</template>

<script>
  export default {
  }
  
</script>

<style lang="scss">

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  body {
    margin: 0;
  }
  h1 {
    font-size: 3rem;
  }
  .sr-only {
    position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
  }
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  .grid {
    display: grid; 
    grid-gap: 10px;
  }

  .one-fourth {
    grid-template-columns: 25%;
    grid-gap: 10px;
  }
  .half {
    grid-template-columns: 50%;
    grid-gap: 10px;
  }
  .three-fourth {
    grid-template-columns: 75%;
    grid-gap: 10px;
  }

  .one-third {
    width: 33.33%
  }
  .two-third {
    grid-template-columns: .6fr;
    grid-gap: 10px;

  }
  a:focus {
    outline: 2px dashed rgba(178, 9, 220, .8);
    padding: 5px;
  }
</style>
