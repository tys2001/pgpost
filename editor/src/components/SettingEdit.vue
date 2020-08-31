<template>
  <div class="form-list">
    <b-input-group prepend="サイト名">
      <b-input v-model="draftItem.siteName" />
    </b-input-group>
    <b-input-group prepend="公開先URL">
      <b-input v-model="draftItem.publishUrl" />
    </b-input-group>
    <b-button @click="onClickSave" variant="primary" block>保存</b-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      store: this.$store,
      draftItem: {
        siteName: "",
        publishUrl: "",
        categories: [],
      },
    };
  },
  mounted() {
    this.draftItem = JSON.parse(JSON.stringify(this.store.setting));
  },
  methods: {
    async onClickSave() {
      this.store.saveSetting(this.draftItem);
    },
  },
};
</script>

<style scoped>
.form-list > * {
  margin-bottom: 10px;
}
</style>
