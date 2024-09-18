---
title: Hot Water Loop
type: system
excerpt: A hot water heating (HWH) loop system uses hot water produced by a hydronic boiler and circulates it to terminal units in the facility and then back to the boiler using primary-only or primary-secondary pumps and a piping network.
thumbnail_image: "/images/systems/hot-water-loop/2024_0606_hot water loop system_thumbnail_RESIZED-01.jpg"
system_id: 15
associated_systems:
  - Constant-speed, Constant-volume Pump and Motor
  - Variable-speed, Variable-volume Pump and Motor
related_components:
  - Constant-speed, Constant-volume Pump and Motor
  - Variable-speed, Variable-volume Pump and Motor
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/secondary-chilled-water-pumps-measurement-kit/"
layout: guide
url: "/documents/systems/hot-water-loop"
---

## General Overview

A hot water heating (HWH) loop system uses hot water produced by a hydronic boiler and circulates it to terminal units (e.g., heating coils in air handling units, radiant equipment) in the facility and then back to the boiler using primary-only or primary-secondary pumps and a piping network.  

<h3>Primary-flow System</h3>

A primary-flow HWH loop system consists of pumps that circulate hot water from the designated zone to the boilers. The components are shown in Figure 1.  Primary pumps are usually headered to allow for the minimum flow through the boiler and there are usually multiple pumps to allow for staging and redundancy; however, a boiler-dedicated pumping design can also be found in some facilities. Primary-flow systems can be either constant-primary-flow or variable-primary-flow. 

A <strong>constant-primary-flow system</strong> usually has a staged heating system and constant speed HWH loop pumps.   

A <strong>variable-primary-flow system</strong> has primary HWH loop pumps with variable speed drives that regulate the flow of the system based on the heating load of the building. The heating system may be staged or constant. 

<h3>Primary-secondary Flow System</h3>

A system with primary-secondary pumps will have the primary pumps circulate the hot water to a low loss header, while the secondary pumps circulate the hot water to the zones in the facility. The components of a primary-secondary flow system are shown in Figure 2. The following arrangements can be found in a primary-secondary flow system: 

A <strong>constant-primary variable-secondary flow system</strong> has constant speed pumps that drive the flow through the primary loop and variable-speed pumps of a separate secondary loop that distribute the heating load to the terminal units. The secondary pumps are controlled by the heat load demand in the terminal units. 

A <strong>variable-primary variable-secondary flow system</strong> has variable-speed pumps on both the primary and secondary loops. They are controlled by the firing rate in the boiler and the heat load demand in the terminal units. 

## Hot Water Heating Loop Components

The main components associated with the HWH loop system are primary pumps for primary-flow systems, primary and secondary pumps for primary-secondary flow systems, piping network and terminal units.

<a href="/images/systems/hot-water-loop/2024_0503_HW Loop system_figure 1 updated.jpg">
<figure class="figure">
  <img src="/images/systems/hot-water-loop/2024_0503_HW Loop system_figure 1 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Hot Water Loop Components.">
  <figcaption class="figure-caption text-left">Figure 1. Hot Water Loop Components.</figcaption>
</figure>
</a>

### Primary HWH Loop Pump and Motor

A primary HWH loop pump and motor circulate water from the boiler to the building in a primary-only system or to the secondary pump and motor in a primary-secondary system through the piping network. A primary HWH loop pump and motor can operate at constant speed or variable speed based on the design of the hot water plant.  

### Secondary HWH Loop Pump and Motor

A secondary HWH loop pump and motor circulates water from the primary piping network to the building. A secondary HWH loop pump and motor are found in primary-secondary flow systems and can be at constant-speed or can be equipped with variable frequency drives that are controlled by the differential pressure in the secondary piping network.  

### Primary HWH Loop Piping Network

The primary HWH loop piping network is connected to the boiler and extends through the building to deliver hot water to that facility in a primary-flow system. In a primary-secondary system, the primary piping network is dedicated to circulating water through the boiler. The piping should be covered with insulation that minimizes heat losses with the environment. 

### Secondary HWH Loop Piping Network

The secondary HWH piping network is connected to the primary piping network to deliver hot water to the facility. The piping should be covered with insulation that minimizes heat losses with the environment. 

### Terminal Units

Terminal units provide heating to an end-user, where the heat source can be either steam or hot water. Typical terminal units for heating are fan-coil units, unit heaters, radiators, and convectors. The amount of hot water supplied to the terminal units is generally adjusted with a modulating valve controlled by a temperature sensor, which is typically not part of the HWH loop.  

#### Fan-coil Units

A fan coil unit is a smaller, factory-assembled device that is used to circulate and condition air either for cooling or heating. 

#### Unit Heaters

A unit heater is a standalone device containing a fan which blows over a small heat exchanger to provide heat to a space. 

#### Radiators

Radiators are a common terminal unit to distribute heat to space. By routing hot water through the radiator, the heat is transferred to the piping where it relies on radiation as well as free convection to warm a space. 

#### Convectors

Convectors are similar to radiators in how energy is received but rely almost exclusively on convection to distribute heat to a space. This leads to a cooler temperature to the touch, as well as a smaller terminal unit. 

## Evaluation of Energy Consumption

The primary energy consumption in a HWH loop is the electricity used to run the pump motors. The heat loss across the piping network contributes to the overall energy consumption for the entire HWH plant, in particular the boiler system. Table 1 provides a summary of system component measurements and values needed to quantify the annual energy consumption and operating characteristics of a HWH loop system. 

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
                <p><strong>Component to be Measured</strong></p>
            </td>
            <td>
                <p><strong>Measurements</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>Primary HWH loop pump electricity usage (kWh) - constant-speed system</p>
            </td>
            <td>
                <ul>
                    <li>Average hourly primary HWH pump motors kWh</li> 
                    <li>Total operating time of the pump motors</li>
                </ul>
            </td>
            <td>
                <p><a href="/documents/components/constant-speed-constant-volume-pump-motor">Constant-speed pump motor</a></p>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/electrical-spot-measurement">Spot measurements of true RMS power</a></li> 
                    <li><a href="/documents/measurement-technique/motor-runtime">hourly measurement of motor runtime</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>Primary HWH loop pump electricity usage (kWh) - variable-speed system</p>
            </td>
            <td>
                <ul>
                    <li>Average hourly primary HWH pump motor kWh</li> 
                    <li>Total operating time for the pumps</li> 
                    <li>Outdoor air temperature as a proxy for heating load</li>
                </ul>
            </td>
            <td>
                <p><a href="/documents/components/variable-speed-variable-volume-pump-and-motor">Variable-speed pump motor</a></p>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/true-rms-power">Hourly measurement of true RMS power</a></li> 
                    <li><a href="/documents/measurement-technique/outside-air-temperature">hourly measurement of outdoor air temperature</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>Secondary HWH loop pump electricity usage (kWh) - variable-speed system (if present)</p>
            </td>
            <td>
                <ul>
                    <li>Average hourly primary HWH pump motor kWh</li> 
                    <li>Total operating time for the pumps</li> 
                    <li>Outdoor air temperature as a proxy for heating load</li>
                </ul>
            </td>
            <td>
                <p><a href="/documents/components/variable-speed-variable-volume-pump-and-motor">Variable-speed pump motor</a></p>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/true-rms-power">Hourly measurement of true RMS power</a></li> 
                    <li><a href="/documents/measurement-technique/outside-air-temperature">hourly measurement of outdoor air temperature</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>Primary HWH loop water flow – constant speed system</p>
            </td>
            <td>
                <p>Average hourly water flow (GPM) through a pump</p>
            </td>
            <td>
                <p></p>
            </td>
            <td>
                <p><a href="/documents/measurement-technique/water-flow-rate">Hourly measurement of water flow rate</a></p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Terminal units – heating load delivered</p>
            </td>
            <td>
                <p>Average hourly Btu rejected from the hot water loop</p>
            </td>
            <td>
                <p></p>
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

### Measurement Locations

The measurement locations for a primary-flow and primary-secondary flow hot water loop system are shown in Figure 3.

<a href="/images/systems/hot-water-loop/2024_0507_HW Loop system_figure 2 updated.jpg">
<figure class="figure">
  <img src="/images/systems/hot-water-loop/2024_0507_HW Loop system_figure 2 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 2. Measurement points of primary and secondary pumps and associated piping that serve the HWH loop.">
  <figcaption class="figure-caption text-left">Figure 2. Measurement points of primary and secondary pumps and associated piping that serve the HWH loop.</figcaption>
</figure>
</a>

## Further Reading

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 13. Hydronic Heating and Cooling. I-P Edition.
 
- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 44. Centrifugal Pumps. I-P Edition.