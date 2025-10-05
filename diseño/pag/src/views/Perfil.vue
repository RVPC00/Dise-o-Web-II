<template>
  <div class="perfil">
    <div class="perfil-header">
      <h1>Mi Perfil</h1>
    </div>

    <div class="perfil-content">
      <Sidebar />

      <div class="main-content">
        <div class="card">
          <h2>Visión</h2>
          <p>
            Somos una plataforma enfocada en el aprendizaje de estudiantes y profesionales en el
            área del desarrollo de software
          </p>
        </div>
      </div>
    </div>

    <div class="perfil-footer">
      <button class="btn">Contáctanos</button>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Perfil',
  components: { Sidebar },
}
</script>

<style scoped>
.perfil {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.perfil-header {
  width: 100%;
  background-color: #3bb3b3;
  padding: 20px 0;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 8px;
}

.perfil-header h1 {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
}

.perfil-content {
  display: flex;
  width: 100%;
  gap: 20px;
}

.main-content {
  flex: 1;
}

.card {
  padding: 20px;
  border: 2px solid #3bb3b3;
  border-radius: 10px;
  background-color: #f7fdfd;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.card h2 {
  margin-bottom: 10px;
  font-weight: bold;
  color: #3bb3b3;
}

.perfil-footer {
  margin: 30px 0;
}

.btn {
  background-color: #3bb3b3;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background-color: #329a9a;
}

@media (max-width: 768px) {
  .perfil-content {
    flex-direction: column;
  }
}
</style>
