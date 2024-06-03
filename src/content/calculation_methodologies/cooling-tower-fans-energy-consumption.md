---
title: Cooling Tower Fans Energy Consumption
type: calculation
layout: calculation_methodology
calculation_methodology_id: 4
excerpt: Measure the electricity consumed by the pump motor. Depending on the variability of operations, daily or weekly models may be developed to better characterize the component. The typical energy consumption of a constant-speed pump is estimated using the simulated yearly schedule of the pump. 
related_systems:
  - Chilled Water Loop
  - Condenser Water Loop  
related_components:
  - Constant-speed, Constant-volume Pump and Motor
related_measurements:
  - Electrical Current
associated_calculators:
  - Calculator 1 but the name is super long and I am truncating it
  - Calculator 2
  - Calculator 3
  - Calculator 4
url: "/documents/calculation-methodology/cooling-tower-fans-energy-consumption"
---

## Introduction

## Calculators

<table>
    <caption>Table 1. Calculators for Cooling Tower Fans Energy Consumption</caption>
    <thead>
        <tr>
            <td>
                <p><strong>Calculator</strong></p>
            </td>
            <td>
                <p><strong>Description</strong></p>
            </td>
            <td>
                <p><strong>Required Data To Use This Calculator</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <a href="/calculators/cooling-tower-fans-energy-consumption/CT Fan Constant Current.xlsx" download><p></p>Constant Speed Cooling Tower Fan Current</a>
            </td>
            <td>
                <p>Uses measured hourly current data to calculate annual energy for a VS cooling tower fan. Also requires spot measurements of voltage and power factor.</p>
            </td>
            <td>
                <ul>
                <li>Current (amps) - (one-time current at rated speeds)</li> 
                <li>Outdoor air temperature (dry-bulb F)</li> 
                <li>Relative humidity (%)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/calculators/cooling-tower-fans-energy-consumption/CT Fan Constant OnOff.xlsx" download><p></p>Constant Speed Cooling Tower Fan Runtime</a>
            </td>
            <td>
                <p>Uses measured hourly runtime in minutes or seconds of a CS cooling tower fan. Also required a spot measurement of kW.</p>
            </td>
            <td>
                <ul>
                <li>Runtime (seconds)</li> 
                <li>One-time true RMS power</li> 
                <li>Outdoor air temperature (dry-bulb F)</li> 
                <li>Relative humidity (%)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/calculators/cooling-tower-fans-energy-consumption/CT Fan Constant Power.xlsx" download><p></p>Constant Speed Cooling Tower Fan kW</a>
            </td>
            <td>
                <p>Uses measured hourly kW data to calculate annual energy for a VS cooling tower fan</p>
            </td>
            <td>
                <ul>
                <li>Fan power (kW)</li> 
                <li>Outdoor air temperature (dry-bulb F)</li> 
                <li>Relative humidity (%)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/calculators/cooling-tower-fans-energy-consumption/CT Fan Variable Power.xlsx" download><p></p>Variable Speed Cooling Tower Fan KW</a>
            </td>
            <td>
                <p>Uses measured hourly kW data to calculate annual energy for a VS cooling tower fan</p>
            </td>
            <td>
                <ul>
                <li>Fan power (kW)</li> 
                <li>Outdoor air temperature (dry-bulb F)</li> 
                <li>Relative humidity (%)</li>
                <ul>
            </td>
        </tr>
    </tbody>
</table>

## Cooling Tower Fan Calculations

### Constant-speed Fans Using Motor On/Off Logger

This calculation is for a cooling tower with constant-speed fans. Measured input data include spot measurements for true power and motor operational time per hour, as measured by motor on/off loggers on each fan in the tower.

1. Convert seconds on per hour to average energy per hour (Worksheet: “Step 2. Energy Calcs”).  Repeat for all fans and then sum to get a total for the cooling tower. Note that since the data loggers cannot be perfectly synched, the time stamp for the dataset for each fan will be different. The workbook time-aligns the datasets.

<p class="equation equation-center">\begin{equation} \overline{E}_{f}(t) = \frac{On_f(t)*P_f}{3600} \end{equation}</p>

<p class="equation equation-center">\begin{equation} \overline{E}(t) = \sum_{f=1}^{F} \overline{E}_{f}(t) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{E}_{f}(t) =$ Average hourly fan motor energy on for each fan, f, kWh</p>
<p class="equation">$t =$ Time index</p>
<p class="equation">$On_{f}(t) =$ Measured time that motor is on for each fan, f, seconds</p>
<p class="equation">$P_{f} =$ One-time power measurement for each fan, f, kW</p>
<p class="equation">$\overline{E}(t) =$ Total average energy of all fan motors, kWh</p>
<p class="equation">$F =$ Total number of fans</p>

2. Wet-bulb temperature is calculated from the measured dry-bulb temperature and measured relative humidity with the following empirical equation <span class="tooltip-pnp">(Worksheet: “Step 3 Wetbulb Calcs”)<span class="tooltiptext"> Stull, R., “Wet-Bulb Temperature from Relative Humidity and Air Temperature”, J. of the AmericanMeteorological Society, Nov 2011, pp. 2267-2269 </span></span>

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

### Constant-speed Fans Using a Data-logging Power Meter

This calculation is for a cooling tower with constant-speed fans. Measured input data is average hourly power draw (in kW) as measured by a DENT data-logging power logger for each fan in the cooling tower. 

1. Total energy for each hour (Worksheet: “Step 2 Energy Calcs”). Since the measured power value (kW) is the average for an hour, it is equivalent to the energy for the hour (kWh).

<p class="equation equation-center">\begin{equation} \overline{E}(t) = \sum_{f=1}^{F} \overline{E}_{f}(t) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{E}_{f}(t) =$ Average hourly fan motor energy on for each fan, f, kWh</p> 
<p class="equation">$\overline{E} =$ Total average energy of all fan motors, kWh</p> 
<p class="equation">$F =$ Total number of fans in the cooling tower</p> 
<p class="equation">$t =$Time index</p> 

2. The remainder of the workbook is the same as the on/off logger workbook, and hence uses Equations 3 through 8 to calculate the total annual energy. 

### Constant-speed Fans Using a Current Transformer

This calculation is for a cooling tower with constant-speed fans. Measured input data include hourly average current (in Amps) as directly measured by current transformers, and spot measurements for true power for each fan in the cooling tower. 

1. Total energy for each hour (Worksheet: “Step 2 Energy Calcs”). Since the measured current (Amps) is the average for an hour, Equation 10 yields the average energy per hour (kWh) assuming voltage is constant.  

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

### Variable-speed Fans Using a Data-logging Power Meter

This calculation is for a cooling tower with variable-speed fans. Measured input data is average hourly power draw (in kW) as measured by a DENT data-logging power logger for one fan in the cooling tower. It is assumed that all the remaining fans are run at the same speed. 

1. Total energy for each hour (Worksheet: “Step 2 Energy Calcs”). Since the measured power value (kW) is the average for an hour, it is equivalent to the energy for the hour (kWh).

<p class="equation equation-center">\begin{equation} \overline{E}(t) = \overline{E}_{1}(t) * F \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{E}_{1}(t) =$ Average hourly fan motor energy for the measured fan, kWh</p>
<p class="equation">$\overline{E} =$ Total average energy of all fan motors, kWh</p>
<p class="equation">$F =$ Total number of fans in the cooling tower</p>
<p class="equation">$t =$ Time index</p>

2. The remainder of the workbook is the same as the on/off logger workbook, and hence uses Equations 3 through 8 to calculate the total annual energy. 

## Additional Resources

For more information on the different types of fans found in AHU systems, please read “Application of Fans in Commercial HVAC Equipment” from the Carrier Corporation: https://www.utcccs-cdn.com/hvac/docs/1001/Public/0F/04-581070-01.pdf 
 
For more information of the different types of motors that can be used in an AHU retrofit, please read Chapter 7 (starts on page 91) of the Premium Efficiency Motor Selection and Application Guide from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2014/04/f15/amo_motors_handbook_web.pdf#page=91 
 
For general information on Option A M&V guides, please read section 4.2 (starts on page 23) of “M&V Guidelines: Measurement and Verification for Performance-based Contracts Version 4.0” from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2016/01/f28/mv_guide_4_0.pdf#page=23 