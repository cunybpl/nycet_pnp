---
title: Water-cooled Chiller
type: system
excerpt: Produces chilled water through the basic refrigeration cycle and consists of an evaporator, a compressor, a condenser, and an expansion valve. The system can be constant-speed or variable-speed.
thumbnail_image: "/images/systems/water-cooled-chiller/2024_0606_water cooled chiller system_thumbnail.jpg"
system_id: 2
associated_systems:
  - 
related_components:
  - 
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=chiller"
layout: guide
url: "/documents/systems/water-cooled-chiller"
---

## General Overview

The water-cooled chiller system produces chilled water through the basic refrigeration cycle and consists of an evaporator, a compressor, a condenser, and an expansion valve. The system can be constant-speed or variable-speed.

<h3>Constant-speed System</h3>

A constant-speed water-cooled chiller has a compressor motor that runs at a constant speed based on the total capacity of the chiller and adjusts the refrigerant flow with modulating vanes in the compressor when partial capacity of the chiller is needed.

<h3>Variable-speed System</h3>

A variable-speed water-cooled chiller has a variable frequency drive on the compressor motor and can reduce the speed of the compressor during partial load conditions. 

## Water-cooled Chiller Components

The four main components of every chiller are an evaporator, a compressor and motor, a condenser, and an expansion valve. The components are shown in Figure 1. 

<a href="/images/systems/water-cooled-chiller/2024_0425_WCC system_figure 1 updated.jpg">
<figure class="figure">
  <img src="/images/systems/water-cooled-chiller/2024_0425_WCC system_figure 1 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Water-cooled chiller components.">
  <figcaption class="figure-caption text-left">Figure 1. Water-cooled chiller components.</figcaption>
</figure>
</a>

### Evaporator

The evaporator transfers heat from the chilled water loop to the refrigerant through a heat exchanger.  

### Compressor

The compressor increases the temperature and pressure of the refrigerant between the evaporator and condenser sections of a chiller. A chiller may have one or more compressors. Water-cooled chillers typically have centrifugal compressors. Centrifugal compressors are dynamic compressors which increase refrigerant vapor pressure by converting the velocity pressure from the rotating impellers to static pressure in the discharged vapor. They can be driven with a constant-speed motor or a motor with a variable frequency drive (VFD). A centrifugal compressor with a constant-speed motor uses variable guide vanes to change the speed of the gas as it enters the compressor, which changes the centrifugal force and the lift. Lift in a chiller system refers to the difference between the condenser water temperature leaving the chiller and the chilled water temperature leaving the chiller. A centrifugal compressor with a VFD on the motor varies the speed of the impeller to control the lift.

### Condenser

The condenser rejects heat from the refrigerant to the condenser water loop through a heat exchanger.

### Expansion Valve

The expansion valve depressurizes the warm refrigerant between the condenser and evaporator to reduce the temperature of the refrigerant, then the cold refrigerant is delivered to the evaporator to pick up more heat from the chilled water loop. 

## Evaluation of Energy Consumption

The primary energy consumption in a water-cooled chiller is the electricity used by the compressor motor and its controls. Thermal energy rejected by the chiller to the outdoors can be measured to evaluate the overall performance of the chiller, which can be expressed as kilowatts of power consumption per ton of cooling provided (kW/ton). Table 1 provides a summary of system component measurements and values needed to quantify the annual energy consumption and operating characteristics of a water-cooled chiller. 

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
    </thead>
    <tbody>
        <tr>
            <td>
                <p>Constant-speed water-cooled chiller power draw</p>
            </td>
            <td>
                <p>Average hourly chiller kWh and annual operating time for the chiller</p>
            </td>
            <td>
                <p>Constant-speed compressor motor and controls</p>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/electrical-spot-measurement">Spot measurements of true RMS power</a> of the constant-speed compressor motor and controls</li>
                    <li><a href="/documents/measurement-technique/motor-runtime">Compressor motor runtime</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>Variable-speed water-cooled chiller power draw</p>
            </td>
            <td>
                <p>Hourly chiller kWh and annual operating time for the chiller</p>
            </td>
            <td>
                <p>Variable-speed compressor motor and its controls</p>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/electrical-spot-measurement">Spot measurements of true RMS power</a> of the constant-speed compressor motor and controls</li> 
                    <li><a href="/documents/measurement-technique/motor-runtime">Compressor motor runtime</a></li> 
                    <li><a href="/documents/measurement-technique/outside-air-temperature">Hourly measurement of outdoor air temperature</a></li>
            </td>
        </tr>
        <tr>
            <td rowspan="4" style="vertical-align:middle; border-bottom:none;">
                <p>Cooling load on building/Heat rejected to the outdoors</p>
            </td>
            <td>
                <p>Hourly chilled water temperature difference across evaporator (F)</p>
            </td>
            <td>
                <p>Evaporator</p>
            </td>
            <td>
                <p>Hourly <a href="/documents/measurement-technique/pipe-surface-water-temperature">temperature of chilled water</a> entering and leaving the chiller evaporator</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Hourly condenser water temperature difference across condenser (F)</p>
            </td>
            <td>
                <p>Condenser</p>
            </td>
            <td>
                <p>Hourly <a href="/documents/measurement-technique/pipe-surface-water-temperature">temperature of chilled water</a> entering and leaving the chiller condenser.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Hourly chilled water flow rate (GPM)</p>
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
                <p>Hourly condenser water flow rate (GPM)</p>
            </td>
            <td>
                <p>Condenser <a href="/documents/components/constant-speed-constant-volume-pump-motor">water pump</a></p>
            </td>
            <td>
                <p><a href="/documents/measurement-technique/water-flow-rate">Hourly measurement of condenser water flow rate</a></p>
            </td>
        </tr>
    </tbody>
</table>

### Measurement Locations

The measurement locations for a water-cooled chiller are schematically shown in Figure 2.

<a href="/images/systems/water-cooled-chiller/2024_0425_WCC system_figure 2 updated.jpg">
<figure class="figure">
  <img src="/images/systems/water-cooled-chiller/2024_0425_WCC system_figure 2 updated.jpg" class="figure-img img-fluid rounded" alt="Figure 2. Water-cooled chiller measurement points.">
  <figcaption class="figure-caption text-left">Figure 2. Water-cooled chiller measurement points.</figcaption>
</figure>
</a>

## Further Reading

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 38. COMPRESSORS. I-P Edition.

- Consulting Specifying Engineer (2021). “Understanding chilled water plant performance”. Consulting - Specifying Engineer | Understanding chilled water plant performance (csemag.com).