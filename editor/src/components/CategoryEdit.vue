<template>
  <div>
    <div class="edit-area">
      <b-table
        :items="draftItem.categories"
        :fields="fields"
        @row-clicked="onClickRow"
        selectable
        select-mode="single"
        show-empty
        empty-text="カテゴリがありません"
        hover
      >
        <template v-slot:cell(buttons)="data">
          <b-button-group size="sm">
            <b-button @click="onClickDeleteCategory(data.item)">
              <b-icon icon="trash-fill"></b-icon>
            </b-button>
            <b-button @click="onClickSwapUpCategory(data.item)">
              <b-icon icon="caret-up-square-fill"></b-icon>
            </b-button>
            <b-button @click="onClickSwapDownCategory(data.item)">
              <b-icon icon="caret-down-square-fill"></b-icon>
            </b-button>
          </b-button-group>
        </template>
      </b-table>
      <b-button @click="onClickAddCategory" variant="primary" block>新規作成</b-button>
      <b-input-group prepend="カテゴリID">
        <b-input v-model="editItem.categoryId" />
      </b-input-group>
      <b-input-group prepend="カテゴリ名">
        <b-input v-model="editItem.categoryName" />
      </b-input-group>
      <b-input-group prepend="関連記事">
        <b-form-select v-model="editItem.relation">
          <option value="none">関連付けなし</option>
          <option value="same_categories">同じカテゴリへのリンクを表示</option>
          <option value="all_categories">全カテゴリへのリンクを表示</option>
        </b-form-select>
      </b-input-group>
      <b-button @click="onClickSave" variant="primary" block>保存</b-button>
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
      draftItem: {},
      editItem: {},
    };
  },
  mounted() {
    this.draftItem = JSON.parse(JSON.stringify(this.store.setting));
  },
  methods: {
    onClickRow(item) {
      this.editItem = item;
    },
    onClickAddCategory() {
      if (!this.draftItem.categories)
        this.$set(this.draftItem, "categories", []);
      this.draftItem.categories.push({
        categoryId: "",
        categoryName: "",
        relation: "none",
      });
    },
    onClickDeleteCategory(item) {
      this.draftItem.categories = this.draftItem.categories.filter(
        (d) => d !== item
      );
    },
    onClickSwapUpCategory(item) {
      const index = this.draftItem.categories.indexOf(item);
      if (index === 0) return;
      this.draftItem.categories.splice(
        index - 1,
        2,
        this.draftItem.categories[index],
        this.draftItem.categories[index - 1]
      );
    },
    onClickSwapDownCategory(item) {
      const index = this.draftItem.categories.indexOf(item);
      if (index === this.draftItem.categories.length - 1) return;
      this.draftItem.categories.splice(
        index,
        2,
        this.draftItem.categories[index + 1],
        this.draftItem.categories[index]
      );
    },
    async onClickSave() {
      this.store.saveSetting(this.draftItem);
    },
  },
};
</script>

<style scoped>
.edit-area > * {
  margin-bottom: 10px;
}
</style>
