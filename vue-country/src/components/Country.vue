<template>
  <div class="country-page">
    <route-link class="back">
      <button @click="goBack">Back</button>
    </route-link>
    <div class="flag-cont">
      <img :src="country.flag" :alt="country.name" class="big-flag">
    </div>
    <div class="details-cont">
      <div class="right">
        <h4>{{country.name}}</h4>
        <p>native Name: {{country.nativeName}}</p>
        <p>population: {{country.population}}</p>
        <p>Region: {{country.region}}</p>
        <p>Sub-Region: {{country.subregion}}</p>
        <p>Capital: {{country.capital}}</p>
      </div>
      <div class="left">
        <p>Top Level Domain: {{country.topLevelDomain}}</p>
        <p>Currencies: {{getCurrency()}}</p>
        <p>Languages: {{getLanguage()}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Country',
    props:{
      id:String
    },
    data() {
      return {
        country:{}
      }
    },
    methods:{
      getCurrency() {
        const currencyList=[]
        this.country.currencies.map(currency=>{
          currencyList.push(currency.name)
        })
        const newCurrencyList = currencyList.join(',')
          return newCurrencyList
      },
      getLanguage() {
        const languageList=[]
        this.country.languages.map(language=>{
          languageList.push(language.name)
        })
        const newLanguageList = languageList.join(',')
          return newLanguageList
      },
      goBack() {
        this.$router.go(-1)
      }
    },
    async created() {
      const response = await fetch('https://restcountries.eu/rest/v2/name/' + this.id)
      const data = await response.json()
      this.country = data[0]
      console.log(data[0])
    }
  }
</script>

<style>

</style>