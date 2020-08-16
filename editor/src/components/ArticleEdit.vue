<template>
  <div>
    <div v-if="!draftItem">
      <b-table
        :items="store.articles"
        :fields="fields"
        @row-clicked="onClickRow"
        selectable
        select-mode="single"
        show-empty
        empty-text="ページがありません"
        hover
      />
      <b-button @click="onClickAddArticle" variant="primary" block>新規作成</b-button>
    </div>
    <div v-else class="edit-area">
      <b-button @click="onClickExitEdit" variant="primary" block>戻る</b-button>
      <b-input-group prepend="ページID">
        <b-input v-model="draftItem.articleId" />
      </b-input-group>
      <b-input-group prepend="タイトル">
        <b-input v-model="draftItem.title" />
      </b-input-group>
      <b-input-group prepend="カテゴリ">
        <b-form-select
          v-model="draftItem.categoryId"
          :options="store.setting.categories"
          value-field="categoryId"
          text-field="categoryName"
        />
      </b-input-group>
      <b-input-group prepend="キャプション画像">
        <div class="thumbnail" :style="{ backgroundImage: `url(${draftItem.captionImage})` }" />
        <b-button @click="$refs.imageSelectModal.show()" variant="primary">select</b-button>
        <ImageSelectModal ref="imageSelectModal" v-model="draftItem.captionImage" />
      </b-input-group>
      <b-input-group prepend="概要">
        <b-input v-model="draftItem.description" />
      </b-input-group>
      <b-input-group prepend="状態">
        <b-form-select v-model="draftItem.status">
          <option value="draft">下書き</option>
          <option value="public">公開</option>
        </b-form-select>
      </b-input-group>
      <b-input-group prepend="作成日">
        <b-form-datepicker v-model="draftItem.publishedDate" />
      </b-input-group>
      <b-input-group prepend="変更日">
        <b-form-datepicker v-model="draftItem.modifiedDate" />
      </b-input-group>
      <b-button @click="onClickEditContent" variant="primary" block>本文を編集する</b-button>
      <b-button @click="onClickPreView" variant="primary" block>プレビュー</b-button>
      <MarkdownEditor :articleId="draftItem.articleId" ref="markDownEditor" />
      <b-button @click="onClickAdd" variant="primary">保存</b-button>
      <b-button @click="onClickDelete" variant="danger">削除</b-button>
    </div>
  </div>
</template>

<script>
import ImageSelectModal from "@/components/ImageSelectModal.vue";
import MarkdownEditor from "@/components/MarkdownEditor.vue";
export default {
  components: {
    ImageSelectModal,
    MarkdownEditor,
  },
  data() {
    return {
      store: this.$store,
      fields: [
        { key: "articleId", label: "ID", sortable: true },
        { key: "title", label: "タイトル", sortable: true },
        {
          key: "categoryId",
          label: "カテゴリ",
          sortable: true,
          formatter: (value) =>
            this.categoryDict[value]
              ? this.categoryDict[value].categoryName
              : "",
        },
      ],
      draftItem: null,
    };
  },
  mounted() {},
  methods: {
    onClickAddArticle() {
      this.draftItem = {
        articleId: "",
        title: "",
        categoryId: "",
        captionImage: "",
        description: "",
        publishedDate: "",
        modifiedDate: "",
        status: "draft",
      };
    },
    onClickRow(item) {
      this.draftItem = JSON.parse(JSON.stringify(item));
    },
    onClickExitEdit() {
      this.draftItem = null;
    },
    onClickEditContent() {
      this.$refs.markDownEditor.open();
    },
    onClickPreView() {
      window.open(`/${this.draftItem.articleId}`, "preview");
    },
    async onClickAdd() {
      await this.store.addArticle(this.draftItem);
      this.draftItem = null;
    },
    async onClickDelete() {
      if (!confirm("このページを削除しますか？")) return;
      await this.store.deleteArticle(this.draftItem);
      this.draftItem = null;
    },
  },
  computed: {
    categoryDict() {
      const dict = {};
      for (let category of this.store.setting.categories) {
        dict[category.categoryId] = category;
      }
      return dict;
    },
  },
};
</script>

<style scoped>
.edit-area > * {
  margin-bottom: 10px;
}
.thumbnail {
  width: 100px;
  height: 100px;
  background-color: lightgray;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
}
</style>
