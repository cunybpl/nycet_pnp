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
    <caption>Table 1. Plants and systems containing compressors.</caption>
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
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Air-cooled Chilled Water Plant
            </td>
            <td>
                Air-cooled Chiller
            </td>
            <td>
                Chiller Compressor
            </td>
        </tr>
        <tr>
            <td>
                Water-cooled Chilled Water Plant
            </td>
            <td>
                Water-cooled Chiller
            </td>
            <td>
                Chiller Compressor
            </td>
        </tr>
    </tbody>
</table> 
</div>

<!-- ## Evaluation of Energy Transfer

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
            <td>
                Electricity usage of a constant-speed compressor motor
            </td>
            <td>
                <ul>
                    <li>Average hourly power input to the compressor motor</li>
                    <li>Average hourly operating time for the compressor motor</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/true-rms-power">True RMS power</a> of compressor motor that drives the compressor (kW)</li>
                    <li><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor air temperature (F)</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div> -->

### Measurement Strategy

The measurement strategy for a compressor and motor involves taking hourly measurements of the power draw of the motor with an energy logger. The logger will continuously monitor the hours of operation and amount of electricity used by the compressor. If the compressor is part of a chilled water system the outdoor air temperature should be measured in hourly intervals. Measurement locations are generically represented in Figure 1.

<a href="/images/components/2024_1022_CS_compressor_component_figure 1.jpg">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="/images/components/2024_1022_CS_compressor_component_figure 1.jpg" class="figure-img img-fluid rounded zoom" alt="Figure 1. Constant-speed compressor and motor measurement locations.">
  <figcaption class="figure-caption text-left">Figure 1. Constant-speed compressor and motor measurement locations.</figcaption>
</figure>
</a>

### What and How to Measure

Measurements needed to quantify the annual energy consumption and operating characteristics of a constant-speed compressor:

{{< measurement_technique measurement_technique_id=1 >}}

{{< measurement_technique measurement_technique_id=6 >}}
<!-- maybe added in future
{{< measurement_technique measurement_technique_id=4 >}}

{{< measurement_technique measurement_technique_id=8 >}} -->

### Measurement Equipment

**If you are NYC agency personnel** and you're already familiar with the measurements above, the Field Equipment Lending Library has put together a kit wit all the equipment needed for measuring this component:

<div class="equip-grid">

{{< equipment_link
    type="kit" 
    borrow="yes" 
    url="https://nycenergytools.com/equipment-kits/compressor-and-motor-kit/" 
    imgUrl="/images/kit-placeholder.jpg" 
    title="Compressor and Motor"
    excerpt="Use this kit to assess the energy consumption (electricity usage) of a compressor motor connected to a chiller system."
>}}

</div>

{{< admonition type="tip" >}}
For specifics on how to use and install the equipment used in the measurements above, see each [measurement technique](#what-and-how-to-measure).
{{< /admonition >}}

<!-- ### Measurement Equipment

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
</div> -->

## Energy Consumption Quantification

The primary energy source for a constant-speed compressor is the electricity used to run the compressor motor. The general methodology for quantifying the electricity consumption of a constant-speed compressor and motor involves measuring their electrical energy use. Depending on operational variability, daily or weekly models incorporating cooling load or a proxy (such as outdoor air temperature) may be developed to better characterize consumption. The typical energy use of a constant-speed compressor is estimated using its simulated yearly schedule. A more detailed explanation of the calculation methodology is provided below.

### How to Quantify

The following downloadable file(s) can be used to calculate energy consumption based on the [measurements](#what-and-how-to-measure) taken for a constant speed compressor and motor:

{{< downloadable_file title="Constant Speed Pump Energy Using Motor Runtime Data" >}}

{{< downloadable_file title="Constant One or Two Speed Pump Energy Using kW Data" >}}

{{< downloadable_file title="Constant One or Two Speed Pump Energy Using Electrical Current Data" >}}

{{< admonition type="note" >}}
For more details about the methodology behind the calculators above see [Pump Motor Energy Consumption](/documents/calculation-methodology/pump-motors-energy-consumption).
{{< /admonition >}}

## Further Reading

- ASHRAE. (2020). HVAC Systems and Equipment. Atlanta, GA: ASHRAE.