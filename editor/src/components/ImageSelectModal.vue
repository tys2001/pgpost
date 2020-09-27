<template>
  <b-modal ref="modal" @ok="onClickOk" scrollable size="lg">
    <b-button
      @click="$refs.uploadFile.click()"
      block
      variant="primary"
      @dragenter.prevent
      @dragover.prevent
      @dragleave.prevent
      @drop.prevent="onDropFile"
      >アップロード</b-button
    >
    <input type="file" multiple ref="uploadFile" @change="onUploadFileChange" />
    <div
      class="thumbnails-box"
      @drop.prevent.stop="onDropFile"
      @dragenter="onDropFile"
    >
      <div
        v-for="item in store.mediaFiles"
        :key="item.fileName"
        :title="item.fileName"
        class="thumbnail-outline"
        :selected="selectedMedia === item"
        @click="onClickMedia(item)"
        @keydown.delete="onClickDelete"
      >
        <div
          class="thumbnail"
          :style="{ backgroundImage: `url(${store.basePath}${item.url})` }"
        >
          <div class="square" />
        </div>
        <b-button v-if="selectedMedia === item" @click="onClickDelete"
          >削除</b-button
        >
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      store: this.$store,
      selectedMedia: null,
    };
  },
  methods: {
    show() {
      this.selectedMedia = null;
      for (let media of this.store.mediaFiles) {
        if (media.url === this.value) {
          this.selectedMedia = media;
        }
      }
      this.$refs.modal.show();
    },
    onClickMedia(item) {
      if (this.selectedMedia === item) this.selectedMedia = null;
      else this.selectedMedia = item;
    },
    async onClickDelete() {
      if (this.selectedMedia) {
        if (!confirm(`本当に削除しますか？\n${this.selectedMedia.fileName}`))
          return;
        this.store.deleteMediaFile(this.selectedMedia);
      }
    },
    onClickOk() {
      if (this.selectedMedia) this.$emit("input", this.selectedMedia.url);
      else this.$emit("input", "");
    },
    onUploadFileChange() {
      for (let file of this.$refs.uploadFile.files)
        this.store.addMediaFile(file);
    },
    onDropFile() {
      const files = event.target.files
        ? event.target.files
        : event.dataTransfer.files;
      for (let file of files) this.store.addMediaFile(file);
    },
  },
};
</script>

<style scoped>
.thumbnail-outline {
  width: 25%;
  display: inline-block;
  padding: 5px;
}
.thumbnail {
  width: 100%;
  background-color: lightgray;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.thumbnail-outline[selected] {
  background-color: red;
}
.square {
  width: 100%;
  padding-bottom: 100%;
}
input[type="file"] {
  display: none;
}
</style>
