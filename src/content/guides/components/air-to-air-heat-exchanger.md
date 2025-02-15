---
title: Air-to-air Heat Exchanger
type: component
excerpt: The rotary wheel achieves heat transfer using temperature difference between two airstreams without direct contact of these airstreams.
thumbnail_image: "/images/components/thumbnail-images/2024_0606_air to air hx component_thumbnail_RESIZED-01.jpg"
associated_systems:
  - Air-to-air Energy Recovery
related_systems:
  - Air-to-air Energy Recovery
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/air-to-air-heat-exchanger/" 
layout: guide
url: "/documents/components/air-to-air-heat-exchanger"
---

## General Overview 

Air-to-air heat exchangers transfer energy between two airstreams that must be at different temperatures for sensible heat transfer and different moisture contents for latent heat transfer.   

In a building, an air-to-air heat exchanger can be used to recover latent or sensible heat either during the cooling or heating season. Recovering energy from the exhaust stream lessens the energy load on the air handling plant. Typical air-to-air heat exchangers include fixed plate heat exchangers and rotary wheel heat exchangers, with the former typically only recovering sensible heat. 

<!-- Table 1 shows the plant and system configurations that may contain an air-to-air heat exchanger. 

<div class="table-wrapper">
<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 1. Plants and systems applicable to air-to-air heat exchanger.</caption>
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
            <th width="26.785714285714285%">
                Controlling Variable
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fr-cell-handler " style="background-color: rgb(255, 255, 255);" width="21.964285714285715%" bgcolor="#e2efd9">
                Air Handling Plant
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="24.285714285714285%" bgcolor="#e2efd9">
                AHU with Heat Recovery Unit
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.964285714285715%" bgcolor="#e2efd9">
                Fixed plate heat exchanger
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.785714285714285%" bgcolor="#e2efd9">
                Outdoor air temperature (F)
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="21.964285714285715%" bgcolor="#e2efd9">
                Air Handling Plant
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="24.285714285714285%" bgcolor="#e2efd9">
                AHU with Heat Recovery Unit
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.964285714285715%" bgcolor="#e2efd9">
                Rotary wheel heat exchanger
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.785714285714285%" bgcolor="#e2efd9">
                Outdoor air temperature (F)
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="21.964285714285715%" bgcolor="#e2efd9">
                Air Handling Plant
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="24.285714285714285%" bgcolor="#e2efd9">
                A dedicated outdoor air system (DOAS)
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.964285714285715%" bgcolor="#e2efd9">
                Fixed plate or rotary wheel heat exchanger
            </td>
            <td class="fr-cell-fixed " style="background-color: rgb(255, 255, 255);" width="26.785714285714285%" bgcolor="#e2efd9">
                Outdoor air temperature (F)
            </td>
        </tr>
    </tbody>
</table> 
</div> -->

<!-- ## Evaluation of Heat Transfer 

Table 2 provides a summary of measurements needed to quantify the annual energy transfer and operating characteristics of an air-to-air heat exchanger. 

<div class="table-wrapper">
<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 2. Key values and measurements to evaluate heat transfer.</caption>
    <thead>
        <tr>
            <th width="33.333333333333336%">
                Component Quantification
            </th>
            <th width="33.333333333333336%">
                Values to be Quantified
            </th>
            <th width="33.333333333333336%">
                Measurement&nbsp;
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="33.333333333333336%">
                Energy recovered by the heat exchanger
            </td>
            <td width="33.333333333333336%">
                <p>Hourly Btu/h transferred to the outdoor air entering the system</p>
            </td>
            <td width="33.333333333333336%">
                <ul>
                <li>Hourly air flow rate (CFM) of incoming air</li>
                <li>Hourly <a href="/documents/measurement-technique/system-air-temperature">air temperature (F)</a> of incoming air on both sides of the heat exchanger&nbsp;</li>
                <li>Hourly <a href="/documents/measurement-technique/relative-humidity">relative humidity</a> of the incoming air on both sides of the heat exchanger (only for latent heat recovery systems)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                Heat recovery system electricity consumption (if applicable)
            </td>
            <td width="33.333333333333336%">
                Average hourly motor <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a> (for rotary wheel heat exchangers)
            </td>
            <td width="33.333333333333336%">
                Hourly <a href="/documents/measurement-technique/true-rms-power">true RMS power</a> of the motor that drives the rotary fan (kW)
            </td>
        </tr>
    </tbody>
</table> 
</div> -->

## Measurement Strategy 

The measurement strategy for an air-to-air heat exchanger is to measure the heat transfer (Btu/h) from airstream to airstream within the heat exchanger, as well as any energy consuming components associated with the heat exchanger, such as the energy wheel motor. 

Figure 1 shows the measurement locations in a fixed plate heat exchanger. 

<a href="/images/components/air-to-air-heat-exchanger/2024_0625_AtA HX component_figure 1.jpg">
<figure class="figure">
  <img src="/images/components/air-to-air-heat-exchanger/2024_0625_AtA HX component_figure 1.jpg" class="figure-img img-fluid rounded zoom" alt="Figure 1. Measurement boundary for an air-to-air heat exchanger.">
  <figcaption class="figure-caption text-left">Figure 1. Fixed-plate heat exchanger measurement locations (click on image to enlarge).</figcaption>
</figure>
</a>

Figure 2 shows the measurement locations in a rotary wheel heat exchanger.

<a href="/images/components/air-to-air-heat-exchanger/2024_0625_AtA HX component_figure 2.jpg">
<figure class="figure">
  <img src="/images/components/air-to-air-heat-exchanger/2024_0625_AtA HX component_figure 2.jpg" class="figure-img img-fluid rounded zoom" alt="Figure 2. Rotary wheel heat exchanger measurement locations.">
  <figcaption class="figure-caption text-left">Figure 2. Rotary wheel heat exchanger measurement locations (click on image to enlarge).</figcaption>
</figure>
</a>

### What to Measure

Measurements needed to quantify the annual energy transfer and operating characteristics of an air-to-air heat exchanger:

{{< measurement_technique measurement_technique_id=1 >}}

<!-- ### Measurement Equipment

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
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/MX1101-5.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/MX1101-5.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Onset HOBO MX1101 logger
            </td>
            <td width="33.333333333333336%">
                Measures and records temperature and relative humidity. Using bluetooth technology you can transmit your data wirelessly to your mobile device using the <a href=https://www.onsetcomp.com/products/software/hoboconnect/>HOBOconnect app</a>. Stores 84,000 measurements.
            </td>
            <td width="33.333333333333336%">
                <ul>
                <li><a href="/documents/measurement-technique/system-air-temperature">System Air Temperature (F)</a></li>
                <li><a href="/documents/measurement-technique/relative-humidity">Relative Humidity (%)</a></li>
                </ul>
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
        <tr>
            <td width="33.333333333333336%">
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/Hot-Wire-Anenomenter-TSI-9545-300x300@2x.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/Hot-Wire-Anenomenter-TSI-9545-300x300@2x.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Hot Wire Anemometer (Blue) (TSI 9545)
            </td>
            <td width="33.333333333333336%">
                Simultaneously measures and logs data for several ventilation parameters using a single probe with multiple sensors. It measures velocity, temperature, and relative humidity, and calculates flow, wet bulb, and dew point temperature.
            </td>
            <td width="33.333333333333336%">
                <ul>
                <li><a href="/documents/measurement-technique/system-air-temperature">System Air Temperature (F)</a></li>
                <li><a href="/documents/measurement-technique/relative-humidity">Relative Humidity (%)</a></li>
                </ul>
            </td>
        </tr>   
    </tbody>
</table> 
</div> -->

## Enegry Consumption Quantificaiton

The general methodology for quantifying the energy impact of an air-to-air heat exchanger is to determine the temperature differential on the supply side of the heat exchanger and the supply airflow. If latent energy is also transferred, this is determined by the humidity differential across the heat exchanger. The supply flow rate can be measured or assumed, depending on available resources. These energy transfer values can be regressed against a controlling variable (such as outdoor air temperature) to develop a regression model. Depending on the variability of operations, daily or weekly models may be developed to better characterize the component.

### How to Quantify

The following calculation methodology <strong>only applies to systems with rotary wheel heat exchangers.</strong>

{{< calculation_methodology calculation_methodology_id=8 >}}

### Calculate Energy Consumption

The following downloadable files can be used to calculate energy consumption based on the measurements taken for this component: 

{{< downloadable_file url="https://www.dropbox.com/scl/fi/kyy1x5bkp1yeobfj8af9n/air_to_air_heat_transfer_calculator_2023_0706.xlsx?rlkey=q0gqlcskk7aa3ffclirfx2el5&st=m32n6yzd&dl=1" title="Air to Air Heat Transfer" excerpt="Uses measured air flow rate, fan power and runtime, and temperature to calculate total annual heat transfer and energy savings for an ERV." >}}

## Further Reading 

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 1. HVAC SYSTEM ANALYSIS AND SELECTION. I-P Edition.  

- ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 26. AIR-TO-AIR ENERGY RECOVERY EQUIPMENT. I-P Edition.  

- CenterPoint Energy (2022). “Runaround Loops.” Energy Recovery Systems. https://www.centerpointenergy.com/en-us/Services/Pages/Runaround-loops-MN.aspx?sa=MN&au=bus 

- Heatex (2022). “Heat Exchanger Basics.” https://www.heatex.com/knowledge/heat-exchanger-basics. 
