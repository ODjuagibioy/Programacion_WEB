<template>
    <div class="home">
      <h1>Bienvenido a la aplicación TRAZO!</h1>
      <p>Esta es la página de presentación donde puedes obtener información sobre nuestra aplicación.</p>
      <button @click="goToDashboard" class="btn btn-primary">Ir al Dashboard</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  function goToDashboard() {
    router.push({ name: 'Dashboard' }) // Redirige a la ruta del Dashboard
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
    background-color: blanchedalmond;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  button {
    font-size: 1rem;
  }


  </style>