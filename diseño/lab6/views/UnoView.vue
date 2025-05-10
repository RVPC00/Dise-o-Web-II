<script>
export default{
    name:'UnoView',
    data: function(){
    return{
            a:0,
            lista:[],
        }
    },
    methods:{
        ver(){
            this.a=this.a+1;
        },
        cero(){
            this.a=0;
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
        <button v-on:click="cero" > Reset</button>
    </div>
</template>