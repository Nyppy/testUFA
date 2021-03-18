<template>
  <div class="solutions">
    <div class="solutions__content">
      <div class="solutions__solblock solblock b1">
        <div class="solblock__picture pic1"></div>
        <div class="solblock__title">
          <h3>Торговля и услуги</h3>
        </div>
      </div>
      <div class="solutions__solblock solblock b2">
        <div class="solblock__picture pic2"></div>
        <div class="solblock__title">
          <h3>Туризм и отдых</h3>
        </div>
      </div>
      <div class="solutions__solblock solblock b3">
        <div class="solblock__picture pic3"></div>
        <div class="solblock__title">
          <h3>Здравоохранение</h3>
        </div>
      </div>
      <div class="solutions__solblock solblock b4">
        <div class="solblock__picture pic4"></div>
        <div class="solblock__title">
          <h3>Безопасность</h3>
        </div>
      </div>
      <div class="solutions__solblock solblock b5">
        <div class="solblock__picture pic5"></div>
        <div class="solblock__title">
          <h3>Транспорт и мобильность</h3>
        </div>
      </div>
      <div class="solutions__solblock solblock b6">
        <div class="solblock__picture pic6"></div>
        <div class="solblock__title">
          <h3>Образование и кадры</h3>
        </div>
      </div>
      <div class="solutions__solblock solblock b7">
        <div class="solblock__picture pic7"></div>
        <div class="solblock__title">
          <h3>жкх</h3>
        </div>
      </div>
      <div class="solutions__solblock solblock b8">
        <div class="solblock__picture pic8"></div>
        <div class="solblock__title">
          <h3>Экология</h3>
        </div>
      </div>
      <div class="solutions__solblock solblock">
        <div class="solblock__bigtitle">
          <h3>Показать больше решений</h3>
        </div>
        <div class="solblock__arrow">
          <svg width="56" height="47" viewBox="0 0 56 47" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.874865 26.4585L44.0251 26.4585L28.3667 42.117L32.5497 46.3001L55.3496 23.5002L32.5497 0.700296L28.3666 4.88338L44.0251 20.5418L0.874864 20.5418L0.874865 26.4585Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Solutions"
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
nav,
footer,
header,
aside {
  display: block;
}
html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

.solutions {
  background-color: #272764;
}

.solutions__content {
  max-width: 1200px;
  padding: 0px 15px;
  margin: auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
}

.solblock__arrow {
  transition: 0.5s;
  fill: #8c9ecc;
}

.pic1 {
  background: url("../assets/img/Sol1BW.png");
}

.pic2 {
  background: url("../assets/img/Sol2BW.png");
}

.pic3 {
  background: url("../assets/img/Sol3BW.png");
}

.pic4 {
  background: url("../assets/img/Sol4BW.png");
}

.pic5 {
  background: url("../assets/img/Sol5BW.png");
}

.pic6 {
  background: url("../assets/img/Sol6BW.png");
}

.pic7 {
  background: url("../assets/img/Sol7BW.png");
}

.pic8 {
  background: url("../assets/img/Sol8BW.png");
}

.b1 {
  &:hover {
    .pic1 {
      background: url("../assets/img/Sol1.png");
      background-size: cover;
    }
  }
}

.b2 {
  &:hover {
    .pic2 {
      background: url("../assets/img/Sol2.png");
      background-size: cover;
    }
  }
}

.b3 {
  &:hover {
    .pic3 {
      background: url("../assets/img/Sol3.png");
      background-size: cover;
    }
  }
}

.b4 {
  &:hover {
    .pic4 {
      background: url("../assets/img/Sol4.png");
      background-size: cover;
    }
  }
}

.b5 {
  &:hover {
    .pic5 {
      background: url("../assets/img/Sol5.png");
      background-size: cover;
    }
  }
}

.b6 {
  &:hover {
    .pic6 {
      background: url("../assets/img/Sol6.png");
      background-size: cover;
    }
  }
}

.b7 {
  &:hover {
    .pic7 {
      background: url("../assets/img/Sol7.png");
      background-size: cover;
    }
  }
}

.b8 {
  &:hover {
    .pic8 {
      background: url("../assets/img/Sol8.png");
      background-size: cover;
    }
  }
}

.solblock {
  width: 360px;
  margin-bottom: 100px;
  cursor: pointer;
  &:hover {
    background-size: cover;
    .solblock__title {
      color: #244aeb;
    }
    .solblock__bigtitle {
      color: #244aeb;
    }
    .solblock__arrow {
      fill: #244aeb;
    }
  }
}

.solblock__picture {
  transition: 0.5s;
  margin-bottom: 30px;
  width: 361px;
  height: 421px;
  //   background: #fff;

  background-size: cover;
  position: relative;
  z-index: 10;
  &:hover {
    border: 1px solid #385df9;
    box-sizing: border-box;
    box-shadow: 5px 5px 0px #385df9;
    border-radius: 1px;
  }
}

.solblock__title {
  transition: 0.5s;
  font-family: Benzin-Bold;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;

  color: #ffffff;
}

.solblock__bigtitle {
  transition: 0.5s;
  font-family: Benzin-Bold;
  font-size: 40px;
  line-height: 145.7%;
  /* or 58px */
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 35px;
}
</style>