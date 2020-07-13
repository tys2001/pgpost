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
    >アップロード</b-button>
    <input type="file" multiple ref="uploadFile" @change="onUploadFileChange" />
    <div class="thumbnails-box" @drop.prevent.stop="onDropFile" @dragenter="onDropFile">
      <div
        v-for="item in store.media"
        :key="item.fileName"
        class="thumbnail-outline"
        :selected="selectedMedia === item"
        @click="selectedMedia = item"
      >
        <div class="thumbnail" :style="{ backgroundImage: `url(${item.storageUrl})` }">
          <div class="square" />
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      store: this.$store,
      selectedMedia: null,
      isFileDropping: false
    };
  },
  methods: {
    show() {
      this.selectedMedia = null;
      this.$refs.modal.show();
    },
    onClickOk() {
      this.$emit("input", this.selectedMedia.storageUrl);
      this.$emit("change", this.selectedMedia.storageUrl);
    },
    onUploadFileChange() {
      for (let file of this.$refs.uploadFile.files) this.store.addMedia(file);
    },
    onDropFile() {
      const files = event.target.files
        ? event.target.files
        : event.dataTransfer.files;
      for (let file of files) this.store.addMedia(file);
    }
  }
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
