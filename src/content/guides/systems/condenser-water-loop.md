---
title: Condenser Water Loop
type: system
excerpt: Consists of a CW pump and motor, an evaporative cooling tower with a fan and motor, and a CW piping network.
thumbnail_image: "images/plants/water-cooled-chilled-water-plant/chilled-water-plant-overview.jpeg"
system_id: 3
associated_systems:
  - Constant-speed, Constant-volume Fan and Motor
  - Constant-speed, Constant-volume Pump and Motor
  - Variable-speed, Variable-volume Fan and Motor
  - Variable-speed, Variable-volume Pump and Motor
related_components:
  - Constant-speed, Constant-volume Fan and Motor
  - Constant-speed, Constant-volume Pump and Motor
  - Variable-speed, Variable-volume Fan and Motor
  - Variable-speed, Variable-volume Pump and Motor
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=condenser-water-loop"
layout: guide
url: "/documents/systems/condenser-water-loop"
---

## General Overview

A condenser water (CW) loop consists of a CW pump and motor, an evaporative cooling tower with a fan and motor, and a CW piping network. The CW loop system is designed to reject the heat given off by the condenser side of the chiller. A CW loop can have the following configurations:

### Variable-speed Fans and Constant-flow Condenser Water Loop

A variable-speed constant-flow CW loop consists of variable-speed cooling tower fans and constant-speed CW pumps. 

### Variable-speed Fans and Variable-flow Condenser Water Loop

A variable-speed variable-flow CW loop consists of variable-speed CW pumps and a cooling tower with variable-speed fans. 

### Constant-speed Fans and Constant-flow Condenser Water Loop

A constant-speed constant-flow CW loop consists of constant-speed cooling tower fans and constant-speed CW pumps.

## Condenser Water Loop Components

The main components associated with the condenser water loop are shown in Figure 1.

<a href="/images/systems/chilled-water-loop/WCC-HE-economizer-2ndary-pump-Final-06132023.jpg">
<figure class="figure">
  <img src="/images/systems/chilled-water-loop/WCC-HE-economizer-2ndary-pump-Final-06132023.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Condenser water loop components.">
  <figcaption class="figure-caption text-left">Figure 1. Condenser water loop components.</figcaption>
</figure>
</a>

### Condenser Water Pump and Motor
A CW pump and motor circulates condenser water from the condenser section of the chiller to the cooling tower. A CW loop pump and motor can be constant speed or equipped with variable frequency drives (VFDs), although Taylor (2012) provides scenarios that limit the cost effectiveness of VFDs on condenser loop pumps. 
A constant-speed CW pump provides a fixed flow to the cooling tower and chiller, independent of cooling tower heat rejection capacity or building cooling load. A variable-speed CW pump and motor modulates the flow to the cooling tower and chiller based on the heat rejection capacity of the cooling tower and the minimum flow rate required through the condenser section of the chiller.


### Evaporative Cooling Tower

An evaporative cooling tower rejects heat from the condenser section of the chiller, using forced airflow and the latent heat of evaporation to provide the cooling effect on the condenser water. A colling tower may have one or more sections (called cells) and each cell typically has one fan and motor. The cooling tower fan and motor may operate at a constant or variable speed. 
The overall cooling capacity of the condenser water loop in a cooling tower with multiple cells and constant speed fans and motors is controlled by staging (turning on) the cells. Cooling towers with variable speed fans and motors generally operate the fans at the lowest speed possible and stage fans based on the overall CW heat rejection needed to satisfy the specific sequence of operation of the chilled water plant. 

## Key Values Needed to Assess Energy Consumption

The primary energy consumption of a condenser water loop is the electricity used for the pump motors and the cooling tower fans. Table 1 provides a summary of system component measurements and value calculations needed to quantify the annual energy consumption and operating characteristics of a CW loop.

<table cellspacing="0" cellpadding="7">
    <caption>Table 1. Key values, components and measurements</caption>
    <thead>
        <tr>
            <th width="17.699115044247787%">
                <p><strong>System Quantification</strong></p>
            </th>
            <th width="26.902654867256636%">
                <p><strong>Value to be Quantified</strong></p>
            </th>
            <th width="26.371681415929203%">
                <p><strong>Energy Consuming Components</strong></p>
            </th>
            <th width="29.02654867256637%">
                <p><strong>Measurements</strong></p>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="17.699115044247787%">
                <p>Variable-flow CW loop electricity usage (kWh)</p>
            </td>
            <td width="26.902654867256636%">
                <p>Average hourly pump motor kWh; total operating time for the pump</p>
            </td>
            <td width="26.371681415929203%">
                <p><a href="/documents/components/variable-speed-variable-volume-pump-and-motor">Variable-speed pump motor</a></p>
            </td>
            <td width="29.02654867256637%">
                <p><a href="/documents/measurement-technique/true-rms-power">Hourly measurement of true RMS power</a>; <a href="/documents/measurement-technique/outside-air-temperature">hourly measurement of outdoor air temperature</a></p>
            </td>
        </tr>
        <tr>
            <td width="17.699115044247787%">
                <p>Variable-speed cooling tower electricity usage (kWh)</p>
            </td>
            <td width="26.902654867256636%">
                <p>Average hourly fan motor kWh; total operating time for the fan</p>
            </td>
            <td width="26.371681415929203%">
                <p><a href="/documents/components/variable-speed-variable-volume-fan-and-motor">Variable-speed cooling tower fan motors</a></p>
            </td>
            <td width="29.02654867256637%">
                <p><a href="/documents/measurement-technique/true-rms-power">Hourly measurement of true RMS power</a>; <a href="/documents/measurement-technique/outside-air-temperature">hourly measurement of outdoor air temperature</a>; <a href="/documents/measurement-technique/relative-humidity">hourly measurement of relative humidity</a></p>
            </td>
        </tr>
        <tr>
            <td width="17.699115044247787%">
                <p>Constant-flow CW loop electricity usage (kWh)</p>
            </td>
            <td width="26.902654867256636%">
                <p>Average hourly pump motor kWh; total operating time for the pump</p>
            </td>
            <td width="26.371681415929203%">
                <p><a href="/documents/components/constant-speed-constant-volume-pump-motor">Constant-speed pump motor</a></p>
            </td>
            <td width="29.02654867256637%">
                <p><a href="/documents/measurement-technique/electrical-spot-measurement">Spot measurements of true RMS power</a>; <a href="/documents/measurement-technique/motor-runtime">hourly measurement of motor runtime</a></p>
            </td>
        </tr>
        <tr>
            <td width="17.699115044247787%">
                <p>Constant-speed cooling tower electricity usage (kWh)</p>
            </td>
            <td width="26.902654867256636%">
                <p>Average hourly fan motor kWh; total operating time for the fan</p>
            </td>
            <td width="26.371681415929203%">
                <p><a href="/documents/components/constant-speed-constant-volume-fan-and-motor">Constant-speed cooling tower fan motors</a></p>
            </td>
            <td width="29.02654867256637%">
                <p><a href="/documents/measurement-technique/electrical-spot-measurement">Spot measurements of true RMS power</a>; <a href="/documents/measurement-technique/outside-air-temperature">hourly measurement of outdoor air temperature</a>; <a href="/documents/measurement-technique/relative-humidity">hourly measurement of relative humidity</a></p>
            </td>
        </tr>
        <tr>
            <td width="17.699115044247787%">
                <p>Heat rejected to the outdoors.</p>
            </td>
            <td width="26.902654867256636%">
                <p>Average hourly Btu rejected from the condenser water loop&nbsp;</p>
            </td>
            <td width="26.371681415929203%">
            </td>
            <td width="29.02654867256637%">
                <p><a href="/documents/measurement-technique/water-flow-rate">Hourly measurement of condenser water flow rate</a>; <a href="/documents/measurement-technique/pipe-surface-water-temperature">hourly measurement of condenser suppy and return water temperature</a></p>
            </td>
        </tr>
    </tbody>
</table>

### Condenser Water Loop System Measurement Point Locations

The measurements for the condenser water loop are schematically shown in Figure 2, include:

<a href="/images/systems/condenser-water-loop/CW-Loop-Diagram-with-MP_ 11292022.jpg">
<figure class="figure">
  <img src="/images/systems/condenser-water-loop/CW-Loop-Diagram-with-MP_ 11292022.jpg" class="figure-img img-fluid rounded" alt="Figure 2. Condenser water loop system measurement points.">
  <figcaption class="figure-caption text-left">Figure 2. Condenser water loop system measurement points.</figcaption>
</figure>
</a>

## Reference

ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 40. COOLING TOWERS. I-P Edition.

Taylor, S (2012). “Optimizing Design & Control of Chilled Water Plants Part 5: Optimized Control Sequences”. ASHRAE Journal, Vol. 54, No 6. American Society of Heating, Refrigerating and Air Conditioning Engineers; pp: 56-74.