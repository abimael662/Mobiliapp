<template>
  <ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>MobiBot</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-searchbar placeholder="Buscar Chat..."></ion-searchbar>
    <ion-card>
      <ion-card-content>
        Chats
      </ion-card-content>
    </ion-card>

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
</script>