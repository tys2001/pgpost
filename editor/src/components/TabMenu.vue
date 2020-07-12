<template>
  <div>
    <b-tabs v-if="ready" pills card>
      <b-tab title="ページ" active>
        <ArticleEdit />
      </b-tab>
      <b-tab title="設定">
        <SettingEdit />
      </b-tab>
      <b-tab title="公開">not implemented</b-tab>
    </b-tabs>
    <div v-else class="loading">
      <b-spinner variant="primary"></b-spinner>
    </div>
  </div>
</template>

<script>
import ArticleEdit from "@/components/ArticleEdit.vue";
import SettingEdit from "@/components/SettingEdit.vue";
export default {
  components: {
    ArticleEdit,
    SettingEdit
  },
  data() {
    return {
      store: this.$store,
      ready: false
    };
  },
  async mounted() {
    await this.store.loadAll();
    this.ready = true;
  }
};
</script>

<style scoped>
.loading {
  height: 100vh;
  text-align: center;
  line-height: 100vh;
}
</style>
