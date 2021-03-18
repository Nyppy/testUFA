<template>
  <div class="add-solutions">
    <p class="main-text">Заполни форму добавления решения на сайте или направить письмо на электронную почту</p>

    <h1 class="title">
      Заяви о своей инновации,<br/>
      привлекай инвесторов<br/>
      и покупателей вместе<br/> 
      c <span>B2B Innovation</span>
    </h1>

    <button type="button" class="button-add">
      Предложить решение 
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.499973 10.1669L17.517 10.1669L11.3418 16.342L12.9915 17.9917L21.983 9.0002L12.9915 0.0087002L11.3418 1.65837L17.517 7.83353L0.499972 7.83354L0.499973 10.1669Z" fill="#8C9ECC"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.add-solutions {
  width: 100%;
  height: 70vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.main-text {
  font-size: 1.4rem;
  font-family: Inter;
  font-weight: 400;
}
.title {
  font-size: 4.2rem;
  font-family: Benzin-Bold;
  font-weight: 400;
  color: #272764;
  margin-top: 1.5vh;
}
.title span {
  color: #395df6;
}
.button-add {
  border: 1px solid #a0aed5;
  background: none;
  color: #282864;
  font-size: 1.2rem;
  padding: 1.8vh 4vh;
  margin-top: 4.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-add svg {
  margin-left: 1vh;
}
</style>