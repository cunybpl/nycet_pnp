---
title: Air-to-air Heat Exchanger
type: component
excerpt: Achieves heat transfer using temperature difference between two airstreams without direct contact of these airstreams.
thumbnail_image: "images/plants/water-cooled-chilled-water-plant/chilled-water-plant-overview.jpeg"
associated_systems:
  - 
related_systems:
  - 
layout: guide
url: "/documents/components/air-to-air-heat-exchanger"
---

## General Overview 

Air-to-air heat exchangers transfer energy between two airstreams that must be at different temperatures for sensible heat transfer and different moisture contents for latent heat transfer.   

In a building, an air-to-air heat exchanger can be used to recover latent or sensible heat either during the cooling or heating season. Recovering energy from the exhaust stream lessens the energy load on the air handling plant. Typical air-to-air heat exchangers include fixed plate heat exchangers and rotary wheel heat exchangers, with the former typically only recovering sensible heat. 

Table 1 shows the plant and system configurations that may contain an air-to-air heat exchanger. 

<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 1. Plants and systems applicable to air-to-air heat exchanger.</caption>
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
                <p>Air Handling Plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="24.285714285714285%" bgcolor="#e2efd9">
                <p>AHU with Heat Recovery Unit</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.964285714285715%" bgcolor="#e2efd9">
                <p>Fixed plate heat exchanger</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.785714285714285%" bgcolor="#e2efd9">
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="21.964285714285715%" bgcolor="#e2efd9">
                <p>Air Handling Plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="24.285714285714285%" bgcolor="#e2efd9">
                <p>AHU with Heat Recovery Unit</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.964285714285715%" bgcolor="#e2efd9">
                <p>Rotary wheel heat exchanger</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.785714285714285%" bgcolor="#e2efd9">
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="21.964285714285715%" bgcolor="#e2efd9">
                <p>Air Handling Plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="24.285714285714285%" bgcolor="#e2efd9">
                <p>A dedicated outdoor air system (DOAS)</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="26.964285714285715%" bgcolor="#e2efd9">
                <p>Fixed plate or rotary wheel heat exchanger</p>
            </td>
            <td class="fr-cell-fixed " style="background-color: rgb(255, 255, 255);" width="26.785714285714285%" bgcolor="#e2efd9">
                <p>OAT</p>
            </td>
        </tr>
    </tbody>
</table>

## Evaluation of Heat Transfer 

The primary energy source in an air-to-air heat exchanger is thermal energy. Table 2 provides a summary of measurements needed to quantify the annual energy transfer and operating characteristics of an air-to-air heat exchanger. 

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
                <p>Energy recovered by the heat exchanger</p>
            </td>
            <td width="33.333333333333336%">
                <p>Average hourly Btu/h transferred to the incoming air&nbsp;</p>
            </td>
            <td width="33.333333333333336%">
                <ul>
                <li>Average hourly incoming airflow (cfm)</li>
                <li>Temperature on each side of heat exchanger for incoming airstream (two measurement points total, F)&nbsp;</li>
                <li>Humidity of supply air on either side of the heat exchanger (two measurement points total, only for latent heat recovering exchangers, RH)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                <p>Heat recovery system electricity consumption (if applicable)</p>
            </td>
            <td width="33.333333333333336%">
                <p>Average hourly motor kWh (for rotary wheel heat exchangers)</p>
            </td>
            <td width="33.333333333333336%">
                <p>Average hourly true RMS energy (kWh)</p>
            </td>
        </tr>
    </tbody>
</table>

## Measurement Strategy 

The measurement strategy for an air-to-air heat exchanger is to measure the heat transfer (Btu/h) from airstream to airstream within the heat exchanger, as well as any energy consuming components associated with the heat exchanger, such as the energy wheel motor. 

Figure 1 shows the measurement points in a fixed plate heat exchanger. 

<a href="/images/components/air-to-air-heat-exchanger/2024_0603_air-to-air heat exchanger component figure 1.png">
<figure class="figure">
  <img src="/images/components/air-to-air-heat-exchanger/2024_0603_air-to-air heat exchanger component figure 1.png" class="figure-img img-fluid rounded zoom" alt="Figure 1. Measurement boundary for an air-to-air heat exchanger.">
  <figcaption class="figure-caption text-left">Figure 1. Measurement boundary for an air-to-air heat exchanger.</figcaption>
</figure>
</a>

Figure 2 shows the measurement points in a rotary wheel heat exchanger.

<a href="/images/components/air-to-air-heat-exchanger/2024_0603_air-to-air heat exchanger component figure 2.png">
<figure class="figure">
  <img src="/images/components/air-to-air-heat-exchanger/2024_0603_air-to-air heat exchanger component figure 2.png" class="figure-img img-fluid rounded zoom" alt="Figure 2. Rotary wheel heat exchanger measurement points.">
  <figcaption class="figure-caption text-left">Figure 2. Rotary wheel heat exchanger measurement points.</figcaption>
</figure>
</a>

## Calculation Methodology 

The general methodology for quantifying the energy impact of an air-to-air heat exchanger is to determine the temperature differential on the supply side of the heat exchanger and the supply airflow.  If latent energy is also transferred, this is determined by the humidity differential across the heat exchanger. The supply flow rate can be measured or assumed, depending on available resources. These energy transfer values can be regressed against a controlling variable (such as outdoor air temperature) to develop a regression model.  Depending on the variability of operations, daily or weekly models may be developed to better characterize the component.  

## References 

ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 1. HVAC SYSTEM ANALYSIS AND SELECTION. I-P Edition.  

ASHRAE (2020). “ASHRAE Handbook: HVAC Systems and Equipment,” Chapter 26. AIR-TO-AIR ENERGY RECOVERY EQUIPMENT. I-P Edition.  

CenterPoint Energy (2022). “Runaround Loops.” Energy Recovery Systems. https://www.centerpointenergy.com/en-us/Services/Pages/Runaround-loops-MN.aspx?sa=MN&au=bus 

Heatex (2022). “Heat Exchanger Basics.” https://www.heatex.com/knowledge/heat-exchanger-basics. 
