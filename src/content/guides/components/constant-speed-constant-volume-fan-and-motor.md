---
title: Constant-speed, Constant-volume Fan and Motor
type: component
component_id: 4
excerpt: This type of fan circulates air at a single speed and can be either axial or centrifugal.
thumbnail_image: "/images/components/thumbnail-images/2024_0612_cscv fan component_thumbnail_RESIZED-01.jpg"
associated_systems:
  - Boiler
  - Condenser Water Loop
  - Constant-speed, Constant-volume Air Handling Unit
related_systems:
  - Boiler
  - Condenser Water Loop
  - Constant-speed, Constant-volume Air Handling Unit
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/fan-and-motor-kit-constant-speed/"
layout: guide
url: "/documents/components/constant-speed-constant-volume-fan-and-motor"
---

## General Overview

A constant-speed, constant-volume (CSCV) fan uses a power-driven rotating impeller to circulate air at a single speed. Fans can be either axial or centrifugal. 

Table 1 shows the plant and system configurations that may contain a CSCV fan and motor and the most common respective controlling variables. 

<div class="table-wrapper">
<table>
    <caption>Table 1. Plants and systems containing constant-speed, constant-volume fans.</caption>
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
                AHU
            </td>
            <td>
            <ul>
                <li>AHU Supply Fan</li> 
                <li>AHU Return Fan</li> 
                </ul>
            </td>
            <td>
                Motor schedule and/or Outdoor air temperature (F)
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
                Motor schedule and/or Outdoor air temperature (F)
            </td>
        </tr>
    </tbody>
</table> 
</div>  

<!-- ## Evaluation of Energy Consumption

The primary energy source for a CSCV fan is the electricity used to run the fan motor. Table 2 provides a summary of measurements needed to quantify the annual energy consumption and operating characteristics of the CSCV fan and motor.

Table 2 provides a summary of measurements needed to quantify the annual energy consumption and operating characteristics of the CSCV fan and motor.

<div class="table-wrapper">
<table>
    <caption>Table 2. Key values and measurements to evaluate energy consumption.</caption>
    <thead>
        <tr>
            <th width="30.073349633251834%">
                Component Quantification
            </th>
            <th width="33.251833740831295%">
                Values to be Quantified
            </th>
            <th width="36.67481662591687%">
                Measurement
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                Electricity usage of CSCV fan motor (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)
            </td>
            <td>
                Average hourly true RMS power of the motor
            </td>
            <td>
                <a href="/documents/measurement-technique/true-rms-power">True RMS power of motor that drives the fan (kW)</a>
            </td>
        </tr>
        <tr>
            <td>
                Controlling variable, non-weather dependent
            </td>
            <td>
                Yearly operating schedule
            </td>
            <td>
                <a href="/documents/measurement-technique/motor-runtime">Fan motor runtime (hours)</a>
            </td>
        </tr>
        <tr>
            <td>
                Controlling variable, weather dependent
            </td>
            <td>
                Average hourly outdoor air temperature (OAT)
            </td>
            <td>
                <a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor air temperature (F)</a>
            </td>
        </tr>
    </tbody>
</table> 
</div>  -->

## Measurement Strategy

The measurement strategy for a CSCV fan and motor involves a one-time measurement of true RMS power and long-term monitoring of the motor's operational schedule. This approach assumes that true RMS power remains constant throughout the measurement period. Since the motor runs at a constant speed and is assumed to be under a constant load, it either operates at full power when on or draws no power when off. A motor on/off data logger records the operating schedule. True RMS power is measured at the main feed to the constant-speed motor. Measurement locations are generically represented in Figure 1. 

If the fans are in a modular configuration (assuming they all run at the same speed), then only one fan needs to be measured, provided substantiating documentation from the building automation system (BAS) shows that all cells are operating equally at the same time. If fans are further staged, all fans should be measured. 

In some cases, the motor's operational schedule is related to the facility's heating or cooling load. OAT can serve as a proxy variable for this load and can be measured onsite or obtained from a nearby weather station.

<a href="/images/components/2024_1023_CSCV_fan component_figure 1.jpg">
<figure class="figure">
  <img src="/images/components/2024_1023_CSCV_fan component_figure 1.jpg" class="figure-img img-fluid rounded" alt="Figure 1. CSCV fan measurement locations.">
  <figcaption class="figure-caption text-left">Figure 1. CSCV fan measurement locations (click on image to enlarge).</figcaption>
</figure>
</a>

### What to Measure

Perform the following measurements to quantify the energy consumption and operating characteristics of a CSCV fan and motor:

{{< measurement_technique measurement_technique_id=1 >}}

{{< measurement_technique measurement_technique_id=3 >}}

{{< measurement_technique measurement_technique_id=4 >}}

{{< measurement_technique measurement_technique_id=6 >}}

### Measurement Equipment

Table 3 provides the equipment required to carry out the measurements of this component. 

<div class="table-wrapper">
<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 3. Measurement equipment.</caption>
    <thead>
        <tr>
            <th>
                Equipment
            </th>
            <th>
                Description
            </th>
            <th>
                Measurement (Units)
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/MX2301-5.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/MX2301-5.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Onset HOBO Temperature/Relative Humidity Weatherproof Data Logger (MX2301)
            </td>
            <td>
                Records outdoor air temperature and relative humidity using internal sensors. Requires HOBOware software and a USB connection cable for programming and downloading data files.
            </td>
            <td>
                <ul>
                <li><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor Air Temperature (F)</a></li>
                <li><a href="/documents/measurement-technique/relative-humidity">Relative Humidity (%)</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://nycenergytools.com/wp-content/uploads/2021/04/HOBO-UX90-Motor-On-Off-Logger_UX90-004.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/04/HOBO-UX90-Motor-On-Off-Logger_UX90-004.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Onset HOBO Motor On/Off Data Logger (UX90-004)
            </td>
            <td>       
                Records when a motor is on and off, as well as runtime. Requires HOBOware software and a USB connection cable for programming and downloading data files.
            </td>
            <td>
                <a href="/documents/measurement-technique/motor-runtime">Motor Runtime (minutes)</a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/Fluke-345-300x300@2x.jpeg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/Fluke-345-300x300@2x.jpeg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Fluke 345 Power Quality Clamp Meter
            </td>
            <td>
                Multi-purpose electrical measurement tool used to take true RMS power readings over a short period of time.
            </td>
            <td>
                <a href="/documents/measurement-technique/true-rms-power">True RMS Power (kW)</a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/4-channel-logger-1.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/4-channel-logger-1.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Onset HOBO 4-Channel Analog Data Logger (UX120-006M)
            </td>
            <td>
                Used in conjunction with the CTV series of sensors. Records measurements from up to four CTV sensors. Requires HOBOware software and a USB connection cable for programming and downloading data files.
            </td>
            <td>
                <a href="/documents/measurement-technique/electrical-current">Electrical Current (Amps)</a>
            </td>
        </tr>
    </tbody>
</table> 
</div>

## Energy Consumption Quantification

The primary energy source for a CSCV fan is the electricity used to run the fan motor. The general methodology for quantifying the energy consumption of a CSCV fan motor involves measuring the true RMS power of the motor. The estimated annual energy consumption of a CSCV fan is estimated using the simulated yearly schedule of the fan. Many CSCV fans run on a set daily or weekly schedule. 

However, the yearly schedule may depend on outdoor air temperature (OAT). If so, operating hours can be regressed against OAT to develop a regression model. Depending on operational variability, daily or weekly models may be created to better characterize the component. This model is then applied to climate normal year data to estimate the typical annual operating schedule, which is used alongside true RMS power tUses measured air flow rate, fan power and runtime, and temperature to calculate total annual heat transfer and energy savings for an ERV.o calculate the estimated annual electricity consumption.

### How to Quantify

The following downloadable file(s) can be used to calculate energy consumption based on the measurements taken for the specific type of CSCV fan and motor:

#### For CSCV AHU Supply/Return, Chiller Condenser, and Boiler Burner Fans 

{{< downloadable_file title="Constant Speed Fan Energy Using Motor Runtime Data" >}}

{{< downloadable_file title="Constant One or Two Speed Fan Energy using kW Data" >}}

{{< downloadable_file title="Constant One or Two Speed Fan Energy Using Electrical Current Data" >}}

{{< downloadable_file title="Constant One or Two Speed Fan Energy Using Motor Speed Data" >}}

{{< admonition type="note" >}}
For more details about the methodology behind the calculators above see the [Fan Motor Energy Consumption calculation](/documents/calculation-methodology/fan-motors-energy-consumption).
{{< /admonition >}}

#### For CSCV Cooling Tower (CT) Fans

{{< downloadable_file title="Constant Speed CT Fan Energy Using Motor Runtime Data" >}}

{{< downloadable_file title="Constant One or Two Speed CT Fan Energy Using kW Data" >}}

{{< downloadable_file title="Constant One or Two Speed CT Fan Energy Using Electrical Current Data" >}}

{{< admonition type="note" >}}
For more details about the methodology behind the calculators above see [Cooling Tower Fans Energy Consumption](/documents/calculation-methodology/cooling-tower-fans-energy-consumption).
{{< /admonition >}}

<!-- ### Calculation Methodology

The general methodology for quantifying the energy consumption of a CSCV fan motor involves measuring the true RMS power of the motor. The estimated annual energy consumption of a CSCV fan is estimated using the simulated yearly schedule of the fan. Many CSCV fans run on a set daily or weekly schedule. 

However, the yearly schedule may depend on outdoor air temperature (OAT). If so, operating hours can be regressed against OAT to develop a regression model. Depending on operational variability, daily or weekly models may be created to better characterize the component. This model is then applied to climate normal year data to estimate the typical annual operating schedule, which is used alongside true RMS power to calculate the estimated annual electricity consumption.

<i>Click the button below to go to the calculators for this component.</i>

{{< calculation_methodology calculation_methodology_id=2 >}} -->

## Further Reading

- Boyd, BK.; McMordie Stoughton, KL.; Lewis, T. (2017). “Cooling Tower (Evaporative Cooling System) Measurement and Verification Protocol.” Golden, CO: National Renewable Energy Laboratory. https://www.nrel.gov/docs/fy18osti/70219.pdf.  

- Crowther, H.; Furlong, J. (2004). “Optimizing Chillers and Towers.” ASHRAE Journal, Vol. 46, No. 7, July 2004; pp. 34-40. 

- Morrison, F. (2014). “Saving Energy with Cooling Towers.” ASHRAE Journal, Vol. 56, No. 2, February 2014; pp. 34-40. 

- Tom, S. (July 2017). Cat. No. 11-808-616-01. “CHILLED WATER SYSTEM OPTIMIZER.” Farmington, Connecticut: Carrier Corporation.