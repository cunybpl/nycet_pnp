---
title: Boiler
type: system
excerpt: A boiler system provides either hot water or steam to distribute the heating load within a facility.
thumbnail_image: "images/plants/water-cooled-chilled-water-plant/chilled-water-plant-overview.jpeg"
system_id: 11
associated_systems:
  - Burner
  - Constant-speed, Constant-volume Fan and Motor
  - Liquid-to-air Heat Exchanger
  - Variable-speed, Variable-volume Fan and Motor
related_components:
  - Burner
  - Constant-speed, Constant-volume Fan and Motor
  - Liquid-to-air Heat Exchanger
  - Variable-speed, Variable-volume Fan and Motor
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=condenser-water-loop"
layout: guide
url: "/documents/systems/boiler"
---

## General Overview

A boiler system provides either hot water or steam to distribute the heating load within a facility. Heat is transferred from the combustion chamber to water until the set point temperature to generate hot water or until the boiling point to generate steam, or beyond the boiling point to generate superheated steam.  

## Boiler System Components

The main components of a boiler system are burner, combustion chamber, heat exchanger, and draft fan. These components are shown in Figure 1. 

<a href="/images/systems/boiler/boiler figure1.png">
<figure class="figure">
  <img src="/images/systems/boiler/boiler figure1.png" class="figure-img img-fluid rounded" alt="Figure 1. Boiler System.">
  <figcaption class="figure-caption text-left">Figure 1. Boiler System</figcaption>
</figure>
</a>

### Combustion Chamber

The combustion chamber is where the fuel is burned. It houses the burners and is designed to support extremely high temperatures.  

### Heat Exchanger

The heat exchanger of boiler systems enables the heat transfer from the fuel combustion chamber to the water, without having direct contact. Non-condensing boilers typically have a single heat exchanger chamber while condensing boilers have a secondary heat exchanger, increasing the heat transfer area of the system and improving its efficiency. To operate in condensing mode the return water to the boiler must be at or below 140oF. 

### Burner

The main function of the burner is to deliver fuel and air, mix them in the required proportions, provide the ignition source and burn the mixture to assure an efficient combustion. Burners and be single fuel or set up to operate on multiple fuels. Burners controls play a key role in the efficiency of the boiler system. For a given boiler system the firing rate may be constant, variable but discrete (i.e., staged), or fully variable.  

### Draft Fan (Burner Fan Motor)

Mechanical draft boilers usually have a draft fan that creates the required pressure difference. It is driven by a motor to provide oxygen to the combustion chamber for adequate combustion.   

## Key Values Needed to Assess Energy Consumption

The boiler is one of the largest energy consuming systems in any heating plant. The key energy consuming components of a boiler system are the burner and draft fan (if present). The energy consumed is primarily in the form of liquid fuel or natural gas, however there may be electricity consumption via the draft fan.

The primary energy consumption of a boiler system is the fuel that is used to drive the combustion reaction to heat the water. Table 1 provides a summary of measurements needed to quantify the annual consumption and operating characteristics of a boiler.  

<table>
    <caption>Table 1. Key values, components and measurements</caption>
    <thead>
        <tr>
            <td>
                <p><strong>System Quantification</strong></p>
            </td>
            <td>
                <p><strong>Values to be Quantified</strong></p>
            </td>
            <td>
                <p><strong>Energy Consuming Component</strong></p>
            </td>
            <td>
                <p><strong>Measurements</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>Boiler fuel consumption</p>
            </td>
            <td>
                <p>Average hourly fuel consumption (Btuh)</p>
            </td>
            <td>
                <p>Burner</p>
            </td>
            <td>
                <ul>
                    <li>Average hourly fuel consumption by the boiler</li> 
                    <li>Total operating hours of the pump motors</li> 
                    <li>Hourly outside air temperature</li>
                <ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>Fan electricity consumption</p>
            </td>
            <td>
                <ul>
                    <li>Average hourly burner fan motor kWh</li> 
                    <li>Total operating hours of burner fan motor</li>
                </ul>
            </td>
            <td>
                <p>Burner fan motor</p>
            </td>
            <td>
                <ul>
                <li>Average hourly electricity consumption of the burner fan motor</li>
                <li>Total operating hours of the pump motors</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>   

### Boiler System Measurement Point Locations

The measurement locations for a boiler system are shown in Figure 2. More detail on performing measurements can be found in in <link to gas meter reading> and <link to fan motor measurements> 

<a href="/images/systems/boiler/boiler figure2.png">
<figure class="figure">
  <img src="/images/systems/boiler/boiler figure2.png" class="figure-img img-fluid rounded" alt="Figure 2. Measurement point locations (Image courtesy of CUNY BPL).">
  <figcaption class="figure-caption text-left">Figure 2. Measurement point locations (Image courtesy of CUNY BPL).</figcaption>
</figure>
</a>

## References
<!-- Must have emty line after the opeing div tag. If we use a numbered list to relate to in text citations, remove the div  -->
<div class="references">

ASHRAE (2014). “ASHRAE Guideline 14-2014 – Measurement of Energy, Demand, and Water Savings.” Annex A.

ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 11. STEAM SYSTEMS. I-P Edition.

ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 21. FANS. I-P Edition.

</div>