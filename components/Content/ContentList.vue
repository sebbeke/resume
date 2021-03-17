<template>
  <ul>
    <li v-for="(item, j) in items" :key="`${file}-${language}-${j}`">
      <slot v-bind:item="item" />
    </li>
  </ul>
</template>

<script>
import ContentFetcher from "@/lib/ContentFetcher";
export default {
  name: "ContentList",
  props: {
    language: {
      type: String,
      default: "nl",
    },
    file: {
      type: String,
    },
  },
  data() {
    return {
      items: [],
    };
  },
  async fetch() {
    this.items = await ContentFetcher(this.language, this.file);
  },
  watch: {
    language: '$fetch',
    file: '$fetch',
  },
}
</script>

<style scoped>

</style>
