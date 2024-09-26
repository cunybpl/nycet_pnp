---
title: Constant-speed Compressor and Motor
type: component
excerpt: This equipment is typically used in a chiller system to increase the temperature and pressure of refrigerant.
thumbnail_image: "/images/components/thumbnail-images/2024_0606_liquid to liquid hx component_thumbnail.jpg"
associated_systems:
  - Air-cooled Chiller
  - Water-cooled Chiller
related_systems:
  - Air-cooled Chiller
  - Water-cooled Chiller
layout: guide
url: "/documents/components/constant-speed-compressor-and-motor"
---

## General Overview

A compressor is one of the main components of a chiller. A constant-speed compressor operates at a
constant speed to raise the vapor pressure of the refrigerant and power the refrigeration cycle of the chiller. 

<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 1. Plants and systems containing liquid-to-liquid heat exchangers.</caption>
    <thead>
        <tr>
            <td width="21.964285714285715%">
                <p><strong>Plant</strong></p>
            </td>
            <td width="24.285714285714285%">
                <p><strong>System</strong></p>
            </td>
            <td width="26.964285714285715%">
                <p><strong>Component</strong></p>
            </td>
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

## Evaluation of Energy Transfer

The primary energy source for a constant-speed compressor is the electricity used to run the compressor motor. Table 2 provides a summary of measurements needed to quantify the annual power consumption and operating characteristics of the constant-speed compressor and motor.

<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 2. Key Values and Measurements.</caption>
    <thead>
        <tr>
            <td width="21.964285714285715%">
                <p><strong>Component Quantification</strong></p>
            </td>
            <td width="24.285714285714285%">
                <p><strong>Values to be Quantified</strong></p>
            </td>
            <td width="26.964285714285715%">
                <p><strong>Measurement</strong></p>
            </td>
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
                    <li>Compressor <a href="/documents/measurement-technique/electrical-spot-measurement">motor runtime</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Measurement Strategy

<a href="">
<figure class="figure mb-3 mt-3 mx-auto">
  <img src="" class="figure-img img-fluid rounded zoom" alt="Figure 1. Measurement points for a constant-speed compressor motor.">
  <figcaption class="figure-caption text-left">Figure 1. Measurement points for a constant-speed compressor motor.</figcaption>
</figure>
</a>

The measurement strategy for a constant-speed compressor and motor is to do a one-time Measurement Strategy. The measurement strategy for a constant-speed compressor and motor is to do a one-time measurement of the power draw and long-term measurements of the operational schedule of the motor. The approach assumes that the power draw stays constant throughout the measurement period. Because the motor runs at constant speed and is under a constant load, it is either operating at full power (when on) or it is drawing no power (when off).

A motor on/off data logger is used to record the operating schedule. The true RMS power is measured at main feed to the constant-speed motor. Measurement points are generically represented in Figure 1. 

### Measurement Equipment

<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 3. Measurement equipment.</caption>
    <thead>
        <tr>
            <td width="33.333333333333336%">
                <p><strong>Equipment</strong></p>
            </td>
            <td width="33.333333333333336%">
                <p><strong>Description</strong></p>
            </td>
            <td width="33.333333333333336%">
                <p><strong>Measurement (Units)</strong></p>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="33.333333333333336%">
                <a href="https://nycenergytools.com/wp-content/uploads/2021/04/HOBO-UX90-Motor-On-Off-Logger_UX90-004.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/04/HOBO-UX90-Motor-On-Off-Logger_UX90-004.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Onset HOBO Motor On/Off Data Logger (UX90-004)
            </td>
            <td width="33.333333333333336%">       
                Records when a motor is on and off, as well as runtime. Requires HOBOware software and a USB connection cable for programming and downloading data files.
            </td>
            <td width="33.333333333333336%">
                <a href="/documents/measurement-technique/motor-runtime">Motor Runtime (minutes)</a>
            </td>
        </tr>
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
                Provides a measurement of true RMS power from voltage and current inputs and records long-term power (kW) and energy (kWh) measurements. Requires ELOG19 software and a USB connection cable for programming and downloading data files.
            </td>
            <td width="33.333333333333336%">
                 <a href="/documents/measurement-technique/true-rms-power">True RMS Power (kW)</a>
            </td>
        </tr>
    </tbody>
</table>

Further details about measurement tools and equipment associated with measurements in Figure 1 can be found <a href="">here</a> <!--link here FELL Kit for a constant-speed compressor and motor -->.

### Calculation Methodology

The general methodology for quantifying the electricity consumption of a constant-speed compressor
and motor is to measure the electrical energy consumed by the compressor and motor. Depending on the variability of operations, daily or weekly models which incorporate cooling load or a proxy like outdoor air temperature as independent variables may be developed to better characterize the
component. The typical energy use of a constant-speed compressor is estimated using the simulated yearly schedule of the compressor. A more detailed explanation of the calculation methodology can be found below.

<br></br>
<i>Click the button below to go to the calculators for this component.</i>
<br></br>

{{< calculation_methodology calculation_methodology_id=6 >}}

## Further Reading

- ASHRAE. (2020). HVAC Systems and Equipment. Atlanta, GA: ASHRAE.