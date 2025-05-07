<template>
    <div>
      <h1 class="mb-4">Dashboard del Gerente</h1>
      <div class="row">
        <div class="col-md-6 mb-3" v-for="project in projects" :key="project.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">Progreso: {{ project.progress }}%</p>
              <a :href="'/project/' + project.id" class="btn btn-primary me-2">Ver Detalles</a>
              <a :href="'/chat/' + project.id" class="btn btn-secondary">Chat</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const projects = [
    { id: 1, name: 'Obra A', progress: 70 },
    { id: 2, name: 'Obra B', progress: 40 }
  ]
  </script>

