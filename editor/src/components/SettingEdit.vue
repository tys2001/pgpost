<template>
  <div class="form-list">
    <b-input-group prepend="サイト名">
      <b-input v-model="draftItem.siteName" />
    </b-input-group>
    <b-input-group prepend="公開先URL">
      <b-input v-model="draftItem.publishUrl" />
    </b-input-group>
    <b-input-group prepend="ロゴ画像">
      <div class="thumbnail" :style="{ backgroundImage: `url(${draftItem.logoImage})` }" />
      <b-button @click="$refs.logoImageSelectModal.show()" variant="primary">select</b-button>
      <ImageSelectModal ref="logoImageSelectModal" v-model="draftItem.logoImage" />
    </b-input-group>
    <b-input-group prepend="トップ画像">
      <div class="thumbnail" :style="{ backgroundImage: `url(${draftItem.topImage})` }" />
      <b-button @click="$refs.topImageSelectModal.show()" variant="primary">select</b-button>
      <ImageSelectModal ref="topImageSelectModal" v-model="draftItem.topImage" />
    </b-input-group>
    <div>
      <b-button v-b-toggle.editMenu block variant="primary">メニュー編集</b-button>
      <b-collapse id="editMenu">
        <b-card>
          <b-table
            :items="draftItem.menuItems"
            :fields="menuItemFields"
            show-empty
            empty-text="メニューがありません"
          >
            <template v-slot:cell(label)="data">
              <b-input v-model="data.item.label" />
            </template>
            <template v-slot:cell(href)="data">
              <b-input v-model="data.item.href" />
            </template>
            <template v-slot:cell(buttons)="data">
              <b-button-group size="sm">
                <b-button @click="onClickDeleteMenuItem(data.item)">
                  <b-icon icon="trash-fill"></b-icon>
                </b-button>
                <b-button @click="onClickSwapUpMenuItem(data.item)">
                  <b-icon icon="caret-up-square-fill"></b-icon>
                </b-button>
                <b-button @click="onClickSwapDownMenuItem(data.item)">
                  <b-icon icon="caret-down-square-fill"></b-icon>
                </b-button>
              </b-button-group>
            </template>
          </b-table>
          <b-button @click="onClickAddMenuItem" variant="primary" block>追加</b-button>
        </b-card>
      </b-collapse>
    </div>
    <b-button @click="onClickSave" variant="primary" block>保存</b-button>
  </div>
</template>

<script>
import ImageSelectModal from "@/components/ImageSelectModal.vue";
export default {
  components: {
    ImageSelectModal,
  },
  data() {
    return {
      store: this.$store,
      draftItem: {
        siteName: "",
        topImage: "",
        publishUrl: "",
        categories: [],
        menuItems: [],
      },
      menuItemFields: [
        { key: "label", label: "ラベル" },
        { key: "href", label: "リンク先" },
        { key: "buttons", label: "" },
      ],
    };
  },
  mounted() {
    this.draftItem = JSON.parse(JSON.stringify(this.store.setting));
  },
  methods: {
    async onClickSave() {
      this.store.saveSetting(this.draftItem);
    },
    onClickAddMenuItem() {
      if (!this.draftItem.menuItems) this.$set(this.draftItem, "menuItems", []);
      this.draftItem.menuItems.push({});
    },
    onClickDeleteMenuItem(item) {
      this.draftItem.menuItems = this.draftItem.menuItems.filter(
        (d) => d !== item
      );
    },
    onClickSwapUpMenuItem(item) {
      const index = this.draftItem.menuItems.indexOf(item);
      if (index === 0) return;
      this.draftItem.menuItems.splice(
        index - 1,
        2,
        this.draftItem.menuItems[index],
        this.draftItem.menuItems[index - 1]
      );
    },
    onClickSwapDownMenuItem(item) {
      const index = this.draftItem.menuItems.indexOf(item);
      if (index === this.draftItem.menuItems.length - 1) return;
      this.draftItem.menuItems.splice(
        index,
        2,
        this.draftItem.menuItems[index + 1],
        this.draftItem.menuItems[index]
      );
    },
  },
};
</script>

<style scoped>
.form-list > * {
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
