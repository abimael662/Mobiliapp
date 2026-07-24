<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title class="header-principal ion-text-center"> {{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="12">
            <ion-label class="sub-tiulos">Foto</ion-label>
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
              {{ opcion }}
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

      <card-input apartado="Nombre del mobiliario" tipo="text" v-model:dato="nombre" />

      <CardSelect apartado="Categoría" v-model:dato="categoria" :opciones="[
        'Escritorio',
        'Silla',
        'Mesa',
        'Archivero',
        'Estantería',
        'Gabinete',
        'Armario',
        'Sofá',
        'Pizarrón',
        'Otro'
      ]" placeholder="Seleccione categoría" />

      <card-input apartado="Ubicacion" tipo="text" v-model:dato="ubicacion" />

      <ion-item lines="none">
        <ion-grid>
          <ion-row>
            <ion-col size="6">
              <ion-label class="sub-tiulos" >Estado</ion-label>
            </ion-col>

            <ion-col size="6" class="ion-justify-content-center ion-text-end ion-align-items-center ion-display-flex">
              <ion-toggle v-model="estado" :enable-on-off-labels="true" />
            </ion-col>

          </ion-row>
        </ion-grid>
      </ion-item>

      <card-input apartado="Fecha de Compra" tipo="date" v-model:dato="fechaCompra" />

      <card-input apartado="Descripcion" tipo="text" v-model:dato="descripcion" />


      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="6">
            <ion-button expand="block" fill="outline" @click="guardar">
              {{ isEdit ? "Actualizar" : "Guardar" }}
            </ion-button>
          </ion-col>

          <ion-col size="6" class="ion-text-end">
            <ion-button expand="block" fill="solid">
              Generar QR
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-toast :is-open="showToast" :message="toastMessage" :duration="3000" @didDismiss="showToast = false" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonCard,
  IonCardContent,
  IonImg,
  IonIcon
} from "@ionic/vue";

import CardInput from "@/presentation/components/widget/CardInput.vue";
import CardSelect from "@/presentation/components/widget/CardSelect.vue";

import { cameraOutline } from 'ionicons/icons';
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import type { Furniture } from "@/domain/entities/Furniture";
import { furnitureService } from "@/infrastructure/container/dependencies";

const router = useRouter();
const route = useRoute();

const nombre = ref("");
const categoria = ref("");
const ubicacion = ref("");
const estado = ref(true);
const fechaCompra = ref("");
const descripcion = ref("");
const showToast = ref(false);
const toastMessage = ref("");
const isEdit = route.params.id !== undefined;

const title = isEdit ? "Editar Mobiliario" : "Crear Mobiliario";
const opcion = isEdit ? "Cambiar Foto" : "Seleccionar Foto";

const guardar = async () => {
  try {
    const furniture: Furniture = {
      nombre_mobiliario: nombre.value,
      categoria: categoria.value,
      ubicacion: ubicacion.value,
      estado: estado.value ? 1 : 0,
      fecha_compra: fechaCompra.value,
      descripcion: descripcion.value
    };
    await furnitureService.create(furniture);

    toastMessage.value = "Mobiliario guardado correctamente";
    showToast.value = true;

    setTimeout(() => {
      router.back();
    }, 500);

  } catch (error) {

    console.error(error);

    toastMessage.value = `Error al guardar mobiliario: ${error}`;
    showToast.value = true;

  }

}
</script>