<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title class="header-principal">Hola Jorge</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <p class="pregunta">¿Qué deseas hacer hoy?</p>

      <ion-grid>
        <ion-row>
          <CardButton
            enlace="/furniture"
            icono="chair"
            titulo="Mis Mobiliarios"
          />

          <CardButton
            enlace="/tabs/rooms"
            icono="auto_awesome_mosaic"
            titulo="Craer Sala"
          />

          <CardButton
            enlace="/tabs/profile"
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

      <h3 class="sub-tiulos">Actividad reciente</h3>

      <CardInfo
        imagen="https://docs-demo.ionic.io/assets/madison.jpg"
        descripcion="Sala creada"
        titulo="Sala Principal"
        sala="Activa"
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
} from "@ionic/vue";

import CardButton from "@/presentation/components/widget/CardButton.vue";
import CardInfo from "@/presentation/components/widget/CardInfo.vue";
</script>
