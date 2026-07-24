<template>
<ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>Hola Jorge</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h4>¿Qué deseas hacer hoy?</h4>

     <ion-grid>
        <ion-row>
          <CardButton
            enlace="/furniture"
            icono="chair"
            titulo="Mis Mobiliarios"
          />

          <CardButton
            enlace="openScanner"
            icono="auto_awesome_mosaic"
            titulo="Craer Sala"
          />

          <CardButton
          :accion="openScanner"
            icono="barcode_reader"
            titulo="Escanear QR"
          />

          <CardButton
            enlace="/tabs/profile"
            icono="qr_code_scanner"
            titulo="QRs Generados"
          />
        </ion-row>
      </ion-grid>

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
import CardButton from "@/presentation/components/widget/CardButton.vue";

import { BarcodeScanner } from "mobiliapp-barcode-scanner";


async function scan() {
  try {
    const result = await BarcodeScanner.start();
    console.log("Resultado:", result);
  } catch (error) {
    console.error(error);
  }
}

async function openScanner() {
  await BarcodeScanner.start();

}
</script>