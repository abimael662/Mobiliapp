<template>
  <ion-col size="6">
    <ion-card button :router-link="enlace">
      <ion-card-content class="ion-justify-content-center ion-text-center ion-align-items-center ion-flex-column ion-display-flex">
        <span class="material-symbols-outlined card-icon">
          {{ icono }}
        </span>
        <h2>{{ titulo }}</h2>
      </ion-card-content>
    </ion-card>
  </ion-col>
</template>

<script setup>
import { IonCol, IonCard, IonCardContent } from '@ionic/vue';

defineProps({
  enlace: { type: String, required: true },
  icono: { type: String, required: true },
  titulo: { type: String, required: true }
});
</script>

<style scoped>
.card-icon {
  font-size: 48px;
  margin-bottom: 8px;
}
</style>