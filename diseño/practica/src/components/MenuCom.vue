<template>
  <div class="container">
    <div class="row d-flex justify-content-evenly border border-light">
      <div class="col"></div>
      <div class="col">
        <RouterLink to="/uno"> <button class="btn btn-danger">1</button> </RouterLink>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row d-flex justify-content-evenly border border-light">
      <div class="col">
        <RouterLink to="/dos"> <button class="btn btn-warning">2</button> </RouterLink>
      </div>
      <div class="col">
      </div>
      <div class="col">
        <RouterLink to="/tres"> <button class="btn btn-success">3</button> </RouterLink>
      </div>
    </div>
    <div class="row d-flex justify-content-evenly border border-light">
      <div class="col">
      </div>
      <div class="col">
        <RouterLink to="/cuatro"> <button class="btn btn-info">4</button> </RouterLink>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
</template>
