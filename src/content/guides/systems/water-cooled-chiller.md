---
title: Water-cooled Chiller
type: system
system_id: 2
excerpt: Produces chilled liquid and works in conjunction with an AHU to provide cooling. The condenser side rejects heat to the outdoor air using cooling towers.
thumbnail_image: "/images/systems/water-cooled-chiller/2024_0606_water cooled chiller system_thumbnail_RESIZED-01.jpg"
associated_components:
  - Compressor and Motor
related_components:
  - Compressor and Motor
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=chiller"
layout: guide
url: "/documents/systems/water-cooled-chiller"
---

## General Overview

The water-cooled chiller system produces chilled water through the basic refrigeration cycle and consists of an evaporator, a compressor, a condenser, and an expansion valve. The system can be constant-speed or variable-speed.

### Constant-speed System

A <strong>constant-speed water-cooled chiller</strong> has a compressor motor that runs at a constant speed based on the total capacity of the chiller and adjusts the refrigerant flow with modulating vanes in the compressor when partial capacity of the chiller is needed.

### Variable-speed System

A <strong>variable-speed water-cooled chiller</strong> has a variable frequency drive on the compressor motor and can reduce the speed of the compressor during partial load conditions. 

## Components

The four main components of every chiller are an evaporator, a compressor and motor, a condenser, and an expansion valve. The components are shown in Figure 1. 

<a href="/images/systems/water-cooled-chiller/2024_0425_WCC system_figure 1 updated.jpg">
<figure class="figure">
  <img src="/images/systems/water-cooled-chiller/2024_0425_WCC system_figure 1 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Water-cooled chiller components.">
  <figcaption class="figure-caption text-left">Figure 1. Water-cooled chiller components.</figcaption>
</figure>
</a>

### Evaporator

The evaporator transfers heat from the chilled water loop to the refrigerant through a [heat exchanger](/documents/components/liquid-to-liquid-heat-exchanger). 

### Compressor

The compressor increases the temperature and pressure of the refrigerant between the evaporator and condenser sections of a chiller. A chiller may have one or more compressors.

Water-cooled chillers typically have centrifugal compressors. Centrifugal compressors are dynamic compressors, which increase refrigerant vapor pressure by converting the velocity pressure from the rotating impellers to static pressure in the discharged vapor. They can be driven with a constant-speed motor or a motor with a variable frequency drive (VFD).

A centrifugal [compressor with a constant-speed motor](/documents/components/compressor-and-motor) uses variable guide vanes to change the speed of the gas as it enters the compressor, which changes the centrifugal force and the lift. "Lift" in a chiller system refers to the difference between the condenser water temperature leaving the chiller and the chilled water temperature leaving the chiller. 

A centrifugal compressor with a VFD on the motor varies the speed of the impeller to control the lift.

### Condenser

The condenser rejects heat from the refrigerant to the [condenser water loop](/documents/systems/condenser-water-loop) through a [heat exchanger](/documents/components/liquid-to-liquid-heat-exchanger).

### Expansion Valve

The expansion valve depressurizes the warm refrigerant between the condenser and evaporator to reduce the temperature of the refrigerant. Then, the cold refrigerant is delivered to the evaporator to pick up more heat from the [chilled water loop](/documents/systems/chilled-water-loop). 

## Evaluation of Energy Consumption

The primary energy consumption in a water-cooled chiller is the electricity used by the [compressor motor](/documents/components/compressor-and-motor) and its controls. Thermal energy rejected by the chiller to the outdoors can be measured to evaluate the overall performance of the chiller, which can be expressed as kilowatts of power consumption per ton of cooling provided (kW/ton). Table 1 provides a summary of system component measurements and values needed to quantify the annual energy consumption and operating characteristics of a water-cooled chiller. 

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
                Component to be Measured
            </th>
            <th>
                Measurements
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Water cooled chiller electricity usage (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) - constant-speed system
            </td>
            <td>
                <ul>
                    <li>Average hourly chiller <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">(kWh)</abbr></a></li>
                    <li>Annual operating time for the chiller</li>
                </ul>
            </td>
            <td>
                Constant-speed compressor motor and controls
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/electrical-spot-measurement">Spot measurements of true RMS power</a> of the compressor motor and controls</li>
                    <li><a href="/documents/measurement-technique/motor-runtime">Compressor motor runtime</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                Water cooled chiller electricity usage (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) - variable-speed system
            </td>
            <td>
                <ul>
                    <li>Average hourly chiller <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">(kWh)</abbr></a></li>
                    <li>Annual operating time for the chiller</li>
                </ul>
            </td>
            <td>
                Variable-speed compressor motor and its controls
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/true-rms-power">Spot measurements of true RMS power</a> of the compressor motor and controls</li> 
                    <li><a href="/documents/measurement-technique/motor-runtime">Compressor motor runtime</a></li> 
                    <li><a href="/documents/measurement-technique/outside-air-temperature">Hourly measurement of outdoor air temperature</a></li>
            </td>
        </tr>
        <tr>
            <td style="vertical-align:middle;">
                Cooling load on building
            </td>
            <td>
                <ul>
                    <li>Hourly chilled water temperature difference across evaporator (F)</li>
                    <li>Hourly chilled water flow rate (GPM)</li>
                </ul>
            </td>
            <td>
                Evaporator
            </td>
            <td>
                <ul>
                    <li>Hourly <a href="/documents/measurement-technique/pipe-surface-water-temperature">temperature of chilled water</a> entering and leaving the chiller evaporator</li>
                    <li><a href="/documents/measurement-technique/water-flow-rate">Hourly measurement of chilled water flow rate</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td rowspan="2" style="vertical-align:middle;">
                Heat Rejected to the Outdoors
            </td>
            <td>
                <ul>
                    <li>Hourly condenser water temperature difference across condenser (F)</li>
                    <li>Hourly condenser water flow rate (GPM)</li>
                </ul>
            </td>
            <td>
                Condenser
            </td>
            <td>
                <ul>
                    <li>Hourly <a href="/documents/measurement-technique/pipe-surface-water-temperature">temperature of chilled water</a> entering and leaving the chiller condenser</li>
                    <li><a href="/documents/measurement-technique/water-flow-rate">Hourly measurement of condenser water flow rate</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Measurement Locations

The measurement locations for a water-cooled chiller are schematically shown in Figure 2.

<a href="/images/systems/water-cooled-chiller/2024_0425_WCC system_figure 2 updated.jpg">
<figure class="figure">
  <img src="/images/systems/water-cooled-chiller/2024_0425_WCC system_figure 2 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 2. Water-cooled chiller measurement locations.">
  <figcaption class="figure-caption text-left">Figure 2. Water-cooled chiller measurement locations.</figcaption>
</figure>
</a>

## Further Reading

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 38. COMPRESSORS. I-P Edition.

- Consulting Specifying Engineer (2021). “Understanding chilled water plant performance”. Consulting - Specifying Engineer | Understanding chilled water plant performance (csemag.com).