---
title: Constant-speed, Constant-volume Air Handling Unit
type: system
system_id: 8
excerpt: Provides conditioned air to one or more spaces. The supply and return fans operate at constant-speed.
thumbnail_image: "/images/systems/constant-speed-constant-volume-air-handling-unit/2024_0702_CSCV AHU_system_thumbnail_RESIZED-01.jpg"
associated_systems: 
  - Constant-speed, Constant-volume Fan and Motor
related_components:
  - Constant-speed, Constant-volume Fan and Motor
borrow_equipment_url: 
layout: guide
url: "/documents/systems/constant-speed-constant-volume-air-handling-system"
---

## General Overview

A constant-speed, constant-volume (CSCV) air handling unit provides conditioning to mixed air (a combination of outdoor and return air), discharges the conditioned air into zones, returns air from the zones, and exhausts air to the outdoors. The CSCV system has a constant volumetric airflow rate. The discharge air is conditioned by heating or cooling heat exchangers that are supplied from the heating and cooling loop systems (e.g., steam loop, hot water heating loop, chilled water loop, refrigerant coil). For a more detailed description of the system, refer to the ASHRAE HVAC Systems and Equipment Handbook (2020), Section 4. 

## Components 

The major components of a CSCV system include fans and motors, heat exchanger coils, and dampers. Figure 1 illustrates the components of the CSCV system. In general, mixed air is conditioned by heating or cooling coils that receive energy from the heating or cooling loops, with mechanical valves regulating the energy introduced to the coils. Supply and return fans circulate air to and from the served zones, while dampers control airflow. 

<a href="/images/systems/constant-speed-constant-volume-air-handling-unit/2024_0503_CSCV AHU system_figure 1 updated.jpeg">
    <figure class="figure mb-4 mt-3">
        <img src="/images/systems/constant-speed-constant-volume-air-handling-unit/2024_0503_CSCV AHU system_figure 1 updated.jpeg" class="figure-img img-fluid rounded" alt="Figure 1. Constant-volume, constant-speed AHU components.">
        <figcaption class="figure-caption text-left">Figure 1. Constant-volume, Constant-speed AHU components.</figcaption>
    </figure>
</a>

### Fan and Motor 

The fan motors provide pressure in the system to move air through the duct work. Typically, fans are placed on the return and supply side of the unit to maintain proper airflow. The air is either blown or pulled through filters and heat exchanger coils, depending on the configuration. In a CSCV system, the motors operate in an on/off manner.
<a class="continue" href="/documents/components/constant-speed-constant-volume-fan-and-motor" aria-label="Learn more about this component"><span>Learn More</span><i class="fa fa-arrow-right"></i></a> 

### Heat Exchanger (Heating/Cooling Coils) 

The heat exchanger includes a set of heating and cooling coils that provide heating or cooling to the air before it is discharged from the AHU. Mechanical valves regulate the amount of energy introduced from the loop to the heat exchangers, which control the energy supplied to the discharge air.
<a class="continue" href="/documents/components/air-to-air-heat-exchanger" aria-label="Learn more about this component"><span>Learn More</span><i class="fa fa-arrow-right"></i></a>

### Dampers 

Dampers are generally interlocked and are controlled to supply appropriate quantities of fresh air to the AHU and exhaust air to the outdoors. The dampers can also be set to maintain desired building pressures.  

## Evaluation of Energy Consumption

The primary energy consumption of a CSCV is the electricity that is used to run the fan and motor and the energy transferred to the air for heating and cooling. Table 1 provides a summary of measurements needed to quantify the annual consumption and operating characteristics of the CSCV pump and motor. 

<div class="table-wrapper">
<table>
    <caption>Table 1. Key values, components and measurements to evaluate energy consumption.</caption>
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
            <th>
                Measurements
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                Air handling unit electricity usage (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)
            </td>
            <td>
                Average hourly supply and return fan motor (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)
            </td>
            <td>
                <a href="/documents/components/constant-speed-constant-volume-fan-and-motor">Fan motors</a>
            </td>
            <td>
                <a href="/documents/measurement-technique/true-rms-power">Spot measurements of true RMS power</a>
            </td>
        </tr>
        <tr>
            <td>
                Heating/cooling load on building (Btu/h)
            </td>
            <td>
                <ul>
                    <li>Average hourly outdoor, mixes, return and supply air temperatures (F)</li>
                    <li>Average hourly air flow rate of supply air (CFM)</li>
                    <li>Average hourly relative humidity of outdoor, mixes, return and supply air (%)</li>
                </ul>
            </td>
            <td>
                Heating/cooling coils
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/system-air-temperature">System air temperature measurement</a></li>
                    <li>Air flow rate measurement</li>
                    <li><a href="/documents/measurement-technique/relative-humidity">Relative humidity measurement</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Measurement Locations

The measurement locations for a CSCV AHU are shown in Figure 2. 

<a href="/images/systems/constant-speed-constant-volume-air-handling-unit/constant speed constant volume ahu figure 2.png">
    <figure class="figure mb-4 mt-3">
        <img src="/images/systems/constant-speed-constant-volume-air-handling-unit/constant speed constant volume ahu figure 2.png" class="figure-img img-fluid rounded" alt="Figure 2. CSCV AHU measurement locations.">
        <figcaption class="figure-caption text-left">Figure 2. CSCV AHU measurement locations.</figcaption>
    </figure>
</a>

## Further Reading


- ASHRAE (2014). “ASHRAE Guideline 14-2014 – Measurement of Energy, Demand, and Water Savings.” Annex A. 

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 1. HVAC SYSTEM ANALYSIS AND SELECTION. I-P Edition.  

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 4. AIR HANDLING AND DISTRIBUTION. I-P Edition.