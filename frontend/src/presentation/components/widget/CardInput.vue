<template>
    <ion-item lines="none">
        <ion-grid>
            <ion-row>
                <ion-col size="12">
                    <ion-label>{{ apartado }}</ion-label>
                </ion-col>

                <ion-col size="12">
                    <ion-input fill="outline" placeholder="Ingrese el nombre" :type="tipo">
                        {{ dato }}
                    </ion-input>
                </ion-col>3
            </ion-row>
        </ion-grid>
    </ion-item>
</template>

<script setup lang="ts">
import { IonItem, IonGrid, IonRow, IonCol, IonLabel, IonInput } from '@ionic/vue';

defineProps({
    apartado: String,
    tipo: String,
    dato: String
})
</script>