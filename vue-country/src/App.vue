<template>
    <div class="title">
      <h3>Where in the World</h3>
      <h3 @click="modeChanger"><span><i class="fas fa-moon"></i></span> Dark Mode</h3>
    </div>
  <router-view/>
</template>

<script>
  export default {
    data() {
      return {
        color:'hsl(200, 15%, 8%)',
        backgroundColor:'hsl(0, 0%, 98%)',
        element:'hsl(0,0%,100%)',
        inputColor:'hsl(0, 0%, 52%)'
      }
    },
    methods:{
    modeChanger() {
      this.color=this.color==='hsl(200, 15%, 8%)'?'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
      this.backgroundColor=this.backgroundColor==='hsl(0, 0%, 98%)'? 'hsl(207, 26%, 17%)': 'hsl(0, 0%, 98%)'
      this.element= this.element==='hsl(0,0%,100%)'? 'hsl(209, 23%, 22%)':'hsl(0,0%,100%)'
    }
  }
  }
</script>


<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration:none;
    color:v-bind(color);
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

:root{    
    color:v-bind(color);
    background-color:v-bind(backgroundColor);
  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-size:14px;
    font-family:Campton;
    color:v-bind(color);
  }

  .title {
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:90%;
    height:5vh;
    background-color:v-bind(element);
  }

  .img-cont {
    width:100%;
    height:100px;
  }

  .text-cont {
    padding:10px;
  }

  .header {
    margin:0 auto;
    width:90%;
    height:10vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:v-bind(backgroundColor);
  }

  .search {
    width:15rem;
    height:3rem;
    margin-left:4vw;
  }

  select{
    margin-right:4vh;
    height:3rem;
    width:10rem;
    background-color:v-bind(element);
  }

  .search-element {
    width:100%;
    height:100%;
    border:none;
    border-radius:4px;
    color:v-bind(inputColor);
  }

  .search-element:focus {
    outline:none;
  }

  .flag {
    display:block;
    width:100%;
    height:100%;
  }

  .country {
    background-color:v-bind(element);
    border-radius: 6px;
    width:15vw;
    height:auto;
    display:block;
  }

  .countries {
    width:90%;
    height:auto;
    background-color:v-bind(backgroundColor);
    margin:0 auto;
    padding:25px;    
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap: 2rem;
  }

  .country-page {
    background-color:v-bind(element);
    color:v-bind(color);
    width:90%;
    height:95vh;
    margin:0 auto;
    display:flex;
    align-items:center;
  }
  .flag-cont {
    width:45%;
    height:auto;
    margin:0 auto;
  }

  .big-flag {
    width:100%;
    height:auto;
    display:block;
  }

  .details-cont {
    width:45%;
    display:flex;
    justify-content:space-around;    
  }

  @media screen and (max-width:800px) {
    .country{
      width:35%;
    }
    .country-page {
      flex-direction:column;
      align-items:flex-start;
    }
    .flag-cont{
      width:90%;
    }
    .details-cont {
      margin:0;
      flex-direction:column;
      align-items:center;
    }

    .right, .left {
      width:90%;
    }

    .left{
      margin-top:2rem;
    }
  }

  @media screen and (max-width:350px) {
    .country{
      width:60%;
    }

    .header {
      flex-direction:column;
      height:15vh;
      justify-content: space-around;
    }
  }
</style>
