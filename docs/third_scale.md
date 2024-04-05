---
layout: default
title: Third-Scale Vehicle
---

# Third-Scale Vehicle


## Drive-by-Wire Retrofit

### Force measurements

The following measurements were taken to determine design specifications for the motors used for steer and brake by-wire. These were performed with the incredibly sophisticated equipment of a luggage scale.
* 7kg measured to turn the steering wheel. Measured perpendicular to the radius of the steering wheel at a distance of 3in from the center. This results in (7kg)(9.8m/s/s)(0.08m) = (68.6N)(0.08m) = 5.5 Nm of torque.
* 35kg measured to rotate (apply) the brake. Measured at the small metal plate at a radius of 1.5in. This results in (35kg)(9.8m/s/s)(0.038m) = 13 Nm of torque.
* 14kg measured to rotate (apply) the brake. Measured on the metal tubing extending from the brake pedal, at a radius of 4in. This results in (14kg)(9.8m/s/s)(0.1m) = 13.7 Nm of torque.
Since the last two measurements corroborate each other, the torque specification for the motor for brake-by-wire is set to 14 Nm.

### Motor Selection

### Motor Mounts

## Power and Electrical

### Electronics Voltage Needs

* [Victron Energy Orion DC-DC Converter 48V>>24V](https://www.amazon.com/Victron-Energy-Orion-Tr-380-Watt-Converter/dp/B07DPZ9G7M) - rated up to 16A (380W) and accepts voltages between 32-70V.
* [Victron Energy Orion DC-DC Converter 48V>>12V](https://www.amazon.com/Victron-Orion-TR-DC-DC-Converter-Isolated/dp/B07DQ5H3T2) - rated up to 30A (360W) and accepts voltages between 32-70V.
* The [Flipsky-75100-pro VESC motor controller board](https://flipsky.net/products/flipsky-75100-pro-with-aluminum-pcb-based-on-vesc-for-electric-skateboard-scooter-ebike-speed-controller) accepts voltages between 14-84V. We had considered the [TRAMPA VESC 100V 250A](https://trampaboards.com/vesc-100v-250a-in-cnc-t6-silicone-sealed-aluminum-box--p-28113.html) that is a bit more capable, but we did not need that extra capability and it would be harder to order.
* The [Onlogic Karbon 804, On Board Computer (OBC)](https://www.onlogic.com/k804/) accepts voltages between 12-48V.
* The [Docyne motor](https://www.docyke.com/products/servo-motor) accepts voltages between 12-24V.
* The NVIDIA Orin accepts voltages between 7-20V.
* The LIDAR operates on PoE sourced from the OBC.
* The ZED cameras operate on GMSL connections from the NVIDIA Orin.

### Power Requirements

* The stock motor pulls 16A at 24V, leading to 16*24= **384W**
* The Docyne motor (throttle) is 5A at 18V --> 5*18 = **90W**
* The Docyne motor (brake) is also **90W** (although used much less frequently)
* The On Board Computer (OBC) uses **65W**
* The NVIDIA Orin + ZED cameras use roughly **100W** (?check this empirically?)

These power needs **sum to 729W** (Watts).  This informs the capacity of the battery we select (in Amp-Hours, Ah) based on the length of time we wish to operate the vehicle.

### Battery Selection

There is a benefit to selecting a higher voltage battery largely because it enables faster speeds, by driving the stock drive motor at a higher voltage.  There are also DC-DC step down converters that can be used to provide lower voltages for the electronics onboard. Our battery selection considers the following criteria:

* Voltage greater than 24V
* [Hobbyists](https://www.youtube.com/@ExtremePowerWheels/videos) have demonstrated that the stock motor can handle at least up to 75V and maybe 92.5V.  So we aim for a voltage less than 75V.
* The vehicle should be able to run continuously for 2 hours.

We found cost effective batteries typically used for golf carts at 48V.  Li Time sells a [48V 30Ah LiFePO Battery](https://www.litime.com/products/litime-48v-30ah-gc2-golf-cart-lithium-battery-gc2-battery-for-club-cart-golf-cart) that has bluetooth connectivity for diagnostics.  The nominal voltage is actually 51.2V, so a step-down converter will be needed for even the OBC.

Given the 48V, assuming no losses in the DC-DC conversion, the current draw would be 729W/48V = 15.2A (amps). Rounding this up to 16A to include losses, a 16Ah = 16000mAh battery would last one hour of operation and a 32Ah battery would last roughly 2 hours. Thus the 30Ah battery should last roughly 2 hours.

## Sensor Mounts
