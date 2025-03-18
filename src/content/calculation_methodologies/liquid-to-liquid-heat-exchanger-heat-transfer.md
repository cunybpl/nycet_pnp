---
title:  Liquid-to-liquid Heat Exchanger Heat Transfer
type: calculation
layout: calculation_methodology
calculation_methodology_id: 7
excerpt: For a fixed plate heat exchanger, the equations used in this methodology and calculator estimate the annual sensible heat transfer.
related_systems:
  - Water-cooled Chiller
  - Waterside Economizer
related_components:
  - Liquid-to-liquid Heat Exchanger
associated_calculators:
  - Liquid-to-liquid Heat Transfer Calculator
url: "/documents/calculation-methodology/liquid-to-liquid-heat-exchanger-heat-transfer"
---

## Introduction

This calculation methodology is loosely based on the 2020 ASHRAE Handbook – Systems and Equipment, Chapter 26 for air-to-air heat exchangers. Part of the methodology described in Chapter 26 is applicable in liquid-to-liquid heat transfer systems, specifically about sensible heat. There is no latent heat transfer in liquid-to-liquid heat exchangers (no moisture control) only sensible heat transfer which can be measured by monitoring the liquid’s temperature. If the temperature of the liquids in the system changes as they flow through the heat exchanger, heat transfer is happening.

This methodology is applicable for systems that have liquid-to-liquid heat exchangers such as waterside economizers, blowdown heat recovery, and condensate cooling systems. Although this calculator can be used to evaluate energy transfer by any fluids (e.g., refrigerants), water is the only fluid to be evaluated in this methodology.  Figure 1 shows an example of a plate and frame heat exchanger with the required measurement points. 

<a href="/images/calculation-methodology/2024_0506_L-t-l Calc Figure 1.jpeg">
    <figure class="figure mb-4 mt-3">
        <img src="/images/calculation-methodology/2024_0506_L-t-l Calc Figure 1.jpeg" class="figure-img img-fluid rounded" alt="Figure 1. A plate and frame liquid-to-liquid heat exchanger with measurement points.">
        <figcaption class="figure-caption text-left">Figure 1. A plate and frame liquid-to-liquid heat exchanger with measurement points.</figcaption>
    </figure>
</a>

<!-- ## Calculator

<div class="table-wrapper">
<table>
    <caption>Table 1. Liquid-to-liquid heat transfer calculator</caption>
    <thead>
        <tr>
            <th>
                Calculator (Downloadable File)
            </th>
            <th>
                Description
            </th>
            <th>
                Required Data To Use This Calculator
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                <a href="/downloadables/liquid_to_liquid_heat_transfer_calculator_2023_0626.xlsx" download>Liquid-to-liquid Heat-transfer Calculator.xlsx</a>
            </td>
            <td>
                Uses the flow rate and temperature of two fluids in the system to calculate the heat transfer.
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/water-flow-rate">Fluid Flow Rate (GPM)</a></li>
                    <li><a href="/documents/measurement-technique/pipe-surface-water-temperature">Fluid Temperature (F)</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div> -->

## Heat-transfer Calculation

This methodology works with hourly data only and each measurement is taken at the start of the hour. If the system operates seasonally, measurements should be taken for the duration of the season at one-hour intervals. If the system is not weather dependent, then a minimum of six (6) weeks of hourly data is required for this methodology to work. 

### Calculator

{{< downloadable_file title="Liquid-to-liquid Heat Transfer" >}}

### Measurements

The calculator relies on the measured data from the following measurement techniques:

{{< measurement_technique measurement_technique_id=11 >}}

{{< measurement_technique measurement_technique_id=16 >}}

### Methodology

The following equations are used to calculate the sensible heat transferred by the heat exchanger for a full year. All data used in this section should be measured with data loggers per the [measurements techniques](#measurements) above. 

<div class="table-wrapper">
<table>
    <caption>Table 2. Hourly measured data to calculate heat transfer.</caption>
    <thead>
        <tr>
            <th>
                Hourly Measured Values
            </th>
            <th></th>
        </tr>
    <tbody>
        <tr>
            <td>
                $$T_1, T_2, T_3, T_4$$
            </td>
            <td>
                Fluid Temperatures (F)
            </td>
        </tr>
        <tr>
            <td>
                $$Q_1$$
            </td>
            <td>
                Fluid 1: Water flow rate (GPM)
            </td>
        </tr>
    </tbody>
</table> 
</div>

1. Calculate the mass flow rate of fluid 1 leaving the heat exchanger for each hour interval.

<p class="equation equation-center">\begin{equation} \dot{m_1} = Q_1 * 0.13368 * d \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\dot{m_1} =$ hourly mass flow rate of fluid 1 leaving the heat exchanger ($lb_m$/min)</p>
<p class="equation">$Q_1 =$ hourly flow rate of fluid 1 leaving the heat exchanger (GPM)</p>
<p class="equation">$d =$ density of water, 62 $(lb/ft^3)$</p>
<p class="equation">$0.13368 =$ unit conversion, GPM to $(ft^3/min)$</p>

2. Heat transfer should be calculated only when the heat exchanger is operating. This can be determined by checking the temperature difference across the recovery system in both the supply side and waste heat stream side. Another condition is that water flow should exist across the heat exchanger.

<p class="equation equation-center">\begin{equation} \text{If} \hspace{2mm} \begin{cases} T_1 - T_2 > 1 & \text{if heat transfer occurs}\\
    T_1 - T_2 < -1 & \text{if heat transfer occurs} \\
    -1 < T_1 - T_2 < 1 & \text{if no heat transfer occurs} \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$T_1 =$ meausured hourly temperature of fluid 1 entering the heat exchanger (F)</p>
<p class="equation">$T_2 =$ meausured hourly temperature of fluid 1 leaving the heat exchanger (F)</p>

<p class="equation equation-center">\begin{equation} \text{If} \hspace{2mm} \begin{cases} T_3 - T_4 > 1 & \text{if heat transfer occurs}\\
    T_3 - T_4 < -1 & \text{if heat transfer occurs} \\
    -1 < T_3 - T_4 < 1 & \text{if no heat transfer occurs} \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$T_3 =$ meausured hourly temperature of fluid 1 entering the heat exchanger (F)</p>
<p class="equation">$T_4 =$ meausured hourly temperature of fluid 1 leaving the heat exchanger (F)</p>

<p class="equation equation-center">\begin{equation} \text{If} \hspace{2mm} \begin{cases} Q_1 > 0 & \text{if heat transfer occurs}\\
    Q_1 < 0 & \text{if no heat transfer occurs}  \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$Q_1 =$ hourly flow rate of fluid 1 leaving the heat exchanger (GPM)</p>

3. Calculate the sensive heat transferred by the heat exchanger for each hour interval.

<p class="equation equation-center">\begin{equation} q_s = \dot{m_1}c(T_1 - T_2) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$q_s =$ sensible heat transferred by the heat exchanger every hour (Btu/h)</p>
<p class="equation">$c =$ specific heat of water at normal atmospheric pressure (Btu/lb F), 1 (Btu/lb F)</p>
<p class="equation">$\dot{m_1} =$ hourly mass flow rate of fluid 1 leaving the heat exchanger ($lb_m$\min)</p>
<p class="equation">$T_1 =$ hourly fluid 1 entering the heat exchanger temperature (F)</p>
<p class="equation">$T_2 =$ hourly fluid 1 leaving the heat exchanger temperature (F)</p>

4. Calculate the total heat transfer by the heat exchanger for a whole year.

<p class="equation equation-center">\begin{equation} Q_s = \sum_{t=0}^{8760} q_s \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$Q_s =$ total sensible heat transfer for a whole year (Btu/h)</p>
<p class="equation">$q_s =$ sensible heat transferred by the heat exchanger every hour (Btu/h)</p>
<p class="equation">$t =$ hours</p>

## Further Reading

- For general information on Option A M&V guides, please read section 4.2 (starts on page 23) of “M&V Guidelines: Measurement and Verification for Performance-Based Contracts Version 4.0” from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2016/01/f28/mv_guide_4_0.pdf#page=23

- ASHRAE (2020) “2020 ASHRAE Handbook-HVAC Systems and Equipment”