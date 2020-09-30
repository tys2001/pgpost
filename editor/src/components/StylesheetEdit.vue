<template>
  <div>
    <div v-if="!draftItem">
      <b-table
        :items="store.stylesheets"
        :fields="fields"
        @row-clicked="onClickRow"
        selectable
        select-mode="single"
        show-empty
        empty-text="スタイルシートがありません"
        hover
      />
      <b-button @click="onClickAdd" variant="primary" block>新規作成</b-button>
    </div>
    <div v-else class="edit-area">
      <b-button @click="onClickExitEdit" variant="primary" block>戻る</b-button>
      <b-input-group prepend="名前">
        <b-input v-model="draftItem.fileName" />
      </b-input-group>
      <b-form-textarea v-model="draftItem.content" rows="20"></b-form-textarea>
      <b-button @click="onClickSave" variant="primary">保存</b-button>
      <b-button @click="onClickDelete" variant="danger">削除</b-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      store: this.$store,
      fields: [{ key: "fileName", label: "名前", sortable: true }],
      draftItem: null,
    };
  },
  mounted() {},
  methods: {
    onClickAdd() {
      this.draftItem = {
        cssName: "",
        content: "",
      };
    },
    onClickRow(item) {
      this.draftItem = JSON.parse(JSON.stringify(item));
    },
    onClickExitEdit() {
      this.draftItem = null;
    },
    async onClickSave() {
      await this.store.addStylesheet(this.draftItem);
      this.draftItem = null;
    },
    async onClickDelete() {
      if (!confirm("削除しますか？")) return;
      await this.store.deleteStylesheet(this.draftItem);
      this.draftItem = null;
    },
  },
};
</script>

<style scoped>
.edit-area > * {
  margin-bottom: 10px;
}
</style>
