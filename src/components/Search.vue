<template>
  <div class="wrapper">
    <div class="search">
      <h1 class="title">Каталог решений</h1>

      <b-input-group class="mb-2">
        <b-form-tags 
          placeholder="Поиск по инновациям"
          v-model="selct_search_elem"
          class="input-search"
          tag-variant="primary"
          tag-pills
          size='lg'
          add-button-text="Добавить"
          tag-class="tag-style___123"
        ></b-form-tags>

        <b-input-group-append
          class="button-search"
        >
          <b-button @click="search" variant="primary">
            Поиск
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.499973 10.1667L17.517 10.1667L11.3418 16.3419L12.9915 17.9916L21.983 9.00008L12.9915 0.00857813L11.3418 1.65825L17.517 7.83341L0.499972 7.83341L0.499973 10.1667Z" fill="white"/>
            </svg>
          </b-button>
        </b-input-group-append>
      </b-input-group>

      <div class="items">
        <div
          v-for="(elem, id) in all_serch_elem"
          :key="id"
          class="select-item text"
          @click="select(id)"
        >
          {{elem}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      all_serch_elem: [
        '3D_моделирование',
        '3D_печать',
        'Биометрия',
        'AR/VR',
        '3D_моделирование',
        '3D_печать',
        'AR/VR',
        '3D_моделирование',
        'Биометрия',
        '3D_печать',
        'AR/VR',
        'Биометрия',
        '3D_моделирование',
        '3D_печать',
        'AR/VR',
        'Биометрия'
      ],
      selct_search_elem: []
    }
  },
  methods: {
    search() {
      console.log('Search')
    },
    select(id) {
      this.selct_search_elem.push(this.all_serch_elem[id])
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  width: 1200px;
  margin-bottom: 5vh;
}
.title {
  color: #fff;
  font-family: Benzin-Bold;
  font-size: 2.6rem;
}
.select-item {
  background: rgba(56, 93, 249, 0.2);
  border: 1px solid #385DF9;
  height: 44px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.3vh;
  font-size: 1.3rem;
  margin-right: 1vh;
  margin-top: 1vh;
  cursor: pointer;
}
.select-item:last-child {
  margin-right: 0;
}
.items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 3vh;
}
.input-search {
  background: none;
  border: 1px solid #AFBEE4;
  border-radius: 0;
}
.button-search button {
  background: none;
  border: 1px solid #AFBEE4;
  border-radius: 0;
  width: 140px;
  color: #fff;
}
.button-search button svg {
  margin-left: 1vh;
}
.tag-style___123 {
  background: red  !important;
  height: 100px;
  color: #385DF9;
}
</style>