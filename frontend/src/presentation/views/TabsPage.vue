<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Inicio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="notification" href="/tabs/notification">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Notificaciones</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="chat" href="/tabs/chat">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Mas</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="room" href="/tabs/rooms">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Sala</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
