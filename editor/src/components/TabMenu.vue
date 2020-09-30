<template>
  <div>
    <b-tabs v-if="ready" pills card>
      <b-tab title="ページ" active>
        <PageEdit />
      </b-tab>
      <b-tab title="カテゴリ">
        <CategoryEdit />
      </b-tab>
      <b-tab title="CSS">
        <StylesheetEdit />
      </b-tab>
      <b-tab title="設定">
        <SettingEdit />
      </b-tab>
      <b-tab title="公開">
        <Publish />
      </b-tab>
    </b-tabs>
    <div v-else class="loading">
      <b-spinner variant="primary"></b-spinner>
    </div>
  </div>
</template>

<script>
import PageEdit from "@/components/PageEdit.vue";
import CategoryEdit from "@/components/CategoryEdit.vue";
import StylesheetEdit from "@/components/StylesheetEdit.vue";
import SettingEdit from "@/components/SettingEdit.vue";
import Publish from "@/components/Publish.vue";
export default {
  components: {
    PageEdit,
    CategoryEdit,
    StylesheetEdit,
    SettingEdit,
    Publish,
  },
  data() {
    return {
      store: this.$store,
      ready: false,
    };
  },
  async mounted() {
    await this.store.loadAll();
    this.ready = true;
  },
};
</script>

<style scoped>
.loading {
  height: 100vh;
  text-align: center;
  line-height: 100vh;
}
</style>
