---
title: Chilled Water Loop
type: system
system_id: 1
excerpt: Connected to the evaporator side of a chiller, this system moves chilled water or other liquid in the facility to provide cooling with the help of pumps and a piping system.
thumbnail_image: "/images/systems/chilled-water-loop/2024_0606_chilled  water loop system_thumbnail_RESIZED.jpg"
associated_systems:
  - Constant-speed, Constant-volume Pump and Motor
  - Variable-speed, Variable-volume Pump and Motor
related_components:
  - Constant-speed, Constant-volume Pump and Motor
  - Variable-speed, Variable-volume Pump and Motor
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/secondary-chilled-water-pumps-measurement-kit/"
layout: guide
url: "/documents/systems/chilled-water-loop"
---

<!-- {{< image_hotspot image_id=1 >}} -->

## General Overview

A chilled water (CHW) loop consists of two main components: pumps and motors, and a piping network. The pumps circulate chilled water from the chiller's evaporator through the piping network to terminal units, such as water-to-air heat exchangers in air handling units or radiant equipment like chilled beams, before returning it to the chiller. A CHW loop can be designed as either a primary-flow system or a primary-secondary system.

### Primary Flow

A primary-flow chilled water system consists of CHW pumps that circulate chilled water from the air-conditioned zone to the chillers. Primary pumps are usually headered to allow for the minimum flow through the chiller and there are usually multiple pumps to allow for staging and redundancy; however, a chiller dedicated pumping design can also be found in some facilities. Primary-flow systems can be either constant-primary-flow or variable-primary-flow.

A **constant-primary-flow system** usually has a staged cooling system and constant speed CHW pumps.  

A **variable-primary-flow system** has primary CHW pumps with variable speed drives that regulate the flow of the system based on the cooling load of the building.

### Primary-secondary Flow

A primary-secondary chilled water system consists of a primary CHW loop with primary pumps as well as a secondary CHW loop with secondary pumps to distribute the cooling load to the building. The components of a primary-secondary flow system are shown in Figure 1. The following designs can be found in a primary-secondary flow system:

A **constant-primary variable-secondary flow system** uses constant-speed pumps to maintain flow through the primary loop, while separate pumps in the secondary loop distribute flow and cooling load to the facility. This configuration typically includes a two-way valve that regulates flow between the primary and secondary loops. 

A **variable-primary variable-secondary flow system** has variable frequency drives (VFDs) installed on primary and secondary pump motors controlled by the differential pressure in the piping network.

## Components

The main components associated with the CHW loop are primary pumps for primary-flow systems and primary and secondary pumps for primary-secondary flow systems.

<a href="/images/systems/chilled-water-loop/2024_0424_CHW system_figure 1.jpg">
    <figure class="figure">
        <img src="/images/systems/chilled-water-loop/2024_0424_CHW system_figure 1.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Chilled water loop components.">
        <figcaption class="figure-caption text-left">Figure 1. Chilled water loop components (click on image to enlarge).</figcaption>
    </figure>
</a>

### Primary CHW Pump and Motor

A primary CHW pump and motor circulates chilled water from the evaporator section of the chiller to the building in a primary-only system or to the secondary pump and motor through the piping network. A primary CHW pump and motor can operate at constant speed or variable speed based on the design of the chilled water plant.

#### Constant-speed, Constant-volume Pump

A constant-speed, constant-volume pump and motor operates at a single speed to circulate liquid (e.g., water, water, and glycol solution) through a piping network where the flow rate through the pump does not vary more than 5%. 
<a class="continue" href="/documents/components/constant-speed-constant-volume-pump-motor"><span>Learn More</span><i class="fa fa-arrow-right"></i></a>

#### Variable-speed, Variable-volume Pump

A variable-speed, variable-volume pump and motor circulate liquid (e.g., water or water and glycol solution) through a piping network where the flow rate fluctuates as required by the plant and systems they serve. 
<a class="continue" href="/documents/components/variable-speed-variable-volume-pump-and-motor"><span>Learn More</span><i class="fa fa-arrow-right"></i></a>

### Secondary CHW Pump and Motor

A secondary CHW pump and motor circulates chilled water from the primary piping network to the building. A secondary CHW pump and motor are found in primary-secondary flow systems and can be at constant-speed or can be equipped with variable frequency drives that are controlled by the differential pressure in the secondary piping network.

#### Constant-speed, Constant-volume Pump

A constant-speed, constant-volume (CSCV) pump and motor operates at a single speed to circulate liquid (e.g., water, water, and glycol solution) through a piping network where the flow rate through the pump does not vary more than 5%. 
<a class="continue" href="/documents/components/constant-speed-constant-volume-pump-motor"><span>Learn More</span><i class="fa fa-arrow-right"></i></a>

#### Variable-speed, Variable-volume Pump

A variable-speed, variable-volume (VSVV) pump and motor circulate liquid (e.g., water or water and glycol solution) through a piping network where the flow rate fluctuates as required by the plant and systems they serve. 
<a class="continue" href="/documents/components/variable-speed-variable-volume-pump-and-motor"><span>Learn More</span><i class="fa fa-arrow-right"></i></a>

### Primary CHW Piping Network

The primary CHW piping network is connected to the evaporator section of the chiller and extends through the building to deliver chilled water to that facility in a primary-flow system. In a primary-secondary system, the primary piping network is dedicated to circulating chilled water through the evaporator of the chiller.

### Secondary CHW Piping Network

The secondary CHW piping network is connected to the primary piping network to deliver chilled water to the facility.

## Evaluation of Energy Consumption

The primary energy consumption in a CHW loop is the electricity used to run the pump motors. The heat loss across the piping network contributes to the overall energy consumption for the entire CHW loop system.

Table 1 provides a summary of system component measurements and values needed to quantify the annual energy consumption and operating characteristics of a CHW loop.

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
    </thead>
    <tbody>
        <tr>
            <td>
                Primary CHW loop pump electricity usage (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) - constant-speed system
            </td>
            <td ">
                <ul>
                    <li>Average hourly primary CHW pump motor <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a></li> 
                    <li>Total operating time for the pumps</li>
                </ul>
            </td>
            <td>
                <a href="/documents/components/constant-speed-constant-volume-pump-motor">Constant-speed pump motor</a>
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
                Primary CHW loop pump electricity usage (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) - variable-speed system
            </td>
            <td>
                <ul>
                    <li>Average hourly primary CHW pump motor <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a></li> 
                    <li>Total operating time for the pumps</li>
                </ul>
            </td>
            <td>
                <a href="/documents/components/variable-speed-variable-volume-pump-and-motor">Variable-speed pump motor</a>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/motor-runtime">Hourly measurement of motor runtime</a></li> 
                    <li><a href="/documents/measurement-technique/outside-air-temperature">Hourly measurement of outdoor air temperature</a></li>
            </td>
        </tr>
        <tr>
            <td>
                Secondary CHW loop pump electricity usage (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) - variable-speed system (if present)
            </td>
            <td>
                <ul>
                    <li>Average hourly primary CHW pump motor <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a></li> 
                    <li>Total operating time for the pumps</li>
                </ul>
            </td>
            <td>
                <a href="/documents/components/variable-speed-variable-volume-pump-and-motor">Variable-speed pump motor</a>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/motor-runtime">Hourly measurement of motor runtime</a></li> 
                    <li><a href="/documents/measurement-technique/outside-air-temperature">Hourly measurement of outdoor air temperature</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                Flow (GPM)
            </td>
            <td>
                <ul>
                <li>Average hourly chilled water flow (GPM) through a pump</li> 
                <li>Average hourly loop pressure differential</li>
                </ul>
            </td>
            <td>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/water-flow-rate">Hourly measurement of water flow rate</a></li>
                    <li><a href="/documents/measurement-technique/pipe-surface-water-temperature">Hourly measurement of supply and return water temperature</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Measurement Locations

The measurement locations for a primary-flow and a primary-secondary flow are shown in Figure 2.

<a href="/images/systems/chilled-water-loop/2024_0509_CHW system_figure 2.jpg">
<figure class="figure">
  <img src="/images/systems/chilled-water-loop/2024_0509_CHW system_figure 2.jpg" class="figure-img img-fluid rounded" alt="Figure 2. Chilled water loop measurement locations.">
  <figcaption class="figure-caption text-left">Figure 2. Chilled water loop measurement locations (click on image to enlarge).</figcaption>
</figure>
</a>

## Further Reading

- ASHRAE (2019). “ASHRAE Handbook: HVAC Applications,” Chapter 43. SUPERVISORY CONTROL STRATEGIES AND OPTIMIZATION. I-P Edition.

- Taylor, S (2012). “Optimizing Design & Control of Chilled Water Plants Part 5: Optimized Control Sequences”. ASHRAE Journal, Vol. 54, No 6. American Society of Heating, Refrigerating and Air Conditioning Engineers; pp: 56-74.