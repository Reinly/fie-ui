<template>
  <div>导航栏|
  <router-link to="/">Fie</router-link>|
  <router-link to="/xxx">Fie2</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
