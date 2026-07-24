package com.mobiliapp.plugins.barcodescanner;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import android.widget.ImageButton;


import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.camera.core.Camera;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.Preview;
import androidx.camera.lifecycle.ProcessCameraProvider;
import androidx.camera.view.PreviewView;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import androidx.camera.core.ImageAnalysis;
import androidx.camera.core.ImageProxy;

import com.google.mlkit.vision.barcode.BarcodeScanner;
import com.google.mlkit.vision.barcode.BarcodeScanning;
import com.google.mlkit.vision.barcode.common.Barcode;
import com.google.mlkit.vision.common.InputImage;
import com.google.mlkit.vision.barcode.BarcodeScannerOptions;

import com.google.common.util.concurrent.ListenableFuture;

public class ScannerActivity extends AppCompatActivity {
    private Camera camera;
    private boolean flashOn = false;
    private PreviewView cameraPreview;
    private BarcodeScanner barcodeScanner;
    private static final int CAMERA_PERMISSION = 100;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (getSupportActionBar() != null) {
            getSupportActionBar().hide();
        }
        setContentView(R.layout.activity_scanner);
        BarcodeScannerOptions options =
                new BarcodeScannerOptions.Builder()
                        .setBarcodeFormats(
                                Barcode.FORMAT_QR_CODE
                        )
                        .build();

        barcodeScanner = BarcodeScanning.getClient(options);

        cameraPreview = findViewById(R.id.cameraPreview);

        ImageButton close = findViewById(R.id.btnClose);
        close.setOnClickListener(v -> {
            finish();
        });

        ImageButton gallery = findViewById(R.id.btnGallery);
        gallery.setOnClickListener(v -> {
            Intent intent =
                    new Intent(
                            Intent.ACTION_PICK
                    );
            intent.setType("image/*");
            startActivityForResult(
                    intent,
                    200
            );
        });

        ImageButton flash = findViewById(R.id.btnFlash);
        flash.setOnClickListener(v -> {
            if (camera != null) {
                flashOn = !flashOn;
                camera.getCameraControl()
                        .enableTorch(flashOn);
            }
        });

        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED) {
            startCamera();
        } else {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, CAMERA_PERMISSION);
        }
    }

    private void startCamera() {
        ListenableFuture<ProcessCameraProvider> cameraProviderFuture =
                ProcessCameraProvider.getInstance(this);

        cameraProviderFuture.addListener(() -> {
            try {
                ProcessCameraProvider cameraProvider = cameraProviderFuture.get();
                Preview preview = new Preview.Builder().build();
                preview.setSurfaceProvider(cameraPreview.getSurfaceProvider());
                CameraSelector cameraSelector = CameraSelector.DEFAULT_BACK_CAMERA;
                ImageAnalysis imageAnalysis =
                        new ImageAnalysis.Builder()
                                .setBackpressureStrategy(
                                        ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST
                                )
                                .build();
                imageAnalysis.setAnalyzer(
                        ContextCompat.getMainExecutor(this),
                        new QRAnalyzer()
                );

                cameraProvider.unbindAll();
                camera = cameraProvider.bindToLifecycle(
                        this,
                        cameraSelector,
                        preview,
                        imageAnalysis
                );
            } catch (Exception e) {
                e.printStackTrace();
            }
        }, ContextCompat.getMainExecutor(this));
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(
                requestCode,
                permissions,
                grantResults
        );


        if (requestCode == CAMERA_PERMISSION
                && grantResults.length > 0
                && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            startCamera();
        }
    }

    private class QRAnalyzer implements ImageAnalysis.Analyzer {
        @Override
        @androidx.camera.core.ExperimentalGetImage
        public void analyze(
                @NonNull ImageProxy imageProxy
        ) {
            if (imageProxy.getImage() == null) {
                imageProxy.close();
                return;
            }

            InputImage image =
                    InputImage.fromMediaImage(
                            imageProxy.getImage(),
                            imageProxy.getImageInfo().getRotationDegrees()
                    );

            barcodeScanner.process(image)
                    .addOnSuccessListener(barcodes -> {

                        for (Barcode barcode : barcodes) {

                            String value = barcode.getRawValue();

                            if (value != null) {

                                Log.d(
                                        "SCANNER",
                                        "QR: " + value
                                );

                            }
                        }

                    })
                    .addOnFailureListener(e -> {
                        Log.e(
                                "SCANNER",
                                "Error: " + e.getMessage()
                        );

                    })
                    .addOnCompleteListener(task -> {

                        imageProxy.close();

                    });
        }
    }
}