<template>
  <div id="app">
    <router-link  to="/" exact >Accueil</router-link> |
    <router-link to="/about">A propos</router-link>
    <contact/>
    <br><br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
#app {
  text-align: center;
  margin-top: 60px;
}
.router-link-active{
  color:black
}
</style>
