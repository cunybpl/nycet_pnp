---
title: Liquid-to-liquid Heat Exchanger
type: component
component_id: 1
excerpt: The fixed plate achieves heat transfer using temperature difference between two liquids without direct contact of these liquids.
thumbnail_image: "/images/components/thumbnail-images/2024_0606_liquid to liquid hx component_thumbnail.jpg"
associated_systems:
  - Waterside Economizer
related_systems:
  - Waterside Economizer
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/liquid-to-liquid-heat-exchanger/"
layout: guide
url: "/documents/components/liquid-to-liquid-heat-exchanger"
---

## General Overview

A liquid-to-liquid heat exchanger transfers heat between two liquids using a temperature difference without direct contact between them.

In a building, this type of heat exchanger can be installed in condensate cooling, vent condensing, boiler blowdown, and waterside economizer (free cooling), and in refrigeration applications such as evaporators and condensers. Typical liquid-to-liquid heat exchangers are plate-and-frame heat exchangers and tube heat exchangers. 

Table 1 shows the plant and system configurations that may contain a liquid-to-liquid heat exchanger.

<div class="table-wrapper">
<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 1. Plants and systems containing liquid-to-liquid heat exchangers.</caption>
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
    </thead>
    <tbody>
        <tr>
            <td>
                Water-cooled Chilled Water Plant
            </td>
            <td>
                Waterside Economizer
            </td>
            <td>
                Liquid-to-liquid heat exchanger
            </td>
            <td>
                Outdoor air temperature (F)
            </td>
        </tr>
        <tr>
            <td>
                Steam Plant
            </td>
            <td>
                <ul>
                    <li>Blowdown Tank</li> 
                    <li>Heat recovery system</li>
                </ul>
            </td>
            <td>
                Liquid-to-liquid heat exchanger
            </td>
            <td>
                Blowdown water temperature (F)
            </td>
        </tr>
        <tr>
            <td>
                Service Hot Water Plant
            </td>
            <td>
                Service Hot Water Tank
            </td>
            <td>
                Liquid-to-liquid heat exchanger
            </td>
            <td>
                Schedule and occupancy
            </td>
        </tr>
    </tbody>
</table> 
</div>


<!-- ## Evaluation of Heat Transfer

In a liquid-to-liquid heat exchanger, heat is transferred from a liquid with excess heat (waste heat stream) to a liquid where the recovered heat benefits the process (supply stream). This is the principal energy phenomenon that reduces the overall energy usage of the entire plant or system where the heat exchanger is installed. A pump and motor may be required to circulate the liquids in the waste heat and supply streams.

Table 2 provides a summary of measurements needed to quantify the annual energy transfer and operating characteristics of a liquid-to-liquid heat exchanger.

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
                Heat transferred by the heat exchanger to the supply stream
            </td>
            <td width="33.333333333333336%">
                <p>Average hourly Btu/h transferred</p>
            </td>
            <td width="33.333333333333336%">
                <ul>
                    <li><a href="/documents/measurement-technique/water-flow-rate">Average hourly flow rate of the supply stream (GPM)</a></li>
                    <li><a href="/documents/measurement-technique/pipe-surface-water-temperature">Temperature of supply stream entering and leaving the heat exchange (F)</a>&nbsp;</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                Heat recovery system electricity consumption (if applicable), non-weather dependent system
            </td>
            <td width="33.333333333333336%">
                <ul>
                    <li>Average hourly pump motor <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a> (if needed)</li>
                    <li>Operating schedule</li>
                </ul>
            </td>
            <td width="33.333333333333336%">
                Hourly <a href="/documents/measurement-technique/true-rms-power">true RMS power</a> (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>)
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                Heat recovery system electricity consumption (if applicable), weather dependent system
            </td>
            <td width="33.333333333333336%">
                <ul>
                    <li>Average hourly pump motor <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a> (if needed)</li>
                    <li>Average hourly outdoor air temperature (OAT)</li>
                </ul>
            </td>
            <td width="33.333333333333336%">
                <ul>
                    <li>Hourly <a href="/documents/measurement-technique/true-rms-power">true RMS power (kW)</a></li>
                    <li><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor air temperature (F)</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div> -->

## Measurement Strategy

The measurement strategy for a liquid-to-liquid heat exchanger involves measuring the supply stream flow through the heat exchanger and the temperatures at the supply stream inlet and outlet. If a pump is used in the system, the flow rate can be measured at the supply stream pump Measurement locations are generically represented in Figure 1.

<a href="/images/components/2024_0625_LtL HX component_figure 1.jpg">
<figure class="figure">
  <img src="/images/components/2024_0625_LtL HX component_figure 1.jpg" class="figure-img img-fluid rounded zoom" alt="Figure 1. Liquid-to-liquid heat exchanger measurement locations.">
  <figcaption class="figure-caption text-left">Figure 1. Liquid-to-liquid heat exchanger measurement locations.</figcaption>
</figure>
</a>

### What and How to Measure

Perform the following measurements to quantify the annual heat transfer and operating characteristics of a liquid-to-liquid heat exchanger:

{{< measurement_technique measurement_technique_id=11 >}}

{{< measurement_technique measurement_technique_id=16 >}}

### Measurement Equipment

**If you are NYC agency personnel** and you're already familiar with the measurements above, the Field Equipment Lending Library has put together a kit wit all the equipment needed for measuring this component:

<div class="equip-grid">

{{< equipment_link type="kit" borrow="yes" url="https://nycenergytools.com/equipment-kits/liquid-to-liquid-heat-exchanger/" imgUrl="/images/kit-placeholder.jpg" title="Liquid-to-Liquid Heat Exchanger" excerpt="Use this kit to assess the heat transfer of a **plate and frame** liquid-to-liquid heat exchanger." >}}

</div>

{{< admonition type="tip" >}}
For specifics on how to use and install measurement equipment, see each [measurement technique](#what-and-how-to-measure).
{{< /admonition >}}

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
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/DXN-1.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/DXN-1.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Ultrasonic Flow Meter DXNP (DXNP-ABS-NN)
            </td>
            <td width="33.333333333333336%">   
                Designed for systems engineers to quickly troubleshoot problems and verify performance during system commissioning and diagnostics. Allows measurement of flows throughout the plumbing infrastructure without intrusion.
            </td>
            <td width="33.333333333333336%">
                <a href="/documents/measurement-technique/water-flow-rate">Water Flow Rate (GPM)</a>
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
                Provides a measurement of true RMS power from voltage and current inputs and records long-term power (kW) and energy (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) measurements. Requires ELOG19 software and a USB connection cable for programming and downloading data files.
            </td>
            <td width="33.333333333333336%">
                <a href="/documents/measurement-technique/true-rms-power">True RMS Power (kW)</a>
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/4-channel-logger-1.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/4-channel-logger-1.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                4-Channel Analog Data Logger (UX120-006M)
                <br></br>
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/Type-T-6-ft-Beaded-Thermocouple-Sensor_TC6-T-5-300x225@2x.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/Type-T-6-ft-Beaded-Thermocouple-Sensor_TC6-T-5-300x225@2x.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Thermocouple Sensor (TC6-T)
            </td>
            <td width="33.333333333333336%">
                An analog logger that supports up to four external sensors allowing you to measure temperature, current, voltage, air flow, pressure and more in one single logger. HOBOware Pro or HOBOware free software is required for logger operation.
            </td>
            <td width="33.333333333333336%">
                <a href="/documents/measurement-technique/pipe-surface-water-temperature">Pipe Surface Water Temperature</a> 
            </td>
        </tr>
    </tbody>
</table> 
</div> -->

## Energy Consumption Quantification

The general methodology for quantifying the useful energy supplied by a liquid-to-liquid heat exchanger is determined by the temperature differential and flow rate of the supply stream. These values are multiplied by the heat capacity and density of the liquid (e.g., water, water-glycol mix) to find the energy flow rate. The energy flow rate can be regressed against a controlling variable (such as outdoor air, pump runtime or flow rate) to develop a regression model. Depending on operational variability, daily or weekly models may be developed to better characterize the component.

### How to Quantify

The following downloadable file(s) can be used to calculate energy consumption based on the measurements taken for this component: 

{{< downloadable_file title="Liquid-to-liquid Heat Transfer" >}}

{{< admonition type="note" >}}
For more details about the methodology behind the calculator above see [Liquid-to-liquid Heat Exchanger Heat Transfer](/documents/calculation-methodology/liquid-to-liquid-heat-exchanger-heat-transfer).
{{< /admonition >}}

## Further Reading

- Apogee Interactive (2022). “Free Cooling.” Commercial Library. https://c03.apogee.net/mvc/home/hes/land/el?utilityname=union-power&spc=cel&id=1094; accessed February 4, 2021.

- ASHRAE (2019). ASHRAE Handbook: HVAC Applications. Chapter 48. DESIGN AND APPLICATION OF CONTROLS. I-P Edition.

- ASHRAE (2020). ASHRAE Handbook: HVAC Systems and Equipment. Chapter 40. COOLING TOWERS. I-P Edition.

- Carrier (2016). “How to Model a Waterside Economizer Application.” Carrier Engineering Newsletter, Vol. 4, Issue 1.

- Gordon, J.M.; Ng, K.C. (2001). “Cool Thermodynamics: The Engineering and Physics of Predictive, Diagnostic and Optimization Methods for Cooling Systems,” Cambridge: Cambridge International Science Pub; pp. 159-177.

- Trane (2008). “’Free’ Cooling Using Water Economizers.” Engineers Newsletter, Vol. 37-3. Also available at https://www.trane.com/Commercial/Uploads/PDF/11598/
News-%20Free%20Cooling%20using%20Water%20Economizers.pdf; accessed February 4, 2021.

- Trane (2010). CDS-PRM001-EN. TRACE 700 User’s Manual-Building Energy and Economic Analysis, Version 6.2; pp. 43-49. Also available at https://tranecds.custhelp.com/ci/fattach/get/55941/0/filename/FreeCooling%5B1%5D.pdf; accessed June 17, 2022. 

- Taylor, S (2014). “How to Design & Control Waterside Economizers,” ASHRAE Journal, Vol. 56, No 6. American Society of Heating, Refrigerating and Air Conditioning Engineers; pp. 30-36.

- Trane (2016). “Waterside Economizers - Keeping the ‘Free’ In Free-Cooling.” Engineers Newsletter, Vol. 45-2. Also available at https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/education-training/engineers-newsletters/waterside-design/ADM-APN058-EN_06012016.pdf; accessed February 4, 2021.