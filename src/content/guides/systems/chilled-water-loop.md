---
title: Chilled Water Loop
type: system
excerpt: Consists of two main components – the pump and motors and a piping network.
thumbnail_image: "images/plants/water-cooled-chilled-water-plant/chilled-water-plant-overview.jpeg"
system_id: 1
associated_systems:
  - Air-cooled Chiller
  - Condenser Water Loop
  - Water Cooled Chiller
  - Waterside Economizer
related_components:
  - Constant-speed, Constant-volume Pump and Motor
  - Variable-speed, Variable-volume Pump and Motor
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=chilled-water-loop"
layout: guide
url: "/documents/systems/chilled-water-loop"
---

## General Overview

A chilled water (CHW) loop consists of two main components – the pump and motors and a piping network. Chilled water is circulated by the pumps from the evaporator section of the chiller through the piping network to a terminal unit, such as a water-to-air heat exchanger in the air handling units or to other radiant equipment such as chilled beams, and then back to the chiller. A CHW loop can be designed as a primary-flow system and a primary-secondary system.

### Primary-flow system

A primary-flow chilled water system consists of CHW pumps that circulate chilled water from the air-conditioned zone to the chillers. Primary pumps are usually headered to allow for the minimum flow through the chiller and there are usually multiple pumps to allow for staging and redundancy; however, a chiller dedicated pumping design can also be found in some facilities. Primary-flow systems can be either constant-primary-flow or variable-primary-flow.

A **constant-primary-flow system** usually has a staged cooling system and constant speed CHW pumps.  

A **variable-primary-flow system** has primary CHW pumps with variable speed drives that regulates the flow of the system based on the cooling load of the building.

### Primary-secondary flow system

A primary-secondary chilled water system consists of a primary CHW loop with primary pumps and secondary CHW loop with secondary pumps to distribute the cooling load to the building. The components of a primary-secondary flow system are shown in Figure 1. The following designs can be found in a primary-secondary flow system:

A **constant-primary variable-secondary flow system** has constant speed pumps that drive the flow through the primary loop and the pumps of a separate secondary loop distribute flow and cooling load to the facility. This configuration typically has a two-way valve that regulates the flow through primary and secondary loops.  

A **variable-primary variable-secondary flow system** has variable frequency drives (VFDs) installed on primary and secondary pump motors controlled by the differential pressure in the piping network.

## Chilled Water Loop Components

The main components associated with the CHW loop are primary pumps for primary-flow systems and primary and secondary pumps for primary-secondary flow systems.

### Primary CHW Pump and Motor

A primary CHW pump and motor circulate chilled water from the evaporator section of the chiller to the building in a primary-only system or to the secondary pump and motor through the piping network. A primary CHW pump and motor can operate at constant speed or variable speed based on the design of the chilled water plant.

### Secondary CHW Pump and Motor

A secondary CHW pump and motor circulates chilled water from the primary piping network to the building. A secondary CHW pump and motor are found in primary-secondary flow systems and can be at constant speed or can be equipped with variable frequency drives that are controlled by the differential pressure in the secondary piping network. 

### Primary CHW Piping Network

The primary CHW piping network is connected to the evaporator section of the chiller and extends through the building to deliver chilled water to that facility in a primary-flow system. In a primary-secondary system, the primary piping network is dedicated to circulating chilled water through the evaporator of the chiller.

### Secondary CHW Piping Network

The secondary CHW piping network is connected to the primary piping network to deliver chilled water to the facility.

<a href="/images/systems/chilled-water-loop/CHW-Loop-Diagram_11302022.jpg">
    <figure class="figure mb-3 mt-3">
        <img src="/images/systems/chilled-water-loop/CHW-Loop-Diagram_11302022.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Chilled water loop components.">
        <figcaption class="figure-caption text-left">Figure 1. Chilled water loop components.</figcaption>
    </figure>
</a>

## Key Values Needed to Assess Energy Consumption

The primary energy consumption in a CHW loop is the electricity used to run the pump motors. The heat loss across the piping network contributes to the overall energy consumption for the entire CHW loop system.

Table 1 provides a summary of system component measurements and values needed to quantify the annual energy consumption and operating characteristics of a CHW loop.

<table cellspacing="0" cellpadding="7">
    <caption>Table 1. Key values, components and measurements</caption>
    <thead>
        <tr>
            <td width="25.663716814159294%" bgcolor="#e7e6e6">
                <p><strong>System Quantification</strong></p>
            </td>
            <td width="26.01769911504425%" bgcolor="#e7e6e6">
                <p><strong>Values to be Quantified</strong></p>
            </td>
            <td width="22.371681415929203%" bgcolor="#e7e6e6">
                <p><strong>Energy Consuming Component</strong></p>
            </td>
            <td width="21.946902654867255%" bgcolor="#e7e6e6">
                <p><strong>Measurements</strong></p>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="25.663716814159294%">
                <p>Primary CHW loop pump electricity consumption (kWh) - constant speed system</p>
            </td>
            <td width="26.01769911504425%">
                <p>Average hourly primary CHW pump motor kWh; total operating time for the pumps</p>
            </td>
            <td width="22.371681415929203%">
                <p>Pump motor</p>
            </td>
            <td width="21.946902654867255%">
                <p>Average hourly electricity consumption by the pump motor; total operating hours</p>
            </td>
        </tr>
        <tr>
            <td width="25.663716814159294%">
                <p>Primary CHW loop pump electricity consumption (kWh) - variable speed system</p>
            </td>
            <td width="26.01769911504425%">
                <p>Average hourly primary CHW pump motor kWh; total operating time for the pumps</p>
            </td>
            <td width="22.371681415929203%">
                <p>Pump motor</p>
            </td>
            <td width="21.946902654867255%">
                <p>Average hourly electricity consumption by the pump motor; total operating hours; outdoor air temperature</p>
            </td>
        </tr>
        <tr>
            <td width="25.663716814159294%">
                <p>Secondary CHW loop pump electricity consumption (kWh) - variable speed system (if present)</p>
            </td>
            <td width="26.01769911504425%">
                <p>Average hourly primary CHW pump motor kWh; total operating time for the pumps</p>
            </td>
            <td width="22.371681415929203%">
                <p>Pump motor</p>
            </td>
            <td width="21.946902654867255%">
                <p>Average hourly electricity consumption by the pump motor; total operating hours; outdoor air temperature</p>
            </td>
        </tr>
        <tr>
            <td width="25.663716814159294%">
                <p>Flow (gpm)</p>
            </td>
            <td width="26.01769911504425%">
                <p>Average hourly chilled water flow (gpm) through a pump; average hourly loop pressure differential</p>
            </td>
            <td width="22.371681415929203%">
                <p><br></p>
            </td>
            <td width="21.946902654867255%">
                <p>Average hourly chilled water flow (gpm) through a pump; average hourly loop pressure differential</p>
            </td>
        </tr>
    </tbody>
</table>

### Chilled Water Loop System Measurement Point Locations

The measurement locations for a primary-flow and a primary-secondary flow are shown in Figure 2.

<a href="/images/systems/chilled-water-loop/WCC-HE-economizer-2ndary-pump-Final-06132023.jpg">
<figure class="figure mb-3 mt-3">
  <img src="/images/systems/chilled-water-loop/WCC-HE-economizer-2ndary-pump-Final-06132023.jpg" class="figure-img img-fluid rounded" alt="Figure 2. Chilled water loop system measurement points.">
  <figcaption class="figure-caption text-left">Figure 2. Chilled water loop system measurement points.</figcaption>
</figure>
</a>

## References

ASHRAE (2019). “ASHRAE Handbook: HVAC Applications,” Chapter 43. SUPERVISORY CONTROL STRATEGIES AND OPTIMIZATION. I-P Edition.

Taylor, S (2012). “Optimizing Design & Control of Chilled Water Plants Part 5: Optimized Control Sequences”. ASHRAE Journal, Vol. 54, No 6. American Society of Heating, Refrigerating and Air Conditioning Engineers; pp: 56-74.
