---
title: Fan Motors Energy Consumption
type: calculation
layout: calculation_methodology
calculation_methodology_id: 2
excerpt: This calculation tool is for various fans and systems.
realted_systems:
  - Constant-Speed, Constant-Volume System
related_measurements:
  - Electrical Current
url: "/documents/calculation-methodology/fan-motors-energy-consumption"
---

## Calculators

<table>
    <caption>Table 1. Fan Motor Calculators</caption>
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
                <p><a href="/calculators/air-handling-unit/2023_0227_PnP-EC-18_ahu_fan_cscv_1_speed_kwh_lc.xlsx" download>Constant-speed, constant-volume single-speed fan energy calculator</a></p>
            </td>
            <td>
                <p>Uses motor runtime (in seconds) and true RMS power (kW) data to estimate annual energy consumption of a CSCV single-speed fan motor. This calculator can work with data from two fans, e.g., if you measured a supply and return fan in an AHU use this calculator to estimate the total annual energy consumption of the AHU. Data from both fans must be in the same format.</p>
            </td>
            <td>
                <p><a href="/documents/measurement-technique/motor-runtime">Hourly motor runtime (seconds);</a> <a href="/documents/measurement-technique/electrical-spot-measurement">one-time true RMS power (kW)</a></p>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/calculators/air-handling-unit/2023_0320_PnP-EC-17_ahu_fan_cscv_2speed_current_v1.xlsx" download>Constant-speed, constant-volume two-speed fan energy calculator</a></p>
            </td>
            <td>
                <p>Uses hourly current data (in amperes) and true RMS power (kW) data to estimate annual energy consumption of a CSCV two-speed fan motor. This calculator can work with data from two fans, e.g., if you measured a supply and return fan in an AHU use this calculator to estimate the total annual energy consumption of the AHU. Data from both fans must be in the same format.</p>
            </td>
            <td>
                <p><a href="/documents/measurement-technique/electrical-current">Hourly current (amperes)</a>; <a href="/documents/measurement-technique/electrical-spot-measurement">one-time true RMS power (kW)</a></p>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/calculators/air-handling-unit/2023_0203_PnP-EC-21_ahu_fan_var_volm.xlsx" download>Variable-speed, variable-volume fan energy calculator</a></p>
            </td>
            <td>
                <p>Uses hourly true RMS power to calculate hourly energy consumption then estimate the annual energy consumption of a VSVV fan motor. This calculator can work with data from two fans, e.g., if you measured a supply and return fan in an AHU use this calculator to estimate the total annual energy consumption of the AHU. Data from both fans must be in the same format.</p>
            </td>
            <td>
                <p><a href="/documents/measurement-technique/true-rms-power">Hourly true RMS power (kW);</a> <a href="/documents/measurement-technique/outside-air-temperature">hourly outside air temperature (F)</a></p>
            </td>
    </tbody>
</table>

## Introduction

## Fan Motor Calculations

### Constant-speed, constant-volume single-speed fan energy calculator

This calculation tool is for a constant speed, constant volume system. Measured input data include spot measurements for true power and motor operational time per hour, as measured by motor on/off loggers for the supply and return fans in the Fan Motor.

1. Convert seconds fan is on per hour to percent fan is on per hour (Worksheet: "Step 2. Percent Runtime Calc") for supply and return fans.

<p class="equation equation-center">\begin{equation} \%FanOn_{f}(t_{f}) = \frac{On_{f}(t_{f})}{3600} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$\hspace{5mm} \%FanOn_{f}(t_{f}) =$ Percent of an hour that the motor is on for either supply or return fan, f, %</p>
<p class="equation">$\hspace{5mm} On_{f}(t_{f}) =$ Measured time that motor is on for either supply or return fan, f, in seconds</p>
<p class="equation">$\hspace{5mm} t_{f} =$ Index for each measured data point for either supply or return fan, f</p>

2. Average % hour motor is on for each hour, h, of each day of the week, d (Worksheet: "Step 3. Daily Avg Runtime Calcs").

<p class="equation equation-center">\begin{equation} \overline{\%FanOn}_{d,h,f} = \frac{\sum_{n_{f}}^{N_{f}(d,h)} \%FanOn_{f}(N_{f})}{N_{f}(d,h)} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$\overline{\%FanOn}_{d,h,f} =$ Average % time motor is on per hour for given day of week, d, and hour of day, h, for either supply of return fan, f, %</p>
<ul>
<li><p class="equation">$N_{f}(d,h) =$ Total number of measured data points that fall on day of week, d, and hour of day, h, for either supply or return fan, f</p></li>
<li><p class="equation">$n_{f} \in t_{f}(d,h) =$ Index for the subset of measured data points that fall on day of week, d, and hour of the day, h, for either supply or return fan</p></li>
</ul>

3. Find average hours per day fan is on (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} \overline{HrsOn}_{d,f} = \sum_{h=0}^{23} \overline{\%FanOn}_{d,h,f} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$\overline{HrsOn}_{d,f} =$ Average hours per day for given day of week, d, for either supply or return fan, f, hours</p>

4. Calculate energy used for the simulation period that users input for each fan (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} E_{f} = \sum_{d=1}^{7} \overline{HrsOn}_{d,f} * operating \hspace{2mm} weeks \hspace{2mm} per \hspace{2mm} year * P_{f} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$E_{f} =$ Annual energy for either supply or return fan, f, kWh</p>
<p class="equation">$P_{f} =$ Measured power for either supply or return fan, f, kW</p>

5. Total energy used by Fan Motor (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} E = E_{supply} + E_{return} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$E =$ Total energy usage for the Fan Motor, kWh</p>

<!-- ### Constant-speed or Two-speed, Constant-volume Fans using a Data Logging Power Meter 

This calculation tool is for a constant speed or two-speed, constant volume system. Measured input data is average hourly power draw (in kW) as measured by a data logging power meter for the supply and return fans in the Fan Motor. 

1. Average equivalent % hour motor is on full speed for each hour, h, of each day of the week, d (Worksheet: "Step 3. Avg Day Of Week Calcs").

<p class="equation equation-center">\begin{equation} \overline{P}_{d,h,f} = \frac{\sum_{n_{f}}^{N_{f}(d,h)} P_{f}(t_{f})}{N_{f}(d,h)} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$\overline{P}_{d,h,f} =$ Average motor power for given day of week, d, and hour of day, h, for either supply or return fan, f, kW</p>
<p class="equation">$P_{f}(t_{f}) =$ Measured motor power for either supply or return fan, f, kW</p>
<p class="equation">$t_{f} =$ Index for measured data points for either supply or return fan, f, datasets</p>
<p class="equation">$N_{f}(d,h) =$ Total number of measured data points that fall on day of week, d, and hour of day, h, for either supply or return fan, f</p>
<p class="equation">$n_{f} \in t_{f}(d,h) =$ Index for subset of measured data points that fall on day of week, d, and hour of day, h, for either supply or return fan, f</p>

2. Calculate energy used for the simulation period that users input for each fan (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} E_{f} = \sum_{d=1}^{7} \sum_{h=1}^{24} \overline{P}_{d,h,f} * [operating \hspace{2mm} weeks \hspace{2mm} per \hspace{2mm} year] \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$E_{f} =$ Annual energy for either supply or return fan, f, kWh</p>
<p class="equation">$\overline{P}_{d,h,f} =$ Average motor power for given day of week, d, and hour of day, h, for either supply or return fan, f, kW</p>

3. Total energy used by the Fan Motor (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} E = E_{supply} + E_{return} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$E =$ Total energy usage for the Fan Motor, kWh</p> -->

### Constant-speed, constant-volume two-speed fan energy calculations 

This calculation tool is for VFD-controlled fans that are operated at two speeds, as well as for a constant speed, constant volume system. Measured input data include hourly average current (in Amps), as directly measured by current transformers, and spot measurements for true power at both high and low speed operation for the supply and return fans in the Fan Motor. If the tool is used for a constant speed, constant volume system, then set the low speed input data to zeroes and enter the all the input data for high speed. 

1. Convert seconds fan is on per our to percent fan is on per hour (Worksheet: "Step 2. Percent Runtime Calcs") for supply and return fans.

<p class="equation equation-center">\begin{equation} \%FanOn_{high,f}(t_{f}) = \begin{cases} 100\% & \text{if } i_{high,f} * (1+\varepsilon) < i_{f}(t_{f}) \\ \frac{i_{f}(t_{f}) - i_{low,f}}{i_{high,f} - i_{low,f}} & \text{if } i_{low,f} * (1+\varepsilon) < i_{f}(t_{f}) < i_{high,f}* (1-\varepsilon) \\ 0\% & \text{if } i_{f}(t_{f}) < i_{low,f} * (1+\varepsilon) \end{cases} \end{equation}</p>

<p class="equation equation-center">\begin{equation} \%FanOn_{low,f}(t_{f}) = \begin{cases} 100\% & \text{if } i_{f}(t_{f}) < i_{low,f} * (1+\varepsilon) \\ 1 - \frac{i_{f}(t_{f}) - i_{low,f}}{i_{high,f} - i_{low,f}} & \text{if } i_{low,f} * (1+\varepsilon) < i_{f}(t_{f}) < i_{high,f}* (1-\varepsilon) \\ 0\% & \text{if } i_{high,f} * (1-\varepsilon) < i_{f}(i) \end{cases} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$\%FanOn_{high,f}(i) =$ Percent of an hour that motor is running at high speed for either supply or return fan, f, %</p>
<p class="equation">$\%FanOn_{low,f}(i) =$ Percent of an hour that motor is running at low speed for either supply or return fan, f, %</p>
<p class="equation">$i_{f}(t_{f}) =$ Measured current for either supply or return fans, f, Amps</p>
<p class="equation">$t_{f} =$ Index for each measured data point for either supply or return fans, f, datasets</p>
<p class="equation">$i_{high,f} =$ One-time measured current at high speed setpoint for either supply or return fan, f, Amps</p>
<p class="equation">$i_{low,f} =$ One-time measured current at the low speed setpoint for either supply or return fan, f, Amps</p>
<p class="equation">$\varepsilon =$ Error tolerance to classify current as representing high speed or low speed operation</p>

2. Average % hour motor is on for each hour of each day of the week (Workseet: "Step 3 Daily Avg Runtime Calcs").

<p class="equation equation-center">\begin{equation} \overline{\%FanOn}_{s,d,h,f} = \frac{\sum_{n_f=1}^{N_{f}(d,h)} \%FanOn_{s,f}(n)}{N_{f}(d,h)} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$\overline{\%FanOn}_{s,d,h,f} =$ Average % time motor is at either low speed or high speed setpoint, s, per hour for given day of wekk, d, and hour of they day, h, for either supple of return fan, %</p>
<p class="equation">$N_{f}(d,h) =$ Total number of measured data points that fall on day of week, d, and hour of day, h, for either supply or return fan, f</p>
<p class="equation">$n_{f} \in i_{f}(d,h) =$ Index for subset of measured data points that fall on day of week, d, and hour of day, h, for either supply or return fan, f</p>

3. Find average hours per day fan is on (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} \overline{HrsOn}_{s,d,f} = \sum_{h=0}^{23} \overline{\%FanOn}_{s,d,h,f} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$\overline{HrsOn}_{s,d,f} =$ Average hours per day for given day of week, d, for either supply or return fan, f, hours</p>

4. Calculate energy used for full year for each fan (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} E_{f} = \sum_{d=1}^{7} (\overline{HrsOn}_{low,d,f} * P_{low,f} + \overline{HrsOn}_{high,d,f} * P_{high,f}) * 52 [weeks \hspace{2mm} per \hspace{2mm} year] \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$E_{f} =$ Annual energy for either supply or return fan, f, kWh</p>
<p class="equation">$P_{s,f} =$ Measured power for either the low speed or high speed setpoint, s, and for either supply or return fan, f, kW</p>

5. Total energy used by Fan Motor (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} E = E_{supply} + E_{return} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$E =$ Total energy usage for the Fan Motor, kWh</p>

<!-- ### Two-speed VFD-controlled Fans Using Speed from a BAS or VFD  

This calculation tool is for VFD-controlled fans that are operated at two speeds. Measured input data include hourly average motor speed (in RPM) as downloaded from a BAS or a VFD, and spot measurements for true power at both high and low speeds for supply and return fans in the Fan Motor. 

1. Convert seconds fan is on per our to percent fan is on per hour (Worksheet: "Step 2. Percent Runtime Calcs") for supply and return fans.

<p class="equation equation-center">\begin{equation} \%FanOn_{high,f}(t_{f}) = \begin{cases} 100\% & \text{if } S_{high,f} * (1+\varepsilon) < S_{f}(t_{f}) \\ \frac{S_{f}(t_{f}) - S_{low,f}}{S_{high,f} - S_{low,f}} & \text{if } S_{low,f} * (1+\varepsilon) < S_{f}(t_{f}) < S_{high,f}* (1-\varepsilon) \\ 0\% & \text{if } S_{f}(t_{f}) < S_{low,f} * (1+\varepsilon) \end{cases} \end{equation}</p>

<p class="equation equation-center">\begin{equation} \%FanOn_{low,f}(t_{f}) = \begin{cases} 100\% & \text{if } S_{f}(t_{f}) < S_{low,f} * (1+\varepsilon) \\ 1 - \frac{S_{f}(t_{f}) - S_{low,f}}{i_{high,f} - S_{low,f}} & \text{if } S_{low,f} * (1+\varepsilon) < S_{f}(t_{f}) < S_{high,f}* (1-\varepsilon) \\ 0\% & \text{if } S_{high,f} * (1-\varepsilon) < S_{f}(i) \end{cases} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$\%FanOn_{high,f}(i) =$ Percent of an hour that motor is running at high speed for either supply or return fan, f, %</p>
<p class="equation">$\%FanOn_{low,f}(i) =$ Percent of an hour that motor is running at low speed for either supply or return fan, f, %</p>
<p class="equation">$S_{f}(t_{f}) =$ Measured speed for VFD for either supply or return fan, f, rpm</p>
<p class="equation">$t_{f} =$ Index for each measured data point for either supply or return fans, f, datasets</p>
<p class="equation">$S_{high,f} =$ High speed setpoint for either supply or return fan, f, rpm</p>
<p class="equation">$S_{low,f} =$ Low speed setpoint for either supply or return fan, f, rpm</p>
<p class="equation">$\varepsilon =$ Error tolerance to classify current as representing high speed or low speed operation</p>

2. The remaining calculations for this workbook are equations (12), (13), (14) and (15), as described in the section for the “Two-speed VFD-controlled Fans OR Constant Speed, Constant Volume Fans Using a Current Transformer” workbook.  -->

### Variable-speed, variable-volume fan energy calculations  

This calculation tool is for VFD-controlled fans that are operated at different speeds proportional to the heating/cooling load. Because the heating/cooling load of a facility is mainly affected by outdoor air temperature (OAT), this data must be collected as well. Measured input data include average hourly power draw (kW) and average hourly OAT. 

1. Perform second-order polynomial regression analysis of true RMS power as a function of OAT. (Worksheet: "Step 3. Regression") for supply and return fans. 

<p class="equation equation-center">\begin{equation} P_{f}(OAT) = a*OAT^{2} + b*OAT + c \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$P_{f} =$ Average hourly true RMS Power for either supply or return fan, f, kW</p>
<p class="equation">$a,b,c =$ Regression coefficients</p>
<p class="equation">$OAT_{f} =$ Outdoor air temperature for either supply or return fan, f</p>

2. Determine if the supply and return motors are on or off at each measurement interval based on the input true RMS power values (Worksheets: "Step 4. Schedule Calcs").

<p class="equation equation-center">\begin{equation} On_{f}(t_{f}) = \begin{cases} 1 & \text{if } P_{f}(t_{f}) > 0\\ 0 & otherwise \end{cases} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$P_{f}(t_{f}) =$ Measured power</p>
<p class="equation">$On_{f}(t_{f}) =$ Motor is on at time, $$t_{f}$$ for either supply or return fan, f, binary</p>

3. Average hourly % motor is on for each hour of each day of the week, for supply and return fan motors (Worksheet: "Step 5. Daily Avg Schedule Calc").

<p class="equation equation-center">\begin{equation} \overline{\%FanOn}_{d,h,f} = \frac{\sum_{n_{f}=1}^{N_{f}(d,h)} On_{f}(t_{f})}{N_{f}(d,h)} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$\overline{\%FanOn}_{d,h,f} =$ Average % time motor is on per hour for given day of week, d, and hour of day, h, for either supply or return fan, f, %</p>
<p class="equation">$N_{f}(d,h) =$ Total number of measured data points that fall on day of week, d, and hour od day, h, for either supply or return fan, f</p>
<p class="equation">$n_{f} \in t_{f}(d,h) =$ Index for subset of measured data points that fall on day of week, d, and hour of day, h, for either supply or return fan, f</p>

4. Calculated energy (kWh) every hour based on normalized annual OAT for the supply and return fan motors (Worksheet: "Step 6. Energy Calcs," column F & G).

<p class="equation equation-center">\begin{equation} E_{f} = \sum_{t=1}^{8760} P_{f}(OAT'(t))*\overline{\%FanOn}_{d,h,f}(t) \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$E_{f} =$ Annual energy usage for either supply or return fan, f, kWh</p>
<p class="equation">$OAT'(t) =$ Climate normal outdoor air temperature from National Weather Service at station closest to site, F</p>

5. Total energy used by Fan Motor (Worksheet: "Step 7. Results").

<p class="equation equation-center">\begin{equation} E = E_{supply} + E_{return} \end{equation}</p>

<p class="equation">Where,</p>
<p class="equation">$E =$ Total energy usage for the Fan Motor, kWh</p>

## Additional Resources 

## References 

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