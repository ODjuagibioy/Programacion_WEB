<template>
  <div class="formulario">
    <h1>INICIO DE SESIÓN</h1>
    <form @submit.prevent="iniciarSesion">
      <div class="username">
        <input type="text" v-model="usuario" required placeholder=" " />
        <label>Nombre de usuario</label>
      </div>
      <div class="contraseña">
        <input type="password" v-model="contrasena" required placeholder=" " />
        <label>Contraseña</label>
      </div>
      <div class="recordar">
        <a href="#">¿Olvidó su contraseña?</a>
      </div>
      <input type="submit" value="Iniciar" />
      <div class="registrase">
        Quiero hacer el <a href="#">registro</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      usuario: '',
      contrasena: ''
    };
  },
  methods: {
    iniciarSesion() {
      // Aquí va la lógica del inicio de sesión (puedes usar fetch o axios)
      alert(`Usuario: ${this.usuario}\nContraseña: ${this.contrasena}`);
    }
  }
};
</script>

<style scoped>
/* Estilos generales */
.login-background {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(150deg, #6c3483, #58d68d);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.formulario {
  width: 100%;
  max-width: 450px;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.formulario h1 {
  text-align: center;
  margin-bottom: 25px;
  color: #6c3483;
}

.username, .contraseña {
  position: relative;
  margin-bottom: 25px;
}

.username input,
.contraseña input {
  width: 100%;
  padding: 12px;
  border: 2px solid #adadad;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: 0.3s;
}

.username input:focus,
.contraseña input:focus {
  border-color: #6c3483;
}

.username label,
.contraseña label {
  position: absolute;
  top: 14px;
  left: 15px;
  font-size: 16px;
  color: #adadad;
  transition: 0.3s ease-in-out;
}

.username input:focus + label,
.username input:not(:placeholder-shown) + label,
.contraseña input:focus + label,
.contraseña input:not(:placeholder-shown) + label {
  top: -10px;
  left: 10px;
  font-size: 14px;
  color: #6c3483;
  background: white;
  padding: 2px 5px;
}

.recordar {
  text-align: right;
  margin-bottom: 25px;
}

.recordar a {
  text-decoration: none;
  color: #6c3483;
  font-weight: bold;
}

input[type="submit"] {
  width: 100%;
  padding: 12px;
  background: #6c3483;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

input[type="submit"]:hover {
  background: #58d68d;
}

.registrase {
  text-align: center;
  margin-top: 25px;
}

.registrase a {
  text-decoration: none;
  color: #58d68d;
  font-weight: bold;
}

@media screen and (max-width: 480px) {
  .formulario {
    width: 90%;
    padding: 25px;
  }
}
</style>