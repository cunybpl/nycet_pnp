---
title: Boiler
type: system
system_id: 11
excerpt: Produces hot water or steam with the use of fuel oil or natural gas.
thumbnail_image: "/images/systems/boiler/2024_0410_boiler system_thumbnail.jpeg"
associated_components:
  - Constant-speed, Constant-volume Fan and Motor
  - Variable-speed, Variable-volume Fan and Motor
related_components:
  - Constant-speed, Constant-volume Fan and Motor
  - Variable-speed, Variable-volume Fan and Motor
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=condenser-water-loop"
layout: guide
url: "/documents/systems/boiler"
---

## General Overview

A boiler system provides hot water or steam to distribute the heating load within a facility. Heat is transferred from the combustion chamber to the water until it reaches the set point temperature for hot water, the boiling point for steam, or beyond the boiling point for superheated steam. 

## Components

The main components of a boiler system are burner, combustion chamber, heat exchanger, and draft fan. These components are shown in Figure 1. 

<a href="/images/systems/boiler/2024_0423_BOILER system_figure 1 updated.jpg">
<figure class="figure">
  <img src="/images/systems/boiler/2024_0423_BOILER system_figure 1 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Boiler System.">
  <figcaption class="figure-caption text-left">Figure 1. Boiler System.</figcaption>
</figure>
</a>

### Combustion Chamber

The combustion chamber is where the fuel is burned. It houses the burners and is designed to support extremely high temperatures.  

### Heat Exchanger

The heat exchanger in boiler systems facilitates heat transfer from the fuel combustion chamber to the water without direct contact. Non-condensing boilers typically have a single heat exchanger chamber, while condensing boilers include a secondary heat exchanger to increase the heat transfer area and improve efficiency. To operate in condensing mode, the return water temperature must be at or below 140°F.
<a class="continue" href="/documents/components/liquid-to-liquid-heat-exchanger"><span>Learn More</span><i class="fa fa-arrow-right"></i></a>  

### Burner

The primary function of the burner is to deliver fuel and air, mix them in the correct proportions, provide an ignition source, and ensure efficient combustion. Burners can be designed for a single fuel or configured to operate on multiple fuels. Burner controls play a crucial role in the overall efficiency of the boiler system. Depending on the system, the firing rate may be constant, variable in discrete stages, or fully variable.  

### Draft Fan (Burner Fan Motor)

Mechanical draft boilers usually have a draft fan that creates the required pressure difference. It is driven by a motor to provide oxygen to the combustion chamber for adequate combustion.   
<a class="continue" href="/documents/components/constant-speed-constant-volume-fan-and-motor"><span>Learn More</span><i class="fa fa-arrow-right"></i></a>

## Evaluation of Energy Consumption

The boiler is one of the largest energy-consuming systems in a heating plant. Its key energy-consuming components include the burner and, if present, the draft fan. The primary energy source is typically liquid fuel or natural gas, though electricity may also be used to power the draft fan.

The primary energy consumption of a boiler system is the fuel that is used to drive the combustion reaction to heat the water. Table 1 provides a summary of measurements needed to quantify the annual consumption and operating characteristics of a boiler.  

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
                Boiler energy consumption
            </td>
            <td>
                Average hourly fuel consumption (Btu/h)
            </td>
            <td>
                Burner
            </td>
            <td>
                <ul>
                    <li>Hourly fuel consumption by the boiler</li> 
                    <li>Hours of operation of the motors</li> 
                    <li><a href="/documents/measurement-technique/outside-air-temperature">Hourly measurement of outside air temperature</a></li>
                <ul>
            </td>
        </tr>
        <tr>
            <td>
                Burner fan electricity usage (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)
            </td>
            <td>
                <ul>
                    <li>Average hourly burner fan motor <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a></li> 
                    <li>Pump Motor Runtime</li>
                </ul>
            </td>
            <td>
                <a href="/documents/components/constant-speed-constant-volume-fan-and-motor">Burner fan motor</a>
            </td>
            <td>
                <ul>
                <li><a href="/documents/measurement-technique/electrical-spot-measurement">Spot measurements of true RMS power</a> of the burner fan motor</li>
                <li>Hours of operation of the motors</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>  

### Measurement Locations

The measurement locations for a boiler system are shown in Figure 2.

<a href="/images/systems/boiler/2024_0507_BOILER system_figure 3 updated.jpg">
<figure class="figure">
  <img src="/images/systems/boiler/2024_0507_BOILER system_figure 3 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 2. Boiler measurement locations (Image courtesy of CUNY BPL).">
  <figcaption class="figure-caption text-left">Figure 2. Boiler measurement locations.</figcaption>
</figure>
</a>

## Further Reading

- ASHRAE (2014). “ASHRAE Guideline 14-2014 – Measurement of Energy, Demand, and Water Savings.” Annex A.

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 11. STEAM SYSTEMS. I-P Edition.

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 21. FANS. I-P Edition.