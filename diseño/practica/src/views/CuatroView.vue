<template>
  <h1 class="text-info">PAGINA CUATRO</h1>
  <div class="d-flex justify-content-end">
    <img src="./img/cuatro.png" alt="cuatro" class="img fil4" />
    <img src="./img/cuatroo.jpg" alt="cuatroo" class="img fil5" />
    <img src="./img/cuatrooo.jpg" alt="cuatrooo" class="img fil6" />
    <img src="./img/cuatroooo.PNG" alt="cuatrooo" class="img fil7" />
  </div>
</template>
<style>
.img {
  width: 200px;
  height: 200px;
  margin: 10px;
}
.fil4:hover {
  filter: grayscale(0%);
}
.fil4 {
  filter: grayscale(100%);
  transition: filter 1s;
}
.fil5:hover {
  filter: opacity(100%);
}
.fil5 {
  filter: opacity(0%);
  transition: filter 1s;
}
.fil6:hover {
  filter: blur(0);
}
.fil6 {
  filter: blur(4px);
  transition: filter 1s;
}
.fil7:hover {
  filter: sepia(0%);
}
.fil7 {
  filter: sepia(100%);
  transition: filter 1s;
}
</style>
