<template>
   <div class="forma">
    <label for="nombre" class="form-label">Nombre</label>
    <input v-model='nombrex'  type="text" id="nom" class="form-control" >
    <label   for="cantidad" class="form-label">Cantidad</label>
    <input v-model='cantidadx' type="text" id="cant" class="form-control" >
    <label for="estado" class="form-label">Estado</label>
    <input v-model='estadox' type="text" id="est" class="form-control" >
    <br>
    <button class="btn btn-info " @click="guarda"> Enviar </button>
    <button class="btn btn-info " @click="ver"> Ver </button>
   </div>
</template>
<script>
import axios from 'axios'
    export default{
           	name:'ProductoCom',
           	data: function(){
           	return{
                     	nombrex:'',
                      cantidadx:'',
                      estadox:0,

                 	}
          	},

   methods:{
     guarda(){
              axios.post('http://localhost/tiendadb/producto.php', {
                nombre: this.nombrex,
                cantidad: this.cantidadx,
                estado: this.estadox,
              })
             .then(() => {
                  this.$router.push('/');
              })
             .catch(error => {
                 console.error('Error adding producto:', error);
              });
      },




     	ver(){
        	    alert(this.nombrex);
     	}
  },}


</script>
<style>

  .forma{
    margin:auto;
    margin-top: 20px;
    width:40%;
    height: auto;
    background-color: rgb(240, 249, 250);
    padding: 10px;
  }
</style>
