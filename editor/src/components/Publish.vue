<template>
  <div class="form-list">
    <b-button v-if="!busy" @click="onClickPublish" variant="primary" block>公開</b-button>
    <b-button v-else variant="primary" block>
      <b-spinner small></b-spinner>
    </b-button>
    <b-alert show variant="info">
      <p v-for="(log, i) in publishResult.success" :key="i">OK: {{log}}</p>
      <p v-for="(log, i) in publishResult.error" :key="i">ERROR: {{log}}</p>
    </b-alert>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      store: this.$store,
      busy: false,
      publishResult: {
        success: [],
        error: [],
      },
    };
  },
  methods: {
    async onClickPublish() {
      this.busy = true;
      const response = await fetch(
        `${this.store.setting.publishUrl}/publish.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            callbackUrl: location.origin,
          }),
        }
      );
      this.publishResult = await response.json();
      this.busy = false;
    },
  },
};
</script>

<style scoped>
.form-list > * {
  margin-bottom: 10px;
}
</style>
