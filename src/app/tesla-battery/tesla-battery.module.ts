/*
 * tesla-battery.module.ts
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// services
import { BatteryService } from './tesla-battery.service';

// containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';

// components
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';

@NgModule({
  declarations: [
    // registering our containers and components
    TeslaBatteryComponent,
    TeslaCarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // add the service to our sub-module
    BatteryService
  ],
  exports: [
    // export all the files we make so that the root module can access them
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule {}
