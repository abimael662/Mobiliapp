<template>
  <ion-page>
<ion-header>
  <ion-toolbar>

    <ion-title>Mis Salas</ion-title>

    <ion-buttons slot="end">
      <ion-fab-button size="small">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-buttons>

  </ion-toolbar>
</ion-header>

  <ion-content class="ion-padding">
    <ion-card>
      <ion-card-content>
        Salas
      </ion-card-content>
    </ion-card>
  </ion-content>
</ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonFab, 
  IonFabButton, 
  IonIcon 
} from '@ionic/vue';
  import { add } from 'ionicons/icons';
</script>