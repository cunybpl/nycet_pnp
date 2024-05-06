---
title: Pump Motors Energy Consumption
type: calculation
layout: calculation_methodology
calculation_methodology_id: 6
excerpt: Calculation methodologies for various pumps and motors
url: "/documents/calculation-methodology/pump-motors-energy-consumption"
---

## Introduction

## Calculators

<table>
    <caption>Table 1. Pump and Motor Calculators</caption>
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
                <p><a href="/calculators/secondary-chilled-water-pump-motors-energy-consumption/2020_0427_PnP-EC-06_chiller_pump_cscv_kwh_pc.xlsx" download>Constant-speed, constant-volume pump energy calculator</a></p>
            </td>
            <td>
                <p>Uses motor runtime (in seconds) and true RMS power (kW) data to estimate annual energy consumption of a CSCV pump motor.</p>
            </td>
            <td>
                <ul>
                <li><a href="/documents/measurement-technique/motor-runtime">Hourly motor runtime (seconds)</a></li> 
                <li><a href="/documents/measurement-technique/electrical-spot-measurement">One-time true RMS power (kW)</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/calculators/secondary-chilled-water-pump-motors-energy-consumption/2020_0427_PnP-EC-10_chiller_pump_variable_volume_pc.xlsx" download>Variable-speed, variable-volume pump energy calculator</a></p>
            </td>
            <td>
                <p>Uses hourly true RMS power to calculate hourly energy consumption then estimate the annual energy consumption of a VSVV pump motor</p>
            </td>
            <td>
                <ul>
                <li><a href="/documents/measurement-technique/true-rms-power">Hourly true RMS power (kW)</a></li> 
                <li><a href="/documents/measurement-technique/outside-air-temperature">Hourly outside air temperature (F)</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Pump and Motor Calculations

### Constant-speed, constant-volume pump energy calculator

This calculation tool is for a constant speed, constant volume system. Measured input data include spot measurements for true power and motor operational time per hour, as measured by motor on/off loggers. 

1. Convert seconds on per hour to percent on per hour (Worksheet: "Step 2. Percent Runtime Calcs").

<p class="equation equation-center">\begin{equation} \%On(t) = \frac{On(t)}{3600} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\%On(t) =$ Percent of an hour that the pump motor is on, %</p>
<p class="equation">$On(t) =$ Measured time that pump motor is on, seconds</p>
<p class="equation">$t =$ Index for each measured data point</p>

2. Average % hour motor is on for each hour of each day of the week (Worksheet: "Step 3. Daily Avg Runtime Calcs").

<p class="equation equation-center">\begin{equation} \overline{\%On}_{d,h} = \frac{\sum_{n=1}^{N(d,h)} \%On(n)}{N(d,h)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{\%On}_{d,h} =$ Average % time motor is on per hour for given day of week, d, and hour of the day, h, %</p>
<p class="equation">$N(d,h) =$ Total number of measured data points that fall on day of week, d, and hour of the day, h</p>
<p class="equation">$n \in t(d,h) =$ Index for the subset of measured data points that fall on day of week, d, and hour of the day, h</p>

3. Find the average hours per day pump is on (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} \overline{HrsOn}_{d} = \sum_{h=1}^{24} \overline{\%On}_{d,h} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{HrsOn}_{d} =$ Average hours per day for given day of week, d, hours</p>

4. Calculate energy used for full year (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} WeeksChillerOn = (DayOfYear(CoolingSeasonEndDate) \end{equation}</p>
<p class="equation equation-center">\begin{equation*} - DayOfYear(CoolingSeasonStartDate)) * \frac{WeeksPerDay}{DaysPer Year}\end{equation*}</p>

<p class="equation equation-center">\begin{equation} E = WeeksChillerOn * P\sum_{d=1}^{7} \overline{HrsOn}_{d} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E =$ Annual pump energy, kWh</p>
<p class="equation">$DayOfYear =$ Function to convert a date to the n^{th} day of the year</p>
<p class="equation">$CoolingSeasonEndDate =$ Cooling season end date, mm/dd/yyyy</p>
<p class="equation">$CoolingSeasonStartDate =$ Cooling season start date, mm/dd/yyyy</p>
<p class="equation">$WeeksChillerOn =$ Length of cooling season, weeks</p>
<p class="equation">$WeeksPerYear =$ 52</p>
<p class="equation">$DaysPerYear =$ 365.24</p>
<p class="equation">$P =$ Measured pump power, kW</p>

### Variable-speed, variable-volume pump energy calculator

This calculation tool is for VFD-controlled pumps that are operated at speeds proportional to the heating/cooling load as represented by proxy with OAT. Measured input data include average hourly power draw (kW) as measured by a DENT data logging power logger, and the average hourly OAT as measured by a temperature/RH logger. 

9. Fit a second-order polynomial regression model of true RMW power as a function OAT. (Worksheet: "Step 3. Regression").

<p class="equation equation-center">\begin{equation} P(OAT) = a * OAT^{2} + b * OAT + c \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$P =$ Average hourly true RMS power</p>
<p class="equation">$a,b,c =$ Regression coefficients$</p>
<p class="equation">$OAT =$ Outdoor air temperature, F</p>

10. Average % hour motor is on for each hour of each day of the week (Worksheets: "Step 4. Schedule Calcs" and "Step 5. Daily Ave Schedule Calc").

<p class="equation equation-center">\begin{equation} On(t) = \begin{cases} 1 & \text{if } P(t) > 0\\
    0 & otherwise \end{cases} \end{equation}</p>

<p class="equation equation-center">\begin{equation} \overline{\%On}_{d,h} = \frac{\sum_{n=1}^{N(d,h)} On(t)}{N(d,h)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$P(t) =$ Measures power, kW</p>
<p class="equation">$On(t)=$ Motor is on at time, t, binary</p>
<p class="equation">$\overline{\%On}_{d,h} =$ Average % time motor is on per hour for given day of week, d, and hour of the day, h, %</p>
<p class="equation">$N(d,h) =$ Total number of measured data points that fall on day of week, d, and hour of the day, h</p>
<p class="equation">$n \in t(d,h) =$ Index for subset of measured data points that fall on day of week, d, and hour of the day, h</p>

11. Total annual pump energy (Woeksheets: "Step 6. Energy Calcs" and "Step 7. Results").

<p class="equation equation-center">\begin{equation} E = WeeksChillerOn * \sum_{t=1}^{8760} P(OAT'(t)) * \overline{\%On}_{d,h}(t) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E =$ Annual energy usage, kWh</p>
<p class="equation">$OAT'(t) =$ Hourly climate normal outside air temperature from National Weather Service at station closest to site, F</p>
<p class="equation">$WeeksChillerOn =$ Cooling season (see Equation 5), weeks</p>

## Additional Resources

For more information on the different types of fans found in AHU systems, please read “Application of Fans in Commercial HVAC Equipment” from the Carrier Corporation: https://www.utcccs-cdn.com/hvac/docs/1001/Public/0F/04-581070-01.pdf 
 
For more information of the different types of motors that can be used in an AHU retrofit, please read Chapter 7 (starts on page 91) of the Premium Efficiency Motor Selection and Application Guide from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2014/04/f15/amo_motors_handbook_web.pdf#page=91 
 
For general information on Option A M&V guides, please read section 4.2 (starts on page 23) of “M&V Guidelines: Measurement and Verification for Performance-Based Contracts Version 4.0” from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2016/01/f28/mv_guide_4_0.pdf#page=23 