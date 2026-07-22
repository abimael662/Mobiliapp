<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Notificaciones</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-content> Notificaciones </ion-card-content>
      </ion-card>
    </ion-content>

    <ion-footer>
      <ion-toolbar class="ion-padding-horizontal">
        <ion-button expand="block" fill="outline">
          Marcar todas como leídas
        </ion-button>
      </ion-toolbar>
    </ion-footer>
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
  IonFooter,
  IonButton,
} from "@ionic/vue";
</script>
