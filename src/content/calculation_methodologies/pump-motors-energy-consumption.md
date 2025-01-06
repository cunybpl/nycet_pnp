---
title: Pump Motor Energy Consumption
type: calculation
layout: calculation_methodology
calculation_methodology_id: 6
excerpt: The equations and calculators in this page estimate the annual energy consumption of variable-speed and constant-speed pump motors.
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/pump-motor-kit-variable-speed/"
associated_calculators:
  - Constant Speed Pump Energy Using Motor Runtime Data
  - Constant One or Two Speed Pump Energy Using kW Data
  - Constant One or Two Speed Pump Energy Using Electrical Current Data
  - Variable Speed Pump Energy Using kW Data
  - Variable Speed Pump Energy Using Motor Speed Data
url: "/documents/calculation-methodology/pump-motors-energy-consumption"
---

## Introduction

This methodology applies to pump motors that operate at constant or variable speed. Pump motors are used to move water throughout the building for heating or cooling. The calculators provided in this page use equations that estimate the annual energy consumption of a pump motor regardless of the system it is a part of. 
    
The type of data that is measured from the pump motor will determine the calculator to use. For more information on the type of data to collect, refer to table 1 in the next section.

## Calculators

<div class="table-wrapper">
<table>
    <caption>Table 1. Pump motor energy calculators</caption>
    <thead>
        <tr>
            <td>
                <p><strong>Calculator (Downloadable Files)</strong></p>
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
                <p><a href="/downloadables/cscv_pump_runtime_data_calculator_2020_0427.xlsx" download>Constant Speed Pump Energy Using Motor Runtime Data.xlsx</a></p>
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
                <a href="/downloadables/cscv_pump_kW_data_calculator_2020_0427.xlsx" download>Constant One or Two Speed Pump Energy Using kW Data.xlsx</a>
            </td>
            <td>
                Uses hourly electrical current data and spot measurement data of kW to estimate the annual energy consumption for a constant-speed one- or two-speed pump motor.
            </td>
            <td>
                <ul>
                    <a href="/documents/measurement-technique/true-rms-power"><li>Hourly true RMS power (kW)</li></a>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <a href="/downloadables/cscv_pump_current_data_calculator_2020_0427.xlsx" download>Constant One or Two Speed Pump Energy Using Electrical Current Data.xlsx</a>
            </td>
            <td>
                Uses measured hourly kW data to estimate annual energy consumption for a constant-speed one- or two-speed pump motor.
            </td>
            <td>
                <ul>
                    <a href="/documents/measurement-technique/electrical-current"><li>Hourly electrical current (Amps)</li></a>
                    <a href="/documents/measurement-technique/true-rms-power"><li>One-time measurement of true RMS power (kW)</li></a>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/downloadables/vsvv_pump_kW_data_calculator_2020_0427.xlsx" download>Variable Speed Pump Energy Using kW Data.xlsx</a></p>
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
        <tr>
            <td>
                <a href="/downloadables/vsvv_pump_motor_speed_data_calculator_2020_0601.xlsx" download>Variable Speed Pump Energy Using Motor Speed Data.xlsx</a>
            </td>
            <td>
                Uses hourly motor speed data obtained from the VFD or BMS and spot measurements of kW to estimate the annual energy consumption of a variable-speed pump motor.
            </td>
            <td>
                <ul>
                    <li>Hourly motor speed (RPM)</li>
                    <a href="/documents/measurement-technique/true-rms-power"><li>One-time measurement of true RMS power (kW)</li></a>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

## Pump Motor Calculations

### Constant Speed Pump Energy Using Motor Runtime Data

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

<p class="equation equation-center">\begin{equation} WeeksPumpOn = (DayOfYear(PumpOperationEndDate) \end{equation}</p>
<p class="equation equation-center">\begin{equation*} - DayOfYear(PumpOperationStartDate)) * \frac{WeeksPerDay}{DaysPer Year}\end{equation*}</p>

<p class="equation equation-center">\begin{equation} E = WeeksPumpOn * P\sum_{d=1}^{7} \overline{HrsOn}_{d} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E =$ Annual pump energy, <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a></p>
<p class="equation">$DayOfYear =$ Function to convert a date to the n^{th} day of the year</p>
<p class="equation">$PumpOperationEndDate =$ Cooling season end date, mm/dd/yyyy</p>
<p class="equation">$PumpOperationStartDate =$ Cooling season start date, mm/dd/yyyy</p>
<p class="equation">$WeeksPumpOn =$ Pump operating time, weeks</p>
<p class="equation">$WeeksPerYear =$ 52</p>
<p class="equation">$DaysPerYear =$ 365.24</p>
<p class="equation">$P =$ Measured pump power, kW</p>

### Constant One or Two Speed Pump Energy Using kW Data

This calculation tool is for a constant-speed, constant-volume pump. Measured input data is average hourly power draw (in kW) as measured by a DENT power logger.

1. Average % hour motor is on for each hour of each day of the week (Worksheet: "Step 3. Avg Day of Week Calcs").

<p class="equation equation-center">\begin{equation} \bar{P}_{d,h} = \frac{\sum_{n=1}^{N(d,h)} P(t)}{N(d,h)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\bar{P}_{d,h} =$ average motor power for given day of week, d, and hour of day, h, kW</p>
<p class="equation">$P(t) =$ measured motor power, kW</p>
<p class="equation">$t =$ index for measured data points</p>
<p class="equation">$N(h,d) =$ total number of measured data points that fall on day of week, d, and hour of the day, h</p>
<p class="equation">$n \in t(d,h) =$ index for subset of measured data points that fall on day of week, d, and hour of the day, h</p>

2. Calculate every used for full year (Worksheet: "Step 4. Results"). WeeksPumpOn is from Equation 5.

<p class="equation equation-center">\begin{equation} E = WeeksPumpOn * \sum_{d = 1}^7 \sum_{h = 1}^{24} \bar{P}_{d,h} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E =$ annual pump energy, kWh</p>
<p class="equation">$WeeksPumpOn =$ Pump operating time, weeks</p>

### Constant One or Two Speed Pump Energy Using Electrical Current Data

This calculation tool is for a constant-speed, constant-volume pump. Measured input data include hourly average current (in Amps) as directly measured by current sensors, and spot measurements for true power.

1. Convert average hourly current to percent on per hour (Worksheet: "Step 2. Percent Runtime Calcs").

<p class="equation equation-center">\begin{equation} \%On(t) = \begin{cases} \frac{I(t)}{I_{max}} & \text{if } I(t) < I_{max} \\  100\% & \text{o.w.} \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\%On(t) =$ percent of an hour that the pump motor is on, %</p>
<p class="equation">$I(t) =$ measured time that pump motor is on, seconds</p>
<p class="equation">$t =$ index for each measured data point</p>
<p class="equation">$I_{max} =$ current measured at the maximum constnat speed, Amps</p>

2. Equations 3 to 5 are used to calculate the annual pump energy.

### Variable Speed Pump Energy Using kW Data

This calculation tool is for VFD-controlled pumps that are operated at speeds proportional to the heating/cooling load as represented by proxy with OAT. Measured input data include average hourly power draw (kW) as measured by a DENT data logging power logger, and the average hourly OAT as measured by a temperature/RH logger. 

1. Fit a second-order polynomial regression model of true RMS power as a function OAT. (Worksheet: "Step 3. Regression").

<p class="equation equation-center">\begin{equation} P(OAT) = a * OAT^{2} + b * OAT + c \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$P =$ Average hourly true RMS power</p>
<p class="equation">$a,b,c =$ Regression coefficients</p>
<p class="equation">$OAT =$ Outdoor air temperature, F</p>

2. Average % hour motor is on for each hour of each day of the week (Worksheets: "Step 4. Schedule Calcs" and "Step 5. Daily Ave Schedule Calc").

<p class="equation equation-center">\begin{equation} On(t) = \begin{cases} 1 & \text{if } P(t) > 0\\
    0 & otherwise \end{cases} \end{equation}</p>

<p class="equation equation-center">\begin{equation} \overline{\%On}_{d,h} = \frac{\sum_{n=1}^{N(d,h)} On(t)}{N(d,h)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$P(t) =$ Measures power, kW</p>
<p class="equation">$On(t)=$ Motor is on at time, t, binary</p>
<p class="equation">$\overline{\%On}_{d,h} =$ Average % time motor is on per hour for given day of week, d, and hour of the day, h, %</p>
<p class="equation">$N(d,h) =$ Total number of measured data points that fall on day of week, d, and hour of the day, h</p>
<p class="equation">$n \in t(d,h) =$ Index for subset of measured data points that fall on day of week, d, and hour of the day, h</p>

3. Total annual pump energy (Worksheets: "Step 6. Energy Calcs" and "Step 7. Results").

<p class="equation equation-center">\begin{equation} E = WeeksPumpOn * \sum_{t=1}^{8760} P(OAT'(t)) * \overline{\%On}_{d,h}(t) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$E =$ Annual energy usage, <a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a></p>
<p class="equation">$OAT'(t) =$ Hourly climate normal outside air temperature from National Weather Service at station closest to site, F</p>
<p class="equation">$WeeksPumpOn =$ Pump operating times, weeks</p>

### Variable Speed Pump Energy Using Motor Speed Data

This calculation tool is for VFD-controlled pumps using hourly average motor speed (in RPM) as downloaded from a BAS or VFD, and spot measurements for true power.

1. Convert the speed data from the BAS or VFD to power (Worksheet: "Step 2. Aggregate Data")

<p class="equation equation-center">\begin{equation} P(t) = P_{max}(\frac{\omega(t)}{\omega_{max}})^{2.5} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$P(t) =$ average hourly true RMS power, kW</p>
<p class="equation">$P_{max} =$ full speed true RMS power, kW</p>
<p class="equation">$\omega_{max} =$ maximum motor speed, rpm</p>
<p class="equation">$\omega(t) =$ motor speed, rpm</p>

This equation represents the pump affinity law, where theoretically the exponent is 3. To represent motor losses, the Consortium for Energy Efficiency recommends using a value of 2.5.[^1]

2. Equations 9 to 12 are used to calculate the annual pump energy.

## Further Reading

- For more information on the different types of fans found in AHU systems, please read “Application of Fans in Commercial HVAC Equipment” from the Carrier Corporation: https://www.utcccs-cdn.com/hvac/docs/1001/Public/0F/04-581070-01.pdf 
 
- For more information of the different types of motors that can be used in an AHU retrofit, please read Chapter 7 (starts on page 91) of the Premium Efficiency Motor Selection and Application Guide from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2014/04/f15/amo_motors_handbook_web.pdf#page=91 
 
- For general information on Option A M&V guides, please read section 4.2 (starts on page 23) of “M&V Guidelines: Measurement and Verification for Performance-Based Contracts Version 4.0” from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2016/01/f28/mv_guide_4_0.pdf#page=23 

## Footnotes

[^1]: Consortium for Energy Efficiency. Motor Efficiency, Selection, and Management: A Guidebook for Industrial Efficiency Programs (May 2011)