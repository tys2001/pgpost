<template>
  <div id="app">
    <TabMenu />
  </div>
</template>

<script>
import TabMenu from "./components/TabMenu.vue";

export default {
  components: {
    TabMenu
  }
};
</script>

<style>
#app {
  font-family: verdana, "ヒラギノ丸ゴ ProN W4", "Hiragino Maru Gothic ProN",
    "メイリオ", "Meiryo", "ＭＳ Ｐゴシック", "MS PGothic", Sans-Serif;
}
</style>
