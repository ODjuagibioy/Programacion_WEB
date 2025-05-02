<template>
    <div>
      <h1 class="mb-4">Chat del Proyecto</h1>
      <div class="border p-3 mb-3" style="height: 250px; overflow-y: auto;">
        <div v-for="(msg, index) in messages" :key="index" class="mb-2">
          <strong>{{ msg.user }}:</strong> {{ msg.text }}
        </div>
      </div>
      <div class="input-group">
        <input
          v-model="newMessage"
          type="text"
          class="form-control"
          placeholder="Escribe un mensaje..."
        />
        <button @click="sendMessage" class="btn btn-primary">Enviar</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const newMessage = ref('')
  const messages = ref([
    { user: 'Ana', text: 'Hola equipo' },
    { user: 'Carlos', text: 'Vamos avanzando' }
  ])
  
  function sendMessage() {
    if (newMessage.value.trim()) {
      messages.value.push({ user: 'Tú', text: newMessage.value })
      newMessage.value = ''
    }
  }
  </script>