<template>
  <ion-page>
    <ion-content>
      <div style="height: 220px; background: #dcdcdc; border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; position: relative; display: flex; justify-content: center; align-items: flex-start;">
        <div style="width: 100px; height: 100px; background: white; border-radius: 50%; position: absolute; top: 35px; display: flex; align-items: center; justify-content: center; border: 3px solid white; " >
          <ion-icon :icon="personOutline" style="font-size: 70px; color: #222" />
          <div style="width: 35px; height: 35px; border-radius: 50%; background: white; position: absolute; right: -8px; bottom: 0; display: flex; align-items: center; justify-content: center; " >
            <ion-icon :icon="cameraOutline" style="font-size: 22px; color: #222" />
          </div>
        </div>

        <div style="position: absolute; bottom: 20px; text-align: center">
          <h3 style="margin: 0">Jorge Alberto</h3>
          <p style="margin: 5px 0 0">jorge@tuemail.com</p>
        </div>
      </div>

      <ion-list class="ion-padding-top">
        <ion-item button lines="none">
          <ion-icon slot="start" :icon="personOutline" />Información Personal </ion-item>

        <ion-item button lines="none">
          <ion-icon slot="start" :icon="shieldOutline" />Seguridad </ion-item>

        <ion-item button lines="none">
          <ion-icon slot="start" :icon="settingsOutline" />Preferencias</ion-item>

        <ion-item button lines="none">
          <ion-icon slot="start" :icon="printOutline" />Impresoras</ion-item>

        <ion-item button lines="none">
          <ion-icon slot="start" :icon="informationCircleOutline" />Acerca de la Aplicación</ion-item>
      </ion-list>

    </ion-content>

    <ion-footer class="ion-no-border">
      <ion-toolbar class="ion-padding-horizontal ion-padding-vertical">
        <ion-button expand="block" fill="outline"> Cerrar Sesión </ion-button>
      </ion-toolbar>
    </ion-footer>
    
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonButton,
} from "@ionic/vue";

import {
  cameraOutline,
  shieldOutline,
  personOutline,
  settingsOutline,
  printOutline,
  informationCircleOutline,
} from "ionicons/icons";
</script>