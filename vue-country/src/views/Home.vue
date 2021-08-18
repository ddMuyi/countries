<template>
    <div class="header">
      <div class="search">
        <input type="text" v-model="search" class="search-element" placeholder="search by country name">
      </div>

      <div class="selector">Region:
        <select name="sort" id="sort" v-model="region">
          <option value="">All</option>
          <option v-for="continent in continents" :value="continent">{{continent}}</option>
        </select>
      </div>
    </div>
  <div class="countries">
    <div v-for="country in searchHandler" class="country">
      <router-link :to="{name:'country', params:{id:country.name}}">
        <div class="img-cont">
          <img class="flag" :src="country.flag" alt="{{country.name}}">
        </div>
        <section class="text-cont">
          <h4 class="country-name">{{country.name}}</h4>
          <p class="population">{{country.population}}</p>
          <p class="region">{{country.region}}</p>
          <p class="capital">{{country.capital}}</p>
        </section>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Countries",
    data() {
      return {
        countries:[],
        search:"",
        region:'',
        continents:["Africa", "Americas", "Asia", "Europe", "Oceania"],
      }
    },

    methods:{
      
    },

    computed:{
      searchHandler() {
        return this.countries.filter(country=>{
          return country.region.match(this.region) && country.name.match(this.search)
        })
      }
    },

    async mounted(){
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        this.countries = data
    }
  }
</script>

<style scoped>
  
</style>
