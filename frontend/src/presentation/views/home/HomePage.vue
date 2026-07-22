<template>
<ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>Hola Jorge</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h4>¿Qué deseas hacer hoy?</h4>

    <ion-card>
      <ion-card-content>
        Parte de las opciones
      </ion-card-content>
    </ion-card>

    <h3>Actividad reciente</h3>

    <ion-card>
      <ion-card-content>
        Actividades recientes
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
  IonCardContent
} from '@ionic/vue';
</script>