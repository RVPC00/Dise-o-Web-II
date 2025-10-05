<script setup>
import MenuCom from '../components/MenuCom.vue'
import { ref, onMounted, onUnmounted } from "vue"
import fondo from '../assets/fondo.png'

const vistaActual = ref(0)
const totalVistas = 4
let intervalo = null

function irAVista(index) {
  vistaActual.value = index
}

function siguienteVista() {
  vistaActual.value = (vistaActual.value + 1) % totalVistas
}

onMounted(() => {
  intervalo = setInterval(siguienteVista, 5000)
})

onUnmounted(() => {
  clearInterval(intervalo)
})
</script>

<template>
  <div class="layout">
    <MenuCom />
    <div class="contenedor" :style="{ backgroundImage: `url(${fondo})` }">
      <div class="slider">
        <div class="slides-wrapper" :style="{ transform: `translateX(-${vistaActual * 100}%)` }">

          <div class="slide">
            <div class="slide-content slide1">
              <h2 class="bienvenida">Bienvenidos a:</h2>
              <h1 class="titulo">Learn<span class="devs">Devs</span></h1>
              <p class="descripcion">Se parte de nuestra Comunidad de desarrolladores en Software</p>
              <button class="btn-inscribete">Inscribete</button>
              <div class="slide1-bottom">
                <p class="cita">
                  "Un Espacio orientado a la enseñanza integral del desarrollo de software, que busca fortalecer las competencias técnicas."
                </p>
                <button class="btn-cursos">Cursos Gratis</button>
              </div>
            </div>
          </div>

          <div class="slide">
            <div class="slide-content slide2">
              <div class="slide2-top">
                <p class="subtitulo">La pasión por el</p>
                <h1 class="titulo">Desarrollo de Software</h1>
              </div>
              <div class="slide2-bottom">
                <p class="descripcion">
                  Potencia tus Habilidades en el Desarrollo Web, Móvil, Escritorio, y Ciberseguridad.
                </p>
                <button class="btn-explora">Explora...</button>
              </div>
            </div>
          </div>

          <div class="slide">
            <div class="slide-content slide3">
              <div class="slide3-top">
                <p class="subtitulo">Sé parte de</p>
                <h1 class="titulo">Nuestra Comunidad</h1>
              </div>
              <div class="slide3-bottom">
                <p class="descripcion">
                  Aprende junto a expertos y comparte con desarrolladores como tú.
                </p>
                <button class="btn-registrate">Regístrate</button>
              </div>
            </div>
          </div>

          <div class="slide">
            <div class="slide-content slide4">
              <div class="slide4-top">
                <p class="subtitulo">Escríbenos a nuestras redes</p>
                <h1 class="titulo">Contáctanos</h1>
              </div>
              <div class="slide4-bottom">
                <p class="descripcion">
                  Nuestro equipo estará encantado de responder tus preguntas.
                </p>
                <button class="btn-escribir">Escríbenos</button>
              </div>
            </div>
          </div>
        </div>

        <div class="paginacion">
          <span 
            v-for="i in totalVistas" 
            :key="i"
            class="dot"
            :class="{ activo: vistaActual === i - 1 }"
            @click="irAVista(i - 1)">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

*,
*::before,
*::after {
  box-sizing: border-box;
}

html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-family: sans-serif;
}

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.contenedor {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contenedor::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 1;
}

.slider {
  position: relative;
  z-index: 2; /* encima del overlay */
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

.slides-wrapper {
  display: flex;
  width: 400%;
  height: 100%;
  transition: transform 0.8s ease-in-out;
}

.slide {
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
  z-index: 2;
}

.slide-content {
  position: relative;
  z-index: 3;
  max-width: 800px;
  width: 90%;
  color: white;
  text-align: center;
}

.bienvenida,
.titulo,
.descripcion,
.cita,
.subtitulo {
  position: relative;
  z-index: 3;
  color: white;
  margin: 0;
  padding: 0;
}

.bienvenida {
  font-size: 1.5rem;
  color: #e0e0e0;
  margin-bottom: 0.5rem;
}

.titulo {
  font-size: 4rem;
  font-weight: 900;
  margin: 0.5rem 0;
}

.titulo .devs {
  color: #00bcd4;
}

.descripcion {
  font-size: 1.2rem;
  color: #f0f0f0;
  margin: 1rem 0;
}

.cita {
  font-size: 1rem;
  font-style: italic;
  color: #ccc;
  text-align: center;
  max-width: 600px;
  margin-bottom: 1rem;
}

.subtitulo {
  font-size: 2rem;
  color: #00bcd4;
  margin-bottom: 0.5rem;
}

/* Parte inferior de algunos slides */
.slide1-bottom,
.slide2-bottom,
.slide3-bottom,
.slide4-bottom {
  position: relative;
  z-index: 3;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

/* Botones */
.btn-inscribete { 
  background: #00bcd4; 
  border: none; 
  padding: 14px 28px; 
  font-size: 1rem; 
  font-weight: bold; 
  color: #fff; 
  border-radius: 6px; 
  cursor: pointer; 
  margin-bottom: 1rem; 
  transition: all 0.3s ease; 
} 
.btn-inscribete:hover { 
  background: #0097a7; 
}
.btn-cursos,
.btn-explora,
.btn-registrate,
.btn-escribir {
  position: relative;
  z-index: 3;
  background: transparent;
  border: 2px solid #fff;
  padding: 12px 26px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-inscribete:hover,
.btn-cursos:hover,
.btn-explora:hover,
.btn-registrate:hover,
.btn-escribir:hover {
  background: #fff;
  color: #000;
}

/* Paginación */
.paginacion {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s;
}

.dot.activo {
  background: #00bcd4;
}
</style>
