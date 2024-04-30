---
title: Air-cooled Chiller 
type: system
excerpt: An air-cooled chiller consists of an evaporator, a compressor, condenser fans, and an expansion valve.The system produces chilled water through the basic refrigeration cycle.
thumbnail_image: "/images/systems/air-cooled-chiller/2024_0410_air cooled chiller system_thumbnail.jpeg"
system_id: 5
associated_systems:
  - Liquid-to-liquid Heat Exchanger
related_components:
  - Liquid-to-liquid Heat Exchanger
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=chilled-water-loop"
layout: guide
url: "/documents/systems/air-cooled-chiller"
---

## General Overview

An air-cooled chiller consists of an evaporator, a compressor, condenser fans, and an expansion valve.The system produces chilled water through the basic refrigeration cycle.

## Air-cooled Chiller Components

Each of the various components associated with an air-cooled chiller are listed below (see Figure 1). Air-cooled chillers may be customized with a variety of high-performance components, such as variable frequency drives (VFD) on condenser fans and compressors, high efficiency compressor designs, thermostatic or electronic expansion valves, condenser coils with enhanced heat transfer characteristics, optimized condenser fan design and system airflow characteristics, and digital direct control systems that optimize the energy efficiency of the chiller.

<a href="/images/systems/air-cooled-chiller/air-cooled chiller figure 1.png">
<figure class="figure">
  <img src="/images/systems/air-cooled-chiller/air-cooled chiller figure 1.png" class="figure-img img-fluid rounded" alt="Figure 1. Air-cooled chiller.">
  <figcaption class="figure-caption text-left">Figure 1. Air-cooled chiller.</figcaption>
</figure>
</a>

### Evaporator

The evaporator transfers heat from the chilled water to the refrigerant.

### Compressor

The compressor increases the temperature and pressure of the refrigerant; a chiller may have one or more compressors. Air-cooled chillers typically have screw, scroll and reciprocating compressors.  

Reciprocating compressors are one of the most widely used types of compressors in this type of chillers. It comprises a cylinder and a piston that performs reciprocating motion to enable the compression of the refrigerant. Screw compressors can produce high pressure for small amounts of refrigerant vapor, compressing the refrigerant between a pair of meshing screws. Scroll compressors have two interleaved scrolls that simultaneously rotate to compress the refrigerant vapor in a chamber.

### Condenser Fan

Condenser fans of an air-cooled chiller cool down the refrigerant by forcing airflow over the condenser coils using outdoor air.

### Expansion Valve

The expansion valve reduces the pressure in the refrigerant, allowing it to collect heat in the evaporator.

## Key Values Needed to Assess Energy Consumption

The primary energy consumption of an air-cooled chiller is the electricity used for the compressor motor and condenser fan motors. The thermal energy rejected by the chiller to the outdoors can also be measured to evaluate the overall performance of the chiller. These to values can be expressed as kilowatts of power consumed per ton of cooling provided (kW/ton). Table 1  provides a summary of the components measurements and values needed to quantify the annual energy consumption and operating characteristics of an air-cooled chiller.

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
                <p>Air-cooled chiller electricty usage (kWh)</p>
            </td>
            <td>
                <ul>
                    <li>Average hourly chiller kWh</li> 
                    <li>Annual operating time for the chiller</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Condenser fan motor</li> 
                    <li>Compressor motor and its controls</p>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/electrical-spot-measurement">Spot measurement of true RMS power</a></li>
                    <li>Annual operating hours</li> 
                    <li><a href="/documents/measurement-technique/outside-air-temperature">Hourly measurement of outdoor air temperature</a></p>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>Cooling load on building/Heat rejected to the outdoors</p>
            </td>
            <td>
                <p>Average hourly chilled water flow rate (GPM)</p>
            </td>
            <td>
                <p>Chilled <a href="/documents/components/constant-speed-constant-volume-pump-motor">water pump</a></p>
            </td>
            <td>
                <p><a href="/documents/measurement-technique/water-flow-rate">Hourly measurement of chilled water flow rate</a></p>
            </td>
        </tr>
        <tr>
            <td>
                <p></p>
            </td>
            <td>
                <p>Average hourly chilled water temperature difference across evaporator (F)</p>
            </td>
            <td>
                <p>Evaporator</p>
            </td>
            <td>
                <p>Hourly <a href="/documents/measurement-technique/pipe-surface-water-temperature">temperature of chilled water</a> entering and leaving the chiller evaporator</p>
            </td>
        </tr>
    </tbody>
</table>  

### Measurement Locations

The measurement locations for an air-cooled chiller and chilled water pumps are shown in Figure 2. 

<a href="/images/systems/air-cooled-chiller/air-cooled chiller figure 2.png">
<figure class="figure">
  <img src="/images/systems/air-cooled-chiller/air-cooled chiller figure 2.png" class="figure-img img-fluid rounded" alt="Figure 2. Air cooled chiller measurement point locations">
  <figcaption class="figure-caption text-left">Figure 2. Air cooled chilled measurement point locations</figcaption>
</figure>
</a>

## References
<!-- Must have emty line after the opeing div tag. If we use a numbered list to relate to in text citations, remove the div  -->
<div class="references">

ASHRAE (2020). 2020 ASHRAE Handbook: HVAC Systems and Equipment. Atlanta, GA: ASHRAE.

Gordon, J.M.; Ng, K.C. (2000). Cool thermodynamics: The engineering and physics of predictive, diagnostic and optimization methods for cooling systems. Cambridge International Science Publishing; pp. 159-177.

Wei, J.; Reddy, T.A. (2003). “Reevaluation of the Gordon-Ng Performance Models for Water-Cooled Chillers.” ASHRAE Transactions, Vol. 109, Part 2. Atlanta, GA: American Society of Heating, Refrigerating and Air Conditioning Engineers.

</div>