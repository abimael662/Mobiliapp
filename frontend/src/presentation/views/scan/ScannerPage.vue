<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h3>Hola</h3>

      <ion-button @click="openScanner">
        Abrir escáner
        </ion-button>

    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">

import {
  IonPage,
  IonContent,
  IonButton
} from "@ionic/vue";

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