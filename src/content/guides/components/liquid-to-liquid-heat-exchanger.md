---
title: Liquid-to-liquid Heat Exchanger
type: component
excerpt: Achieves heat transfer using temperature difference between two liquids without direct contact of these liquids.
thumbnail_image: "/images/components/thumbnail-images/2024_0606_liquid to liquid hx component_thumbnail.jpg"
associated_systems:
  - Waterside Economizer
related_systems:
  - Waterside Economizer
layout: guide
url: "/documents/components/liquid-to-liquid-heat-exchanger"
---

## General Overview

A liquid-to-liquid heat exchanger achieves heat transfer using temperature difference between two liquids without direct contact of these liquids.

In a building, a heat exchanger of this type can be installed in condensate cooling, vent condensing, boiler blowdown, and waterside economizer (free cooling), and in refrigeration applications such as evaporators and condensers. Typical liquid-to-liquid heat exchangers are plate and frame heat exchangers and tube heat exchangers. 

Table 1 shows the plant and system configurations that may contain a liquid-to-liquid heat exchanger.

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
            <td width="26.785714285714285%">
                <p><strong>Controlling Variable</strong></p>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fr-cell-handler " style="background-color: rgb(255, 255, 255);" width="21.964285714285715%" bgcolor="#e2efd9">
                <p>Water-cooled Chilled Water Plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="24.285714285714285%" bgcolor="#e2efd9">
                <p>Waterside Economizer</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.964285714285715%" bgcolor="#e2efd9">
                <p>Liquid-to-liquid heat exchanger</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.785714285714285%" bgcolor="#e2efd9">
                <p>Outdoor air temperature (F)</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="21.964285714285715%" bgcolor="#e2efd9">
                <p>Steam Plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="24.285714285714285%" bgcolor="#e2efd9">
                <ul>
                <li>Blowdown Tank</li> 
                <li>Heat recovery system</li>
                </ul>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.964285714285715%" bgcolor="#e2efd9">
                <p>Liquid-to-liquid heat exchanger</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.785714285714285%" bgcolor="#e2efd9">
                <p>Blowdown water temperature (F)</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="21.964285714285715%" bgcolor="#e2efd9">
                <p>Service Hot Water Plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="24.285714285714285%" bgcolor="#e2efd9">
                <p>Service Hot Water Tank</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.964285714285715%" bgcolor="#e2efd9">
                <p>Liquid-to-liquid heat exchanger</p>
            </td>
            <td class="fr-cell-fixed " style="background-color: rgb(255, 255, 255);" width="26.785714285714285%" bgcolor="#e2efd9">
                <p>Schedule and occupancy</p>
            </td>
        </tr>
    </tbody>
</table>


## Evaluation of Heat Transfer

In a liquid-to-liquid heat exchanger heat transferred from the liquid with excess heat (waste heat stream) to the liquid where the heat recovered is beneficial to the process (supply stream). This is the principal energy phenomenon that reduces the overall energy usage of the entire plant or system where the heat exchanger is installed. A pump and motor may be needed to move the liquid in the waste heat and supply streams.

Table 2 provides a summary of measurements needed to quantify the annual energy transfer and operating characteristics of a liquid-to-liquid heat exchanger.

<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 2. Key values and measurements.</caption>
    <thead>
        <tr>
            <td width="33.333333333333336%">
                <p><strong>Component Quantification</strong></p>
            </td>
            <td width="33.333333333333336%">
                <p><strong>Values to be Quantified</strong></p>
            </td>
            <td width="33.333333333333336%">
                <p><strong>Measurement&nbsp;</strong></p>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="33.333333333333336%">
                <p>Heat transferred by the heat exchanger to the supply stream</p>
            </td>
            <td width="33.333333333333336%">
                <p>Average hourly Btu/h transferred&nbsp;</p>
            </td>
            <td width="33.333333333333336%">
                <ul>
                <li><a href="/documents/measurement-technique/water-flow-rate">Average hourly flow rate of the supply stream (gpm)</a></li>
                <li><a href="/documents/measurement-technique/pipe-surface-water-temperature">Temperature of supply stream entering and leaving the heat exchange (F)</a>&nbsp;</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                <p>Heat recovery system electricity consumption (if applicable)</p>
            </td>
            <td width="33.333333333333336%">
                <p>Average hourly pump motor kWh (if needed)</p>
            </td>
            <td width="33.333333333333336%">
                <p>Hourly <a href="/documents/measurement-technique/true-rms-power">true RMS power</a> (kWh)</p>
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                <p>Controlling variable, non-weather dependent</p>
            </td>
            <td width="33.333333333333336%">
                <p>Operating schedule&nbsp;</p>
            </td>
            <td width="33.333333333333336%">
                <p>Supply stream pump <a href="/documents/measurement-technique/motor-runtime">motor runtime (h)</a></p>
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                <p>Controlling variable, weather dependent</p>
            </td>
            <td width="33.333333333333336%">
                <p>Average hourly outdoor air temperature (OAT)</p>
            </td>
            <td width="33.333333333333336%">
                <p><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor air temperature (F)</a></p>
            </td>
        </tr>
    </tbody>
</table>

### Measurement Strategy

The measurement strategy for a liquid-to-liquid heat exchanger is to measure the supply stream flow through the heat exchanger and the temperatures at the supply stream inlet and outlet of the heat exchanger. The flow rate can be measured at the supply stream pump if one is used in the system. Measurement points are generically represented in Figure 1.

<a href="/images/components/2024_0625_LtL HX component_figure 1.jpg">
<figure class="figure">
  <img src="/images/components/2024_0625_LtL HX component_figure 1.jpg" class="figure-img img-fluid rounded zoom" alt="Figure 1. Measurement points in a liquid-to-liquid heat exchanger.">
  <figcaption class="figure-caption text-left">Figure 1. Measurement points in a liquid-to-liquid heat exchanger</figcaption>
</figure>
</a>

### Measurement Equipment

Table 3 provides the equipment required to carry out the measurements of this component. 

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
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/4-channel-logger-1.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/4-channel-logger-1.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                <a href="https://nycenergytools.com/equipment/4-channel-analog-data-logger/">Onset HOBO 4-Channel Analog Data Logger (UX120-006M)</a>
            </td>
            <td width="33.333333333333336%">   
                Used in conjunction with the CTV series of sensors. Records measurements from up to four CTV sensors. Requires HOBOware software and a USB connection cable for programming and downloading data files.    
            </td>
            <td width="33.333333333333336%">
                <a href="/documents/measurement-technique/water-flow-rate">Water Flow Rate (Gpm)</a>
            </td>
        </tr>
    </tbody>
</table>

### Calculation Methodology

The general methodology for quantifying the useful energy supplied by a liquid-to-liquid heat exchanger is determined by the differential of temperature and rate of flow of the supply stream. These values are multiplied by the heat capacity and density of the liquid (e.g., water, water-glycol mix) to find the energy flow rate. The energy flow rate can be regressed against a controlling variable (such as outdoor air, pump runtime or flow rate) to develop a regression model. Depending on the variability of operations, daily or weekly models may be developed to better characterize the component.

<br></br>
<i>Click the button below to go to the calculators for this component.</i>
<br></br>

{{< calculation_methodology calculation_methodology_id=24 >}}

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