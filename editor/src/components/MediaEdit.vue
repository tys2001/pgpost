<template>
  <div>
    <b-table
      :items="store.media"
      :fields="fields"
      @row-clicked="onClickRow"
      caption="ファイル一覧"
      caption-top
      selectable
      select-mode="single"
      show-empty
      empty-text="ファイルがありません"
      hover
    >
      <template v-slot:cell(thumbnail)="data">
        <div class="thumbnail" :style="{ backgroundImage: `url(${data.item.storageUrl})` }" />
      </template>
    </b-table>
    <b-form-file
      v-model="inputFile"
      :state="Boolean(inputFile)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <div class="mt-3">Selected file: {{ inputFile ? inputFile.name : '' }}</div>
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
        { key: "thumbnail", label: "" },
        { key: "fileName", label: "ファイル名", sortable: true }
      ],
      inputFile: null,
      selectedItem: null
    };
  },
  methods: {
    async onClickAdd() {
      this.store.addMedia(this.inputFile);
    },
    async onClickDelete() {
      this.store.deleteMedia(this.selectedItem.fileName);
    },
    onClickRow(item) {
      this.selectedItem = item;
    }
  }
};
</script>

<style scoped>
.thumbnail {
  width: 100px;
  height: 100px;
  background-color: lightgray;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
