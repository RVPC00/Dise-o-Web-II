<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const modoEdicion = ref(false);
const productos = ref([]);
const productoActual = ref({ id: null, nombre: '', descripcion: '', precio: '' });

// --- Configuración de Axios ---
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});
// --- Funciones CRUD ---
const guardarProducto = async () => {
  try {
    if (modoEdicion.value) {
      // Actualizar producto
      await api.put(`/productos/${productoActual.value.id}`, productoActual.value);
    } else {
      // Crear nuevo producto
      await api.post('/productos', productoActual.value);
    }
    limpiarFormulario();
    await cargarProductos(); // Recargar la lista
  } catch (error) {
    console.error('Error al guardar el producto:', error);
  }
};
const eliminarProducto = async (id) => { 
           if (confirm('¿Estás seguro de que quieres eliminar este producto?')) { 
                try { await api.delete(`/productos/${id}`); await cargarProductos();
              // Recargar la lista
             } catch (error) { console.error('Error al eliminar el producto:', error); } } };
// --- Funciones Auxiliares del Formulario ---
const activarModoEdicion = (producto) => {
  modoEdicion.value = true;
  // Clonamos el objeto para no modificar la lista directamente
  productoActual.value = { ...producto }; 
};
const limpiarFormulario = () => {
  modoEdicion.value = false;
  productoActual.value = { id: null, nombre: '', descripcion: '', precio: '' };
};</script>

<template>
  <div class="container">

    <div class="form-container">
      <h2>{{ modoEdicion ? 'Editar Producto' : 'Añadir Nuevo Producto' }}</h2>
      <form @submit.prevent="guardarProducto">
        <input type="text" v-model="productoActual.nombre" placeholder="Nombre del producto" required>
        <textarea v-model="productoActual.descripcion" placeholder="Descripción"></textarea>
        <input type="number" step="0.01" v-model="productoActual.precio" placeholder="Precio" required>
        <div class="form-buttons">
          <button type="submit">{{ modoEdicion ? 'Actualizar' : 'Guardar' }}</button>
          <button type="button" @click="limpiarFormulario" v-if="modoEdicion">Cancelar Edición</button>
        </div>
      </form>
    </div>
  </div>
  <MenuCom/>
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
