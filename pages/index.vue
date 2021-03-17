<template>
  <div>
    <div class="mx-4 mb-6">
      <h1 class="mb-4 text-3xl text-gray-700 font-bold">Samenvatting</h1>
      <p class="text-lg">
        Een enthousiaste IT-er die altijd klaar staat om iets bij te leren of een practical joke uit te halen. In mijn vrije tijd kan je me vaak terug vinden op een concert of in het zwembad.
      </p>
    </div>
    <div class="mx-4 mb-6">
      <h1 class="mb-4 text-3xl text-gray-700 font-bold">Softwaretools</h1>
      <tool-list />
    </div>
    <div class="mx-4 mb-6">
      <h1 class="mb-4 text-3xl text-gray-700 font-bold">Werkervaring</h1>
      <content-list language="nl" file="jobs">
        <template v-slot:default="{ item }">
          <display-job :value="item" />
        </template>
      </content-list>
    </div>
    <div class="mx-4 mb-6">
      <h1 class="mb-4 text-3xl text-gray-700 font-bold">Studierichtingen</h1>
      <content-list language="nl" file="education">
        <template v-slot:default="{ item }">
          <display-education :value="item" />
        </template>
      </content-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BuildingIcon from "../components/icons/Building.vue";
import DateIcon from "../components/icons/Date.vue";
import ContentList from "../components/Content/ContentList.vue";
import DisplayJob from "../components/Jobs/DisplayJob.vue";
import DisplayEducation from "../components/Education/DisplayEducation.vue";
import ToolList from "../components/Software/ToolList.vue";
export default Vue.extend({
  components: {BuildingIcon, DateIcon, ContentList, DisplayJob, DisplayEducation, ToolList},
});
</script>

