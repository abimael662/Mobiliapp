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
              {{ opcion }}
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

      <card-input apartado="Nombre del mobiliario" tipo="text" v-model:dato="nombre" />

      <card-input apartado="Categoria" tipo="text" v-model:dato="categoria" />

      <card-input apartado="Ubicacion" tipo="text" v-model:dato="ubicacion" />

      <card-input apartado="Estado" tipo="text" v-model:dato="estado" />

      <card-input apartado="Fedcha de Compra" tipo="date" v-model:dato="fechaCompra" />

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
  IonButtons,
  IonBackButton,
  IonToast
} from '@ionic/vue';
import { cameraOutline } from 'ionicons/icons';
import CardInput from "@/presentation/components/widget/CardInput.vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import type { Furniture } from "@/domain/entities/Furniture";
import { furnitureService } from "@/infrastructure/container/dependencies";

const router = useRouter();
const route = useRoute();

const nombre = ref("");
const categoria = ref("");
const ubicacion = ref("");
const estado = ref("");
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
      estado: estado.value,
      fechaCompra: new Date(fechaCompra.value),
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