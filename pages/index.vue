<template>
  <div>
    <div class="mx-4 mb-6">
      <h1 class="mb-4 text-3xl text-gray-700 font-bold">Samenvatting</h1>
      <p class="text-lg">
        Een enthousiaste IT-er die altijd klaar staat om iets bij te leren of een practical joke uit te halen.
      </p>
    </div>
    <div class="mx-4 mb-6">
      <h1 class="mb-4 text-3xl text-gray-700 font-bold">Werkervaring</h1>
      <ul>
        <li class="mb-4">
          <h2 class="text-2xl font-medium text-gray-800">
            ICT-Consultant
          </h2>
          <div class="mt-1">
            <div class="flex items-center text-gray-800">
              <building-icon />
              <small class="text-base">
                Lokale politie Brugge
              </small>
            </div>
            <div class="flex items-center text-gray-600">
              <date-icon />
              <small class="text-sm ">Juli 2012 - nu</small>
            </div>
            <div class="text-base">
              Als politie dienst wordt er meer en meer gekeken naar digitalisering.
              Hierbij ondersteun ik de verschillende diensten dit zowel door het schrijven van software als het onderhouden van de web en database servers.
              Een mini erp pakket, een intranet, module voor personeelsplaning zijn een aantal van de projecten die ik ontworpen heb van begin tot einde.
            </div>
          </div>
        </li>
        <li class="mb-4">
          <h2 class="text-2xl font-medium text-gray-800">
            Stagiair ICT
          </h2>
          <div class="mt-1">
            <div class="flex items-center text-gray-800">
              <building-icon />
              <small class="text-base">
                Lokale politie Brugge
              </small>
            </div>
            <div class="flex items-center text-gray-600">
              <date-icon />
              <small class="text-sm ">Februari 2012 - Juni 2012</small>
            </div>
            <div class="text-base">
              In deze stage heb ik voor de politie van Brugge een applicatie geschreven om het Algemeen Nood en Interventieplan te digitaliseren.
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mx-4 mb-6">
        <h1 class="mb-4 text-3xl text-gray-700 font-bold">Studierichtingen</h1>
        <ul>
          <li class="mb-4">
            <h2 class="text-lg font-medium text-gray-800">
              Toegepaste Informatica (Bachelor)
            </h2>
            <div class="mt-1">
              <div class="flex items-center text-gray-800">
                <building-icon />
                <small class="text-base">
                  Hogeschool West-Vlaanderen
                </small>
              </div>
              <div class="flex items-center text-gray-600">
                <date-icon />
                <small class="text-sm ">2009 - 2012</small>
              </div>
            </div>
          </li>
          <li class="mb-4">
            <h2 class="text-2xl font-medium text-gray-800">
              Informatica Beheer (TSO)
            </h2>
            <div class="mt-1">
              <div class="flex items-center text-gray-800">
                <building-icon />
                <small class="text-base">
                  Koninklijk Atheneum Assebroek
                </small>
              </div>
              <div class="flex items-center text-gray-600">
                <date-icon />
                <small class="text-sm ">2006 - 2009</small>
              </div>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BuildingIcon from "../components/icons/Building.vue";
import DateIcon from "../components/icons/Date.vue";

export default Vue.extend({
  components: {BuildingIcon, DateIcon},
});
</script>

