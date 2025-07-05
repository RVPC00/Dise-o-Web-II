<template>
  <div class="container">
    <h1>PRACTICA DE CLASE</h1>

    <div class="grid">
      <div v-for="product in paginatedProducts" :key="product.id" class="card">
        <img :src="product.thumbnail" alt="Imagen del producto" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <div class="gris">
          <h4 class="letra">Precio</h4>
          <h5>{{ product.price }}</h5>
          <h4 class="letra">Disponibles</h4>
          <h5>{{ product.stock }}</h5>
        </div>
      </div>
    </div>

    <div class="paginacion">
      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      currentPage: 1,
      itemsPerPage: 4,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end);
    },
  },
  methods: {
    async fetchProducts() {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      this.products = data.products;
    },
    changePage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.gris {
  border-style: solid;
  border-radius: 10px;
  border-color: darkgrey;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 1rem;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
}
.card h3 {
  margin: 0.5rem 0 0.3rem;
}
.card p {
  font-size: 0.9rem;
  color: #555;
}

.paginacion {
  text-align: center;
}
.paginacion button {
  margin: 0 5px;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #eee;
  cursor: pointer;
  border-radius: 4px;
}
.paginacion button.active {
  background-color: #007bff;
  color: white;
}
.letra{
  color: red;
}
</style>
