<template>
  <ion-page>
    <ion-header class="ion-no-border">
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

      <CardInfo
        imagen="https://docs-demo.ionic.io/assets/madison.jpg"
        descripcion="Sala creada"
        titulo="Nombre Chat"
        sala="Ultimo men..."
        :hora="2"
        enlace="/tabs/rooms/:id"
      />
      
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
  IonIcon,
} from "@ionic/vue";
import { add } from "ionicons/icons";

import CardInfo from "@/presentation/components/widget/CardInfo.vue";
</script>
