<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div >

      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/register">Register</RouterLink></li>
          <li><RouterLink to="/login">Login</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<style scoped>
  nav ul {
    display: flex;
  }

  nav ul li{
    list-style: none;
    margin-right: 2rem;
  }
</style>

