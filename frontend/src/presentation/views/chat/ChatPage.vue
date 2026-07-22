<template>
  <ion-page>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-title class="header-principal ion-text-center">MobiBot</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-searchbar placeholder="Buscar Chat..."></ion-searchbar>

    <CardInfo
        imagen="https://docs-demo.ionic.io/assets/madison.jpg"
        descripcion="Sala creada"
        titulo="Nombre Chat"
        sala="Ultimo men..."
        :hora="2"
        enlace="/tabs/rooms/:id"
      />

     <ion-fab slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
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
  
import CardInfo from "@/presentation/components/widget/CardInfo.vue";
</script>