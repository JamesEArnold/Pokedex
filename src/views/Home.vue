<template>
  <div class="home">
    <site-logo
      logo-url="logo.png"
    />
  </div>
</template>

<script lang="ts">
import SiteLogo from '@/components/SiteLogo/SiteLogo.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    SiteLogo,
  },
});
</script>
