<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title class="header-principal ion-text-center">Mobiliarios</ion-title>
        <ion-buttons slot="end">
          <ion-fab-button size="small">
            <ion-icon :icon="qrCode"></ion-icon>
          </ion-fab-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col size="10">
            <ion-searchbar placeholder="Buscar mobiliario..."></ion-searchbar>
          </ion-col>

          <ion-col size="2" class="ion-text-center">
            <ion-button size="large" shape="round">
              <ion-icon :icon="filter"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

      <CardInfo v-for="furniture in furnitures" :key="furniture.id_mobiliario"
        imagen="https://docs-demo.ionic.io/assets/madison.jpg" :titulo="furniture.nombre_mobiliario"
        :descripcion="furniture.descripcion" :indicador="Number(furniture.estado) === 1 ? 'Activo' : 'Inactivo'" :sala="furniture.ubicacion"
        :enlace="`/furniture/${furniture.id_mobiliario}`" />

      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon :icon="chevronUpCircle"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
          <ion-fab-button :router-link="'/furniture/new'">
            <ion-icon :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
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
  IonButtons,
  IonGrid,
  IonCol,
  IonBackButton,
  IonIcon,
  IonFabButton,
} from '@ionic/vue';

import { qrCode, filter, chevronUpCircle, add } from "ionicons/icons";
import { ref } from "vue";
import { onIonViewWillEnter } from "@ionic/vue";
import CardInfo from "@/presentation/components/widget/CardInfo.vue";
import type { Furniture } from "@/domain/entities/Furniture";
import { furnitureService } from "@/infrastructure/container/dependencies";

const furnitures = ref<Furniture[]>([]);


const loadFurniture = async () => {
  furnitures.value = await furnitureService.getAll();
};

onIonViewWillEnter(() => {
  loadFurniture();
});

</script>