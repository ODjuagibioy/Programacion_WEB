<template>
    <div>
      <h1 class="mb-4">Tareas del Proyecto</h1>
      <ul class="list-group">
        <li
          v-for="task in tasks"
          :key="task.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <strong>{{ task.name }}</strong> —
            <span :class="getStatusClass(task.status)">{{ task.status }}</span>
          </div>
          <button class="btn btn-success btn-sm">Marcar como completada</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const tasks = [
    { id: 1, name: 'Fundaciones', status: 'En progreso' },
    { id: 2, name: 'Estructura', status: 'Pendiente' },
    { id: 3, name: 'Instalaciones', status: 'Completada' },
  ]
  
  function getStatusClass(status) {
    switch (status) {
      case 'En progreso':
        return 'text-warning'
      case 'Pendiente':
        return 'text-danger'
      case 'Completada':
        return 'text-success'
      default:
        return ''
    }
  }
  </script>