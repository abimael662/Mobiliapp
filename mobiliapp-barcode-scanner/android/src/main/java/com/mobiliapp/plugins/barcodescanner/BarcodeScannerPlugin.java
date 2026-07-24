package com.mobiliapp.plugins.barcodescanner;


import android.content.Intent;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;


@CapacitorPlugin(name = "BarcodeScanner")
public class BarcodeScannerPlugin extends Plugin {


    @PluginMethod
    public void start(PluginCall call){


        Intent intent =
            new Intent(
                getContext(),
                ScannerActivity.class
            );


        getActivity()
            .startActivity(intent);


        call.resolve();

    }

}