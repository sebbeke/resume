<template>
  <li class="mb-4">
    <h2 class="text-lg font-medium text-gray-800">
      {{ value.title }}
    </h2>
    <div class="mt-1">
      <display-location :value="value" />
      <display-time :value="value" />
    </div>
  </li>
</template>

<script lang="ts">
import {PropType} from "vue";
import {Content} from "~/lib/models";
import DisplayLocation from "~/components/Content/DisplayLocation.vue";
import DisplayTime from "~/components/Content/DisplayTime.vue";
export default {
  components: {DisplayLocation, DisplayTime},
  name: "DisplayEducation",
  props: {
    value: {
      type: Object as PropType<Content>,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
