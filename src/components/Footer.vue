<template>
  <footer>
    <div class="left-footer">
      <div class="left-footer__content">
        <img src alt class="left-footer__logo" />
        <div class="left-footer__columnsblock">
          <div class="left-footer__column">
            <h3 class="left-footer__title">Инфо</h3>
            <ul class="left-footer__list">
              <li class="left-footer__item">Порядок размещения решений</li>
              <li class="left-footer__item">Пользовательское соглашение</li>
              <li class="left-footer__item">Согласие на обработку персональных данных</li>
            </ul>
          </div>
          <div class="left-footer__column">
            <h3 class="left-footer__title">О проекте</h3>
            <ul class="left-footer__list">
              <li class="left-footer__item">Каталог решений</li>
              <li class="left-footer__item">Инноваторам</li>
              <li class="left-footer__item">Заказчикам</li>
              <li class="left-footer__item">Инвесторам</li>
            </ul>
          </div>
        </div>
        <p class="left-footer__message">©2021 | All right reserved</p>
      </div>
    </div>
    <div class="right-footer">
      <div class="right-footer__content">
        <div class="right-footer__title">
          <h2>Будь в курсе последний новостей в сфере инноваций</h2>
        </div>
        <div class="right-footer__enter">
          <input type="text" class="right-footer__input" placeholder="e-mail" />
          <div class="right-footer__button">подписаться</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
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

footer {
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.left-footer {
  background-color: #272764;
  flex-basis: 50%;
  display: flex;
  justify-content: flex-end;
  padding-left: 5px;
  padding-top: 6vh;
}

.left-footer__logo {
  margin-bottom: 59px;
  /*HARD CODED*/
  width: 190px;
  height: 66px;
  /* FILLER */
  background-color: #c4c4c4;
}

.left-footer__content {
  display: flex;
  flex-direction: column;
  padding-right: 118px;
  padding-bottom: 32px;
}

.left-footer__columnsblock {
  display: flex;
  margin-bottom: 49px;
}

.left-footer__columnsblock :first-child {
  margin-right: 39px;
}

/* .left-footer__column :first-child{
    margin-right: 39px;
} */

.left-footer__title {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  /* #AFBEE4 */
  color: #8c9ecc;
  margin-bottom: 21px;
}

.left-footer__list {
}

.left-footer__item {
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #8c9ecc;
  transform: rotate(-0.09deg);
  margin-bottom: 10px;
}

.left-footer__item:hover {
  color: #fff;
}

.left-footer__message {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 144.69%;
  /* or 23px */
  /* #AFBEE4 */
  color: #8c9ecc;
}

.right-footer {
  background-color: #2727a3;
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-right: 5px;
  padding-top: 6vh;
}

.right-footer__content {
  margin-left: 184px;
  /*HARD CODED*/
  width: 418px;
}

.right-footer__title {
  font-family: Benzin-Bold;
  font-size: 24px;
  line-height: 145%;
  /* or 35px */
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 75px;
}

.right-footer__enter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-footer__input {
  background: inherit;
  border: 1px solid #8c9ecc;
  border-radius: 1px;
  padding: 13px 11px 13px 11px;
  width: 63.7%;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
  /* #AFBEE4 */
  color: #8c9ecc;
}

.right-footer__button {
  cursor: pointer;
  padding: 16.5px 17px 16.5px 17px;
  width: 36.3%;
  border: 1px solid #8c9ecc;
  border-radius: 1px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
}
</style>