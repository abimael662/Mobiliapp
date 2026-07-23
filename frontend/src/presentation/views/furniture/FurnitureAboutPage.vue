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
        Nombre del Producto
      </h1>


      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="6">
            <h6>Indicador</h6>
          </ion-col>

          <ion-col size="6" class="ion-text-end">
            <ion-button disabled>
              Estado: Activo
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
            <p>Sala</p>
          </ion-col>


          <ion-col size="6">
            <p>Ubicación</p>
          </ion-col>
          <ion-col size="6" class="ion-text-end">
            <p>Sala Principal</p>
          </ion-col>


          <ion-col size="6">
            <p>Estado</p>
          </ion-col>
          <ion-col size="6" class="ion-text-end">
            <p>Activo</p>
          </ion-col>


          <ion-col size="6">
            <p>Fecha Compra</p>
          </ion-col>
          <ion-col size="6" class="ion-text-end">
            <p>22/07/2026</p>
          </ion-col>


          <ion-col size="12">
            <h4>Descripción</h4>
          </ion-col>

          <ion-col size="12">
            <ion-text>
              Producto creado para la sala principal, cuenta con un diseño
              moderno y materiales resistentes.
            </ion-text>
          </ion-col>

        </ion-row>

      </ion-grid>

      <ion-grid>
        <ion-row class="ion-align-items-center">
          <ion-col size="6">
            <ion-button href="/furniture/new" expand="block" fill="outline" size="large">
              Editar
            </ion-button>
          </ion-col>

          <ion-col size="6" class="ion-text-end">
            <ion-button expand="block" fill="solid" size="large">
              Eliminar
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
</script>