<template>
  <div>
    <b-table
      :items="store.categories"
      :fields="fields"
      @row-clicked="onClickRow"
      caption="カテゴリ一覧"
      caption-top
      selectable
      select-mode="single"
      show-empty
      empty-text="カテゴリがありません"
      hover
    />
    <b-input-group prepend="カテゴリID">
      <b-input v-model="draftItem.categoryId" />
    </b-input-group>
    <b-input-group prepend="カテゴリ名">
      <b-input v-model="draftItem.categoryName" />
    </b-input-group>
    <b-button @click="onClickAdd">add</b-button>
    <b-button @click="onClickDelete">delete</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: this.$store,
      fields: [
        { key: "categoryId", label: "カテゴリID", sortable: true },
        { key: "categoryName", label: "カテゴリ名", sortable: true }
      ],
      draftItem: {
        categoryId: "",
        categoryName: ""
      }
    };
  },
  methods: {
    onClickRow(item) {
      this.draftItem = JSON.parse(JSON.stringify(item));
    },
    async onClickAdd() {
      this.store.addCategory(this.draftItem);
    },
    async onClickDelete() {
      this.store.deleteCategory(this.draftItem);
    }
  }
};
</script>

<style scoped>
</style>
