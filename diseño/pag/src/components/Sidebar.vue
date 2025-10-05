<template>
  <div class="sidebar">
    <ul class="menu-list">
      <li><router-link to="/perfil">Índice Temático</router-link></li>
      <li><router-link to="/perfil">Clases Grabadas</router-link></li>
      <li><router-link to="/perfil">Calificaciones</router-link></li>
      <li><router-link to="/perfil">Participantes</router-link></li>
      <li><router-link to="/perfil">Actividades</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f0f4f9;
  padding: 20px;
  border-radius: 8px;
  height: fit-content;
}

.menu-list {
  list-style: none;
}

.menu-list li {
  margin-bottom: 10px;
}

.menu-list a {
  text-decoration: none;
  color: #333;
  display: block;
  padding: 12px 15px;
  border-radius: 6px;
  transition: background-color 0.3s;
  font-weight: 500;
}

.menu-list a:hover {
  background-color: #e0e8f5;
}

.menu-list a.router-link-active {
  background-color: #4a6da7;
  color: white;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
  }
}
</style>
