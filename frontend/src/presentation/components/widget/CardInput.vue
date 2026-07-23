<template>
  <ion-item lines="none">
    <ion-grid>
      <ion-row>
        <ion-col size="12">
          <ion-label>{{ apartado }}</ion-label>
        </ion-col>

        <ion-col size="12">
          <ion-input :type="tipo" v-model="valor" fill="outline" placeholder="Ingrese el nombre" />
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
  IonInput,
} from "@ionic/vue";
import { computed } from "vue";
import type { TextFieldTypes } from "@ionic/core";

interface Props {
  apartado?: string;
  tipo?: TextFieldTypes;
  dato?: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e:"update:dato", value:string):void
}>()


const valor = computed<string>({
  get(){
    return props.dato ?? "";
  },
  set(value){
    emit("update:dato", value);
  }
});
</script>
