---
title: Steam Distribution
type: system
system_id: 13
excerpt: Responsible for distributing the steam produced by a steam boiler system as well as handling any condensate generated in the process.
thumbnail_image: "/images/systems/steam-distribution/2024_0612_steam distribution system_thumbnail_RESIZED-01.jpg"
associated_systems:
  - Constant-speed, Constant-volume Pump and Motor
  - Variable-speed, Variable-volume Pump and Motor
related_components:
  - Constant-speed, Constant-volume Pump and Motor
  - Variable-speed, Variable-volume Pump and Motor
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=condenser-water-loop"
layout: guide
url: "/documents/systems/steam-distribution"
---

## General Overview

A steam distribution system is responsible for distributing the steam produced by a steam boiler system as well as handling any condensate generated in the process. Common configurations for steam distribution systems include one-pipe and two-pipe systems. The main focus will be on two-pipe systems, as they are common in larger facilities. In a two-pipe system, the condensate is handled by a dedicated return line and is kept separate from any steam. The condensate return line can be treated as its own system and is discussed in a separate protocol and procedure document.

## Components

<a href="/images/systems/steam-distribution/2024_0507_STEAM DISTRIBUTION system_figure 1 updated.jpg">
<figure class="figure">
  <img src="/images/systems/steam-distribution/2024_0507_STEAM DISTRIBUTION system_figure 1 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Steam distribution system diagram.">
  <figcaption class="figure-caption text-left">Figure 1. Steam distribution system diagram (click on image to enlarge).</figcaption>
</figure>
</a>

### Steam Heater and Piping Network

A steam heater  acts as a heat reservoir for the distribution loops throughout the building. This reservoir allows for the boilers to run at a constant rate while the heating load of the building fluctuates. 

The steam piping network is equipped with valves, fittings, and connections to properly maintain the pressure differential in the system. It is covered with piping insulation that minimizes heat losses with the environment.  

### Terminal Units 

Terminal units provide heating to an end-user, where the heat source can be either steam or hot water. Typical terminal units for heating are fan-coil units, unit heaters, radiators, and convectors. The amount of steam supplied to the terminal units is generally adjusted with a modulating valve controlled by a temperature sensor, which is typically not part of the steam distribution system. 
 
#### Fan-coil units 

A fan coil unit is a smaller, factory-assembled device that is used to circulate and condition air either for cooling or heating. 

#### Unit heaters 

A unit heater is a standalone device containing a fan which blows over a small heat exchanger containing steam, or some other heating source, to provide heat to a space. 

#### Radiators 

Radiators are a common terminal unit to distribute heat to a space. By routing steam through the radiator, the heat is transferred to the piping where it relies on radiation as well as free convection to warm a space. 

#### Convectors 

Convectors are similar to radiators in how energy is received but rely almost exclusively on convection to distribute heat to a space. This leads to a cooler temperature to the touch, as well as a smaller terminal unit. 

### Heat Exchanger 

Steam distribution systems sometimes have steam-to-water heat exchangers that can deliver heat to supply heating hot water loop or domestic hot water systems. Converters and storage tanks with heating can also be classified as steam to water heat exchangers.  
 
### Steam Traps  

Steam traps separate the condensate water from the steam distribution system ensuring proper distribution and system efficiency. Steam traps can be mechanical or thermostatic. 

Mechanical traps rely on the density difference between condensate and steam. Common mechanical traps include the float traps and bucket traps, which both rely on the buoyancy effect. 

Thermostatic traps rely on the temperature difference between the condensate and steam. Common thermostatic traps include bellows or bimetallic elements which open and close a discharge port in response to temperature. 
 
### Vacuum Pump 

If present, a vacuum pump is located after the steam traps and lowers the pressure in the piping network, which increases the rate at which the piping network and terminal units fill with steam, and may allow the boiler to operate at a lower temperature in that putting the system under a vacuum reduces the boiling point of water.
<a class="continue" href="/documents/components/constant-speed-constant-volume-pump-motor"><span>Learn More</span><i class="fa fa-arrow-right"></i></a>

## Evaluation of Energy Consumption

The steam distribution system distributes heat energy, with losses to the non-conditioned environment along the way, but does not inherently consume energy. The exceptions are systems with a vacuum pump, which consumes electricity. Generally the energy related to the steam distribution system is not quantified; instead the energy consumption of the overall low pressure steam plant is quantified. For more information see <a href="/documents/plants/steam-plant">Steam Plant</a>.

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
                Vacuum pump electricity usage (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) - if present
            </td>
            <td>
                <ul>
                    <li>Average hourly pump motor (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)</li>
                    <li>Total operating time for the pumps</li>
                </ul>
            </td>
            <td>
                <a href="/documents/components/constant-speed-constant-volume-pump-motor">Pump Motor</a>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/true-rms-power">Spot measurements of true RMS power</a></li>
                    <li><a href="/documents/measurement-technique/motor-runtime">Hours of operation of the pump motor</a></li> 
                    <li><a href="/documents/measurement-technique/outside-air-temperature">Hourly measurement of outdoor air temperature</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div> 

## Further Reading

- ASHRAE (2014). “ASHRAE Guideline 14-2014 – Measurement of Energy, Demand, and Water Savings.” Annex A.

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 11. STEAM SYSTEMS. I-P Edition.