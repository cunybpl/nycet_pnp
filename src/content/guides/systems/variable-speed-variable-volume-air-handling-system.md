---
title: Variable-speed, Variable-volume Air Handling Unit
type: system
system_id: 10
excerpt: Provides conditioned air to one or more spaces. The supply and return fans operate at variable speeds.
thumbnail_image: "/images/systems/variable-speed-variable-volume-air-handling-unit/2024_0702_VSVV AHU_system_thumbnail_RESIZED-01.jpg"
associated_systems: 
  - Variable-speed, Variable-volume Fan and Motor
related_components:
  - Variable-speed, Variable-volume Fan and Motor
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/air-handler-unit-fans-measurement-kit/"
layout: guide
url: "/documents/systems/variable-speed-variable-volume-air-handling-system"
---

## General Overview

A variable-speed, variable-volume (VSVV) air handling system conditions mixed air (a combination of outdoor and return air), discharges the conditioned air into zones, returns air from the zones, and exhausts air to the outdoors. The served zones are typically equipped with variable-air volume boxes (VAV), which allow for zone-specific control of supply airflow. The overall airflow of the air handling unit (AHU) is modulated using variable-frequency drives (VFDs) on the supply and return fan motors based on how much air the VAV boxes require. For a more detailed description of the system, refer to the ASHRAE HVAC Systems and Equipment Handbook (2020), Section 4. 

## Components 

The major components of a VSVV system are the fans and motors, motor VFDs, heat exchanger coils, dampers, and VAV boxes. The components associated with the VSVV are shown in Figure 1. In general, the mixed air is conditioned by heating or cooling coils that use the output of the heating or cooling loops, using mechanical valves to regulate the amount of energy introduced to the coils. Supply and return fans with VFDs and dampers control airflows inside the main AHU. Dampers in the VAV boxes control zone airflows. Occasionally, a VAV box is equipped with a supply fan.   

<a href="/images/systems/variable-speed-variable-volume-air-handling-unit/2024_0503_VSVV AHU system_figure 1 updated.jpeg">
    <figure class="figure mb-4 mt-3">
        <img src="/images/systems/variable-speed-variable-volume-air-handling-unit/2024_0503_VSVV AHU system_figure 1 updated.jpeg" class="figure-img img-fluid rounded" alt="Figure 1. Variable-speed, Variable-volume Components.">
        <figcaption class="figure-caption text-left">Figure 1. Variable-speed, Variable-volume Components (click on image to enlarge).</figcaption>
    </figure>
</a>

### AHU Fan Motors and Variable-frequency Drives 

The fan motors with VFDs provide pressure in the system to move air through the duct work. Typically, fans are placed on the return and supply side of the unit to maintain proper airflow. The air is blown through filters and heat exchanger coils to be conditioned. Fan speeds are varied based on the need for conditioned or ventilation air in the zones served.
<a class="continue" href="/documents/components/variable-speed-variable-volume-fan-and-motor"><span>Learn More</span><i class="fa fa-arrow-right"></i></a>  

### Heat Exchanger (Heating/Cooling Coils) 

The heat exchanger includes a set of heating and cooling coils, which provide heating or cooling to the air before it is discharged from the AHU. Mechanical valves regulate the amount of energy introduced from the loop to the heat exchangers that control the energy supplied to the discharge air.
<a class="continue" href="/documents/components/air-to-air-heat-exchanger"><span>Learn More</span><i class="fa fa-arrow-right"></i></a>  

### Dampers 

Dampers are generally interlocked and are controlled to supply appropriate quantities of fresh air to the AHU and exhaust air to the outdoors. The dampers can also be set to maintain desired building pressures.  

### Variable-air Volume (VAV) Box 

A device that includes a damper to control zone specific airflow, a VAV box is sometimes equipped with a fan based on the overall system design. VAV boxes are typically equipped with reheat coils to prevent over-cooling of zones with low cooling loads and high ventilation air requirements.  

## Evaluation of Energy Consumption 

The energy consumption of a VSVV air handling system is electricity for the fan motors and VFD, thermal energy for heating or cooling across the VSVV AHU heat exchanger, and the electricity or thermal energy used at the VAV reheat boxes. Table 1 provides a summary of the components and operating characteristics of a variable speed system. 

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
                AHU power consumption
            </td>
            <td>
                Hourly fan motor <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>
            </td>
            <td>
                <a href="/documents/components/variable-speed-variable-volume-fan-and-motor">Fan motors</a> and associated VFDs
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/true-rms-power">Hourly true RMS energy</a></li> 
                    <li><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor air temperature</a> (if VFD is temperature dependent)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                AHU heating/cooling load on building
            </td>
            <td>
                Hourly thermal load of heating/cooling coils (Btuh)
            </td>
            <td>
                Heating/cooling coils
            </td>
            <td>
                Airflow rate and temperature difference across the heating/cooling coil
            </td>
        </tr>
        <tr>
            <td>
                VAV box consumption (if applicable)
            </td>
            <td>
                Hourly reheat <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>
            </td>
            <td>
                Electric reheat coil (if present)
            </td>
            <td>
                <a href="/documents/measurement-technique/true-rms-power">Hourly true RMS energy</a>
            </td>
        </tr>
        <tr>
            <td>
                VAV box consumption (if applicable)
            </td>
            <td>
                Hourly thermal load reheat coils (Btuh)
            </td>
            <td>
                Hot water or steam reheat coil
            </td>
            <td>
                Airflow rate and temperature difference across the heating/cooling coil
            </td>
        </tr>
        <tr>
            <td>
                VAV box consumption (if applicable)
            </td>
            <td>
                Hourly fan motor <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>
            </td>
            <td>
                <a href="/documents/components/variable-speed-variable-volume-fan-and-motor">Fan motor</a> (if present)
            </td>
            <td>
                <a href="/documents/measurement-technique/true-rms-power">Hourly true RMS energy</a>
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Measurement Locations

The measurement locations for a VSVV air handling system are schematically shown in Figure 2.

<a href="/images/systems/variable-speed-variable-volume-air-handling-unit/variable speed variable volume ahu figure 2.png">
    <figure class="figure mb-4 mt-3">
        <img src="/images/systems/variable-speed-variable-volume-air-handling-unit/variable speed variable volume ahu figure 2.png" class="figure-img img-fluid rounded" alt="Figure 2. VSVV AHU measurement locations.">
        <figcaption class="figure-caption text-left">Figure 2. VSVV AHU measurement locations (click on image to enlarge).</figcaption>
    </figure>
</a>

## Further Reading

- ASHRAE (2014). “ASHRAE Guideline 14-2014 – Measurement of Energy, Demand, and Water Savings.” Annex A. 

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 1. HVAC SYSTEM ANALYSIS AND SELECTION. I-P Edition. 

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 4. AIR HANDLING AND DISTRIBUTION. I-P Edition.  
 
- Li, Y. (2015). “Variable Frequency Drive Applications in HVAC Systems”, in M. Chomat (ed.), New Applications of Electric Drives, IntechOpen, London. 10.5772/61782.