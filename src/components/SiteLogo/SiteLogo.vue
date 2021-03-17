<template>
  <div>
    <img
      :src="require(`../../assets/${logoUrl}`)"
      alt="Site Logo"
      class="logo--main"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SiteLogo',
  props: {
    logoUrl: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.logo {
  &--main {
    max-width: 30vw;
    min-width: 240px;
  }
}
</style>
