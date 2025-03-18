---
title: Constant-speed, Constant-volume Pump and Motor
type: component
component_id: 6
excerpt: Operates at a single speed to circulate liquid (water or glycol solution) through a piping network.
thumbnail_image: "/images/components/thumbnail-images/2024_0606_cscv pump component_thumbnail_RESIZED-01.jpg"
associated_systems:
  - Chilled Water Loop
  - Condenser Water Loop
  - Feedwater System
  - Hot Water Loop
  - Steam Condensate Recovery
  - Steam Distribution
related_systems:
  - Chilled Water Loop
  - Condenser Water Loop
  - Feedwater System
  - Hot Water Loop
  - Steam Condensate Recovery
  - Steam Distribution
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/pump-and-motor-kit-constant-speed/"
layout: guide
url: "/documents/components/constant-speed-constant-volume-pump-motor"
---

## General Overview

A constant-speed, constant-volume (CSCV) pump and motor operates at a single speed to circulate liquid (e.g., water, water, and glycol solution) through a piping network where the flow rate through the pump does not vary more than 5%. Centrifugal pumps are the most common type of pumps used.

Table 1 shows the plant and system configurations that may contain a CSCV pump and motor that operate based on a regular schedule (e.g., same time of day, same days of week).

<div class="table-wrapper">
<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 1. Plants and systems applicable to CSCV pumps and motors.</caption>
    <thead>
        <tr>
            <th>
                Plant
            </th>
            <th>
                System
            </th>
            <th>
                Component
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Air-cooled chilled water plant
            </td>
            <td>
                Chilled water loop
            </td>
            <td>
                Primary chilled water pump
            </td>
        </tr>
        <tr>
            <td rowspan="3" style="vertical-align: middle;">
                Water-cooled chilled water plant
            </td>
            <td>
                Condenser water loop
            </td>
            <td>
                Condenser water pump
            </td>
        </tr>
        <tr>
            <td>
                Chilled water loop
            </td>
            <td>
                <ul>
                    <li>Primary chilled water pump</li> 
                    <li>Secondary chilled water pump</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                Waterside economizer
            </td>
            <td>
                Waterside economizer pump (if present)
            </td>
        </tr>
        <tr>
            <td rowspan="2" style="vertical-align: middle;">
                Hot water plant
            </td>
            <td>
                Hot water boiler
            </td>
            <td>
                Makeup water pump
            </td>
        </tr>
        <tr>
            <td>
                Hot water loop
            </td>
            <td>
                Building loop pump
            </td>
        </tr>
        <tr>
            <td rowspan="2" style="vertical-align: middle;">
                Steam plant
            </td>
            <td>
                Steam boiler
            </td>
            <td>
                Makeup water pump
            </td>
        </tr>
        <tr>
            <td>
                Feedwater tank
            </td>
            <td>
                Feedwater pump
            </td>
        </tr>
        <tr>
            <td>
                Service water plant
            </td>
            <td>
                Service hot water loop
            </td>
            <td>
                <ul>
                    <li>Service hot water</li> 
                    <li>Recirculation pump</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

<!-- ## Evaluation of Energy Consumption

The primary energy source for a CSCV pump is the electricity used to run the pump motor. Table 2 provides a summary of measurements needed to quantify the annual energy consumption and operating characteristics of the CSCV pump and motor.

<div class="table-wrapper">
<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 2. Key values and measurements to evaluate energy consumption.</caption>
    <thead>
        <tr>
            <th width="28.571428571428573%">
                Component Quantification
            </th>
            <th width="34.76764199655766%">
                Values to be Quantified
            </th>
            <th width="36.660929432013766%">
                Measurement&nbsp;
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fr-cell-handler " style="vertical-align: top;" width="28.571428571428573%" height="17">
                Electricity usage of a CSCV pump motor
            </td>
            <td style="vertical-align: top;" width="34.76764199655766%">
                <ul>
                    <li>Average hourly power input to the pump motor</li>
                    <li>Average hourly operating time for the pump motor</li>
                </ul>     
            </td>
            <td style="vertical-align: top;" width="36.660929432013766%">
                <ul>
                    <li><a href="/documents/measurement-technique/electrical-spot-measurement">True RMS power of pump motor that drives the pump (kW)</a></li>
                    <a href="/documents/measurement-technique/motor-runtime"><li>Pump motor runtime</li></a>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div> -->

## Measurement Strategy

The measurement strategy for a CSCV pump and motor involves conducting a one-time measurement of the power draw and long-term measurements of the operational schedule of the motor. The approach assumes that the power draw stays constant throughout the measurement period. Because the motor runs at constant-speed and is under a constant load, it is either operating at full power (when on) or it is drawing no power (when off). A motor on/off data logger is used to record the operating schedule. The true RMS power is measured at the main feed to the constant-speed motor. Measurement locations are generically represented in Figure 1.

<a href="/images/components/2024_1023_CSCV_pump component_figure 1.jpg">
<figure class="figure">
  <img src="/images/components/2024_1023_CSCV_pump component_figure 1.jpg" class="figure-img img-fluid rounded zoom" alt=" Figure 1. CSCV pump and motor measurement locations.">
  <figcaption class="figure-caption text-left">Figure 1. CSCV pump and motor measurement locations.</figcaption>
</figure>
</a>

### What and How to Measure

Perform the following measurements to quantify the energy consumption and operating characteristics of a CSCV pump and motor:

{{< measurement_technique measurement_technique_id=1 >}}

{{< measurement_technique measurement_technique_id=4 >}}

### Measurement Equipment

**If you are NYC agency personnel** and you're already familiar with the measurements above, the Field Equipment Lending Library has put together a kit wit all the equipment needed for measuring this component:

<div class="equip-grid">

{{< equipment_link type="kit" borrow="yes" url="https://nycenergytools.com/equipment-kits/pump-and-motor-kit-constant-speed/"
imgUrl="https://nycenergytools.com/wp-content/uploads/2024/09/Fan-and-Motor-Kit-Constant-speed.jpg" title="Pump and Motor (Constant-Speed)" excerpt="Use this kit to assess the energy consumption (electricity usage) of a constant-speed, constant-volume pump and motor." >}}

</div>

{{< admonition type="tip" >}}
For specifics on how to use and install measurement equipment, see each [measurement technique](#what-and-how-to-measure).
{{< /admonition >}}

<!-- ### Measurement Equipment

Table 3 provides the equipment required to carry out the measurements of this component. 

<div class="table-wrapper">
<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 3. Measurement equipment.</caption>
    <thead>
        <tr>
            <th>
                Equipment
            </th>
            <th>
                Description
            </th>
            <th>
                Measurement (Units)
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <a href="https://nycenergytools.com/wp-content/uploads/2021/04/HOBO-UX90-Motor-On-Off-Logger_UX90-004.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/04/HOBO-UX90-Motor-On-Off-Logger_UX90-004.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Onset HOBO Motor On/Off Data Logger (UX90-004)
            </td>
            <td>       
                Records when a motor is on and off, as well as runtime. Requires HOBOware software and a USB connection cable for programming and downloading data files.
            </td>
            <td>
                <a href="/documents/measurement-technique/motor-runtime">Motor Runtime (minutes)</a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/Fluke-345-300x300@2x.jpeg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/Fluke-345-300x300@2x.jpeg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Fluke 345 Power Quality Clamp Meter
            </td>
            <td>
                Multi-purpose electrical measurement tool used to take true RMS power readings over a short period of time.
            </td>
            <td>
                <a href="/documents/measurement-technique/true-rms-power">True RMS Power (kW)</a>
            </td>
        </tr>
    </tbody>
</table> 
</div> -->

## Energy Consumption Quantification

The primary energy source for a CSCV pump is the electricity used to run the pump motor. Table 2 provides a summary of measurements needed to quantify the annual energy consumption and operating characteristics of the CSCV pump and motor.

### How to Quantify

The following downloadable file(s) can be used to calculate energy consumption based on the measurements taken for all types of CSCV pump and motor:

{{< downloadable_file title="Constant Speed Pump Energy Using Motor Runtime Data" >}}

{{< downloadable_file title="Constant One or Two Speed Pump Energy Using kW Data" >}}

{{< downloadable_file title="Constant One or Two Speed Pump Energy Using Electrical Current Data" >}}

{{< admonition type="note" >}}
For more details about the methodology behind the calculators above see [Pump Motor Energy Consumption](/documents/calculation-methodology/pump-motors-energy-consumption).
{{< /admonition >}}

## Further Reading

- Evans , P. (2017, Sept 26). How a Chiller, Cooling Tower and Air Handling Unit work together. Retrieved from The Engineering Mindset.com: https://theengineeringmindset.com/chiller-cooling-tower-air-handling-unit-work-together/

- Evans, P. (2023, Jan 6). How Do Centrifugal Pumps Work. Retrieved from The Engineering Mindset.com: https://theengineeringmindset.com/how-do-centrifugal-pumps-work/