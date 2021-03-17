<template>
  <div>
    <div class="mx-4 mb-6">
      <h1 class="mb-4 text-3xl text-gray-700 font-bold">{{ page.summary }}</h1>
      <p class="text-lg">
        {{ page.description }}
      </p>
    </div>
    <div class="mx-4 mb-6">
      <h1 class="mb-4 text-3xl text-gray-700 font-bold">{{ page.tools }}</h1>
      <tool-list />
    </div>
    <div class="mx-4 mb-6">
      <h1 class="mb-4 text-3xl text-gray-700 font-bold">{{ page.experience }}</h1>
      <content-list :language="language" file="jobs">
        <template v-slot:default="{ item }">
          <display-job :value="item" />
        </template>
      </content-list>
    </div>
    <div class="mx-4 mb-6">
      <h1 class="mb-4 text-3xl text-gray-700 font-bold">{{ page.education }}</h1>
      <content-list :language="language" file="education">
        <template v-slot:default="{ item }">
          <display-education :value="item" />
        </template>
      </content-list>
    </div>
  </div>
</template>

<script>
import BuildingIcon from "../components/icons/Building.vue";
import DateIcon from "../components/icons/Date.vue";
import ContentList from "../components/Content/ContentList.vue";
import DisplayJob from "../components/Jobs/DisplayJob.vue";
import DisplayEducation from "../components/Education/DisplayEducation.vue";
import ToolList from "../components/Software/ToolList.vue";
import ContentFetcher from "~/lib/ContentFetcher";

export default {
  components: {BuildingIcon, DateIcon, ContentList, DisplayJob, DisplayEducation, ToolList},
  computed: {
    language() {
      return this.$store.state.language.language;
    },
  },
  data() {
    return {
      page: {}
    };
  },
  async fetch() {
    this.page = await ContentFetcher(this.language, "index");
  },
  watch: {
    language: '$fetch',
  },
};
</script>

