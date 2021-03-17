<template>
  <select :value="language" @change="setLanguage" class="w-full border bg-white rounded px-3 py-2 outline-none mt-2">
    <option value="nl">Nederlands</option>
    <option value="en">English</option>
  </select>
</template>

<script>
export default {
  components: {},
  computed: {
    language() {
      return this.$store.state.language.language;
    },
  },
  methods: {
    setLanguage(e) {
      this.$store.commit("language/setLanguage", e.target.value);

    },
  }
};
</script>

