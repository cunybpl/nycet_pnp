---
title: Cooling Tower Fans Energy Consumption
type: calculation
layout: calculation_methodology
calculation_methodology_id: 4
excerpt: For evaporative cooling towers, the equations and calculators in this page estimate the annual energy consumption of single-speed or variable-speed cooling tower fans.
related_systems:
  - Chilled Water Loop
  - Condenser Water Loop  
related_components:
  - Constant-speed, Constant-volume Pump and Motor
related_measurements:
  - Electrical Current
associated_calculators:
  - Constant Speed CT Fan Energy Using Motor Runtime Data
  - Constant One or Two Speed CT Fan Energy Using kW Data
  - Constant One or Two Speed CT Fan Energy Using Electrical Current Data
  - Variable Speed CT Fan Energy Using kW Data
url: "/documents/calculation-methodology/cooling-tower-fans-energy-consumption"
---

## Introduction

This methodology applies to evaporative cooling towers and the ECM is the installation of VFDs on the fan motors. In the pre-retrofit condition, a single- or two-speed fan in each cooling tower cell is run at a constant speed. There are several operating modes for a cooling tower, based upon how much variation is possible with the fan speeds. Cells are turned on or off depending on how much cooling is needed in the building. With two-speed fans, operational optimization occurs by staging each cell to turn on sequentially at low speed until all cells are on, and then begin turning the fans to full speed as the load increases. With single-speed fans, each cell is turned on as the load increases.

In a retrofit with VFDs, the fans in all cells are run simultaneously and their speed is modulated based on the cooling load. As fan power is the cube of the fan speed, energy can be saved by running the fans at lower speeds. The speed modulation is controlled in three possible modes: 

1) To keep the condenser water entering temperature constant
2) To keep the approach temperature constant
3) To minimize overall system power consumption. 

This methodology only covers the measurement of energy consumption with respect to maintaining a constant condensing water entering temperature.

Regardless of the operating sequence of the cells or the speed of the fans, there is usually a minimum water flow per cell and minimum flow per chiller that must be maintained. This guide assumes that the pre- and post-retrofit flow rates through the cooling tower do not change, as would be expected if a VFD was installed on the condenser water pump at the same time as the VFDs on the fans. 

## Calculators

<div class="table-wrapper">
<table>
    <caption>Table 1. Calculators for Cooling Tower (CT) Fans Energy Consumption</caption>
    <thead>
        <tr>
            <td>
                <strong>Calculator (Downloadable Files)</strong>
            </td>
            <td>
                <strong>Description</strong>
            </td>
            <td>
                <strong>Required Data To Use This Calculator</strong>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <a href="/downloadables/cscv_CT_fan_single_speed_runtime_data_calculator_2023_0117.xlsx" download>Constant Speed CT Fan Energy Using Motor Runtime Data.xlsx</a>
            </td>
            <td>
                Uses motor runtime data in seconds per hour from the cooling tower fan motor. Spot measurements of true RMS power is also required.
            </td>
            <td>
                <ul>
                <a href="/documents/measurement-technique/motor-runtime"><li>Hourly motor runtime (seconds)</li></a> 
                <a href="/documents/measurement-technique/true-rms-power"><li>One-time true RMS power (kW)</li></a> 
                <a href="/documents/measurement-technique/outdoor-air-temperature"><li>Hourly Outdoor air temperature (F)</li></a> 
                <a href="/documents/measurement-technique/relative-humidity"><li>Hourly Relative humidity (%)</li></a>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/downloadables/cscv_CT_fan_single_speed_kW_data_calculator_2023_0113.xlsx" download>Constant One or Two Speed CT Fan Energy Using kW Data.xlsx</a>
            </td>
            <td>
                Uses measured hourly kW data to estimate annual energy consumption for a constant-speed one- or two-speed cooling tower fan motor.
            </td>
            <td>
                <ul>
                    <a href="/documents/measurement-technique/true-rms-power"><li>Hourly true RMS power (kW)</li></a>
                    <a href="/documents/measurement-technique/outdoor-air-temperature"><li>Hourly Outdoor air temperature (F)</li></a>
                    <a href="/documents/measurement-technique/relative-humidity"><li>Hourly Relative Humidity (%)</li></a>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/downloadables/cscv_CT_fan_two_speed_current_data_calculator_2023_0117.xlsx" download>Constant One or Two Speed CT Fan Energy Using Electrical Current Data.xlsx</a>
            </td>
            <td>
                Uses electric current data as a proxy for power to estimate the annual energy consumption of the cooling tower fans. Spot measurements of voltage and power factor are required.
            </td>
            <td>
                <ul>
                <a href="/documents/measurement-technique/electrical-current"><li>Hourly current (Amps)</li></a> 
                <a href="/documents/measurement-technique/true-rms-power"><li>One-time true RMS power (kW) at different fan speeds</li></a>
                <a href="/documents/measurement-technique/outdoor-air-temperature"><li>Hourly Outdoor air temperature (F)</li></a> 
                <a href="/documents/measurement-technique/relative-humidity"><li>Hourly Relative humidity (%)</li></a>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/downloadables/vsvv_CT_fan_kW_data_calculator_2023_0110.xlsx" download>Variable Speed CT Fan Energy Using kW Data.xlsx</a>
            </td>
            <td>
                Uses measured hourly kW data to calculate annual energy for a VS cooling tower fan
            </td>
            <td>
                <ul>
                <a href="/documents/measurement-technique/true-rms-power"><li>Hourly true RMS power (kW)</li></a> 
                <a href="/documents/measurement-technique/outdoor-air-temperature"><li>Hourly Outdoor air temperature (F)</li></a>
                <a href="/documents/measurement-technique/relative-humidity"><li>Hourly Relative humidity (%)</li></a>
                <ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

## Cooling Tower (CT) Fan Calculations

### Constant Speed CT Fan Energy Using Motor Runtime Data

This calculation is for a cooling tower with constant-speed fans. Measured input data include spot measurements for true power and motor operational time per hour, as measured by motor on/off loggers on each fan in the tower.

1. Convert seconds on per hour to average energy per hour (Worksheet: “Step 2. Energy Calcs”).  Repeat for all fans and then sum to get a total for the cooling tower. Note that since the data loggers cannot be perfectly synced, the time stamp for the dataset for each fan will be different. The workbook time-aligns the datasets.

<p class="equation equation-center">\begin{equation} \overline{E}_{f}(t) = \frac{On_f(t)*P_f}{3600} \end{equation}</p>

<p class="equation equation-center">\begin{equation} \overline{E}(t) = \sum_{f=1}^{F} \overline{E}_{f}(t) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{E}_{f}(t) =$ Average hourly fan motor energy on for each fan, f, kWh</p>
<p class="equation">$t =$ Time index</p>
<p class="equation">$On_{f}(t) =$ Measured time that motor is on for each fan, f, seconds</p>
<p class="equation">$P_{f} =$ One-time power measurement for each fan, f, kW</p>
<p class="equation">$\overline{E}(t) =$ Total average energy of all fan motors, kWh</p>
<p class="equation">$F =$ Total number of fans</p>

2. Wet-bulb temperature is calculated from the measured dry-bulb temperature and measured relative humidity with the following empirical equation (Worksheet: “Step 3 Wetbulb Calcs”)[^1].

<p class="equation equation-center">\begin{equation} T_{wb} = T_{db}tan^{-1}[0.151977(RH+8.313659)^{1/2}] \end{equation}</p>
<p class="equation equation-center">\begin{equation*} +tan^{-1}(T_{db}+RH) \end{equation*}</p>
<p class="equation equation-center">\begin{equation*} -tan^{-1}(RH-1.676331)+0.00391838(RH)^{3/2} \end{equation*}</p>
<p class="equation equation-center">\begin{equation*} *tan^{-1}(0.023101*RH) - 4.686035 \end{equation*}</p>

<p class="step-indent">Where,</p>
<p class="equation">$T_{wb} =$ Wet-bulb temperature, C</p>
<p class="equation">$T_{db} =$ Dry-bulb temperature, C</p>
<p class="equation">$RH =$ Relative Humidity, %</p>

3. To model the total fan energy at different wet-bulb temperatures, a second-order polynomial regression model of total fan energy as a function wet-bulb temperature is fit (Worksheet: “Step 4 Regression”). 

<p class="equation equation-center">\begin{equation} E(T_{wb}) = a*T_{wb}^{2} + b*T_{wb} + c \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E(T_{wb}) =$ Average hourly fan energy, kWh</p>
<p class="equation">$a,b,c =$ Regression Coefficients</p>

4. Calculate operating hours (Worksheet: “Step 5 Daily Op Hrs”).

<p class="equation equation-center">\begin{equation} On(t) = \begin{cases} 1 & \text{if } \overline{E}(t) > 0\\
    0 & \text{if } \overline{E}(t) = 0 \end{cases} \end{equation}</p>

<p class="equation equation-center">\begin{equation} \overline{On}_{d,h} = \begin{cases} 1 & \text{if } \overline{E}(n) > 0 \text{ for any } n \in N(d,h) \\ 0 & 0 \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$On(t) =$ Cooling tower fans are on, binary</p>
<p class="equation">$\overline{On}_{d,h} =$ Cooling tower is on for a given day of the week, d, and hour of the day, h, binary</p>
<p class="equation">$N(d,h) =$ Total number of measured data points that fall on day of week, d, and hour of the day, h</p>
<p class="equation">$n \in N(d,h) =$ Index for the subset of measured data points that fall on day of week, d, and hour of the day, h</p>

5. Calculate energy used for full year for each fan (Worksheet: “Step 6 Results”).

<p class="equation equation-center">\begin{equation} E = \sum_{t=1}^{8760} \overline{On}_{d,h}(t) * CoolingSeason(t) * E(T_{wb}(t)) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E =$ Annual energy, kWh</p> 
<p class="equation">$CoolingSeason(t) =$ Does the given hour, t, fall within the cooling season, binary</p> 

### Constant One or Two Speed CT Fan Energy Using kW Data

This calculation is for a cooling tower with constant-speed fans. Measured input data is average hourly power draw (in kW) as measured by a DENT power logger for each fan in the cooling tower.

1. Total energy for each hour (Worksheet: "Step 2 Energy Calcs"). Since the measured power value (kW) is the average for an hour, it is equivalent to the energy for the hour (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>).

<p class="equation equation-center">\begin{equation} \bar{E}(t) = \sum_{f = 1}^F \bar{E}_{f}(t) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\bar{E}_{f}(t) =$ average hourly fan motor energy on for each fan, f, kWh</p> 
<p class="equation">$\bar{E} =$ total average energy of all fan motors, kWh</p>
<p class="equation">$F =$ total number of fans in the cooling tower</p>
<p class="equation">$t =$ time index</p>

2. The remainder of the workbook is the same as the motor runtime logger workbook, and hence uses Equations 3 through 8 to calculate the total annual energy.

### Constant One or Two Speed CT Fan Energy Using Electrical Current Data

This calculation is for a cooling tower with constant-speed fans. Measured input data include hourly average current (in Amps) as directly measured by current transformers, and spot measurements for true power for each fan in the cooling tower. 

1. Total energy for each hour (Worksheet: “Step 2 Energy Calcs”). Since the measured current (Amps) is the average for an hour, Equation 10 yields the average energy per hour (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) assuming voltage is constant.  

<p class="equation equation-center">\begin{equation} \overline{E}_{f}(t) = \frac{i_{f}(t) * P_{f}}{I_{f}} \end{equation}</p>

<p class="equation equation-center">\begin{equation} \overline{E}(t) = \sum_{f=1}^{F} \overline{E}_{f}(t) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{E}_{f}(t) =$ Average hourly fan motor energy on for each fan, f, kWh</p>
<p class="equation">$i_{f}(t) =$ Average hourly current for each fan, f, Amps</p>
<p class="equation">$t =$ Time index</p>
<p class="equation">$P_{f} =$ One-time power measurement for each fan, f, kW</p>
<p class="equation">$I_{f} =$ One-time current measurement for each fan, f, Amps</p>
<p class="equation">$\overline{E} =$ Total average energy of all fan motors, kWh</p>
<p class="equation">$F =$ Total number of fans in the cooling tower</p>

2. The remainder of the workbook is the same as the on/off logger workbook, and hence uses Equations 3 through 8 to calculate the total annual energy. 

### Variable Speed CT Fan Energy Using kW Data

This calculation is for a cooling tower with variable-speed fans. Measured input data is average hourly power draw (in kW) as measured by a DENT data-logging power logger for one fan in the cooling tower. It is assumed that all the remaining fans are run at the same speed. 

1. Total energy for each hour (Worksheet: “Step 2 Energy Calcs”). Since the measured power value (kW) is the average for an hour, it is equivalent to the energy for the hour (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>).

<p class="equation equation-center">\begin{equation} \overline{E}(t) = \overline{E}_{1}(t) * F \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{E}_{1}(t) =$ Average hourly fan motor energy for the measured fan, kWh</p>
<p class="equation">$\overline{E} =$ Total average energy of all fan motors, kWh</p>
<p class="equation">$F =$ Total number of fans in the cooling tower</p>
<p class="equation">$t =$ Time index</p>

2. The remainder of the workbook is the same as the on/off logger workbook, and hence uses Equations 3 through 8 to calculate the total annual energy. 

## Further Reading

- For more information on the different types of fans found in AHU systems, please read “Application of Fans in Commercial HVAC Equipment” from the Carrier Corporation: https://www.utcccs-cdn.com/hvac/docs/1001/Public/0F/04-581070-01.pdf 
 
- For more information of the different types of motors that can be used in an AHU retrofit, please read Chapter 7 (starts on page 91) of the Premium Efficiency Motor Selection and Application Guide from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2014/04/f15/amo_motors_handbook_web.pdf#page=91 
 
- For general information on Option A M&V guides, please read section 4.2 (starts on page 23) of “M&V Guidelines: Measurement and Verification for Performance-based Contracts Version 4.0” from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2016/01/f28/mv_guide_4_0.pdf#page=23

## Footnotes

[^1]: Stull, R., “Wet-Bulb Temperature from Relative Humidity and Air Temperature”, J. of the AmericanMeteorological Society, Nov 2011, pp. 2267-2269