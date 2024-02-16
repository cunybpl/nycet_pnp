---
title:  Secondary Chilled Water Pump Motors Energy Consumption
type: calculation
layout: calculation_methodology
calculation_methodology_id: 6
excerpt: Calculation methodologies for various pumps and motors
url: "/documents/calculation-methodology/secondary-chilled-water-pump-motors-energy-consumption"
---

## Calculators

<table>
    <caption>Table 1. Secondary Chilled Water Pump Calculators</caption>
    <thead>
        <tr>
            <td bgcolor="#e7e6e6">
                <p><strong>Calculator</strong></p>
            </td>
            <td bgcolor="#e7e6e6">
                <p><strong>Description</strong></p>
            </td>
            <td bgcolor="#e7e6e6">
                <p><strong>Required Data To Use This Calculator</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <p><a href="/calculators/secondary-chilled-water-pump-motors-energy-consumption/2020_0427_PnP-EC-06_chiller_pump_cscv_kwh_pc.xlsx" download>Constant-speed, Constant-volume Chiller Pump kWh Calculator</a></p>
            </td>
            <td>
                <p>Uses runtime hours and power data to calculate Total Annual Energy</p>
            </td>
            <td>
                <p>Average power (kW)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/calculators/secondary-chilled-water-pump-motors-energy-consumption/2020_0427_PnP-EC-07_chiller_pump_cscv_current_pc.xlsx" download>Constant-speed, Constant-volume Chiller Pump Current Calculator</a></p>
            </td>
            <td>
                <p>Uses the time and current to calculate total annual energy</p>
            </td>
            <td>
                <p>Current (amperes)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/calculators/secondary-chilled-water-pump-motors-energy-consumption/2020_0427_PnP-EC-08_chiller_pump_cscv_on_off_pc.xlsx" download>Constant-speed, Constant-volume Chiller Pump On/Off Calculator</a></p>
            </td>
            <td>
                <p>Uses the time and runtime to calculate total annual energy</p>
            </td>
            <td>
                <p>Runtime (seconds)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/calculators/secondary-chilled-water-pump-motors-energy-consumption/2020_0601_PnP-EC-09_chiller_pump_variable_volume_speed_pc.xlsx" download>Variable-speed, Variable-volume Chiller Pump Speed Calculator</a></p>
            </td>
            <td>
                <p>Uses the information to obtain hourly energy, and the sum is the annual energy</p>
            </td>
            <td>
                <p>Speed (rpm); OAT (F)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/calculators/secondary-chilled-water-pump-motors-energy-consumption/2020_0427_PnP-EC-10_chiller_pump_variable_volume_pc.xlsx" download>Variable-speed, Variable-volume Chiller Pump Energy Calculator</a></p>
            </td>
            <td>
                <p>Uses the information to obtain hourly energy, and the sum is the annual energy</p>
            </td>
            <td>
                <p>RMS Power (kW); OAT (F)</p>
            </td>
    </tbody>
</table>

## Introduction

## Secondary Chilled Water Pump Calculations

### Constant-speed, Constant-volume Pumps Using Motor On/-Off Loggers

This calculation tool is for a constant speed, constant volume system. Measured input data include spot measurements for true power and motor operational time per hour, as measured by motor on/off loggers. 

1. Convert seconds on per hour to percent on per hour (Worksheet: "Step 2. Percent Runtime Calcs").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\%On(t) = \frac{On(t)}{3600}$$</th>
    <td class="tg-0pky">(1)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\%On(t) = \text{Percent of an hour that the pump motor is on, %}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$On(t) = \text{Measured time that pump motor is on, seconds}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$t = \text{Index for each measured data point}$$</th>
  </tr>
</tbody>
</table>

2. Average % hour motor is on for each hour of each day of the week (Worksheet: "Step 3. Daily Avg Runtime Calcs").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{\%On}_{d,h} = \frac{\sum_{n=1}^{N(d,h)} \%On(n)}{N(d,h)}$$</th>
    <td class="tg-0pky">(2)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{\%On}_{d,h} = \text{Average % time motor is on per hour for given day of week, d, and hour of the day, h, %}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$N(d,h) = \text{Total number of measured data points that fall on day of week, d, and hour of the day, h}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$n \in t(d,h) = \text{Index for the subset of measured data points that fall on day of week, d, and hour of the day, h}$$</th>
  </tr>
</tbody>
</table>

3. Find the average hours per day pump is on (Worksheet: "Step 4. Results").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{HrsOn}_{d} = \sum_{h=1}^{24} \overline{\%On}_{d,h}$$</th>
    <td class="tg-0pky">(3)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{HrsOn}_{d} = \text{Average hours per day for given day of week, d, hours}$$</th>
    <td class="tg-0pky"></th>
  </tr>
</tbody>
</table>

4. Calculate energy used for full year (Worksheet: "Step 4. Results").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$WeeksChillerOn = (DayOfYear(CoolingSeasonEndDate)$$</th>
    <td class="tg-0pky">(4)</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$- DayOfYear(CoolingSeasonStartDate)) * \frac{WeeksPerDay}{DaysPerYear}$$</th>
    <td class="tg-0pky"></th>
  </tr>
</tbody>
</table>

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$E = WeeksChillerOn * P\sum_{d=1}^{7} \overline{HrsOn}_{d}$$</th>
    <td class="tg-0pky">(5)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$E = /text{Annual pump energy, kWh}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$DayOfYear = \text{Function to convert a date to the n^{th} day of the year}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$CoolingSeasonEndDate = \text{Cooling season end date, mm/dd/yyyy}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$CoolingSeasonStartDate = \text{Cooling season start date, mm/dd/yyyy}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$WeeksChillerOn = \text{Length of cooling season, weeks}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$WeeksPerYear = \text{52}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$DaysPerYear = \text{365.24}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$P = \text{Measured pump power, kW}$$</th>
  </tr>
</tbody>
</table>

### Constant-speed, Constant-volume Pumps Using Data Logging Power Meters

This calculation tool is forr a constant-speed, constant-volume pump. Measured input data is average hourly powerly draw (in kW) as measured by a DENT data logging power logger.

5. Average % hour motor is on for each hour of each day of the wek (Worksheet: "Step 3. Ave Day of Week Calcs").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{P}_{d,h} = \frac{\sum_{n=1}^{N(d,h)} P(t)}{N(d,h)}$$</th>
    <td class="tg-0pky">(6)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{P}_{d,h} = \text{Average motor power for given day of week, d, and hour of the day, h, kW}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$P(t) = \text{Measured motor power, kW}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$t = \text{Index for measured data points}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$N(d,h) = \text{Total number of measured data points that fall on day of week, d, and hour of the day, h}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$n \in t(d,h) = \text{Index for subset of measured data points that fall on day of week, d, and hour of the day, h}$$</th>
  </tr>
</tbody>
</table>

6. Calculate energy used for full (Worksheet: "Step 4. Results"). WeeksChillerOn is from Equation 5. 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$E = WeeksChillerOn * \sum_{d=1}^{7} \sum_{h=1}^{24} \overline{P}_{d,h}$$</th>
    <td class="tg-0pky">(7)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$E = \text{Annual pump energy, kWh}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$WeeksPerYear = \text{52}$$</th>
  </tr>
</tbody>
</table>

### Constant-speed, Constant-volume Pumps Using Current Transformers

This calculation tool is for a constant-speed, constant-volume pump. Measured input data include hourly average current (in Amps) as directly measured by current transformers, and sport measurements for true power. 

7. Convert average hourly current to percent on per hour (Worksheet: "Step 2. Percent Runtime Calcs").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$On(t) = \begin{cases} \frac{I(t)}{I_{max}} & \text{if } I(t) < I_{max}\\
    100\% & \text{otherwise } \end{cases}$$</th>
    <td class="tg-0pky">(8)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\%On(t) = \text{Percent of an hour that the pump motor is on, %}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$I(t) = \text{Measured time that pump motor is on, seconds}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$t = \text{Index for each measured data point}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$I_{max} = \text{Current measured at the maximum constant speed, Amps}$$</th>
  </tr>
</tbody>
</table>

8. Equations 3 to 6 are used to calculate the annual pump energy.

### Variable-speed, Variable-volume Pumps Using Data Logging Power Meters

This calculation tool is for VFD-controlled pumps that are operated at speeds proportional to the heating/cooling load as represented by proxy with OAT. Measured input data include average hourly power draw (kW) as measured by a DENT data logging power logger, and the average hourly OAT as measured by a temperature/RH logger. 

9. Fit a second-order polynomial regression model of true RMW power as a function OAT. (Worksheet: "Step 3. Regression").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$P(OAT) = a * OAT^{2} + b * OAT + c$$</th>
    <td class="tg-0pky">(9)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$P = \text{Average hourly true RMS power}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$a,b,c = \text{Regression coefficients}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$OAT = \text{Outdoor air temperature, F}$$</th>
  </tr>
</tbody>
</table>

10. Average % hour motor is on for each hour of each day of the week (Worksheets: "Step 4. Schedule Calcs" and "Step 5. Daily Ave Schedule Calc").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$On(t) = \begin{cases} 1 & \text{if } P(t) > 0\\
    0 & otherwise \end{cases}$$</th>
    <td class="tg-0pky">(10)</th>
  </tr>
</tbody>
</table>

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{\%On}_{d,h} = \frac{\sum_{n=1}^{N(d,h)} On(t)}{N(d,h)}$$</th>
    <td class="tg-0pky">(11)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$P(t) = \text{Measures power, kW}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$On(t) = \text{Motor is on at time, t, binary}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{\%On}_{d,h} = \text{Average % time motor is on per hour for given day of week, d, and hour of the day, h, %}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$N(d,h) = \text{Total number of measured data points that fall on day of week, d, and hour of the day, h}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$n \in t(d,h) = \text{Index for subset of measured data points that fall on day of week, d, and hour of the day, h}$$</th>
  </tr>
</tbody>
</table>

11. Total annual pump energy (Woeksheets: "Step 6. Energy Calcs" and "Step 7. Results").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$E = WeeksChillerOn * \sum_{t=1}^{8760} P(OAT'(t)) * \overline{\%On}_{d,h}(t)$$</th>
    <td class="tg-0pky">(12)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$E = \text{Annual energy usage, kWh}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$OAT'(t) = \text{Hourly climate normal outside air temperature from National Weather Service at station closest to site, F}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$WeeksChillerOn = \text{Cooling season (see Equation 5), weeks}$$</th>
  </tr>
</tbody>
</table>

### Variable-speed, Variable-volume Pumps Using Speed Data From BAS or VFD

This calculation tool is for VFD-controlled pumps using hourly average motor speed (in RPM) as downloaded from as BAS or VFD, and spot measurements for true power.

12. Convert the speed data from the BAS of VFD to power (Worksheet: "Step 2. Aggregate Data").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$P(t) = P_{max}(\frac{\omega(t)}{\omega_{max}})^{2.5}$$</th>
    <td class="tg-0pky">(13)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$P(t) = \text{Average hourly true RMS power, kW}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$P_{max} = \text{Full speed true RMS, kW}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\omega_{max} = \text{Maximum motor speed, rpm}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\omega(t) = \text{Motor speed, rpm}$$</th>
  </tr>
</tbody>
</table>

This equation represents the pump affinity law, where theoretically the exponent is 3. <span class="tooltip-pnp">To represent the motor loses, the Consortium for Energy Efficiency recommends using a value of 2.5.<span class="tooltiptext">Consortium for Energy Efficiency. Motor Efficiency, Selection, and Management: A Gudiebook for Indutrial Efficiency Programs (May 2011).</span></span>

13. Equations 10 to 13 are used to calculate the annual pump energy. 

## Additional Resources

For more information on the different types of fans found in AHU systems, please read “Application of Fans in Commercial HVAC Equipment” from the Carrier Corporation: https://www.utcccs-cdn.com/hvac/docs/1001/Public/0F/04-581070-01.pdf 
 
For more information of the different types of motors that can be used in an AHU retrofit, please read Chapter 7 (starts on page 91) of the Premium Efficiency Motor Selection and Application Guide from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2014/04/f15/amo_motors_handbook_web.pdf#page=91 
 
For general information on Option A M&V guides, please read section 4.2 (starts on page 23) of “M&V Guidelines: Measurement and Verification for Performance-Based Contracts Version 4.0” from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2016/01/f28/mv_guide_4_0.pdf#page=23 

## Resources

5.Fans and Blowers 5. FANS AND BLOWERS Syllabus Fans and Blowers. This resource went over the different types of pressures (static, velocity, and total) on page 106 that are prevalent in an AHU duct. This resource also provided some figures on page 107 which illustrated how the static, total, and velocity pressures are measured. 

A Quick Introduction to Air Handling Units. “A Quick Introduction to Air Handling Units - AirFixture.” AirFixture, 3 Jan. 2019, airfixture.com/blog/a-quick-introduction-to-air-handling-units. 

admintheseverngr. “VAV vs VVT HVAC Systems - The Severn Group.” The Severn Group, Severn Group, 23 May 2019, http://www.theseverngroup.com/vav-vs-vvt-hvac-systems/. This resource provided a diagram of a VAV system, which was useful in helping to understand how a VAV system works in conjunction with an AHU. 

ASHRAE. ASHRAE Guideline 14 - 2014 : Measurement of Energy, Demand, and Water Savings. ASHRAE, 18 Dec. 2014. Section A3.2 was used. This source also referencs AMCA Publication 203. For measuring fan performance, the source also references the following standards:ANSI/ASHRAE Standard 51-2007 is the Laboratory Methods of Testing Fans for Rating, AMCA Standard 803-02 (R2008), Site Performance Test Standard for Power Plant and Industrial Fans. AMCA Publication 203-90 (R2011), Field Performance Measurement of Fan Systems, and AMCA Publication 201-02 (R2011), Fans and Systems. ASME PTC 11-2008, ASME PTC 11 was also referenced in this source, which provided standard procedures for for testing fans under actual operating conditions. Two approaches are included, one using mass flow rate and fan specific energy and the other (more common in HVAC applications) using volume flow rate and pressure. Section E-2 was also used for this M&V guide include Section 5.2.4. 

Bonnerville Power Association. Engineering Calculations with Verification Protocol. May 2012. Has example of VFD M&V evaluation and reporting. 

---. Verification of Energy Use Indexing Protocol. May 2012. This protocol has a useful example of documentation and reporting.  Simple and clear. Report on the following topics:  M&V approach, measurement boundary, baseline and post-installation measurement periods, data results, calculations, summary of annual savings. 

Doty, Steve, and Wayne C Turner. Energy Management Handbook. Boca Raton, Fla. Crc Press/Taylor & Francis Lilburn, Ga Fairmont Press C, 2013. Section 10.9: HVAC System Distribution Energy - The equation for fan horsepower was used in this M&V guide. 

Pacific Northwest National Laboratory. Building Re-Tuning Training Guide: AHU Static Pressure Control. This guide points out that static pressure and damper position should be measured to re-tune the static pressure operation of an AHU.  The fan is modulated to meet static pressure set points, which ideally should vary through the day.  When doing M&V for a fan retrofit, we should measure/record the static pressure set points.  If the set points differ between the pre and post-retrofit conditions, then the change in power demand for the new fan will not be valid. 

The Engineering Mindset. “How Air Handling Units Work AHU Working Principle Hvac Ventilation.” YouTube, 17 Sept. 2018, http://www.youtube.com/watch?v=KCiv8IAUkh8. Accessed 6 Dec. 2019. 

Titan. “Under Pressure:  Is Building Air Pressure Really Important.” Titan-Air.Com, 2019, http://www.titan-air.com/under-pressure--is-building-air-pressure-really-important.html. This resource was important in describing why it is important to control the pressure inside a building, which is important in AHU design. 

Trane. “Direct-Drive Plenum Fans and Fan Arrays.” 2010. Important notes obtained from this source include the following: Plenum fans have become more popular as direct drive VFD motors have replaced constant speed motors connected to belt driven centrifugal fans. More efficient, less vibration, quieter. Variable Air Volume control in an AHU is achieved by the VFD by changing the speed of the fan or the diameter of the fan blades. Fan arrays (smaller fans (sets of 2, 4, or 6) across the duct) are used when there are space constraints. The length of the AHU can be shortened. Side benefit is redundancy if one of the fans fail.  Drawback is higher energy consumption and noisier. If AHU discharges into long straight duct, then housed airfoil fan requires less power. A plenum fan will be quieter.  If the duct is bent or there is a filter at the end of the AHU, then a plenum fan will be more energy efficient and quieter. Plenum fans are also lower maintenance because the absence of a belt. 

York. Return Fan and Exhaust Fan Economizers and Building Pressurization. This document discusses the types of fans found in the economizer sections of AHUs.  Three types are barometric relief dampers (i.e., no fan), exhaust fan and return fans.  Exhaust fans are downstream of the mixing zone (where exhaust air is mixed with supply air), while return fans are upstream of the mixing zone.  Return fans run continuously and therefore might be run at constant speed.  Exhaust fans are variable speed such that the air mixing is done to meet mixing air temperature set points. 