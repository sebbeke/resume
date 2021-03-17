<template>
  <div>
    <div v-for="item in items" :key="`tool-${item}`" class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
      {{item}}
    </div>
  </div>
</template>

<script lang="ts">
import ContentFetcher from "@/lib/ContentFetcher";
export default {
  name: "ToolList",
  data() {
    return {
      items: [],
    };
  },
  async fetch() {
    const res = await ContentFetcher("", "software") as string[];
    this.items = res.sort();
  },
}
</script>

<style scoped>

</style>
