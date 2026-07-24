import { registerPlugin } from '@capacitor/core';

export interface BarcodeScannerPlugin {

  start(): Promise<{
    value:string;
  }>;

}


export const BarcodeScanner =
registerPlugin<BarcodeScannerPlugin>(
    'BarcodeScanner'
);