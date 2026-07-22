<template>
  <ion-col size="6">
    <ion-card button :router-link="enlace" class="custom-card">
      <ion-card-content class="card-content">
        <span class="material-symbols-outlined card-icon">
          {{ icono }}
        </span>

        <h2>{{ titulo }}</h2>
      </ion-card-content>
    </ion-card>
  </ion-col>
</template>

<script setup lang="ts">
import { IonCol, IonCard, IonCardContent } from '@ionic/vue';

defineProps({
  enlace: { type: String, required: true },
  icono: { type: String, required: true },
  titulo: { type: String, required: true }
});
</script>

<style scoped>
.custom-card {
  height: 110px;
  margin: 8px;
}

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-icon {
  font-size: 48px;
  margin-bottom: 8px;  
}

h2 {
  font-size: 16px;
  text-align: center;
  margin: 0;
}
</style>