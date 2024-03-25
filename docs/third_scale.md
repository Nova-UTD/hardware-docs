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
* The stock motor pulls 16A at 24V, leading to 16*24= **384W**
* The Docyne motor (throttle) is 5A at 18V --> 5*18 = **90W**
* The Docyne motor (brake) is also **90W** (although used much less frequently)
* The On Board Computer (OBC) uses **65W**
* The NVIDIA Orin + ZED cameras use roughly **100W** (?check this empirically?)

The third-scale vehicle's battery is selected based on the above power requirements, which **sum to 729W** (Watts). If we select a 44.4V (volts) battery, the current draw is 729/44.4 = 16.4A (amps). Thus a 16Ah = 16000mAh battery would last one hour of operation and a 32Ah battery would last roughly 2 hours.

The choice of battery voltage is informed by the ability to have step-down DC-DC converters from [48V>>24V (rated up to 16A)](https://www.amazon.com/Victron-Energy-Orion-Tr-380-Watt-Converter/dp/B07DPZ9G7M) and [48V>>12V (rated up to 30A)](https://www.amazon.com/Victron-Orion-TR-DC-DC-Converter-Isolated/dp/B07DQ5H3T2).
* The [motor controller board](https://trampaboards.com/vesc-100v-250a-in-cnc-t6-silicone-sealed-aluminum-box--p-28113.html) accepts voltages between 14-100V.
* The [On Board Computer (OBC)](https://www.onlogic.com/k804/) accepts voltages between 12-48V (so this sets the upper limit on voltage, unless we wanted to use another step-down converter to 45V).
* The [Docyne motor](https://www.docyke.com/products/servo-motor) accepts voltages between 12-24V.
* The NVIDIA Orin accepts voltages between 7-20V.
* The LIDAR operates on PoE sourced from the OBC.
* The ZED cameras operate on GMSL connections from the NVIDIA Orin.

## Sensor Mounts
