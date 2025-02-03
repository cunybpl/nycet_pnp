---
title: Fan Motor Energy Consumption
type: calculation
layout: calculation_methodology
calculation_methodology_id: 2
excerpt: The equations and calculators in this page estimate the annual energy consumption of variable-speed and constant-speed fan motors.
realted_systems:
  - Constant-Speed, Constant-Volume System
related_measurements:
  - Electrical Current
associated_calculators:
  - Constant Speed Fan Energy Using Motor Runtime Data
  - Constant One or Two Speed Fan Energy using kW Data
  - Constant One or Two Speed Fan Energy Using Electrical Current Data
  - Constant One or Two Speed Fan Energy Using Motor Speed Data
  - Variable Speed Fan Energy Using kW Data
url: "/documents/calculation-methodology/fan-motors-energy-consumption"
---

## Introduction

This methodology applies to fan motors that operate at constant or variable speed. Fan motors exist in many building systems including air handling units, energy recovery ventilation units, condensers in an air-cooled chiller and many others. The calculators provided in this page use equations that estimate the annual energy consumption of a fan motor regardless of the system it is a part of, the exception to this are cooling tower fans which have their own <a href="/documents/calculation-methodology/cooling-tower-fans-energy-consumption">methodology here</a>

The type of data that is measured from the fan motor will determine the calculator to use.

## Calculators

<div class="table-wrapper">
<table>
    <caption>Table 1. Fan motor energy calculators</caption>
    <thead>
        <tr>
            <th>
                Calculator (Downloadable Files)
            </th>
            <th width="50%">
                Description
            </th>
            <th>
                Required Data To Use This Calculator
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                <a href="/downloadables/cscv_single_speed_fan_energy_calculator_2023_0214.xlsx" download>Constant Speed Fan Energy Using Motor Runtime Data.xlsx</a>
            </td>
            <td>
                Uses motor runtime (in seconds) and true RMS power (kW) data to estimate annual energy consumption of a CSCV single-speed fan motor. This calculator can work with data from two fans, e.g., if you measured a supply and return fan in an AHU use this calculator to estimate the total annual energy consumption of the AHU. Data from both fans must be in the same format.
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
                <a href="/downloadables/cscv_fan_single_speed_kW_data_calculator_2023_0227.xlsx" download>Constant One or Two Speed Fan Energy Using kW Data.xlsx</a>
            </td>
            <td>
                Uses measured hourly kW data to estimate annual energy consumption for a constant-speed one- or two-speed fan motor.
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/true-rms-power">Hourly true RMS power (kW)</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/downloadables/cscv_fan_two_speed_current_data_calculator_2023_0320.xlsx" download>Constant One of Two Speed Fan Energy Using Electrical Current Data.xlsx</a>
            </td>
            <td>
                Uses hourly current data (in amperes) and true RMS power (kW) data to estimate annual energy consumption of a CSCV two-speed fan motor. This calculator can work with data from two fans, e.g., if you measured a supply and return fan in an AHU use this calculator to estimate the total annual energy consumption of the AHU. Data from both fans must be in the same format.
            </td>
            <td>
                <ul>
                <li><a href="/documents/measurement-technique/electrical-current">Hourly current (amperes)</a></li> 
                <li><a href="/documents/measurement-technique/electrical-spot-measurement">One-time true RMS power (kW)</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/downloadables/cscv_fan_two_speed_motor_speed_data_calculator_2020_0512.xlsx" download>Constant One or Two Speed Fan Energy Using Motor Speed Data.xlsx</a>
            </td>
            <td>
                Uses hourly motor speed data obtained from the VFD or BMS and spot measurement data of kW to estimate the annual energy consumption of a constant-speed one- or two-speed fan motor.
            </td>
            <td>
                <ul>
                    <li>Hourly motor speed (RPM)</li>
                    <li><a href="/documents/measurement-technique/true-rms-power">One-time measurement of true RMS power (kW)</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/downloadables/vsvv_fan_kW_data_calculator_2023_0203.xlsx" download>Variable Speed Fan Energy Using kW Data.xlsx</a>
            </td>
            <td>
                Uses hourly true RMS power to calculate hourly energy consumption then estimate the annual energy consumption of a VSVV fan motor. This calculator can work with data from two fans, e.g., if you measured a supply and return fan in an AHU use this calculator to estimate the total annual energy consumption of the AHU. Data from both fans must be in the same format.
            </td>
            <td>
                <ul>
                <li><a href="/documents/measurement-technique/true-rms-power">Hourly true RMS power (kW)</a></li> 
                <li><a href="/documents/measurement-technique/outside-air-temperature">Hourly outside air temperature (F)</a></li>
                </ul>
            </td>
    </tbody>
</table> 
</div>

## Fan Motor Calculations

### Constant Speed Fan Energy Using Motor Runtime Data

This calculation tool is for a constant speed, constant volume system. Measured input data include spot measurements for true power and motor operational time per hour, as measured by motor on/off loggers for the supply and return fans in the Fan Motor.

1. Convert seconds fan is on per hour to percent fan is on per hour (Worksheet: "Step 2. Percent Runtime Calc") for supply and return fans.

<p class="equation equation-center">\begin{equation} \%FanOn_{f}(t_{f}) = \frac{On_{f}(t_{f})}{3600} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\hspace{5mm} \%FanOn_{f}(t_{f}) =$ Percent of an hour that the motor is on for either supply or return fan, f, %</p>
<p class="equation">$\hspace{5mm} On_{f}(t_{f}) =$ Measured time that motor is on for either supply or return fan, f, in seconds</p>
<p class="equation">$\hspace{5mm} t_{f} =$ Index for each measured data point for either supply or return fan, f</p>

2. Average % hour motor is on for each hour, h, of each day of the week, d (Worksheet: "Step 3. Daily Avg Runtime Calcs").

<p class="equation equation-center">\begin{equation} \overline{\%FanOn}_{d,h,f} = \frac{\sum_{n_{f}}^{N_{f}(d,h)} \%FanOn_{f}(N_{f})}{N_{f}(d,h)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{\%FanOn}_{d,h,f} =$ Average % time motor is on per hour for given day of week, d, and hour of day, h, for either supply of return fan, f, %</p>
<p class="equation">$N_{f}(d,h) =$ Total number of measured data points that fall on day of week, d, and hour of day, h, for either supply or return fan, f</p>
<p class="equation">$n_{f} \in t_{f}(d,h) =$ Index for the subset of measured data points that fall on day of week, d, and hour of the day, h, for either supply or return fan</p>

3. Find average hours per day fan is on (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} \overline{HrsOn}_{d,f} = \sum_{h=0}^{23} \overline{\%FanOn}_{d,h,f} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{HrsOn}_{d,f} =$ Average hours per day for given day of week, d, for either supply or return fan, f, hours</p>

4. Calculate energy used for the simulation period that users input for each fan (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} E_{f} = \sum_{d=1}^{7} \overline{HrsOn}_{d,f} * operating \hspace{2mm} weeks \hspace{2mm} per \hspace{2mm} year * P_{f} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E_{f} =$ Annual energy for either supply or return fan, f, kWh</p>
<p class="equation">$P_{f} =$ Measured power for either supply or return fan, f, kW</p>

5. Total energy used by Fan Motor (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} E = E_{supply} + E_{return} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E =$ Total energy usage for the Fan Motor, kWh</p>

### Constant One or Two Speed Fan Energy Using kW Data

This calculation tool is for a constant-speed or two-speed, constant-volume system. Measured input data is average hourly power draw (in kW) as measured by a data logging power meter for the supply and return fans in the AHU.

1. Average equivalent % hour motor is on full speed for each hour, h, of each day of the week, d, (Worksheet: "Step 3. Avg Day of Week Calcs").

<p class="equation equation-center">\begin{equation} \bar{P}_{d,h,f} = \frac{\sum_{n_f = 1}^{N_f(d,h)} P_f(t_f)}{N_f(d,h)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\bar{P}_{d,h,f} =$ average motor power for given day of week, d, and hour of day, h, for either suply or return fan, f, kW</p>
<p class="equation">$P_f(t_f) =$ measured motor power for either supply or return fan, f, kW</p>
<p class="equation">$t_f =$ index for measured data points for either supply or return fan, f, datasets</p>
<p class="equation">$N_f(d,h) =$ total number of measured data points that fall on day of week, d, and hour of day, h, for either supply or return fan, f</p>
<p class="equation">$n_f \in t_f(d,h) =$ index for subset of measured data points that fall on day of week, d, and hour of day, h, for either supply or return fan, f</p>

2. Calculate energy used for the simulation period that users input for each fan (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} E_f = \sum_{d = 1}^7 \sum_{h = 1}^24 \bar{P}_{d,h,f} * [\textit{operating weeks per year}] \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E_f =$ annual energy for either supply or return fan, f, kWh</p>
<p class="equation">$\bar{P}_{d,h,f} =$ average motor power for given day of week, d, and hour of day, h, for either supply or return fan, f, kW</p>

3. Total energy used by the AHU (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} E = E_{supply} + E_{return} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E =$ total energy usage for AHU, kWh</p>

### Constant One or Two Speed Fan Energy using Electrical Current Data

This calculation tool is for VFD-controlled fans that are operated at two speeds, as well as for a constant speed, constant volume system. Measured input data include hourly average current (in Amps), as directly measured by current transformers, and spot measurements for true power at both high and low speed operation for the supply and return fans in the Fan Motor. If the tool is used for a constant speed, constant volume system, then set the low speed input data to zeroes and enter the all the input data for high speed. 

1. Convert seconds fan is on per hour to percent fan is on per hour (Worksheet: "Step 2. Percent Runtime Calcs") for supply and return fans.

<p class="equation equation-center">\begin{equation} \%FanOn_{high,f}(t_{f}) = \begin{cases} 100\% & \text{if } i_{high,f} * (1+\varepsilon) < i_{f}(t_{f}) \\ \frac{i_{f}(t_{f}) - i_{low,f}}{i_{high,f} - i_{low,f}} & \text{if } i_{low,f} * (1+\varepsilon) < i_{f}(t_{f}) < i_{high,f}* (1-\varepsilon) \\ 0\% & \text{if } i_{f}(t_{f}) < i_{low,f} * (1+\varepsilon) \end{cases} \end{equation}</p>

<p class="equation equation-center">\begin{equation} \%FanOn_{low,f}(t_{f}) = \begin{cases} 100\% & \text{if } i_{f}(t_{f}) < i_{low,f} * (1+\varepsilon) \\ 1 - \frac{i_{f}(t_{f}) - i_{low,f}}{i_{high,f} - i_{low,f}} & \text{if } i_{low,f} * (1+\varepsilon) < i_{f}(t_{f}) < i_{high,f}* (1-\varepsilon) \\ 0\% & \text{if } i_{high,f} * (1-\varepsilon) < i_{f}(i) \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\%FanOn_{high,f}(i) =$ Percent of an hour that motor is running at high speed for either supply or return fan, f, %</p>
<p class="equation">$\%FanOn_{low,f}(i) =$ Percent of an hour that motor is running at low speed for either supply or return fan, f, %</p>
<p class="equation">$i_{f}(t_{f}) =$ Measured current for either supply or return fans, f, Amps</p>
<p class="equation">$t_{f} =$ Index for each measured data point for either supply or return fans, f, datasets</p>
<p class="equation">$i_{high,f} =$ One-time measured current at high speed setpoint for either supply or return fan, f, Amps</p>
<p class="equation">$i_{low,f} =$ One-time measured current at the low speed setpoint for either supply or return fan, f, Amps</p>
<p class="equation">$\varepsilon =$ Error tolerance to classify current as representing high speed or low speed operation</p>

2. Average % hour motor is on for each hour of each day of the week (Workseet: "Step 3 Daily Avg Runtime Calcs").

<p class="equation equation-center">\begin{equation} \overline{\%FanOn}_{s,d,h,f} = \frac{\sum_{n_f=1}^{N_{f}(d,h)} \%FanOn_{s,f}(n)}{N_{f}(d,h)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{\%FanOn}_{s,d,h,f} =$ Average % time motor is at either low speed or high speed setpoint, s, per hour for given day of wekk, d, and hour of the day, h, for either supple of return fan, %</p>
<p class="equation">$N_{f}(d,h) =$ Total number of measured data points that fall on day of week, d, and hour of day, h, for either supply or return fan, f</p>
<p class="equation">$n_{f} \in i_{f}(d,h) =$ Index for subset of measured data points that fall on day of week, d, and hour of day, h, for either supply or return fan, f</p>

3. Find average hours per day fan is on (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} \overline{HrsOn}_{s,d,f} = \sum_{h=0}^{23} \overline{\%FanOn}_{s,d,h,f} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{HrsOn}_{s,d,f} =$ Average hours per day for given day of week, d, for either supply or return fan, f, hours</p>

4. Calculate energy used for full year for each fan (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} E_{f} = \sum_{d=1}^{7} (\overline{HrsOn}_{low,d,f} * P_{low,f} + \overline{HrsOn}_{high,d,f} * P_{high,f}) * 52 [weeks \hspace{2mm} per \hspace{2mm} year] \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E_{f} =$ Annual energy for either supply or return fan, f, kWh</p>
<p class="equation">$P_{s,f} =$ Measured power for either the low speed or high speed setpoint, s, and for either supply or return fan, f, kW</p>

5. Total energy used by Fan Motor (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} E = E_{supply} + E_{return} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E =$ Total energy usage for the Fan Motor, kWh</p>

### Constant One or Two Speed Fan Energy Using Motor Speed Data

This calculation tool is for VFD-controlled fans that are operated at two speeds. Measured input data include hourly average motor speed (in RPM) as downloaded from a BAS or a VFD, and spot measurements for true power at both high and low speeds for supply and return fans in the AHU. 

1. Convert seconds fan is on per hour to percent fan is on per hour (Worksheet: “Step 2. Percent Runtime Calcs”) for supply and return fans. 

<p class="equation equation-center">\begin{equation} \%FanOn_{high,f}(t_{f}) = \begin{cases} 100\% & \text{if } S_{high,f} * (1+\varepsilon) < S_{f}(t_{f}) \\ \frac{S_{f}(t_{f}) - S_{low,f}}{S_{high,f} - S_{low,f}} & \text{if } S_{low,f} * (1+\varepsilon) < S_{f}(t_{f}) < S_{high,f}* (1-\varepsilon) \\ 0\% & \text{if } S_{f}(t_{f}) < S_{low,f} * (1+\varepsilon) \end{cases} \end{equation}</p>

<p class="equation equation-center">\begin{equation} \%FanOn_{low,f}(t_{f}) = \begin{cases} 100\% & \text{if } S_{f}(t_{f}) < S_{low,f} * (1+\varepsilon) \\ 1 - \frac{S_{f}(t_{f}) - S_{low,f}}{S_{high,f} - S_{low,f}} & \text{if } S_{low,f} * (1+\varepsilon) < S_{f}(t_{f}) < S_{high,f}* (1-\varepsilon) \\ 0\% & \text{if } S_{high,f} * (1-\varepsilon) < S_{f}(i) \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\%FanOn_{high,f}(i) =$ percent of an hour that motor is running at high speed for either supply or return fan, f, %</p>
<p class="equation">$\%FanOn_{low,f}(i) =$ percent of an hour that motor is running at low speed for either supply or return fan, f, %</p>
<p class="equation">$S_f(t_f) =$ measured speed from VFD for either supply or return fan, f, rpm</p>
<p class="equation">$t_f =$ index for each measured data point for either supply or return fan, f, datasets</p>
<p class="equation">$S_{high,f} =$ high speed setpoint for either supply or return fan, f, rpm</p>
<p class="equation">$S_{low,f} =$ low speed setpoint for either supply or return fan, f, rpm</p>
<p class="equation">$\varepsilon =$ error tolerance to classify current as representing high-speed or low-speed operation</p>

2. The remaining calculations for this workbook are equations (12), (13), (14) and (15), as described in the section for the “Two-speed VFD-controlled Fans OR Constant Speed, Constant Volume Fans Using a Current Transformer” workbook.

### Variable Speed Fan Energy Using kW Data

This calculation tool is for VFD-controlled fans that are operated at different speeds proportional to the heating/cooling load. Because the heating/cooling load of a facility is mainly affected by outdoor air temperature (OAT), this data must be collected as well. Measured input data include average hourly power draw (kW) and average hourly OAT. 

1. Perform second-order polynomial regression analysis of true RMS power as a function of OAT. (Worksheet: "Step 3. Regression") for supply and return fans. 

<p class="equation equation-center">\begin{equation} P_{f}(OAT) = a*OAT^{2} + b*OAT + c \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$P_{f} =$ Average hourly true RMS Power for either supply or return fan, f, kW</p>
<p class="equation">$a,b,c =$ Regression coefficients</p>
<p class="equation">$OAT_{f} =$ Outdoor air temperature for either supply or return fan, f</p>

2. Determine if the supply and return motors are on or off at each measurement interval based on the input true RMS power values (Worksheets: "Step 4. Schedule Calcs").

<p class="equation equation-center">\begin{equation} On_{f}(t_{f}) = \begin{cases} 1 & \text{if } P_{f}(t_{f}) > 0\\ 0 & otherwise \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$P_{f}(t_{f}) =$ Measured power</p>
<p class="equation">$On_{f}(t_{f}) =$ Motor is on at time, $t_{f}$ for either supply or return fan, f, binary</p>

3. Average hourly % motor is on for each hour of each day of the week, for supply and return fan motors (Worksheet: "Step 5. Daily Avg Schedule Calc").

<p class="equation equation-center">\begin{equation} \overline{\%FanOn}_{d,h,f} = \frac{\sum_{n_{f}=1}^{N_{f}(d,h)} On_{f}(t_{f})}{N_{f}(d,h)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{\%FanOn}_{d,h,f} =$ Average % time motor is on per hour for given day of week, d, and hour of day, h, for either supply or return fan, f, %</p>
<p class="equation">$N_{f}(d,h) =$ Total number of measured data points that fall on day of week, d, and hour od day, h, for either supply or return fan, f</p>
<p class="equation">$n_{f} \in t_{f}(d,h) =$ Index for subset of measured data points that fall on day of week, d, and hour of day, h, for either supply or return fan, f</p>

4. Calculated energy (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) every hour based on normalized annual OAT for the supply and return fan motors (Worksheet: "Step 6. Energy Calcs," column F & G).

<p class="equation equation-center">\begin{equation} E_{f} = \sum_{t=1}^{8760} P_{f}(OAT'(t))*\overline{\%FanOn}_{d,h,f}(t) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E_{f} =$ Annual energy usage for either supply or return fan, f, kWh</p>
<p class="equation">$OAT'(t) =$ Climate normal outdoor air temperature from National Weather Service at station closest to site, F</p>

5. Total energy used by Fan Motor (Worksheet: "Step 7. Results").

<p class="equation equation-center">\begin{equation} E = E_{supply} + E_{return} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E =$ Total energy usage for the Fan Motor, kWh</p>