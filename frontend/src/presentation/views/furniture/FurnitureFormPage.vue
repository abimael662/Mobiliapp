<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title class="header-principal ion-text-center">Editar Mobiliario</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="12">
            <h4 class=".sub-tiulos">Foto</h4>
          </ion-col>
          <ion-col size="6">
            <ion-card>
              <ion-card-content>

                <ion-img src="https://docs-demo.ionic.io/assets/madison.jpg" alt="Producto"></ion-img>

              </ion-card-content>
            </ion-card>

          </ion-col>

          <ion-col size="6" class="ion-text-end">
            <ion-button fill="clear">
              <ion-icon slot="start" :icon="cameraOutline" />
              Cambiar Foto
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

      <card-input apartado="Nombre del mobiliario" tipo="text" dato="" />

      <card-input apartado="Categoria" tipo="text" dato="" />

      <card-input apartado="Ubicacion" tipo="text" dato="" />

      <card-input apartado="Estado" tipo="text" dato="" />

      <card-input apartado="Fedcha de Compra" tipo="date" dato="" />

      <card-input apartado="Descripcion" tipo="text" dato="" />


      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="6">
            <ion-button expand="block" fill="outline">
              Guardar
            </ion-button>
          </ion-col>

          <ion-col size="6" class="ion-text-end">
            <ion-button expand="block" fill="solid">
              Generar QR
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { cameraOutline } from 'ionicons/icons';
import CardInput from "@/presentation/components/widget/CardInput.vue";
</script>