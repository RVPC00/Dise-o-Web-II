<script>
export default {
  name: 'MenuCom',
  methods: {
    cerrarSesion() {
      console.log('Sesión cerrada');
    }
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="navbar-left">
        <div class="logo">LD</div>
        <div class="brand-box">
          <div class="brand">Learn<span class="highlight">Devs</span></div>
          <div class="subtitle">CURSOS ONLINE</div>
        </div>

        <!-- Buscador -->
        <form class="search-bar" role="search" @submit.prevent>
          <button class="btn-search" type="submit">🔍</button>
          <input type="search" placeholder="Buscar..." />
        </form>
      </div>

      <div class="navbar-right">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/nosotros" class="nav-link">Nosotros</router-link>
        <router-link to="/catalogo" class="nav-link">Catálogo</router-link>
        <router-link to="/perfil" class="nav-link">Mi Perfil</router-link>
        <router-link to="/pago" class="nav-link">Pago</router-link>
        <router-link to="/soporte" class="nav-link">Soporte</router-link>
        <router-link to="/crearcuenta" class="nav-link">Crear Cuenta</router-link>
        <button class="btn-logout" @click="cerrarSesion">Iniciar Sesión</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  padding: 12px 24px;
  background: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 8px;
  box-sizing: border-box;
  z-index: 100;
  position: relative;
}

.container-fluid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  min-width: 300px;
}

.logo {
  width: 44px;
  height: 44px;
  border-radius: 100%;
  background: #008080;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.brand-box {
  line-height: 1;
}

.brand {
  font-weight: 700;
  font-size: 1.2rem;
}

.highlight {
  color: teal;
}

.subtitle {
  font-size: 0.75rem;
  color: #888;
}

/* Navegación derecha */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 0.95rem;
}

.nav-link:hover {
  color: #0d6efd;
}

.btn-logout {
  background: #3AAFA9;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: bold;
  transition: background 0.3s;
}

.btn-logout:hover {
  background: #2e8b86;
}

/* Buscador */
.search-bar {
  display: flex;
  align-items: center;
  border: 2px solid #00bcd4;
  border-radius: 30px;
  padding: 0.4rem 1rem;
  background-color: white;
  max-width: 280px;
  flex: 1;
}

.btn-search {
  background: none;
  border: none;
  padding: 0;
  font-size: 1.2rem;
  margin-right: 8px;
  color: #666;
  cursor: pointer;
}

.search-bar input[type="search"] {
  border: none;
  outline: none;
  font-size: 1rem;
  flex: 1;
  background-color: transparent;
  color: #333;
}

.search-bar input[type="search"]::placeholder {
  color: #aaa;
  font-weight: 500;
}
</style>
