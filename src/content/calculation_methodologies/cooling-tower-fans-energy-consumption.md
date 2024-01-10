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
url: "/documents/calculation-methodology/cooling-tower-fans-energy-consumption"
---

## Calculators

<table>
    <caption>Table 1. Calculators for Cooling Tower Fans Energy Consumption</caption>
    <thead>
        <tr>
            <th>
                <p><strong>Description</strong></p>
            </th>
            <th>
                <p><strong>Key</strong></p>
            </th>
            <th>
                <p><strong>Calculator (Downloadable Link)</strong></p>
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>Description for CT Fan Constant Current Calculator</p>
            </td>
            <td>
                <p>Key for CT Fan Constant Current Calculator</p>
                <p><br></p>
            </td>
            <td>
                <a href="/calculators/cooling-tower-fans-energy-consumption/CT Fan Constant Current.xlsx" download><p></p>CT Fan Constant Current Calculator</a>
            </td>
        </tr>
        <tr>
            <td>
                <p>Description for CT Fan Constant OnOff Calculator</p>
            </td>
            <td>
                <p>Key for CT Fan Constant OnOff Calculator</p>
                <p><br></p>
            </td>
            <td>
                <a href="/calculators/cooling-tower-fans-energy-consumption/CT Fan Constant OnOff.xlsx" download><p></p>CT Fan Constant OnOff Calculator</a>
            </td>
        </tr>
        <tr>
            <td>
                <p>Description for CT Fan Constant Power Calculator</p>
            </td>
            <td>
                <p>Key for CT Fan Constant Power Calculator</p>
                <p><br></p>
            </td>
            <td>
                <a href="/calculators/cooling-tower-fans-energy-consumption/CT Fan Constant Power.xlsx" download><p></p>CT Fan Constant Power Calculator</a>
            </td>
        </tr>
        <tr>
            <td>
                <p>Description for CT Fan Variable Power Calculator</p>
            </td>
            <td>
                <p>Key for CT Fan Variable Power Calculator</p>
                <p><br></p>
            </td>
            <td>
                <a href="/calculators/cooling-tower-fans-energy-consumption/CT Fan Variable Power.xlsx" download><p></p>CT Fan Variable Power Calculator</a>
            </td>
        </tr>
    </tbody>
</table>

## Cooling Tower Fan Calculations

### Constant Speed Fans Using an On/Off Logger

This calculation is for a cooling tower with constant-speed fans. Measured input data include spot measurements for true power and motor operational time per hour, as measured by motor on/off loggers on each fan in the tower.

1. Convert seconds on per hour to average energy per hour (Worksheet: “Step 2. Energy Calcs”).  Repeat for all fans and then sum to get a total for the cooling tower. Note that since the data loggers cannot be perfectly synched, the time stamp for the dataset for each fan will be different. The workbook time-aligns the datasets.

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{E}_{f}(t) = \frac{On_f(t)*P_f}{3600}$$</th>
    <td class="tg-0pky">(2)</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{E}_{f}(t) = \frac{On_f(t)*P_f}{3600}$$</td>
    <td class="tg-0pky">(3)</td>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{E}_{f}(t) = $$</th>
    <td class="tg-0pky">Average hourly fan motor energy on for each fan, f, kWh</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$t = $$</th>
    <td class="tg-0pky">Time index</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$On_{f}(t) = $$</th>
    <td class="tg-0pky">Measured time that motor is on for each fan, f, seconds</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$P_{f} = $$</th>
    <td class="tg-0pky">One-time power measurement for each fan, f, kW</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{E}(t) = $$</th>
    <td class="tg-0pky">Total average energy of all fan motors, kWh</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$F = $$</th>
    <td class="tg-0pky">Total number of fans</th>
  </tr>
</tbody>
</table>

2. Wet-bulb temperature is calculated from the measured dry-bulb temperature and measured relative humidity with the following empirical equation <span class="tooltip-pnp">(Worksheet: “Step 3 Wetbulb Calcs”)<span class="tooltiptext"> Stull, R., “Wet-Bulb Temperature from Relative Humidity and Air Temperature”, J. of the AmericanMeteorological Society, Nov 2011, pp. 2267-2269 </span></span>

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$T_{wb} = T_{db}tan^{-1}[0.151977(RH+8.313659)^{1/2}]$$</th>
    <td class="tg-0pky">(4)</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$+tan^{-1}(T_{db}+RH)$$</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">$$-tan^{-1}(RH-1.676331)+0.00391838(RH)^{3/2}$$</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">$$*tan^{-1}(0.023101*RH) - 4.686035$$</td>
    <td class="tg-0pky"></td>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$T_{wb} = $$</th>
    <td class="tg-0pky">Wet-bulb temperature, C</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$T_{db} = $$</th>
    <td class="tg-0pky">Dry-bulb temperature, C</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$RH = $$</th>
    <td class="tg-0pky">Relative humidity, %</th>
  </tr>
</tbody>
</table>

3. To model the total fan energy at different wet-bulb temperatures, a second-order polynomial regression model of total fan energy as a function wet-bulb temperature is fit (Worksheet: “Step 4 Regression”). 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$E(T_{wb}) = a*T_{wb}^{2} + b*T_{wb} + c$$</th>
    <td class="tg-0pky">(5)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$E(T_{wb}) = $$</th>
    <td class="tg-0pky">Average hourly fan energy, kWh</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$a,b,c = $$</th>
    <td class="tg-0pky">Regression coefficients</th>
  </tr>
</tbody>
</table>

4. Calculate operating hours (Worksheet: “Step 5 Daily Op Hrs”).

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$On(t) = \begin{cases} 1 & \text{if } \overline{E}(t) > 0\\
    0 & \text{if } \overline{E}(t) = 0 \end{cases}$$</th>
    <td class="tg-0pky">(6)</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{On}_{d,h} = \begin{cases} 1 & \text{if } \overline{E}(n) > 0 \text{ for any } n \in N(d,h)\\
    0 & 0 \end{cases}$$</th>
    <td class="tg-0pky">(7)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$On(t) = $$</th>
    <td class="tg-0pky">Cooling tower fans are on, binary</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{On}_{d,h} = $$</th>
    <td class="tg-0pky">Cooling tower is on for a given day of the week, d, and hour of the day, h, binary</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$N(d,h) = $$</th>
    <td class="tg-0pky">Total number of measured data points that fall on day of week, d, and hour of the day, h</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$n \in N(d,h) = $$</th>
    <td class="tg-0pky">Index for the subset of measured data points that fall on day of week, d, and hour of the day, h</th>
  </tr>
</tbody>
</table>

5. Calculate energy used for full year for each fan (Worksheet: “Step 6 Results”).

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$E = \sum_{t=1}^{8760} \overline{On}_{d,h}(t) * CoolingSeason(t) * E(T_{wb}(t))$$</th>
    <td class="tg-0pky">(8)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$E = $$</th>
    <td class="tg-0pky">Annual energy, kWh</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$CoolingSeason(t) = $$</th>
    <td class="tg-0pky">Does the given hour, t, fall within the cooling season, binary</th>
  </tr>
</tbody>
</table>

### Constant Speed Fans Using a Data-logging Power Meter

This calculation is for a cooling tower with constant-speed fans. Measured input data is average hourly power draw (in kW) as measured by a DENT power logger for each fan in the cooling tower. 

1. Total energy for each hour (Worksheet: “Step 2 Energy Calcs”). Since the measured power value (kW) is the average for an hour, it is equivalent to the energy for the hour (kWh).

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{E}(t) = \sum_{f=1}^{F} \overline{E}_{f}(t)$$</th>
    <td class="tg-0pky">(9)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{E}_{f}(t) = $$</th>
    <td class="tg-0pky">Average hourly fan motor energy on for each fan, f, kWh</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{E} = $$</th>
    <td class="tg-0pky">Total average energy of all fan motors, kWh</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$F = $$</th>
    <td class="tg-0pky">Total number of fans in the cooling tower</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$t = $$</th>
    <td class="tg-0pky">Time index</th>
  </tr>
</tbody>
</table>

2. The remainder of the workbook is the same as the on/off logger workbook, and hence uses Equations 3 through 8 to calculate the total annual energy. 

### Constant Speed Fans Using a Current Sensor

This calculation is for a cooling tower with constant-speed fans. Measured input data include hourly average current (in Amps) as directly measured by current sensors, and spot measurements for true power for each fan in the cooling tower. 

1. Total energy for each hour (Worksheet: “Step 2 Energy Calcs”). Since the measured current (Amps) is the average for an hour, Equation 10 yields the average energy per hour (kWh) assuming voltage is constant.  

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{E}_{f}(t) = \frac{i_{f}(t) * P_{f}}{I_{f}}$$</th>
    <td class="tg-0pky">(10)</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{E}(t) = \sum_{f=1}^{F} \overline{E}_{f}(t)$$</th>
    <td class="tg-0pky">(11)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{E}_{f}(t) = $$</th>
    <td class="tg-0pky">Average hourly fan motor energy on for each fan, f, kWh</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$i_{f}(t) = $$</th>
    <td class="tg-0pky">Average hourly current for each fan, f, Amps</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$t = $$</th>
    <td class="tg-0pky">Time index</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$P_{f} = $$</th>
    <td class="tg-0pky">One-time power measurement for each fan, f, kW</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$I_{f} = $$</th>
    <td class="tg-0pky">one-time current measurement for each fan, f, Amps</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{E} = $$</th>
    <td class="tg-0pky">Total average energy of all fan motors, kWh</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$F = $$</th>
    <td class="tg-0pky">Total number of fans in the cooling tower</th>
  </tr>
</tbody>
</table>

2. The remainder of the workbook is the same as the on/off logger workbook, and hence uses Equations 3 through 8 to calculate the total annual energy. 

### Variable Speed Fans Using a Data-logging Power Meter

This calculation is for a cooling tower with variable-speed fans. Measured input data is average hourly power draw (in kW) as measured by a DENT power logger for one fan in the cooling tower. It is assumed that all the remaining fans are run at the same speed. 

1. Total energy for each hour (Worksheet: “Step 2 Energy Calcs”). Since the measured power value (kW) is the average for an hour, it is equivalent to the energy for the hour (kWh).

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{E}(t) = \overline{E}_{1}(t) * F$$</th>
    <td class="tg-0pky">(12)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{E}_{1}(t) = $$</th>
    <td class="tg-0pky">Average hourly fan motor energy for the measured fan, kWh</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{E} = $$</th>
    <td class="tg-0pky">Total average energy of all fan motors, kWh</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$F = $$</th>
    <td class="tg-0pky">Total number of fans in the cooling tower</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$t = $$</th>
    <td class="tg-0pky">Time index</th>
  </tr>
</tbody>
</table>

2. The remainder of the workbook is the same as the on/off logger workbook, and hence uses Equations 3 through 8 to calculate the total annual energy. 

## Additional Resources

For more information on the different types of fans found in AHU systems, please read “Application of Fans in Commercial HVAC Equipment” from the Carrier Corporation: https://www.utcccs-cdn.com/hvac/docs/1001/Public/0F/04-581070-01.pdf 
 
For more information of the different types of motors that can be used in an AHU retrofit, please read Chapter 7 (starts on page 91) of the Premium Efficiency Motor Selection and Application Guide from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2014/04/f15/amo_motors_handbook_web.pdf#page=91 
 
For general information on Option A M&V guides, please read section 4.2 (starts on page 23) of “M&V Guidelines: Measurement and Verification for Performance-based Contracts Version 4.0” from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2016/01/f28/mv_guide_4_0.pdf#page=23 

## References

5.Fans and Blowers 5. FANS AND BLOWERS Syllabus Fans and Blowers. This resource went over the different types of pressures (static, velocity, and total) on page 106 that are prevalent in an AHU duct. This resource also provided some figures on page 107 which illustrated how the static, total, and velocity pressures are measured. 

A Quick Introduction to Air Handling Units. “A Quick Introduction to Air Handling Units - AirFixture.” AirFixture, 3 Jan. 2019, airfixture.com/blog/a-quick-introduction-to-air-handling-units. 

admintheseverngr. “VAV vs VVT HVAC Systems - The Severn Group.” The Severn Group, Severn Group, 23 May 2019, http://www.theseverngroup.com/vav-vs-vvt-hvac-systems/. This resource provided a diagram of a VAV system, which was useful in helping to understand how a VAV system works in conjunction with an AHU. 

ASHRAE. ASHRAE Guideline 14 - 2014 : Measurement of Energy, Demand, and Water Savings. ASHRAE, 18 Dec. 2014. Section A3.2 was used. This source also referencs AMCA Publication 203. For measuring fan performance, the source also references the following standards:ANSI/ASHRAE Standard 51-2007 is the Laboratory Methods of Testing Fans for Rating, AMCA Standard 803-02 (R2008), Site Performance Test Standard for Power Plant and Industrial Fans. AMCA Publication 203-90 (R2011), Field Performance Measurement of Fan Systems, and AMCA Publication 201-02 (R2011), Fans and Systems. ASME PTC 11-2008, ASME PTC 11 was also referenced in this source, which provided standard procedures for testing fans under actual operating conditions. Two approaches are included, one using mass flow rate and fan specific energy and the other (more common in HVAC applications) using volume flow rate and pressure. Section E-2 was also used for this M&V guide include Section 5.2.4. 

Bonnerville Power Association. Engineering Calculations with Verification Protocol. May 2012. Has example of VFD M&V evaluation and reporting. 

---. Verification of Energy Use Indexing Protocol. May 2012. This protocol has a useful example of documentation and reporting.  Simple and clear. Report on the following topics:  M&V approach, measurement boundary, baseline and post-installation measurement periods, data results, calculations, summary of annual savings. 

Doty, Steve, and Wayne C Turner. Energy Management Handbook. Boca Raton, Fla. Crc Press/Taylor & Francis Lilburn, Ga Fairmont Press C, 2013. Section 10.9: HVAC System Distribution Energy - The equation for fan horsepower was used in this M&V guide. 

Pacific Northwest National Laboratory. Building Re-tuning Training Guide: AHU Static Pressure Control. This guide points out that static pressure and damper position should be measured to re-tune the static pressure operation of an AHU.  The fan is modulated to meet static pressure set points, which ideally should vary through the day.  When doing M&V for a fan retrofit, we should measure/record the static pressure set points.  If the set points differ between the pre and post-retrofit conditions, then the change in power demand for the new fan will not be valid. 

The Engineering Mindset. “How Air Handling Units Work AHU Working Principle Hvac Ventilation.” YouTube, 17 Sept. 2018, http://www.youtube.com/watch?v=KCiv8IAUkh8. Accessed 6 Dec. 2019. 

Titan. “Under Pressure:  Is Building Air Pressure Really Important.” Titan-Air.Com, 2019, http://www.titan-air.com/under-pressure--is-building-air-pressure-really-important.html. This resource was important in describing why it is important to control the pressure inside a building, which is important in AHU design.

Trane. “Direct-Drive Plenum Fans and Fan Arrays.” 2010. Important notes obtained from this source include the following: Plenum fans have become more popular as direct drive VFD motors have replaced constant speed motors connected to belt driven centrifugal fans. More efficient, less vibration, quieter. Variable Air Volume control in an AHU is achieved by the VFD by changing the speed of the fan or the diameter of the fan blades. Fan arrays (smaller fans (sets of 2, 4, or 6) across the duct) are used when there are space constraints. The length of the AHU can be shortened. Side benefit is redundancy if one of the fans fail.  Drawback is higher energy consumption and noisier. If AHU discharges into long straight duct, then housed airfoil fan requires less power. A plenum fan will be quieter.  If the duct is bent or there is a filter at the end of the AHU, then a plenum fan will be more energy efficient and quieter. Plenum fans are also lower maintenance because the absence of a belt. 

York. Return Fan and Exhaust Fan Economizers and Building Pressurization. This document discusses the types of fans found in the economizer sections of AHUs.  Three types are barometric relief dampers (i.e., no fan), exhaust fan and return fans.  Exhaust fans are downstream of the mixing zone (where exhaust air is mixed with supply air), while return fans are upstream of the mixing zone.  Return fans run continuously and therefore might be run at constant speed.  Exhaust fans are variable speed such that the air mixing is done to meet mixing air temperature set points. 