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
// tesla stats component
import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';
// tesla battery counter
import { TeslaCounterComponent } from './components/tesla-counter/tesla-counter.component';
// temperature control aka heat and aircon
import { TeslaClimateComponent } from './components/tesla-climate/tesla-climate.component';



@NgModule({
  declarations: [
    // registering our containers and components
    TeslaBatteryComponent,
    TeslaCarComponent,
    TeslaStatsComponent,
    TeslaCounterComponent,
    TeslaClimateComponent
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
