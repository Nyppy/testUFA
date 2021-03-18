<template>
  <header class="header">
    <div class="main">
      <router-link to="#" class="logo">
        <img src="../assets/img/logo.png" width="100%" height="80%" alt="">
      </router-link>

      <div class="nav">
        <router-link class="nav-item" to="#">Каталог решений</router-link>
        <router-link class="nav-item" to="#">Инноваторам</router-link>
        <router-link class="nav-item" to="#">Заказчикам</router-link>
        <router-link class="nav-item" to="#">Инвесторам</router-link>
      </div>

      <div class="buttons">
        <button type="button" class="btn login">Войти</button>
        <button type="button" class="btn add-solution">Предложить решение</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 18vh;
  padding: 0 1vh 0 1vh;
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 15%;
  height: 60%;
  display: flex;
  align-items: center;
}
.logo:hover {
  cursor: pointer;
}
.nav-item {
  margin-right: 1.2rem;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: 'Inter';
}
.nav-item:hover {
  cursor: pointer;
}
.nav-item:last-child {
  margin-right: 0;
}
.btn {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 2px;
  font-family: 'Inter';
}
.btn:hover {
  cursor: pointer;
}
.login {
  border: 1px solid #fff;
  background: none;
  padding: 1vh;
  margin-right: 0.8rem;
}
.add-solution {
  border: none;
  background: #395df6;
  padding: calc(1vh + 2px);
}
</style>