<template>
  <div>
    <div v-if="!draftItem">
      <b-input-group prepend="タイプ">
        <b-form-select v-model="filter.type">
          <option value="">(指定なし)</option>
          <option value="post">投稿</option>
          <option value="page">ページ</option>
          <option value="part">共通部品</option>
        </b-form-select>
      </b-input-group>
      <b-table
        :items="store.pages"
        :fields="fields"
        @row-clicked="onClickRow"
        selectable
        select-mode="single"
        show-empty
        empty-text="ページがありません"
        hover
        :filter="filter"
        :filter-function="
          (item, filter) => !filter.type || item.type === filter.type
        "
      />
      <b-button @click="onClickAdd" variant="primary" block>新規作成</b-button>
    </div>
    <div v-else class="edit-area">
      <b-button @click="onClickExitEdit" variant="primary" block>戻る</b-button>
      <b-input-group prepend="ページID">
        <b-input v-model="draftItem.pageId" />
      </b-input-group>
      <b-input-group prepend="タイトル">
        <b-input v-model="draftItem.title" />
      </b-input-group>
      <b-input-group prepend="カテゴリ">
        <b-form-select
          v-model="draftItem.categoryId"
          :options="store.categories"
          value-field="categoryId"
          text-field="categoryName"
        />
      </b-input-group>
      <b-input-group prepend="キャプション画像">
        <div
          class="thumbnail"
          :style="{
            backgroundImage: `url(${store.basePath}${draftItem.captionImage})`,
          }"
        />
        <b-button @click="$refs.imageSelectModal.show()" variant="primary"
          >select</b-button
        >
        <ImageSelectModal
          ref="imageSelectModal"
          v-model="draftItem.captionImage"
        />
      </b-input-group>
      <b-input-group prepend="概要">
        <b-input v-model="draftItem.description" />
      </b-input-group>
      <b-input-group prepend="タイプ">
        <b-form-select v-model="draftItem.type">
          <option value="post">投稿</option>
          <option value="page">ページ</option>
          <option value="part">共通部品</option>
        </b-form-select>
      </b-input-group>
      <b-input-group prepend="状態">
        <b-form-select v-model="draftItem.status">
          <option value="draft">下書き</option>
          <option value="published">公開</option>
          <option value="noindex">公開（インデックスなし）</option>
        </b-form-select>
      </b-input-group>
      <b-input-group prepend="リンク">
        <b-form-select v-model="draftItem.link">
          <option value="none">なし</option>
          <option value="same_categories">関連記事を表示</option>
          <option value="all_categories">全カテゴリの記事を表示</option>
        </b-form-select>
      </b-input-group>
      <b-input-group prepend="作成日">
        <b-form-datepicker v-model="draftItem.publishedDate" />
      </b-input-group>
      <b-input-group prepend="変更日">
        <b-form-datepicker v-model="draftItem.modifiedDate" />
      </b-input-group>
      <b-button @click="onClickEditContent" variant="primary" block
        >本文を編集する</b-button
      >
      <b-button @click="onClickPreView" variant="primary" block
        >プレビュー</b-button
      >
      <MarkdownEditor :pageId="draftItem.pageId" ref="markDownEditor" />
      <b-button @click="onClickSave" variant="primary">保存</b-button>
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
        { key: "pageId", label: "ID", sortable: true },
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
        { key: "type", label: "タイプ", sortable: true },
        { key: "status", label: "状態", sortable: true },
      ],
      draftItem: null,
      filter: {
        type: "",
      },
    };
  },
  mounted() {},
  methods: {
    onClickAdd() {
      this.draftItem = {
        pageId: "",
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
      window.open(`/${this.draftItem.pageId}`, "preview");
    },
    async onClickSave() {
      await this.store.addPage(this.draftItem);
      this.draftItem = null;
    },
    async onClickDelete() {
      if (!confirm("削除しますか？")) return;
      await this.store.deletePage(this.draftItem);
      this.draftItem = null;
    },
  },
  computed: {
    categoryDict() {
      const dict = {};
      for (let category of this.store.categories) {
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
