<script setup>
import MenuCom from '../components/MenuCom.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';

const usuarioActual = ref({ 
  nombre: '', 
  apellidos: '', 
  email: '', 
  ci: '', 
  celular: '', 
  domicilio: '', 
  cursos: '' 
});

const api = axios.create({
  baseURL: '', 
});

const cursosDisponibles = ref([]);
const cargarCursos = async () => {
  try {
    const response = await api.get('/cursos');
    cursosDisponibles.value = response.data;
  } catch (error) {
    console.error('Error al cargar cursos:', error);
    alert('Error al cargar los cursos. Revisa la consola.');
  }
};

const guardarUsuario = async () => {
  if (!usuarioActual.value.nombre || !usuarioActual.value.email) {
    alert('Nombre y email son requeridos.');
    return;
  }

  if (usuarioActual.value.cursos) {
    const confirmacion = window.confirm(`¿Estás seguro de inscribirte al curso "${cursosDisponibles.value.find(c => c.id === usuarioActual.value.cursos)?.nombre}"?`);
    if (!confirmacion) {
      return;
    }
  }

  try {
    await api.post('/usuarios', usuarioActual.value);
    alert('¡Usuario creado exitosamente!');
    Object.keys(usuarioActual.value).forEach(key => {
      usuarioActual.value[key] = '';
    });
  } catch (error) {
    console.error('Error al guardar:', error);
    alert('Error al crear el usuario. Revisa la consola.');
  }
};

onMounted(() => {
  cargarCursos();
});
</script>

<template>
    <MenuCom />
  <div class="container-fluid min-vh-100 d-flex align-items-center justify-content-center p-3">
    <div class="card shadow-sm border-0 rounded-3" style="max-width: 400px;">
      
      <!-- Encabezado -->
      <div class="card-header text-white text-center p-2" 
           style="background-color: #20c997; border-top-left-radius: 15px; border-top-right-radius: 15px;">
        <h4 class="mb-0 fw-bold">Registrate</h4>
      </div>
      
      <div class="card-body p-3 bg-white">
        <form @submit.prevent="guardarUsuario">
          
          <div class="mb-2">
            <label for="nombre" class="form-label fw-semibold text-muted">Nombres:</label>
            <input 
              type="text" 
              class="form-control form-control-sm custom-input" 
              id="nombre" 
              v-model="usuarioActual.nombre"
              placeholder="Ej. Juan"
              required
            >
          </div>

          <div class="mb-2">
            <label for="apellidos" class="form-label fw-semibold text-muted">Apellidos Paterno y Materno:</label>
            <input 
              type="text" 
              class="form-control form-control-sm custom-input" 
              id="apellidos" 
              v-model="usuarioActual.apellidos"
              placeholder="Ej. Pérez García"
            >
          </div>

          <div class="mb-2">
            <label for="email" class="form-label fw-semibold text-muted">Correo Electrónico:</label>
            <input 
              type="email" 
              class="form-control form-control-sm custom-input" 
              id="email" 
              v-model="usuarioActual.email"
              placeholder="Ej. usuario@email.com"
              required
            >
          </div>

          <div class="row g-2 mb-2">
            <div class="col-6">
              <label for="ci" class="form-label fw-semibold text-muted">C.I.:</label>
              <input 
                type="text" 
                class="form-control form-control-sm custom-input" 
                id="ci" 
                v-model="usuarioActual.ci"
                placeholder="Ej. 1234567"
              >
            </div>
            <div class="col-6">
              <label for="celular" class="form-label fw-semibold text-muted">Nro Cel.:</label>
              <input 
                type="tel" 
                class="form-control form-control-sm custom-input" 
                id="celular" 
                v-model="usuarioActual.celular"
                placeholder="Ej. +591 71234567"
              >
            </div>
          </div>

          <div class="mb-2">
            <label for="domicilio" class="form-label fw-semibold text-muted">Domicilio:</label>
            <input 
              type="text" 
              class="form-control form-control-sm custom-input" 
              id="domicilio" 
              v-model="usuarioActual.domicilio"
              placeholder="Ej. Calle 123, entre Av. 456"
            >
          </div>

          <div class="mb-3">
            <label for="cursos" class="form-label fw-semibold text-muted">Cursos Disponibles:</label>
            <select 
              class="form-select form-select-sm custom-input" 
              id="cursos"
              v-model="usuarioActual.cursos"
            >
              <option value="">Seleccione un curso</option>
              <!-- [Línea 117-119] Rellenar dinámicamente con cursos de la base de datos -->
              <option v-for="curso in cursosDisponibles" :key="curso.id" :value="curso.id">
                {{ curso.nombre }} <!-- Ajusta 'nombre' según el campo de tu base de datos -->
              </option>
            </select>
          </div>
          
          <!-- Botón -->
          <button type="submit" 
                  class="btn w-100 py-2 fw-bold" 
                  style="background-color: #20c997; color: white; border-radius: 10px;">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 15px !important;
}
.custom-input {
  background-color: #e0e0e0;
  border: 2px solid #20c997;
  border-radius: 10px;
}
.custom-input:focus {
  border-color: #20c997;
  box-shadow: 0 0 0 0.15rem rgba(32, 201, 151, 0.25);
  background-color: #d0d0d0;
}
</style>