---
title: Steam Distribution
type: system
excerpt: A steam distribution system is responsible for distributing the steam produced by a steam boiler system as well as handling any condensate generated in the process.
thumbnail_image: "images/plants/water-cooled-chilled-water-plant/chilled-water-plant-overview.jpeg"
system_id: 13
associated_systems:
  - Boiler
  - Steam Condensate Recovery
related_components:
  - Variable-speed, Variable-volume Pump and Motor
  - Constant-speed, Constant-volume Pump and Motor
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=condenser-water-loop"
layout: guide
url: "/documents/systems/steam-distribution"
---

## General Overview

A steam distribution system is responsible for distributing the steam produced by a steam boiler system as well as handling any condensate generated in the process. Common configurations for steam distribution systems include one-pipe and two-pipe systems. The main focus will be on two-pipe systems, as they are common in larger facilities. In a two-pipe system, the condensate is handled by a dedicated return line and is kept separate from any steam. The condensate return line can be treated as its own system and is discussed in a separate protocol and procedure document.

## Steam Distribution Components

<a href="/images/systems/steam-distribution/steam-distribution figure 1.png">
<figure class="figure mb-3 mt-3">
  <img src="/images/systems/steam-distribution/steam-distribution figure 1.png" class="figure-img img-fluid rounded" alt="Figure 1. Steam distribution system diagram">
  <figcaption class="figure-caption text-left">Figure 1. Steam distribution system diagram</figcaption>
</figure>
</a>

### Steam Header and Piping Network

A steam header acts as a heat reservoir for the distribution loops throughout the building. This reservoir allows for the boilers to run at a constant rate while the heating load of the building fluctuates. 

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

## Key Values Needed to Assess System Performance

The steam distribution system distributes heat energy, with losses to the non-conditioned environment along the way, but does not inherently consume energy. The exceptions are systems with a vacuum pump, which consumes electricity. Generally the energy related to the steam distribution system is not quantified; instead the energy consumption of the overall low pressure steam plant is quantified. For more information see <a href="/documents/plants/steam-plant"> this link </a>.

<table>
    <caption>Table 1. Key values, components and measurements</caption>
    <thead>
        <tr>
            <td bgcolor="#e7e6e6">
                <p><strong>System Quantification</strong></p>
            </td>
            <td bgcolor="#e7e6e6">
                <p><strong>Values to be Quantified</strong></p>
            </td>
            <td bgcolor="#e7e6e6">
                <p><strong>Energy Consuming Component</strong></p>
            </td>
            <td bgcolor="#e7e6e6">
                <p><strong>Measurements</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>Vacuum pump electricity consumption (kWh) - if present</p>
            </td>
            <td>
                <p>Average hourly pump motor (kWh); total operating time for the pumps</p>
                <p><br></p>
            </td>
            <td>
                <p>Pump Motor</p>
            </td>
            <td>
                <p>Average hourlt electricity consumption by the pump motor; total operating hours; outdoor air temperature</p>
            </td>
        </tr>
    </tbody>
</table>  

## References

ASHRAE (2014). “ASHRAE Guideline 14-2014 – Measurement of Energy, Demand, and Water Savings.” Annex A.

ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 11. STEAM SYSTEMS. I-P Edition.