<template>
  <div v-show="shown" class="mde-container" fullscreen @keydown="onKeyDown">
    <div class="toolbar">
      <div class="tool-icon" @click="onClickSave">
        <b-icon icon="upload"></b-icon>
      </div>
      <div class="tool-icon" @click="onClickExit">
        <b-icon icon="door-closed"></b-icon>
      </div>
      <div class="tool-icon" @click="$refs.imageSelectModal.show()">
        <b-icon icon="image"></b-icon>
      </div>
      <b-form-select
        class="tool-select"
        size="sm"
        v-model="selectedSection"
        :options="sectionSelectOptions"
      />
      <div class="tool-icon" @click="onClickAddSection">
        <b-icon icon="plus"></b-icon>
      </div>
      <div class="message">{{ message }}</div>
    </div>
    <textarea
      v-model="selectedSection.markdown"
      ref="markdownInput"
      class="writer"
      @scroll="onScroll"
    />
    <iframe ref="previewIframe" class="viewer" />
    <ImageSelectModal ref="imageSelectModal" @input="onSelectImage" />
  </div>
</template>

<script>
import ImageSelectModal from "@/components/ImageSelectModal.vue";
import marked from "marked";
import hljs from "highlight.js";
export default {
  components: {
    ImageSelectModal,
  },
  props: {
    pageId: String,
  },
  data() {
    return {
      store: this.$store,
      shown: false,
      markdown: "",
      sections: [],
      selectedSection: { markdown: "", html: "" },
      message: "",
      insertImageUrl: "",
    };
  },
  created() {
    marked.setOptions({
      langPrefix: "hljs language-",
      highlight: (code, lang) => {
        return hljs.highlightAuto(code, [lang]).value;
      },
    });
  },
  mounted() {
    const iframeDocument = this.$refs.previewIframe.contentWindow.document;
    for (let css of this.store.stylesheets) {
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      link.setAttribute("href", `${this.store.basePath}/css/${css.fileName}`);
      iframeDocument.head.appendChild(link);
    }
    this.previewElement = document.createElement("main");
    iframeDocument.body.appendChild(this.previewElement);
  },
  methods: {
    async open() {
      this.shown = true;
      const content = await this.store.getContent(this.pageId);
      this.sections = content.sections;
      this.selectedSection = this.sections[0];
    },
    onClickExit() {
      this.shown = false;
    },
    async onClickSave() {
      for (let section of this.sections) {
        section.html = marked(section.markdown);
      }
      await this.store.saveContent({
        pageId: this.pageId,
        sections: this.sections,
      });
      this.message = `Saved at ${new Date().toLocaleString()}`;
    },
    onClickAddSection() {
      this.selectedSection = { markdown: "", html: "" };
      this.sections.push(this.selectedSection);
    },
    onSelectImage(imageUrl) {
      const len = this.selectedSection.markdown.length;
      const pos = this.$refs.markdownInput.selectionStart;
      const before = this.selectedSection.markdown.substr(0, pos);
      const word = `![](${imageUrl})`;
      const after = this.selectedSection.markdown.substr(pos, len);
      this.selectedSection.markdown = before + word + after;
    },
    onScroll() {
      const scrollTrigger = event.target;
      const scrollTarget = this.previewElement;
      const scrollRatio =
        scrollTrigger.scrollTop /
        (scrollTrigger.scrollHeight - scrollTrigger.clientHeight);
      scrollTarget.scrollTo(
        0,
        scrollRatio * (scrollTarget.scrollHeight - scrollTarget.clientHeight)
      );
    },
    onKeyDown() {
      if (event.ctrlKey) {
        if (event.key === "s") {
          event.preventDefault();
          this.onClickSave();
        }
      }
    },
  },
  computed: {
    sectionSelectOptions() {
      const ret = [];
      for (let section of this.sections) {
        let title = section.markdown;
        title = title.substr(0, title.indexOf("\n"));
        ret.push({ text: title, value: section });
      }
      return ret;
    },
  },
  watch: {
    "selectedSection.markdown"() {
      this.previewElement.innerHTML = marked(this.selectedSection.markdown);
    },
  },
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
.tool-select {
  width: 300px;
  margin: 5px;
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
  width: 100%;
  height: 100%;
  border: none;
}
</style>
