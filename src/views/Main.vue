<template>
  <div class="main">
    <div class="top-block">
      <Header />

      <div class="wrapper">
        <div class="block-text">
          <h1 class="head-title text">B2BInnovation</h1>

          <p class="main-text text">
            платформа для размещения каталоге поиска
            <br />технологичных решений для малого и среднего бизнеса
            <br />бизнесе в Республике Башкортостан
          </p>
        </div>
      </div>

      <Info />
    </div>

    <Search />
    <Solutions />
    <AddSolutions />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Info from "../components/Info";
import Search from "../components/Search";
import Solutions from "../components/Solutions";
import AddSolutions from "../components/AddSolutions";
import Footer from "../components/Footer";

export default {
  name: "Main",
  components: {
    Header,
    Info,
    Search,
    Solutions,
    AddSolutions,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.main {
  min-height: 100%;
  // width: 100vw;
  background: #272764;
}
.top-block {
  // width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #272764, #272764),
    url("../assets/img/background1.png") no-repeat top center;
  background-size: contain;
}
.wrapper {
  display: flex;
  justify-content: center;
  margin-top: 12vh;
  margin-bottom: 6vh;
}
.block-text {
  width: 1200px;
}
.head-title {
  color: #fff;
  font-family: Benzin-Bold;
  font-size: 5.4rem;
}
.main-text {
  margin-top: 1vh;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 500;
}
</style>