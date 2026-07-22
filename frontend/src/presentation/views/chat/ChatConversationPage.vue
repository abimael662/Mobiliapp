<template>
  <ion-page>
    
    <ion-header>
      <ion-toolbar>
        <ion-title>Nuevo Chat</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <div class="ion-text-center ion-margin-top">
        
        <div style="width:90px; height:90px; margin:auto; border-radius:50%; background:var(--ion-color-primary); display:flex; align-items:center; justify-content:center; ">
          <ion-icon :icon="chatbubbleOutline" style="font-size:45px; color:white; "/>
        </div>

        <h4>Iniciar Nuevo Chat</h4>
        <p>Cuéntanos en qué podemos ayudarte con tus mobiliarios</p>

      </div>


      <ion-card>
        <ion-card-content>
          Botones reutilizables
        </ion-card-content>
      </ion-card>

    </ion-content>


    <ion-footer>
      <ion-toolbar>
        <ion-item lines="none">
          
          <ion-button fill="clear" slot="start">
            <ion-icon :icon="micOutline"/>
          </ion-button>

          <ion-input fill="outline" placeholder="Escribe un mensaje..."/>

          <ion-button fill="clear" slot="end">
            <ion-icon :icon="sendOutline"/>
          </ion-button>

        </ion-item>
      </ion-toolbar>
    </ion-footer>

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
  IonCardContent,
  IonFooter,
  IonItem,
  IonButton,
  IonIcon,
  IonInput
} from '@ionic/vue';


import {
  chatbubbleOutline,
  micOutline,
  sendOutline
} from 'ionicons/icons';

</script>