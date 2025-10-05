<script setup>
import MenuCom from '../components/MenuCom.vue'
</script>
<template>
<div class="principal">
  <MenuCom />

  <div class="cabecera text-center text-white">
      <h1>Soporte</h1>
    </div>

   
    <div class="inicio">
      <h2>Preguntas frecuentes</h2>
    </div>

    <div class="lista">
        
          <div class="content">
            <p class="pregunta">¿Cómo puedo registrarme a un curso?</p>
            <div class="text">
              <h4>Lorem ipsum dolor sit amet consectetur. Hendrerit gravida diam cursus libero posuere pharetra. Et facilisi a sollicitudin sit at molestie felis vitae. Vel amet vitae eget massa in. Lorem ipsum dolor sit amet consectetur.</h4>
            </div>
            <div class="action">
              <a class="btn" href="index1.html">Explorar</a>
            </div>
          </div>
        
           
          <div class="content">
            <p class="pregunta">¿Cómo puedo acceder a los cursos gratis?</p>
            <div class="text">
              <h4>Lorem ipsum dolor sit amet consectetur. Hendrerit gravida diam cursus libero posuere pharetra. Et facilisi a sollicitudin sit at molestie felis vitae. Vel amet vitae eget massa in. Lorem ipsum dolor sit amet consectetur.</h4>
            </div>
            <div class="action">
            <a class="btn" href="pregunta2View.vue">Explorar</a>
            </div>
          </div>
        

      
        
          <div class="content">
            <p class="pregunta">¿Existe alguna Promoción en los cursos?</p>
            <div class="text">
              <h4>Lorem ipsum dolor sit amet consectetur. Hendrerit gravida diam cursus libero posuere pharetra. Et facilisi a sollicitudin sit at molestie felis vitae. Vel amet vitae eget massa in. Lorem ipsum dolor sit amet consectetur.</h4>
            </div>
            <div class="action">
              <a class="btn" href="index9.html">Explorar</a>
            </div>
          </div>

      
        
          <div class="content">
            <p class="pregunta">¿Puedo hacer dos cursos a la vez?</p>
            <div class="text">
              <h4>Lorem ipsum dolor sit amet consectetur. Hendrerit gravida diam cursus libero posuere pharetra. Et facilisi a sollicitudin sit at molestie felis vitae. Vel amet vitae eget massa in. Lorem ipsum dolor sit amet consectetur.</h4>
            </div>
            <div class="action">
              <a class="btn" href="index6.html">Explorar</a>
            </div>
          </div>
          
        
      

      
        
          <div class="content">
            <p class="pregunta">¿Puedo obtener certificado de los cursos gratuitos?</p>
            <div class="ftext">
              <h4>Lorem ipsum dolor sit amet consectetur. Hendrerit gravida diam cursus libero posuere pharetra. Et facilisi a sollicitudin sit at molestie felis vitae. Vel amet vitae eget massa in. Lorem ipsum dolor sit amet consectetur.</h4>
            
            </div>
            <div class="action">
              <a class="btn" href="index8.html">Explorar</a>
            </div>
          </div>
        </div>
    
  
    <div class="comment">
      <h3>Envíanos un comentario</h3>
      <form action="#" method="post">
        <textarea class="textarea" name="comentario" placeholder="Escribe tu comentario aquí..."></textarea>
        <div class="submit-row">
          <button class="btn-primary" type="submit">Enviar</button>
        </div>
      </form>
    </div>

    <div class="spacer"></div>

  </div>

</template>
<style>
    :root{
      --teal: #2fb1ad;      
      --teal-dark: #238682;
      --muted: #e9f6f6;     
      --text: #222;
      --white: #ffffff;
      --border: rgba(47,177,173,0.18);
    }

    html,body{
      height:100%;
      margin:0;
      font-family: "Helvetica Neue", Arial, sans-serif;
      background: var(--white);
      color:var(--text);
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }

    .principal {
      max-width: auto;
      margin: 0 auto 60px;
      box-sizing: border-box;
   
    }

    .cabecera {
  background-color: #3AAFA9;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

    .inicio {
      display:flex;
      align-items:center;
      gap:12px;
      margin: 18px 0 8px;
      padding: 0 40px;
    }
    .inicio h2{
      margin:0;
      color:var(--teal-dark);
      font-size:25px;
      font-weight:700;
      letter-spacing:0.4px;
    }

  
    .lista {
      margin-top: 6px;
      padding: 0 80px;
    }
   
    .pregunta {
      font-style: italic;
      font-weight:700;
      margin:0 0 8px;
      color:#111;
      font-size:16px;
    }

    .text {
      background: var(--muted);
      border-radius: 8px;
      padding: 14px 18px;
      box-shadow: 0 2px 0 rgba(0,0,0,0.02) inset;
      border: 1px solid var(--border);
      color:#2a2a2a;
      line-height:1.45;
      position:relative;
    }

    .action {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px; 
}

    .btn {
      display:inline-block;
      background: transparent;
      color: var(--teal-dark);
      border: 2px solid var(--teal);
      padding:8px 14px;
      border-radius:10px;
      text-decoration:none;
      font-weight:700;
      box-shadow: 0 6px 0 rgba(35,134,130,0.06);
      transition: all .16s ease;
    }
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 18px rgba(35,134,130,0.08);
      background: rgba(47,177,173,0.06);
    }

    
    .content {
      flex:1;
      min-width:0;
    }
    
    .comment {
      margin-top:34px;
      background: #fff;
      border-radius:6px;
      padding:18px;
      border:1px solid rgba(0,0,0,0.04);
    }
    .comment h3 { margin:0 0 12px; font-size:16px; color:#222; }

    .textarea {
      width:100%;
      min-height:120px;
      border-radius:10px;
      border: 2px solid var(--teal);
      padding:12px;
      box-sizing:border-box;
      resize:vertical;
      font-size:14px;
      outline:none;
    }

    .submit-row {
      margin-top:14px;
    }
    .submit-row .btn-primary {
      background: var(--teal);
      color: white;
      border: 0;
      padding:10px 18px;
      border-radius:8px;
      cursor:pointer;
      font-weight:700;
      box-shadow: 0 6px 0 rgba(35,134,130,0.14);
    }
    .submit-row .btn-primary:hover {
      transform:translateY(-2px);
    }

    .spacer { height:24px; }

    @media (max-width:760px){
      .hero h1 { font-size:34px; padding:6px 0; }
      .faq-row { flex-direction:column; }
      .faq-side { width:100%; justify-content:flex-start; margin-top:8px; }
    }

  </style>
