<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <nav class="navbar bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
          <div class="navbar" >
             <ul class="nav gap-3">
              <RouterLink to="/principal">
               <li class="nav-item">
                   Principal
               </li>
              </RouterLink>
              <RouterLink to="/producto">
                <li class="nav-item">
                 Crear Producto
               </li>
               </RouterLink>
              <RouterLink to="/cliente">
               <li class="nav-item">
                Crear Cliente
               </li>
              </RouterLink>
              <RouterLink to="/verproducto">
               <li class="nav-item">
                Ver Producto
               </li>
              </RouterLink>
             </ul>
          </div>
  </div>
    </nav>
  </header>
  <RouterView />
</template>
