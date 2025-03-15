---
title: Variable-speed, Variable-volume Fan and Motor
type: component
component_id: 5
excerpt: This type of fan uses a variable frequency drive (VFD) to regulate its speed to conserve energy. 
thumbnail_image: "/images/components/thumbnail-images/2024_0624_vsvv fan component_thumbnail_RESIZED-01.jpg"
associated_systems:
  - Boiler
  - Condenser Water Loop
  - Variable-speed, Variable-volume Air Handling Unit
related_systems:
  - Boiler
  - Condenser Water Loop
  - Variable-speed, Variable-volume Air Handling Unit
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/fan-and-motor-kit-variable-speed/"
layout: guide
url: "/documents/components/variable-speed-variable-volume-fan-and-motor"
---

## General Overview

A variable speed fan and motor uses a power-driven rotating impeller to circulate air. Air flow rates fluctuate as required by the plant and system it serves. Outdoor air temperature (OAT) is the independent variable that drives the fan speed. The heating and cooling loads are affected by OAT. Axial and centrifugal fans with a variable speed drive are the most common type of variable speed fans used in buildings.  

Table 1 shows the plant and system configurations that may contain variable-speed fans and motors and the most common respective controlling variables. 

<div class="table-wrapper">
<table>
    <caption>Table 1. Plants and systems containing variable-speed fans.</caption>
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
            <th>
                Controlling Variable
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                Air-cooled Chilled Water Plant
            </td>
            <td>
                Air-cooled Chiller
            </td>
            <td>
                Condenser Fan
            </td>
            <td>
                Outdoor air temperature (F)
            </td>
        </tr>
        <tr>
            <td>
                Water-cooled Chilled Water Plant
            </td>
            <td>
                Cooling Tower
            </td>
            <td>
                Cooling Tower Fan
            </td>
            <td>
                Wet-bulb temperature (F)
            </td>
        </tr>
        <tr>
            <td>
                Air Handling Plant
            </td>
            <td>
                AHUs
            </td>
            <td>
                <ul>
                    <li>AHU Supply Fan</li> 
                    <li>AHU Return Fan</li> 
                </ul>
            </td>
            <td>
                Outdoor air temperature (F)
            </td>
        </tr>
        <tr>
            <td>
                <ul>
                    <li>Hot Water Heating</li> 
                    <li>Domestic Hot Water</li>
                    <li>Steam</li>
                </ul>
            </td>
            <td>
                Boiler
            </td>
            <td>
                Burner fan
            </td>
            <td>
                Outdoor air temperature (F)
            </td>
        </tr>
    </tbody>
</table> 
</div>

<!-- ## Evaluation of Energy Consumption
The primary energy source for a variable-speed fan is the electricity used to run the fan motor. Table 2 provides a summary of measurements needed to quantify the annual energy consumption and operating characteristics of the variable-speed fan and motor.

<div class="table-wrapper">
<table>
    <caption>Table 2. Key values and measurements to evaluate energy consumption.</caption>
    <thead>
        <tr>
            <th>
                Component Quantification
            </th>
            <th>
                Values to be Quantified
            </th>
            <th>
                Measurement
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                Electricity usage of VSVV fan motor (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)
            </td>
            <td>
                Power input to the motor at known speeds (e.g., 30%, 50%, 75%, 100%)
            </td>
            <td>
                <a href="/documents/measurement-technique/true-rms-power">True RMS power</a> of motor that drives the fan (kW)
            </td>
        </tr>
        <tr>
<td>

Controlling variable, non-weather dependent[^1]

</td>
            <td>
                Yearly operating schedule
            </td>
            <td>
                <a href="/documents/measurement-technique/motor-runtime">Fan motor runtime (h)</a>
            </td>
        </tr>
        <tr>
<td>

Controlling variable, weather dependent[^2]

</td>
            <td>
                Average hourly outdoor air temperature (OAT)
            </td>
            <td>
                <a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor air temperature (OAT)</a>
            </td>
        </tr>
    </tbody>
</table> 
</div> -->

## Measurement Strategy

The measurement strategy for a variable-speed fan and its motor involves measuring power draw of the fan motor at various known speeds, developing a mathematical relationship between the power and speed, and then collecting average hourly motor speed and associated controlling variable (OAT, Wet-bulb temperature). Measurement locations are generically represented in Figure 1. 

<!-- Temporary image until new one given by Orlando -->
<a href="/images/components/08.20.24_VSVV_FAN AND MOTOR-01.jpg">
<figure class="figure">
  <img src="/images/components/08.20.24_VSVV_FAN AND MOTOR-01.jpg" class="figure-img img-fluid rounded" alt="Figure 1. VSVV fan measurement locations.">
  <figcaption class="figure-caption text-left">Figure 1. VSVV fan measurement locations (click on image to enlarge).</figcaption>
</figure>
</a>

### What to Measure

Perform the following measurements to quantify the energy consumption and operating characteristics of a VSVV fan and motor:

{{< measurement_technique measurement_technique_id=1 >}}

{{< measurement_technique measurement_technique_id=3 >}}

{{< measurement_technique measurement_technique_id=4 >}}

{{< measurement_technique measurement_technique_id=6 >}}

{{< measurement_technique measurement_technique_id=8 >}}

### Measurement Equipment

Table 3 provides the equipment required to carry out the measurements of this component. 

<div class="table-wrapper">
<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 3. Measurement equipment.</caption>
    <thead>
        <tr>
            <th width="33.333333333333336%">
                Equipment
            </th>
            <th width="33.333333333333336%">
                Description
            </th>
            <th width="33.333333333333336%">
                Measurement (Units)
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="33.333333333333336%">
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/Energy_Logger_-_Elite_Pro-5.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/Energy_Logger_-_Elite_Pro-5.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                DENT ELITEproXC Portable Power Data Logger (EXCUNC)
                <br></br>
                DENT 16” RoCoil Flexible Rope Current Transformers (CT-R16-A4-U)
            </td>
            <td width="33.333333333333336%">   
                Provides a measurement of true RMS power from voltage and current inputs and records long-term power (kW) and energy (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) measurements. Requires ELOG19 software and a USB connection cable for programming and downloading data files.    
            </td>
            <td width="33.333333333333336%">
                <a href="/documents/measurement-technique/true-rms-power">True RMS Power (kW)</a>
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/MX2301-5.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/MX2301-5.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Onset HOBO Temperature/Relative Humidity Weatherproof Data Logger (MX2301)
            </td>
            <td width="33.333333333333336%">
                Records outdoor air temperature and relative humidity using internal sensors. Requires HOBOware software and a USB connection cable for programming and downloading data files.       
            </td>
            <td width="33.333333333333336%">
                <ul>
                    <li><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor Air Temperature (OAT)</a></li>
                    <li><a href="/documents/measurement-technique/relative-humidity">Relative Humidity (%)</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

## Energy Consumption Quantification

The primary energy source for a variable-speed fan is the electricity used to run the fan motor. The general methodology for quantifying the energy consumption of a variable-speed fan and motor is based on the true RMS power of the three-phase power supply, measured either at the motor’s main electrical panel or at the three-phase input to the VFD. To develop a temperature-dependent regression model, these values are regressed against a controlling variable, such as outdoor air temperature (OAT) or wet-bulb temperature. Depending on operational variability, daily or weekly models may be created to better characterize the component. This model is then used with climate normal year data to estimate the typical energy use of the variable-speed fan.

### How to Quantify

The following downloadable file(s) can be used to calculate energy consumption based on the measurements taken for the specific type of VSVV fan and motor:

#### For CSCV AHU Supply/Return, Chiller Condenser, and Boiler Burner Fans 

{{< downloadable_file title="Constant Speed Fan Energy Using Motor Runtime Data" >}}

{{< downloadable_file title="Constant One or Two Speed Fan Energy using kW Data" >}}

{{< downloadable_file title="Constant One or Two Speed Fan Energy Using Electrical Current Data" >}}

{{< downloadable_file title="Constant One or Two Speed Fan Energy Using Motor Speed Data" >}}

{{< admonition type="note" >}}
For more details about the methodology behind the calculators above see the [Fan Motor Energy Consumption calculation](/documents/calculation-methodology/fan-motors-energy-consumption).
{{< /admonition >}}

<br></br>
<i>Click the button below to go to the calculators for this component.</i>
<br></br>

{{< calculation_methodology calculation_methodology_id=2 >}} 
  
## Further Reading

- Boyd, BK.; McMordie Stoughton, KL.; Lewis, T. (2017). “Cooling Tower (Evaporative Cooling System) Measurement and Verification Protocol.” Golden, CO: National Renewable Energy Laboratory. https://www.nrel.gov/docs/fy18osti/70219.pdf.  

- Crowther, H.; Furlong, J. (2004). “Optimizing Chillers and Towers.” ASHRAE Journal, Vol. 46, No. 7; pp. 34-40. 

- Morrison, F. (2014). “Saving Energy with Cooling Towers.” ASHRAE Journal, Vol. 56, No. 2; pp. 34-40. 

- Tom, S. (July 2017). “CHILLED WATER SYSTEM OPTIMIZER.” Cat. No. 11-808-616-01. Farmington, Connecticut: Carrier Corporation.

## Footnotes

[^1]: This variable should be measured to quantify the electricity usage of the VSVV fan if the operation is weather dependent.
[^2]: This variable should be measured to quantify the electricity usage of the VSVV fan if the operation is not weather dependent