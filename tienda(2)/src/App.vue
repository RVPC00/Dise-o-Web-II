<script setup>
import { RouterView } from 'vue-router'
import MenuCom from './components/MenuCom.vue'
</script>
<template>
  <header>

<MenuCom/>

  </header>

  <RouterView />
</template>
<style>
/* Estilos generales para que se vea bien */
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
}
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}
h1 {
  text-align: center;
  color: #42b983;
}
.form-container, .list-container {
  background-color: #2f2f2f;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input, textarea {
  width: 100%;
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #3f3f3f;
  color: white;
  box-sizing: border-box; /* Importante para el padding */
}
.form-buttons {
    display: flex;
    gap: 1rem;
}
button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #36a473;
}
button.delete {
  background-color: #e53935;
}
button.delete:hover {
  background-color: #c62828;
}
table {
  width: 100%;   border-collapse: collapse;     margin-top: 1rem;
}
th, td {
  padding: 0.8rem;    text-align: left;    border-bottom: 1px solid #444;
}
th {
  background-color: #3a3a3a;
}
.actions {
  display: flex;    gap: 0.5rem;
}
</style>