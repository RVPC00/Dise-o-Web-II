<script>
  export default{
               name:'UnoView',
               data: function(){
               return{
                      i:0,
                      a:10,
                      lista:[],
                      
                     }
              },
           
   methods:{
         ver(){
            this.a= this.a+1;
         },
         acero(){
            this.a=0;        
         },
         llena(){
            for(this.i=1;this.i<=10;this.i++)
            {
              this.lista[this.i]=5+this.i;
            }
            console.log(this.lista);
         }     
  },}
</script>
<template>
  <div>
    <h1>Pagina Uno</h1>
   {{ a }}
  </div>
   <div>
    <button v-on:click="ver" > Clic</button>
   </div>

   <div>
    <button v-on:click="acero" > Reset</button>
   </div>
   <div>
    <button v-on:click="llena" > Llenar</button>
   </div>
    <div>
      <p v-for="datos in this.lista" >
        {{datos  }}
      </p>
    </div>
</template>
