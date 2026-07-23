<template>
  <ion-item lines="none">
    <ion-grid>
      <ion-row>
        <ion-col size="12">
          <ion-label>{{ apartado }}</ion-label>
        </ion-col>

        <ion-col size="12">
          <ion-input :type="tipo" :value="dato" fill="outline" placeholder="Ingrese el nombre" />
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
import type { TextFieldTypes } from "@ionic/core";

interface Props {
  apartado?: string;
  tipo?: TextFieldTypes;
  dato?: string;
}

defineProps<Props>();
</script>
