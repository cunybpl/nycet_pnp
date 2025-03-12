---
title: Airside Economizing
type: soo
layout: guide
soo_id: 9
excerpt: Uses outdoor air to cool a facility instead of the chilled water plant, or direct expansion cooling in an air handling unit, when the outdoor air temperature meets certain criteria, as described in the NYC Energy Conservation Code.
thumbnail_image: "/images/hero/measurement-guide-thumb-placeholder.jpg"
associated_components:
  - Constant-speed, Constant-volume Fan and Motor
related_components:
  - Constant-speed, Constant-volume Fan and Motor
url: "/documents/soos/airside-economizing"
---

## General Overview

Airside economizing saves energy by using outdoor air to cool a facility instead of the chilled water plant, or direct expansion cooling in an air handling unit (AHU), when the outdoor air temperature (OAT) meets certain criteria, as described in the NYC Energy Conservation Code (Table C403.5.3.3). 

### Basic Control Logic

Sequences of operation (SOOs) are essentially feedback loops that employ a combination of sensors, controllers, and actuators to impact a process and maintain a desired state. For example, a thermostat provides a signal to a controller, and the controller sends a signal to the furnace. When the temperature falls below a certain setpoint, the controller sends a signal to the furnace to fire up and to turn on the air handler to provide heated air to the conditioned space. Once the temperature reaches the desired setpoint, the controller sends a signal to reduce the fan speed and/or to turn off the furnace.

Figure 1 presents a schematic of the general principle of the economizing control feedback loop. If OAT is within the economizing range, the outdoor air damper (OAD) position is opened 100%. The control signals to the AHU are adjusted to consider that the OAD is 100% open while still meeting the zone temperature setpoints.

<a href="/images/SOOs/SOO-09-fig-1.jpg">
    <figure class="figure mb-0 mt-3">
        <img src="/images/SOOs/SOO-09-fig-1.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Fundamental airside economizing control logic.">
        <figcaption class="figure-caption text-left">Figure 1. Fundamental airside economizing control logic.</figcaption>  
    </figure>
</a>

The goal of economizing is to use less energy to meet the cooling load. The AHU draws in outdoor air when the outdoor air temperature and humidity are in a range to allow it to cool interior spaces. Optimizing the amount of outdoor air reduces the amount of energy needed to condition the space. 

{{< admonition type="note" >}}
ASHRAE Standard 90.1-2019 and NYC code requires that outdoor air be introduced when conditions are warranted. This SOO is suitable for all AHUs with variable OAD position control, including constant air volume, two-speed air volume, and variable volume AHUs. Control strategies may be based on dry bulb temperature or enthalpy.
{{< /admonition >}}

## Algorithm for the Sequence of Operation
 
Economizing is generally implemented using three methods: 

### 1. Dry Bulb Temperature 

The OAD position opens when the dry bulb temperature is within a suitable range. In NYC, the maximum temperature at which the energy code allows for economizing is 65oF. As OAT approaches the discharge air temperature (DAT), the damper position is modulated, and the cooling coil is turned off (modulated economizer mode). At the higher end of this range, the OAD position is 100% and the cooling coil is modulated to provide sufficient cooling and dehumidification (integrated economizer mode). Dry bulb is the simplest economizer control method.

### 2. Dry Bulb Temperature Difference 

The OAD position opens when the dry bulb temperature of the return air is higher than the dry bulb temperature of the outdoor air. As OAT approaches DAT, the damper position is modulated, and the cooling coil is turned off (modulated economizer mode). At the higher end of this range, the OAD position is 100% and the cooling coil is modulated to provide sufficient cooling and dehumidification (integrated economizer mode). 

### 3. Enthalpy 

There are two methods of enthalpy economizing:

1.	Single Enthalpy – This control method takes humidity into account by measuring the enthalpy of air instead of dry bulb temperature; economizing is used only below 28 Btu/lb. When humidity is high, reducing the outdoor air fraction lowers the cooling coil demand, as less moisture needs to be removed by condensing it on the coil.

2.	Dual Enthalpy – Dual enthalpy control turns off economizing when outdoor air enthalpy is greater than return air enthalpy.

## Evaluation of Energy Consumption

Economizing only affects the cooling energy consumption needed to condition the outdoor air and is not used during heating season. The total energy embodied in the outdoor air entering the system is equal to the latent heat carried by the moisture in the air plus the sensible heat as measured by the dry bulb temperature. The cooling coils remove latent heat through dehumidification.

When the dry bulb temperature or enthalpy is in the economizing range, the OAD opens and the cooling coil valve is modulated or turned off. Therefore, to evaluate the benefit of economizing, it is only necessary to calculate the change in energy removed from outdoor air when conditions warrant economizing.

The AHU also consumes electrical energy to drive the supply and return fans. The on/off scheduling of the fan motors, speed modulation through VFDs (if present), and the system pressure will impact the energy consumption. Economizing only modulates the volume of outdoor air introduced to the AHU. Unless the fan motor is changed or a VFD is installed as a part of the retrofit, it is assumed that fan speed and power do not change between the pre- and post-retrofit conditions. 

Table 1 provides a summary of the components to be measured to arrive at the values needed to quantify the annual energy consumption and operating characteristics of an AHU with an airside economizing SOO. 

<div class="table-wrapper">
<table>
    <caption>Table 1. Energy consuming components associated with the airside economizing SOO.</caption>
    <thead>
        <tr>
            <th>
                System Quantification
            </th>
            <th>
                Values to be Quantified
            </th>
            <th>
                Energy Consuming Component
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                AHU
            </td>
            <td>
                Average hourly air flow (cfm)
            </td>
            <td>
                Fan Motor
            </td>
        </tr>
        <tr>
            <td>
                AHU
            </td>
            <td>
                <ul>
                  <li>Temperature and relative humidity (RH) of return air</li>
                  <li>Outdoor air</li>
                  <li>Mixed air</li>
                  <li>Discharge air</li>
                </ul>
            </td>
            <td>
                Cooling Coil
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Components to Measure and Measurement Locations

The measurement locations for the airside economizing SOO are shown in Figure 2. 

<a href="/images/SOOs/SOO-09-fig-2.jpg">
    <figure class="figure mb-0 mt-3">
        <img src="/images/SOOs/SOO-09-fig-2.jpg" class="figure-img img-fluid rounded" alt="Figure 2. Airside economizing SOO measurement points.">
        <figcaption class="figure-caption text-left">Figure 2. Airside economizing SOO measurement points.</figcaption>  
    </figure>
</a>

## Interaction of Airside Economizing with other SOOs

Airside economizing can interact with demand-controlled ventilation, in that the airside economizing will inherently over ventilate a space but is doing so with no chilled water.  

## Airside Economizing SOO Calculation Methodology

One underlying assumption regarding this SOO is that the heating and cooling loads for the zones being served do not change during the pre- and post-retrofit periods and are correlated to OAT and hours of operation. The sensible and latent energy associated with cooling the air is summed by OAT and coincident operating hours, and a regression model is developed. This is used with climate normal year data to develop an estimate of annual cooling consumption.
 
## Further Reading

- ASHRAE (2018). High Performance Sequences of Operation for HVAC Systems. Atlanta, GA: ASHRAE.




