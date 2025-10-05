<script setup>
import MenuCom from '../components/MenuCom.vue'
</script>

<template>
  <MenuCom />
  <div class="tabla-container">
    <h1>Lista de Tareas</h1>
    <table>
      <thead>
        <tr>
          <th>Apellidos y Nombre(s)</th>
          <th>Tarea</th>
          <th>Código Base</th>
          <th>Actualización de Código</th>
          <th>Participación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tarea, index) in tareas" :key="index">
          <td>{{ tarea.nombre }}</td>
          <td>{{ tarea.descripcion }}</td>
          <td>
            <input type="checkbox" :checked="tarea.cod_base === 1" disabled />
          </td>
          <td>
            <input type="checkbox" :checked="tarea.actualizacion === 1" disabled />
          </td>
          <td>{{ tarea.participacion }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListaTareas",
  data() {
    return {
      tareas: [
        { nombre: "Choque Crispin Franz", descripcion: "Soporte", actualizacion: 1, cod_base: 1, participacion: "90%" },
        { nombre: "Choque Rios Juan Carlos", descripcion: "Catálogo", actualizacion: 0, cod_base: 0, participacion: "No envio codigo Base ni actualización" },
        { nombre: "Colque Condori Pablo Junior", descripcion: "Página Principal", actualizacion: 0, cod_base: 0, participacion: "No envio codigo Base ni actualización" },
        { nombre: "Córdova Huanca Nayeli", descripcion: "Mi Perfil", actualizacion: 1, cod_base: 1, participacion: "100%"},
        { nombre: "Herrera Vargas Israel Iván", descripcion: "Crear Cuenta", actualizacion: 1, cod_base: 1, participacion: "100%" },
        { nombre: "Miranda Villaroel Noelia Leonor", descripcion: "Tarjeta Cursos", actualizacion: 1, cod_base: 1, participacion: "90%" },
        { nombre: "Pérez Calizaya Rodrigo Vicente", descripcion: "Optimización", actualizacion: 1, cod_base: 1, participacion: "100%"},
        { nombre: "Villca Huarachi Rodrigo Jason", descripcion: "Pagos", actualizacion: 1, cod_base: 1, participacion: "85%" },
      ],
    };
  },
};
</script>

<style>
body {
  background: #f4f6f8;
  margin: 0;
  font-family: Arial, sans-serif;
}

.tabla-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}

th, td {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #3498db;
  color: white;
  font-weight: bold;
}

tbody tr:nth-child(odd) {
  background-color: #e6f3ff;
}

tbody tr:nth-child(even) {
  background-color: #ffffff;
}

tbody tr:hover {
  background-color: #d0eaff;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
