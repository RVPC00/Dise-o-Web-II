<script setup>
import MenuCom from '../components/MenuCom.vue'
</script>

<template>
  <MenuCom />
  <div class="payment-container">
    <h1>Formulario de Pago Bancario</h1>
    <form @submit.prevent="procesarPago">
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="ejemplo@correo.com"
          required
        />
      </div>

      <div class="form-group">
        <label for="tarjeta">Número de tarjeta</label>
        <input
          type="text"
          id="tarjeta"
          v-model="form.tarjeta"
          placeholder="XXXX-XXXX-XXXX-XXXX"
          pattern="\\d{4}-\\d{4}-\\d{4}-\\d{4}"
          required
        />
      </div>

      <div class="form-group">
        <label for="curso">Curso a pagar</label>
        <select id="curso" v-model="form.curso" required>
          <option disabled value="">Seleccione un curso</option>
          <option>Programación Web</option>
          <option>Diseño Gráfico</option>
          <option>Marketing Digital</option>
          <option>Redes y Seguridad</option>
        </select>
      </div>

      <div class="form-group">
        <label for="monto">Monto a pagar (Bs)</label>
        <input
          type="number"
          id="monto"
          v-model="form.monto"
          min="1"
          step="1"
          required
        />
      </div>

      <button type="submit" class="btn-pagar">Pagar ahora</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      form: {
        email: "",
        tarjeta: "",
        curso: "",
        monto: null,
      },
    };
  },
  methods: {
    procesarPago() {
      const mensaje =
        "Pago de " + this.form.monto + " Bs para el curso \"" + this.form.curso + "\"\n" +
        "Con la tarjeta " + this.form.tarjeta;
      alert(mensaje);
    },
  },
};
</script>

<style>
body {
  background: #f4f6f8;
  margin: 0;
  font-family: Arial, sans-serif;
}

.payment-container {
  max-width: 500px;
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

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

input:focus,
select:focus {
  border-color: #3498db;
  outline: none;
}

.btn-pagar {
  width: 100%;
  padding: 12px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.btn-pagar:hover {
  background: #2980b9;
}
</style>