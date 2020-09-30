<template>
  <div>
    <div v-if="!draftItem">
      <b-table
        :items="store.categories"
        :fields="fields"
        @row-clicked="onClickRow"
        selectable
        select-mode="single"
        show-empty
        empty-text="カテゴリがありません"
        hover
      />
      <b-button @click="onClickAdd" variant="primary" block>新規作成</b-button>
    </div>
    <div v-else class="edit-area">
      <b-button @click="onClickExitEdit" variant="primary" block>戻る</b-button>
      <b-input-group prepend="カテゴリID">
        <b-input v-model="draftItem.categoryId" />
      </b-input-group>
      <b-input-group prepend="カテゴリ名">
        <b-input v-model="draftItem.categoryName" />
      </b-input-group>
      <b-input-group prepend="関連記事">
        <b-form-select v-model="draftItem.relation">
          <option value="none">関連付けなし</option>
          <option value="same_categories">同じカテゴリへのリンクを表示</option>
          <option value="all_categories">全カテゴリへのリンクを表示</option>
        </b-form-select>
      </b-input-group>
      <b-button @click="onClickSave" variant="primary">保存</b-button>
      <b-button @click="onClickDelete" variant="danger">削除</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: this.$store,
      fields: [
        { key: "categoryId", label: "カテゴリID" },
        { key: "categoryName", label: "カテゴリ名" },
        { key: "buttons", label: "" },
      ],
      draftItem: null,
    };
  },
  mounted() {},
  methods: {
    onClickRow(item) {
      this.draftItem = item;
    },
    onClickAdd() {
      this.draftItem = {
        categoryId: "",
        categoryName: "",
        relation: "none",
      };
    },
    onClickExitEdit() {
      this.draftItem = null;
    },
    async onClickDelete() {
      if (!confirm("削除しますか？")) return;
      await this.store.deleteCategory(this.draftItem);
      this.draftItem = null;
    },
    async onClickSave() {
      await this.store.addCategory(this.draftItem);
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
