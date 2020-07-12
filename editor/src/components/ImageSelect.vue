<template>
  <div>
    <div class="thumbnail-selected" :style="{ backgroundImage: `url(${value})` }" />
    <b-button @click="onClickOpen">select</b-button>
    <b-modal ref="modal" @ok="onClickOk" scrollable size="lg">
      <b-button @click="$refs.uploadFile.click()" block variant="primary">アップロード</b-button>
      <input type="file" ref="uploadFile" @change="onUploadFileChange" />
      <div class="thumbnails-box">
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
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      store: this.$store,
      selectedMedia: null
    };
  },
  methods: {
    onClickOpen() {
      this.selectedMedia = null;
      this.$refs.modal.show();
    },
    onClickOk() {
      this.$emit("input", this.selectedMedia.storageUrl);
    },
    onUploadFileChange() {
      this.store.addMedia(this.$refs.uploadFile.files[0]);
    }
  }
};
</script>

<style scoped>
.thumbnail-selected {
  width: 100px;
  height: 100px;
  background-color: lightgray;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  margin: 5px;
}
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
