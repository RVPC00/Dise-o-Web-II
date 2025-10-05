<script setup>
import MenuCom from '../components/MenuCom.vue'
import fondotar from '../assets/fondotar.jpg'

const cursos = [
  { nombre: 'Desarrollo Web', descripcion: 'Aprende a crear sitios web desde cero.' },
  { nombre: 'Ciberseguridad', descripcion: 'Protege sistemas y redes de ataques.' },
  { nombre: 'Apps Móviles', descripcion: 'Desarrolla apps para Android y iOS.' },
  { nombre: 'Machine Learning', descripcion: 'Introducción al aprendizaje automático.' },
  { nombre: 'DevOps', descripcion: 'Automatiza y mejora procesos de desarrollo.' },
  { nombre: 'Bases de Datos', descripcion: 'Diseña y gestiona bases de datos.' },
  { nombre: 'Frontend Avanzado', descripcion: 'React, Vue y otras tecnologías.' },
  { nombre: 'Backend Profesional', descripcion: 'APIs, servidores y lógica de negocio.' },
  { nombre: 'Diseño UI/UX', descripcion: 'Crea experiencias visuales efectivas.' },
]

const cabeceraColor = '#3AAFA9'
</script>

<template>
  <div class="catalogo-view">

    <MenuCom />

    <div class="cabecera text-center text-white">
      <h1>Catálogo</h1>
    </div>

    <div class="container py-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(curso, index) in cursos" :key="index">
          <div class="card h-100 shadow">
            <img :src="fondotar" class="card-img-top" alt="Imagen del curso">
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title">{{ curso.nombre }}</h5>
                <p class="card-text">{{ curso.descripcion }}</p>
              </div>
              <div class="mt-3 d-flex justify-content-between">
                <button type="button" class="btn btn-light">Temario</button>
                <button class="btn btn-dark">Inscribirte</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalogo-view {
  background-color: #f8f9fa;
  min-height: 100vh;
}

.cabecera {
  background-color: #3AAFA9;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  border-radius: 6px;
  overflow: hidden;   
  margin: 0;    
  padding: 0; 
  background-color: #3AAFA9;     
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.02);
}

.card-img-top {
  display: block;   
  width: 100%;   
  height: 200px;   
  object-fit: cover;  
  border-radius: 0;     
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
}

.card-text {
  font-size: 0.95rem;
  color: #e8e8e8;
}

.btn-light {
  background-color: #ffffff;
  border-color: #ffffff;
  color: #000000;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #2B7A78;
  border-color: #2B7A78;
}

.btn-dark {
  background-color: #000000;
  border-color: #000000;
  color: #ffffff;
  transition: background-color 0.3s, color 0.3s;
}

.btn-dark:hover {
  background-color: #2B7A78;
  color: #ffffff;
}
</style>
