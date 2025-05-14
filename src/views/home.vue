<template>
  <div class="home">
    <div class="content">
      <h1>Bienvenido a TRAZO</h1>
      <p class="subtitle">
        Plataforma integral para la gestión de proyectos de construcción.
      </p>

      <p>
        TRAZO es una herramienta diseñada para facilitar el trabajo colaborativo en proyectos de construcción.
        Desde la planificación hasta el seguimiento de avances, esta aplicación te ofrece las herramientas
        necesarias para optimizar tus operaciones.
      </p>

      <div class="features">
        <div class="feature-card">
          <h2>📋 Panel de Administración</h2>
          <p>
            El <strong>Dashboard</strong> permite al gerente crear, editar y supervisar los proyectos activos, asignar recursos y gestionar tiempos.
          </p>
        </div>
        <div class="feature-card">
          <h2>💬 Comunicación en Tiempo Real</h2>
          <p>
            En la sección <strong>Chat</strong> los miembros del equipo pueden intercambiar mensajes instantáneos, resolver dudas y mantenerse conectados durante todo el proceso.
          </p>
        </div>
        <div class="feature-card">
          <h2>🏗 Estados de las Obras</h2>
          <p>
            La vista de <strong>Proyectos</strong> ofrece un seguimiento detallado del avance de cada obra: desde los materiales utilizados hasta el progreso diario.
          </p>
        </div>
      </div>

      <button @click="goToDashboard" class="btn">Ir al Dashboard</button>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  background: linear-gradient(to right, #f0f4f8, #dbeafe);
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.content {
  max-width: 1000px;
  background: white;
  padding: 50px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 20px;
}

p {
  font-size: 1rem;
  color: #374151;
  line-height: 1.6;
  margin-bottom: 20px;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
}

.feature-card {
  background-color: #f9fafb;
  padding: 20px;
  border-left: 6px solid #2563eb;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.feature-card h2 {
  margin: 0 0 10px;
  font-size: 1.25rem;
  color: #1d4ed8;
}

.feature-card p {
  margin: 0;
  font-size: 1rem;
}

.btn {
  background-color: #2563eb;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.btn:hover {
  background-color: #1e40af;
}
</style>