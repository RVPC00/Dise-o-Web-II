<template>
  <div>
    <button class="btn btn-danger bt" @click="lee">Mostrar</button>
  </div>
   <div class="caja">
      <table class="table table-striped">
        <thead>
        <th>
          Nº
        </th>
        <th> Producto</th>
        <th> Cantidad </th>
        <th> Estado </th>
       </thead>
       <tbody  >
         <tr v-for ="datos in lista" :key="datos.codigo">
          <td>{{ datos.codigo }}</td>
           <td>{{ datos.nombre }}</td>
           <td>{{ datos.cantidad }}</td>
           <td>{{ datos.estado }}</td>

         </tr>
       </tbody>
      </table>
   </div>
</template>
<script>
  import axios from 'axios'
    export default{
           	name:'VerProductoCom',
           	data: function(){
           	return{
                     	nombrex:'',
                      cantidadx:'',
                      estadox:0,
                      lista:[],

                 	}
          	},
   mounted(){
    this.lee();
   },
   methods:{
   async  lee(){
             await axios.get('http://localhost/tiendadb/producto.php')
             .then(response  => {
                  this.lista=response.data;

              })
             .catch(error => {
                 console.error('Error leendo producto:', error);
              });
      },




     	ver(){
        	    alert(this.nombrex);
     	}
  },}


</script>
<style>
  .caja{
    margin: auto;
    width:500px;
    height: max-content;
    background-color: rgb(246, 250, 249);
  }
  .bt{
    margin: auto;
    text-align: center;
    align-items: center;

  }
</style>
