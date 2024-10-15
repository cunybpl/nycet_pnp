---
title: Condenser Water Loop
type: system
excerpt: Connects to the condenser side of a water-cooled chiller and uses pumps to transfer water or other liquid to cooling tower fans which reject heat to the outdoor air.
thumbnail_image: "/images/systems/condenser-water-loop/2024_0410_condenser water loop system_thumbnail.jpeg"
system_id: 3
associated_components:
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

<h3>Variable-speed Fans and Constant-flow System</h3>

A variable-speed constant-flow CW loop consists of variable-speed cooling tower fans and constant-speed CW pumps. 

<h3>Variable-speed Fans and Variable-flow System</h3>

A variable-speed variable-flow CW loop consists of variable-speed CW pumps and a cooling tower with variable-speed fans. 

<h3>Constant-speed Fans and Constant-flow System</h3>

A constant-speed constant-flow CW loop consists of constant-speed cooling tower fans and constant-speed CW pumps.

## Condenser Water Loop Components

The main components associated with the condenser water loop are shown in Figure 1.

<a href="/images/systems/condenser-water-loop/2024_0425_CW system_figure 1 updated.jpg">
<figure class="figure">
  <img src="/images/systems/condenser-water-loop/2024_0425_CW system_figure 1 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Condenser water loop components.">
  <figcaption class="figure-caption text-left">Figure 1. Condenser water loop components.</figcaption>
</figure>
</a>

### Condenser Water Pump and Motor
A CW pump and motor circulates condenser water from the condenser section of the chiller to the cooling tower. A CW loop pump and motor can be constant speed or equipped with variable frequency drives (VFDs), although Taylor (2012) provides scenarios that limit the cost effectiveness of VFDs on condenser loop pumps. 
A constant-speed CW pump provides a fixed flow to the cooling tower and chiller, independent of cooling tower heat rejection capacity or building cooling load. A variable-speed CW pump and motor modulates the flow to the cooling tower and chiller based on the heat rejection capacity of the cooling tower and the minimum flow rate required through the condenser section of the chiller.


### Evaporative Cooling Tower

An evaporative cooling tower rejects heat from the condenser section of the chiller, using forced airflow and the latent heat of evaporation to provide the cooling effect on the condenser water. A cooling tower may have one or more sections (called cells) and each cell typically has one fan and motor. The cooling tower fan and motor may operate at a constant- or variable-speed. 

The overall cooling capacity of the condenser water loop in a cooling tower with multiple cells and constant speed fans and motors is controlled by staging (turning on) the cells. Cooling towers with variable speed fans and motors generally operate the fans at the lowest speed possible and stage fans based on the overall CW heat rejection needed to satisfy the specific sequence of operation of the chilled water plant. 

<a href="/images/systems/condenser-water-loop/2024_0509_CW system_figure 2 updated.jpg">
<figure class="figure">
  <img src="/images/systems/condenser-water-loop/2024_0509_CW system_figure 2 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 2. Evaporative Cooling Tower.">
  <figcaption class="figure-caption text-left">Figure 2. Evaporative Cooling Tower.</figcaption>
</figure>
</a>

## Evaluation of Energy Consumption

The primary energy consumption of a condenser water loop is the electricity used for the pump motors and the cooling tower fans. Table 1 provides a summary of system component measurements and value calculations needed to quantify the annual energy consumption and operating characteristics of a CW loop.

<div class="table-wrapper">
<table>
    <caption>Table 1. Key values, components and measurements</caption>
    <thead>
        <tr>
            <th>
                <p><strong>System Quantification</strong></p>
            </th>
            <th>
                <p><strong>Value to be Quantified</strong></p>
            </th>
            <th>
                <p><strong>Energy Consuming Components</strong></p>
            </th>
            <th>
                <p><strong>Measurements</strong></p>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>Variable-flow CW loop electricity usage (kWh)</p>
            </td>
            <td>
                <ul>
                    <li>Average hourly pump motor kWh</li>
                    <li>Total operating time for the pump</li>
                </ul>
            </td>
            <td>
                <p><a href="/documents/components/variable-speed-variable-volume-pump-and-motor">Variable-speed pump motor</a></p>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/true-rms-power">Hourly measurement of true RMS power</a></li> 
                    <li><a href="/documents/measurement-technique/outside-air-temperature">Hourly measurement of outdoor air temperature</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>Variable-speed cooling tower electricity usage (kWh)</p>
            </td>
            <td>
                <ul>
                    <li>Average hourly fan motor kWh</li>
                    <li>Total operating time for the fan</li>
                </ul>
            </td>
            <td>
                <p><a href="/documents/components/variable-speed-variable-volume-fan-and-motor">Variable-speed cooling tower fan motors</a></p>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/true-rms-power">Hourly measurement of true RMS power</a></li> 
                    <li><a href="/documents/measurement-technique/outside-air-temperature">Hourly measurement of outdoor air temperature</a></li>
                    <li><a href="/documents/measurement-technique/relative-humidity">Hourly measurement of relative humidity</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>Constant-flow CW loop electricity usage (kWh)</p>
            </td>
            <td>
                <ul>
                    <li>Average hourly pump motor kWh</li>
                    <li>Total operating time for the pump</li>
                </ul>
            </td>
            <td>
                <p><a href="/documents/components/constant-speed-constant-volume-pump-motor">Constant-speed pump motor</a></p>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/electrical-spot-measurement">Spot measurements of true RMS power</a></li> 
                    <li><a href="/documents/measurement-technique/motor-runtime">Hourly measurement of motor runtime</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>Constant-speed cooling tower electricity usage (kWh)</p>
            </td>
            <td>
                <ul>
                    <li>Average hourly fan motor kWh</li>
                    <li>Total operating time for the fan</li>
                </ul>
            </td>
            <td>
                <p><a href="/documents/components/constant-speed-constant-volume-fan-and-motor">Constant-speed cooling tower fan motors</a></p>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/electrical-spot-measurement">Spot measurements of true RMS power</a></li>
                    <li><a href="/documents/measurement-technique/outside-air-temperature">Hourly measurement of outdoor air temperature</a></li>
                    <li><a href="/documents/measurement-technique/relative-humidity">Hourly measurement of relative humidity</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>Heat rejected to the outdoors</p>
            </td>
            <td>
                <p>Average hourly Btu rejected from the condenser water loop</p>
            </td>
            <td>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/water-flow-rate">Hourly measurement of condenser water flow rate</a></li> 
                    <li><a href="/documents/measurement-technique/pipe-surface-water-temperature">Hourly measurement of condenser suppy and return water temperature</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Measurement Locations

The measurements for the condenser water loop are schematically shown in Figure 3, include:

<a href="/images/systems/condenser-water-loop/2024_0502_CW system_figure 3 updated.jpg">
<figure class="figure">
  <img src="/images/systems/condenser-water-loop/2024_0502_CW system_figure 3 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 3. Condenser water loop system measurement points.">
  <figcaption class="figure-caption text-left">Figure 3. Condenser water loop system measurement points.</figcaption>
</figure>
</a>

## Further Reading

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 40. COOLING TOWERS. I-P Edition.

- Taylor, S (2012). “Optimizing Design & Control of Chilled Water Plants Part 5: Optimized Control Sequences”. ASHRAE Journal, Vol. 54, No 6. American Society of Heating, Refrigerating and Air Conditioning Engineers; pp: 56-74.