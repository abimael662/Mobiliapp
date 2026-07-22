<template>
  <ion-card :id="id" :button="!!enlace || !!id" :router-link="enlace">
    <ion-item lines="none">
      <ion-thumbnail slot="start">
        <img :alt="descripcion" :src="imagen" />
      </ion-thumbnail>

      <ion-label>
        <h2>{{ titulo }}</h2>

        <h3 v-if="indicador">
          {{ indicador }}
        </h3>

        <p v-if="sala">
          {{ sala }}
        </p>
      </ion-label>

      <ion-note v-if="hora" slot="end">
        Hace {{ hora }} h
      </ion-note>
    </ion-item>
  </ion-card>
</template>

<script setup>
import {
  IonCard,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonNote
} from '@ionic/vue';

defineProps({
  imagen: String,
  descripcion: String,
  titulo: String,
  indicador: String,
  sala: String,
  hora: Number,
  enlace: String,
  id: String
});
</script>