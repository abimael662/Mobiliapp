<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title class="header-principal ion-text-center">Notificaciones</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      
      <CardInfo
        imagen="https://docs-demo.ionic.io/assets/madison.jpg"
        descripcion="Sala creada"
        titulo="Nombre Notificacion"
        sala="Info..."
        :hora="2"
        enlace="/tabs/rooms/:id"
      />

    </ion-content>

    <ion-footer class="ion-no-border">
      <ion-toolbar class="ion-padding-horizontal ion-padding-vertical">
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
  IonFooter,
  IonButton,
} from "@ionic/vue";

import CardInfo from "@/presentation/components/widget/CardInfo.vue";
</script>
