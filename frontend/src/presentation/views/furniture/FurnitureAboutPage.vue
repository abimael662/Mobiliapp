<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-card>
        <ion-card-content>
          <ion-grid>
            <ion-row class="ion-justify-content-center">
              <ion-col size="8">
                <ion-img src="https://docs-demo.ionic.io/assets/madison.jpg" alt="Producto"></ion-img>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>


      <h1 class="name-product">
        {{ furniture?.nombre_mobiliario }}
      </h1>


      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="6">
            <h6>Indicador</h6>
          </ion-col>

          <ion-col size="6" class="ion-text-end">
            <ion-button disabled>
              {{ furniture?.estado === 1 ? "Activo" : "Inactivo" }}
            </ion-button>
          </ion-col>
        </ion-row>


        <ion-item-divider></ion-item-divider>

        <ion-row>
          <ion-col size="12">
            <h4>Información</h4>
          </ion-col>


          <ion-col size="6">
            <p>Categoría</p>
          </ion-col>
          <ion-col size="6" class="ion-text-end">
            <p>{{ furniture?.categoria }}</p>
          </ion-col>


          <ion-col size="6">
            <p>Ubicación</p>
          </ion-col>
          <ion-col size="6" class="ion-text-end">
            <p>{{ furniture?.ubicacion }}</p>
          </ion-col>


          <ion-col size="6">
            <p>Estado</p>
          </ion-col>
          <ion-col size="6" class="ion-text-end">
            <p>{{ furniture?.estado === 1 ? "Activo" : "Inactivo" }}</p>
          </ion-col>


          <ion-col size="6">
            <p>Fecha Compra</p>
          </ion-col>
          <ion-col size="6" class="ion-text-end">
            <p>{{ formatFecha(furniture?.fecha_compra ?? "") }}</p>
          </ion-col>


          <ion-col size="12">
            <h4>Descripción</h4>
          </ion-col>

          <ion-col size="12">
            <ion-text>
              {{ furniture?.descripcion ?? "Sin descripción" }}
            </ion-text>
          </ion-col>

        </ion-row>

      </ion-grid>

      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="6">
            <ion-button :router-link="`/furniture/${id}/edit`" expand="block" fill="outline">
              Editar
            </ion-button>
          </ion-col>

          <ion-col size="6" class="ion-text-end">
            <ion-button expand="block" fill="solid" @click="deleteFurniture">
              Eliminar
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton, IonButtons, IonBackButton } from '@ionic/vue';
import { useRoute, useRouter  } from "vue-router";
import { ref } from "vue";
import { onIonViewWillEnter } from "@ionic/vue";

import type { Furniture } from "@/domain/entities/Furniture";
import { furnitureService } from "@/infrastructure/container/dependencies";

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);
const furniture = ref<Furniture | null>(null);

const loadFurniture = async () => {
  furniture.value = await furnitureService.getById(id);
};


const deleteFurniture = async () => {
  try {
    await furnitureService.delete(id);
    router.back();
  } catch (error) {
    console.error(error);
  }
};

const formatFecha = (fecha: string) => {
  if (!fecha) return "";

  const date = new Date(fecha);

  return date.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
};

onIonViewWillEnter(() => {
  loadFurniture();
});

</script>