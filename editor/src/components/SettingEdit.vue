<template>
  <div class="form-list">
    <b-input-group prepend="サイト名">
      <b-input v-model="draftItem.siteName" />
    </b-input-group>
    <b-input-group prepend="公開先URL">
      <b-input v-model="draftItem.publishUrl" />
    </b-input-group>
    <b-input-group prepend="ロゴ画像">
      <div class="thumbnail" :style="{ backgroundImage: `url(${draftItem.logoImage})` }" />
      <b-button @click="$refs.logoImageSelectModal.show()" variant="primary">select</b-button>
      <ImageSelectModal ref="logoImageSelectModal" v-model="draftItem.logoImage" />
    </b-input-group>
    <b-input-group prepend="トップ画像">
      <div class="thumbnail" :style="{ backgroundImage: `url(${draftItem.topImage})` }" />
      <b-button @click="$refs.topImageSelectModal.show()" variant="primary">select</b-button>
      <ImageSelectModal ref="topImageSelectModal" v-model="draftItem.topImage" />
    </b-input-group>
    <b-button @click="onClickSave" variant="primary" block>保存</b-button>
  </div>
</template>

<script>
import ImageSelectModal from "@/components/ImageSelectModal.vue";
export default {
  components: {
    ImageSelectModal,
  },
  data() {
    return {
      store: this.$store,
      draftItem: {
        siteName: "",
        topImage: "",
        publishUrl: "",
        categories: []
      }
    };
  },
  mounted() {
    this.draftItem = JSON.parse(JSON.stringify(this.store.setting));
  },
  methods: {
    async onClickSave() {
      this.store.saveSetting(this.draftItem);
    }
  }
};
</script>

<style scoped>
.form-list > * {
  margin-bottom: 10px;
}
.thumbnail {
  width: 100px;
  height: 100px;
  background-color: lightgray;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
}
</style>
