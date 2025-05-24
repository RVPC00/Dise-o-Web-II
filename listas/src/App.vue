<script>
  export default{
    name:'App.vue',
    data: function(){
      return{
        lista:[],
        li=[["Samuel",20,65],["Ana",25,62],["Anuel",18,65]]
      }
    },
    methods:{
      ingresar(){
        n=prompt("ingresa nombre")
        e=prompt("ingresa edad")
        p=prompt("ingresa peso")
      },
      llena(){
        this.n=this.lista(this.dato[this.i])
        this.e=this.lista(this.dato[this.i])
        this.p=this.lista(this.dato[this.i])
      },
      crea(){
        c=prompt("cuantos personas deseas añadir")
      },
    },}
</script>

<template>

  <table>
    <thead>
      <th class="border border-white p-3 mb-2 bg-black text-white">Nombre </th>
      <th class="border border-white p-3 mb-2 bg-black text-white">Edad </th>
      <th class="border border-white p-3 mb-2 bg-black text-white">Peso </th>
    </thead>
    <tr v-for="dato in lista">
      <td class="border border-black p-3 mb-2 bg-secondary text-white">{{ dato[0] }}</td>
      <td class="border border-black p-3 mb-2 bg-secondary-subtle text-secondary-emphasis">{{ dato[1] }}</td>
      <td class="border border-black p-3 mb-2 bg-secondary text-white">{{ dato[2] }}</td>
    </tr>
  </table>
</template>

