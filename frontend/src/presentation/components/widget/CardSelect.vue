<template>
  <ion-item lines="none">
    <ion-grid>
      <ion-row>
        <ion-col size="12">
          <ion-label class="sub-tiulos">{{ apartado }}</ion-label>
        </ion-col>

        <ion-col size="12">
          <ion-select
            v-model="valor"
            fill="outline"
            interface="popover"
            :placeholder="placeholder"
          >
            <ion-select-option
              v-for="opcion in opciones"
              :key="opcion"
              :value="opcion"
            >
              {{ opcion }}
            </ion-select-option>

          </ion-select>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-item>
</template>


<script setup lang="ts">

import {
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonSelect,
  IonSelectOption
} from "@ionic/vue";

import { computed } from "vue";


interface Props {
  apartado:string;
  dato:string;
  opciones:string[];
  placeholder?:string;
}


const props = defineProps<Props>();


const emit = defineEmits<{
  (e:"update:dato", value:string):void
}>();


const valor = computed({

  get(){
    return props.dato;
  },

  set(value){
    emit("update:dato",value);
  }

});

</script>