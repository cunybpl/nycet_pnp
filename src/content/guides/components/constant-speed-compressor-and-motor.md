---
title: Constant-speed Compressor and Motor
type: component
component_id: 10
excerpt: This equipment is typically used in a chiller system to increase the temperature and pressure of refrigerant.
thumbnail_image: "/images/components/thumbnail-images/CONSTANT SPEED COMPRESSOR.jpg"
associated_systems:
  - Air-cooled Chiller
  - Water-cooled Chiller
related_systems:
  - Air-cooled Chiller
  - Water-cooled Chiller
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/compressor-and-motor-kit/"
layout: guide
url: "/documents/components/constant-speed-compressor-and-motor"
---

## General Overview

A compressor is one of the main components of a chiller. A constant-speed compressor operates at a
constant speed to raise the vapor pressure of the refrigerant and power the refrigeration cycle of the chiller. 

<div class="table-wrapper">
<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 1. Plants and systems containing liquid-to-liquid heat exchangers.</caption>
    <thead>
        <tr>
            <th width="21.964285714285715%">
                Plant
            </th>
            <th width="24.285714285714285%">
                System
            </th>
            <th width="26.964285714285715%">
                Component
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="21.964285714285715%" bgcolor="#e2efd9">
                Air-cooled Chilled Water Plant
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="24.285714285714285%" bgcolor="#e2efd9">
                Air-cooled Chiller
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.964285714285715%" bgcolor="#e2efd9">
                Chiller Compressor
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="21.964285714285715%" bgcolor="#e2efd9">
                Water-cooled Chilled Water Plant
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="24.285714285714285%" bgcolor="#e2efd9">
                Water-cooled Chiller
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.964285714285715%" bgcolor="#e2efd9">
                Chilled Compressor
            </td>
        </tr>
    </tbody>
</table> 
</div>

## Evaluation of Energy Transfer

The primary energy source for a constant-speed compressor is the electricity used to run the compressor motor. Table 2 provides a summary of measurements needed to quantify the annual power consumption and operating characteristics of the constant-speed compressor and motor.

<div class="table-wrapper">
<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 2. Key values and measurements to evaluate energy consumption.</caption>
    <thead>
        <tr>
            <th width="21.964285714285715%">
                Component Quantification
            </th>
            <th width="24.285714285714285%">
                Values to be Quantified
            </th>
            <th width="26.964285714285715%">
                Measurement
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="21.964285714285715%" bgcolor="#e2efd9">
                Electricity usage of a constant-speed compressor motor
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="24.285714285714285%" bgcolor="#e2efd9">
                <ul>
                    <li>Average hourly power input to the compressor motor</li>
                    <li>Average hourly operating time for the compressor motor</li>
                </ul>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.964285714285715%" bgcolor="#e2efd9">
                <ul>
                    <li><a href="/documents/measurement-technique/true-rms-power">True RMS power</a> of compressor motor that drives the compressor (kW)</li>
                    <li><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor air temperature (F)</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Measurement Strategy

<a href="/images/components/2024_1022_CS_compressor_component_figure 1.jpg">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/components/2024_1022_CS_compressor_component_figure 1.jpg" class="figure-img img-fluid rounded zoom" alt="Figure 1. Constant-speed compressor and motor measurement locations.">
  <figcaption class="figure-caption text-left">Figure 1. Constant-speed compressor and motor measurement locations (click on image to enlarge).</figcaption>
</figure>
</a>

The measurement strategy for a constant-speed compressor and motor is to do a one-time Measurement Strategy. The measurement strategy for a constant-speed compressor and motor is to do a one-time measurement of the power draw and long-term measurements of the operational schedule of the motor. The approach assumes that the power draw stays constant throughout the measurement period. Because the motor runs at constant speed and is under a constant load, it is either operating at full power (when on) or it is drawing no power (when off).

A motor on/off data logger is used to record the operating schedule. The true RMS power is measured at main feed to the constant-speed motor. Measurement locations are generically represented in Figure 1. 

### Measurement Equipment

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
                <li><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor Air Temperature (F)</a></li>
                <li><a href="/documents/measurement-technique/relative-humidity">Relative Humidity (%)</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

<!-- ### Calculation Methodology (Calculator is not ready yet, but once ready can un-comment this section)

The general methodology for quantifying the electricity consumption of a constant-speed compressor
and motor is to measure the electrical energy consumed by the compressor and motor. Depending on the variability of operations, daily or weekly models which incorporate cooling load or a proxy like outdoor air temperature as independent variables may be developed to better characterize the
component. The typical energy use of a constant-speed compressor is estimated using the simulated yearly schedule of the compressor. A more detailed explanation of the calculation methodology can be found below.

<br></br>
<i>Click the button below to go to the calculators for this component.</i>
<br></br>

{{< calculation_methodology calculation_methodology_id=6 >}} -->

## Further Reading

- ASHRAE. (2020). HVAC Systems and Equipment. Atlanta, GA: ASHRAE.