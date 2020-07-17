<template>
  <div v-show="shown" class="mde-container" fullscreen @keydown="onKeyDown">
    <div class="toolbar">
      <div class="tool-icon" @click="onClickSave">
        <b-icon icon="upload"></b-icon>
      </div>
      <div class="tool-icon" @click="exit">
        <b-icon icon="door-closed"></b-icon>
      </div>
      <div class="tool-icon" @click="$refs.imageSelectModal.show()">
        <b-icon icon="image"></b-icon>
      </div>
      <div class="message">{{message}}</div>
    </div>
    <textarea
      v-model="markdown"
      ref="markdownInput"
      class="writer"
      @scroll="onScroll"
      @mousemove="scrollTarget=null"
      @touchmove="scrollTarget=null"
    />
    <div
      v-html="html"
      ref="htmlPreview"
      class="viewer content-body"
      @scroll="onScroll"
      @mousemove="scrollTarget=null"
      @touchmove="scrollTarget=null"
    ></div>
    <ImageSelectModal ref="imageSelectModal" @change="onSelectImage" />
  </div>
</template>

<script>
import ImageSelectModal from "@/components/ImageSelectModal.vue";
import marked from "marked";
import hljs from "highlight.js";
export default {
  components: {
    ImageSelectModal
  },
  props: {
    articleId: String
  },
  data() {
    return {
      store: this.$store,
      shown: false,
      markdown: "",
      message: "",
      insertImageUrl: "",
      scrollTarget: null,
      abortScroll: false
    };
  },
  created() {
    marked.setOptions({
      langPrefix: "hljs language-",
      highlight: (code, lang) => {
        return hljs.highlightAuto(code, [lang]).value;
      }
    });
  },
  methods: {
    async open() {
      this.shown = true;
      const content = await this.store.getContent(this.articleId);
      this.markdown = content.markdown;
    },
    exit() {
      this.shown = false;
    },
    async onClickSave() {
      await this.store.saveContent(this.articleId, {
        markdown: this.markdown,
        html: this.html
      });
      this.message = `Saved at ${new Date().toLocaleString()}`;
    },
    onSelectImage(imageUrl) {
      const len = this.markdown.length;
      const pos = this.$refs.markdownInput.selectionStart;
      const before = this.markdown.substr(0, pos);
      const word = `![](${imageUrl})`;
      const after = this.markdown.substr(pos, len);
      this.markdown = before + word + after;
    },
    onScroll() {
      const moved = event.target;
      if (moved === this.$refs.markdownInput) {
        if (this.scrollTarget === this.$refs.markdownInput) return;
        this.scrollTarget = this.$refs.htmlPreview;
      } else {
        if (this.scrollTarget === this.$refs.htmlPreview) return;
        this.scrollTarget = this.$refs.markdownInput;
      }
      const scrollRatio =
        moved.scrollTop / (moved.scrollHeight - moved.clientHeight);
      this.scrollTarget.scrollTo(
        0,
        scrollRatio *
          (this.scrollTarget.scrollHeight - this.scrollTarget.clientHeight)
      );
    },
    onKeyDown() {
      if (event.ctrlKey) {
        if (event.key === "s") {
          event.preventDefault();
          this.onClickSave();
        }
      }
    }
  },
  computed: {
    html() {
      return marked(this.markdown);
    }
  },
  watch: {
    // scrollTarget(val) {
    //   if (!val) return;
    //   setTimeout(() => {
    //     this.scrollTarget = null;
    //   }, 100);
    // }
  }
};
</script>
<style scoped>
.mde-container {
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 1fr;
  background-color: white;
}
.mde-container[fullscreen] {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.toolbar {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  display: flex;
  padding: 5px;
  background-color: gray;
}
.tool-icon {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  color: white;
  cursor: pointer;
}
.tool-icon:hover {
  background-color: lightgray;
}
.message {
  margin-left: auto;
  color: white;
  line-height: 40px;
}
.writer {
  grid-column-start: 1;
  grid-row-start: 2;
  overflow-x: hidden;
  overflow-y: auto;
  resize: none;
  word-break: break-all;
  padding: 20px;
  border: none;
  border-right: 1px solid lightgray;
  font-size: 14px;
}
.writer:focus {
  outline: none;
}
.viewer {
  grid-column-start: 2;
  grid-row-start: 2;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
}
</style>
