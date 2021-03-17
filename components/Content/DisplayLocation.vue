<template>
  <div class="flex items-center text-gray-800" v-if="value !== ''">
    <building-icon />
    <small class="text-base">
      {{value.location}}
    </small>
  </div>
</template>

<script lang="ts">
import BuildingIcon from "../icons/Building.vue";
import {PropType} from "vue";
import {Content} from "~/lib/models";
export default {
  components: {BuildingIcon},
  name: "DisplayLocation",
  props: {
    value: {
      type: Object as PropType<Content>,
      required: true,
    },
  },
};
</script>
