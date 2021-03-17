<template>
  <div class="flex items-center text-gray-600" v-if="time !== ''">
    <date-icon />
    <small class="text-sm ">{{ time }}</small>
  </div>
</template>

<script>
import DateIcon from "../icons/Date.vue";
export default {
  components: {DateIcon},
  name: "DisplayTime",
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    time: function() {
      if (this.value === undefined ||	this.value.start === "") {
        return "";
      }
      return this.value.start + (this.value.end !== '' ? ` - ${this.value.end}` : "");
    }
  },
};
</script>
