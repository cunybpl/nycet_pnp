---
title:  Lighting Plant and Systems Energy Consumption
type: calculation
layout: calculation_methodology
calculation_methodology_id: 3
excerpt: The calculation tools developed by CUNY BPL are used to calculate annual energy consumption and not savings. 
related_systems:
  - Electrical Distribution
  - Lighting Fixture
url: "/documents/calculation-methodology/lighting-plant-and-systems-energy-consumption"
---

## Calculators

<table>
    <caption>Table 1. Lighting Calculators</caption>
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
                <p><a href="/calculators/2023_0411_lighting_ac_current_panelb.xlsx" download>Lighting AC Current Panel Calculator</a></p>
            </td>
            <td>
                <p>Uses measurements of currents per circuit to give average electricity use for the panel in kWh.</p>
            </td>
            <td>
                <p>Average hourly amperage per circuit; Circuit voltage and power facto; True RMS power (kW); current amps</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/calculators/2022_0603_lighting_ac_current_circuits.xlsx" download>Lighting AC Current Circuits Calculator</a></p>
            </td>
            <td>
                <p>Uses measurements of currents per circuit to give average electricity use for the panel in kWh.</p>
            </td>
            <td>
                <p>Average hourly amperage per circuit; Circuit voltage and power facto; True RMS power (kW); current amps</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/calculators/2022_0614_lighting_kwh_panelboard.xlsx" download>Lighting kWh Panelboard Calculator</a></p>
            </td>
            <td>
                <p>Uses the panel energy use in order to obratin electricity usage.</p>
            </td>
            <td>
                <p>Lighting Panel Total Energy Use (kWh)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/calculators/2023_0606_lighting_runtime_fixtures.xlsx" download>Lighting Runtime Fixtures Calculator</a></p>
            </td>
            <td>
                <p>Uses runtime and power draw in order to calculate averafe runtime (hours/day)</p>
            </td>
            <td>
                <p>Lighting runtime per hour; Expected fixture wattaged; Fixture counts; Total power draw (kW)</p>
            </td>
        </tr>
    </tbody>
</table>

## Introduction

The calculation tools developed by CUNY BPL are used to calculate annual energy consumption and not savings. All calculation tools start by using input data (lighting runtime, AC current, etc.) to calculate hourly energy (kWh.) Then data is averaged by hour of day and day of the week to get an approximation of how light fixtures operate during any hour of the week. Weekends and weekdays are extrapolated to a full year and summed to obtain the annual estimate of consumption for the systems. To calculate savings, use the calculation tools with pre- and post-retrofit data and compare the energy consumption results. 

The calculation tools will extrapolate data to a full year regardless of how much input data is used, but a minimum of six (6) weeks of data at one-hour intervals is required to adhere to Measurement and Verification standards. If the total fixture inventory for the project is known, data can be used by the calculation tools to determine how much of the lighting load was directly measured, but this data is not necessary for the calculation tools to work. This is useful for someone who only measured a sample of fixtures as part of a sampling plan and wants to compare the annual estimates to the total lighting load. 

All lighting calculation tools generate an average hourly energy schedule using the input data. The schedule can be used to determine the interactive heating and cooling effects associated with the lighting retrofit but this requires separate analysis. 

A.1, A.2 and A.3 are the methodologies used when measuring electricity with data loggers and power meters to determine the annual energy consumption estimate of an <u>electrical distribution system</u>. A.4 is the methodology used when measuring lighting runtime (operating schedule) to determine the annual energy consumption estimate of a <u>lighting fixture system</u>.

## Lighting Plant and Systems Energy Consumption Calculations

### Long-term Energy Measurements Using a Data-logging Power Logger

The following equations are used to calculate the annual energy consumption of a <u>lighting electrical distribution system</u> where energy in kilowatt hours (kWh) is measured at the output end of an electrical panelboard or switchgear. It is assumed that data is collected for six (6) weeks at one-hour intervals with a data-logging power meter that has the capacity to measure three-phase power. 

1. Find hourly average energy use for each hour of each day of the week (Worksheet: "Step 2. Avg Energy Calcs," column J.)


<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,h} = \frac{\sum_{1}^{N_{f}(d,h)} kWh_{n}}{N_{f}(d,h)}$$</th>
    <td class="tg-0pky">(1)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,h} = \text{Average energy of each hour for each day of the week (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$kWh_{n} = \text{Measured hourly energy kWh from the data-logging power logger (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$N_{f}(d,h) = \text{Total number of measuremed data points that fall on day of week, d, and hour the day, h}$$</th>
  </tr>
</tbody>
</table>

2. Find total daily energy consumption (Worksheet: "Step 3. Results," column C, "Step 3. Hourly Results.")

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d} = \sum_{h = 0}^{23} \overline{kWh}_{d,h,n}$$</th>
    <td class="tg-0pky">(2)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d} = \text{Sum of energy consumption for each day of the week (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,h} = \text{Average energy of each h hour for each day of the week (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$h = \text{Hour of the day where 0 is 12:00 a.m. and 23 is 11:00 p.m.}$$</th>
  </tr>
</tbody>
</table>

3. Calculate the average energy consumption for weekdays (Worksheet: "Step 3. Results," cell D3.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{Wd} = \frac{\sum_{d = 2}^{6} \overline{kWh}_{w,d}}{5}$$</th>
    <td class="tg-0pky">(3)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{Wd} = \text{Average energy consumption for weekdays (in kWH)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{w,d} = \text{Average energy of each n weekday (in kWh)}$$</th>
  <tr>
    <td class="tg-0pky">$$d = \text{day of week: (2 = Monday, 3 = Tuesday, ... 6 = Friday)}$$</th>
  </tr>
</tbody>
</table>

4. Calculate the average energy consumption for weekend days (Worksheet: "Step 3. Results," cell D6.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEd} = \frac{\sum_{h = 1}^{7} \overline{kWh}_{w,e,d}}{2}$$</th>
    <td class="tg-0pky">(4)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEd} = \text{Average energy consumption for each day of the week (in kWH)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{w,e,d} = \text{Average energy of each n weekend day (in kWh)}$$</th>
  <tr>
    <td class="tg-0pky">$$d = \text{Day of week: (7 = Saturday, 1 = Sunday)}$$</th>
  </tr>
</tbody>
</table>

5. Calculate the annual weekday energy consumption (Worksheet: "Step 3. Results," cell E3.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdYr} = \overline{kWh}_{Wd} * (261 \hspace{2mm} weekdays \hspace{2mm} per \hspace{2mm} year - X)$$</th>
    <td class="tg-0pky">(5)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdYr} = \text{Annual weekday energy consumption (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{Wd} = \text{Average weekday energy consumption (in kWh)}$$</th>
  <tr>
    <td class="tg-0pky">$$X = \text{Number of weekdays that are adjusted to use weekend day average energy consumption}$$</th>
  </tr>
</tbody>
</table>

6. Calculate the total weekend day energy consumption (Worksheet: "Step 3. Results," cell E6.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdYr} = \overline{kWh}_{WEd} * (104 \hspace{2mm} weekend \hspace{2mm} days \hspace{2mm} per \hspace{2mm} year + X)$$</th>
    <td class="tg-0pky">(6)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdYr} = \text{Annual weekend day energy consumption (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{Wd} = \text{Average weekday day energy consumption (in kWh)}$$</th>
  <tr>
    <td class="tg-0pky">$$X = \text{Number of weekdays that are adjusted to use weekend day average energy consumption}$$</th>
  </tr>
</tbody>
</table>

7. Calculate total annual estimate energy consumption (Worksheet: "Step 3. Results," cell F3.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{anm} = \overline{kWh}_{WdYr} + \overline{kWh}_{WEdYr}$$</th>
    <td class="tg-0pky">(7)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{ann} = \text{Annual energy consumption (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdYr} = \text{Annual weekday energy consumption (in kWh)}$$</th>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdYr} = \text{Annual weekend day energy consumption (in kWh)}$$</th>
  </tr>
</tbody>
</table>

8. If more than one electric panel or switchgear was measured, sum the annual energy consumption of all panels to find the total energy consumption of the electrical distribution system. 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh} = \overline{kWh}_{{n}_{1}} + \overline{kWh}_{{n}_{2}} + ...$$</th>
    <td class="tg-0pky">(8)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh} = \text{Total energy consumption for the electrical distribution system (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{n} = \text{Total energy consumption for each panel or switchgear(in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$n = \text{Number of panels or switchgear measured}$$</th>
  </tr>
</tbody>
</table>

### Current Measurement at the Output of a Panelboard using Current Transformers

Lighting fixtures generally require single-phase power to operate but <u>electrical distribution systems</u> are commonly three-phase. This methodology only applies to a three-phase, four wire system (wye configuration), additionally the panelboard load must be balanced (i.e., all three electrical lines, or phases, must have the same current and line-to-neutral voltage.) For an unbalanced load, where voltage and current are not equal across the three lines, energy should be measured directly with a data-logging power logger capable of measuring a three-phase system, see section A.1. 

To estimate the energy consumption of the panelboard, including all fixtures served by it, current should be measured for all three electrical lines of the three-phase system. <span class="tooltip-pnp">Current data should be at one-hour intervals and data should consist of an average sample of measurements<span class="tooltiptext">CUNY BPL recommends taking a sample of measurements and find the average. The average value will be used to calculate annual energy consumption. As an example, the Onset HOBO 4-channel analog logger can measure a sample of current data at a predefined interval known as the sampling interval. If the logging interval is set to one-hour and the sampling interval is set to one-second, the logger will measure current every second for one hour then determine the average. The average will be stored in the logger as the one-hour interval measurement. This process will continue every hour for the duration of the measurement period.</span></span> for each one-hour interval. Power factor, line-to-line voltage, and true RMS power can be obtained from spot measurements with a handheld power meter. CUNY BPL recommends taking multiple spot measurements of those variables and averaging them (e.g., measure power factor at least three times at five-minute intervals and calculate the average), see equation (9). The average of the spot measurements helps reduce measurement uncertainty and should be used as inputs to the calculation tools. Equation (9) should be applied to power factor, voltage, and true RMS power. 
//Insert Footnote

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$${V}_{avg,LL} = \frac{V_{t1}+V_{t2}+V_{t3}+V_{t4}}{x}$$</th>
    <td class="tg-0pky">(9)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$V_{avg,LL} = \text{Average line-to-line voltage}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$V_{t1} = \text{First measurement of voltage}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$V_{t2} = \text{Second measurement of voltage, at least five minutes after the first measurement}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$V_{t3} = \text{Third measurement of voltage, at least five minutes after the second measurement}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$x = \text{Number of spot measurements taken, at least five minutes apart}$$</th>
  </tr>
</tbody>
</table>

1. Find the average current of the electrical distribution system for each hour interval. Current of all three phases is measured every hour, in this step the average current of the panelboard is calculated for each hour interval.

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$I_{h,avg} = \frac{I_{1}+I_{2}+I_{3}}{3}$$</th>
    <td class="tg-0pky">(10)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$I_{h,avg} = \text{Average current for each hour interval (in Amps)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$I_{1} = \text{Hourly average current of line 1 (in Amps)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$I_{2} = \text{Hourly average current of line 1 (in Amps)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$I_{3} = \text{Hourly average current of line 3 (in Amps)}$$</th>
  </tr>
</tbody>
</table>

Equation 11 calculates the three-phase power of the panelboard if line-to-line voltage is measured. If line-to-neutral voltage is measured (from hot wire to ground) the <u>square root of 3</u> should be replaced with 3 and the line-to-neutral voltage should be used.

2. Calculate three-phase power for each hour interval using the results from equation (8) and (9) (i.e., average current for each hour interval, average voltage, and average power factor). (Worksheet: “Step 2. Power Calcs,” column E, G, I.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kW}_{h,Sn} = \frac{\sqrt{3} * I_{h,avg} * V_{LL,avg} * PF}{1000}$$</th>
    <td class="tg-0pky">(11)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kW}_{h,Sn} = \text{Hourly single-phase power draw for electrical line n (in kW)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$I_{h,avg} = \text{Average current for each hour interval (in Amps)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$V_{LL,avg} = \text{Measured average line-to-line voltage (in V)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$PF = \text{Measured average power factor}$$</th>
  </tr>
</tbody>
</table>

3. Calculate the hourly three-phase power of the panelboard by summing the single-phase power of each electrical line for each hour interval. (Worksheet: “Step 2. Power Calcs,” column J.) 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kW}_{h,3P} = \sum_{n=1}^{3} \overline{kW}_{h,n}$$</th>
    <td class="tg-0pky">(12)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kW}_{h,3P} = \text{Hourly three-phase power draw of the panelboard (in kW)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kW}_{h,n} = \text{Hourly single-phase power for electrical line n (in kW)}$$</th>
  </tr>
</tbody>
</table>

4. Calculate average energy consumption for each hour of each day of the week (Worksheet: “Step 3. Avg Energy Calcs,” column C.) This equation helps to reduce the amount of data points to a week by taking the average of each hour for a given day of the week. In this step the hourly power draw (kW) gets converted to hourly energy consumption (kWh) because data is in one-hour intervals. kWh = kW ∗ h, where h = 1.

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,h} = \frac{\sum_{1}^{N_{f}(d,h)} kW_{h,3P}}{N_{f}(d,h)}$$</th>
    <td class="tg-0pky">(13)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,h} = \text{Average energy consumption for each hour of each day of the week (in kW)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kW}_{h,3P} = \text{Hourly three-phase power draw of the panelboard (in kW)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$N_{f}(d,h) = \text{Total number of data points that fall on day of week, d, and hour of the day, h}$$</th>
  </tr>
</tbody>
</table>

5. Calculate total hourly energy consumption for a given day of the week (Worksheet: "Step 4. Results," column C.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,w} = \frac{\sum_{h=0}^{23} \overline{kWh}_{d,h}}{h}$$</th>
    <td class="tg-0pky">(14)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,w} = \text{Average hourly energy consumption for a given day of the week of the three-phase panelboard (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,h} = \text{Average energy consumption for each hour of each day of the week (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$h = \text{Hour of the day where 0 is 12:00 a.m. and 23 is 11:00 p.m.}$$</th>
  </tr>
</tbody>
</table>

6. Calculate the average energy consumption for weekdays (Worksheet: "Step 4. Results," cell D3.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{Wd} = \frac{\sum_{d=2}^{6} \overline{kWh}_{w,d}}{5}$$</th>
    <td class="tg-0pky">(15)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{Wd} = \text{Average energy consumption for weekdays (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{wd,n} = \text{Average hourly energy consumption of each n weekday (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$d = \text{Day of week (2 = Monday, 3 = Tuesday, ..., 6 = Friday)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$24 = \text{Constant, hours per day}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$5 = \text{Constant, weekdays per week}$$</th>
  </tr>
</tbody>
</table>

7. Calculate the average energy consumption for weekend days (Worksheet: "Step 4. Results," cell D6.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEd} = \frac{\sum_{d=1}^{7} \overline{kWh}_{we,d}}{2}$$</th>
    <td class="tg-0pky">(16)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEd} = \text{Average energy consumption for a weekend day (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{we,n} = \text{Average energy consumption of each n weekend day (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$d = \text{Day of week (7 = Saturday, 1 = Sunday)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$24 = \text{Constant, hours per day}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$2 = \text{Constant, weekends per week}$$</th>
  </tr>
</tbody>
</table>

8. Calculate the total annual weekday energy consumption (Worksheet: "Step 4. Results," cell E3.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdYr} = \overline{kWh}_{Wd} * (261-X)$$</th>
    <td class="tg-0pky">(17)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdYr} = \text{Estimated annual weekday energy consumption (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{Wd} = \text{Average energy consumption for weekdays (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$X = \text{Number of weekdays that are considered holidays and adjusted to weekend day average energy consumption}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$261 = \text{Constant, number of weekdays per year}$$</th>
  </tr>
</tbody>
</table>

9. Calculate the total annual weekend day energy consumption (Worksheet: "Step 4. Results," cell E6.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdYr} = \overline{kWh} * (104+X)$$</th>
    <td class="tg-0pky">(18)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdYr} = \text{Annual weekend day energy consumption (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEd} = \text{Average weekend day energy consumption (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$X = \text{Number of weekdays that are considered holidays and adjusted to weekend day average energy consumption}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$104 = \text{Constant, number of weekend days per year}$$</th>
  </tr>
</tbody>
</table>

10. Calculate total annual energy consumption of the panelboard

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{ann} = \overline{kWh}_{WdYr} + \overline{kWh}_{WEdYr}$$</th>
    <td class="tg-0pky">(19)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{ann} = \text{Estimated annual energy consumption of the panelboard (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdYr} = \text{Estimated annual weekday energy consumption (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdYr} = \text{Estimated annual weekend day energy consumption (in kWh)}$$</th>
  </tr>
</tbody>
</table>

11. If more than one panelboard was measured sum the annual energy consumption of all panels to find the total energy consumption of all measured panelboards.

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh} = \overline{kWh}_{{n}_{1}} + \overline{kWh}_{{n}_{1}} + ...$$</th>
    <td class="tg-0pky">(20)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh} = \text{Total energy consumption of all measured panelboards (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{n} = \text{Total energy consumption for each panelboard (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$n = \text{Number of panelboards measured}$$</th>
  </tr>
</tbody>
</table>

### Current Measurement at the Circuit Breaker in a Panelboard using Current Transformers

Lighting fixtures generally require single-phase power to operate but <u>electrical distribution systems</u> are commonly three-phase. When measuring individual circuits of a panelboard it is important to know what phase the circuit is connected to. This is because the proper line-to-neutral connection is required to accurately measure voltage for that circuit. 


The calculation tool requires the phase of the circuit to be specified to calculate annual energy consumption. If multiple circuits are measured and are connected to the same phase, then only the voltage of that phase is necessary Additionally, the user should note if the panelboard is balanced (i.e., all three electrical lines, or phases, must have the same current and line-to-line voltage.) If the panelboard is not balanced, then it must be specified in the calculation tool (see worksheet ‘Step 1.1 Circuit Raw Data’) 


The following equations are used to calculate the annual energy consumption of a lighting <u>electrical distribution system</u> where AC current is measured at the output of circuit breakers in an electrical panelboard. AC current should be measured using a data logger with current transformers (e.g., Onset HOBO 4-channel analog logger and the Onset CTV-x current transformer sensors) for one or more circuit breakers; a group of circuits can be measured with a single transformer. <span class="tooltip-pnp">Current data should be at one-hour intervals and data should be averaged with a sample of measurements<span class="tooltiptext">CUNY BPL recommends taking a sample of measurements and find the average. The average value will be used to calculate annual energy consumption. As an example, the Onset HOBO 4-channel analog logger can measure a sample of current data at a predefined interval known as the sampling interval. If the logging interval is set to one-hour and the sampling interval is set to one-second, the logger will measure current every second for one hour then determine the average. The average will be stored in the logger as the one-hour interval measurement. This process will continue every hour for the duration of the measurement period.</span></span> for each one-hour interval. Voltage is obtained from spot measurements (i.e., measured one time) with a power meter at the circuit breakers.  


It is assumed that multiple spot measurements are taken and averaged (e.g., measure line-to-neutral voltage for a circuit breaker three times at five-minute intervals and calculate the average) see equation (20). The average value should be used with these equations to reduce measurement uncertainty. In this scenario, the line-to-neutral voltage is measured for a single circuit. If measuring multiple circuits be sure to take multiple spot measurements of line-to-neutral voltage for all circuits. 
//Insert Footnote 2

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$V_{LN,avg} = \frac{V_{t1,n} + V_{t2,n} + V_{t3,n} + V_{tx,n}}{x}$$</th>
    <td class="tg-0pky">(21)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$n = \text{The electrical line that was measured of the three-phase system}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$V_{avg,n} = \text{Average line-to-neutral voltage of a circuit in electrical line n}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$V_{t1,n} = \text{First measurement of voltage for electrical line n}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$V_{t2,n} = $$</th>
    <td class="tg-0pky">Second measurement of voltage for electrical line n, at least five minutes after the first measurement</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$V_{t2,n} = \text{Third measurement of voltage for electrial line n, at least five minutes after the second measurement}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$x = /text{Number of spot measurements taken, at least five minutes apart}$$</th>
  </tr>
</tbody>
</table>

1. For each circuit or group of circuits measured, calculate average power for each hour interval (Worksheet: “Step 2. Power Calcs.”) Power is calculated using line-to-neutral voltage and current of the circuit.

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kW}_{h,n} = \frac{I_{n} * V_{LN,avg}}{1000}$$</th>
    <td class="tg-0pky">(22)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kW}_{h,n} = \text{Average hourly power for a circuit n (in kW)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$I_{n} = \text{Measured average houry current for a circuit (in Amps)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$V_{I,N,avg} = \text{Measured average line-to-neutral voltage for a circuit (in V)}$$</th>
  </tr>
</tbody>
</table>

2. Calculate average energy use for each hour of each day of the week (Worksheet: “Step 3. Avg Energy Calcs, column C, D, E, F.”) In this step the hourly power draw (kW) gets converted to hourly energy consumption (kWh) because data is in one-hour intervals. kWh = kw * h, where h = 1.

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,h,c} = \frac{\sum_{1}^{N_{f}(d,h)} kW_{h}}{N_{f}(d,h)}$$</th>
    <td class="tg-0pky">(23)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,h,c} = \text{Average energy of each hour for each day of the week for each circuit (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$kW_{h} = \text{Total power at each hour of each day of each week (in kW)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$N_{f} = \text{Total number of measured data points that fall on day of week, d, and hour of the day, h}$$</th>
  </tr>
</tbody>
</table>

3. Calculate the sum of average hourly energy of all circuits (Worksheet: "Stel 3. Avg Energy Calc" column G.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,h,n} = \sum_{c=1}^{4} \overline{kWh}_{d,h,c}$$</th>
    <td class="tg-0pky">(24)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,h} = \text{Total average energy for all circuits of each hour for each day of the week (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,h,c} = \text{Total average energy for each hour for each day of the week for each circuit (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$c = \text{Circuit that was measured}$$</th>
  </tr>
</tbody>
</table>

4. Calculate total daily energy consumption for a given day of the wekk (Worksheet: "Step 4. Results," column C.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,w} = \sum_{n=0}^{23} \overline{kWh}_{d,h}$$</th>
    <td class="tg-0pky">(25)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,w} = \text{Total average energy for each day of the week (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,h} = \text{Total average energy of each h hour for each day of the week (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$h = \text{Hour of the day where 0 is 12:00 a.m. and 23 is 11:00 p.m.}$$</th>
  </tr>
</tbody>
</table>

5. Calculate the average energy consumption for weekdays in a week for all circuits (Worksheet: "Step 4. Results," cell D3.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdCT} = \frac{\sum_{n=2}^{6} \overline{kWh}_{d,w}}{5}$$</th>
    <td class="tg-0pky">(26)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdCt} = \text{Average energy on a weekday (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,w} = \text{Average hourly energy for each n weekday of the week (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$n = \text{Day of week (2 = Monday, 3 = Tuesday, ..., 6 = Friday)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$24 = \text{Hours per day}$$</th>
  </tr>
</tbody>
</table>

6. Calculate the average energy consumption for weekend days in a week for all circuits (Worksheet: "Step 4. Results," cell D6.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdCT} = \frac{\sum_{d=7}^{1} \overline{kWh}_{d,w}}{2}$$</th>
    <td class="tg-0pky">(27)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdCT} = \text{Average energy on a weekend day (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{d,w} = \text{Average hourly energy of each circuit for each n weekend day (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$n = \text{Day of week (7 = Saturday, 1 = Sunday)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$24 = \text{Hours per day}$$</th>
  </tr>
</tbody>
</table>

7. Calculate the total annual weekday energy consumption (Worksheet: "Step 4. Results," cell E3.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdYr} = \overline{kWh}_{Wd} * (261 \hspace{2mm} weekdays \hspace{2mm} per \hspace{2mm} year - X)$$</th>
    <td class="tg-0pky">(28)</th>
  </tr>
</tbody>
</table>

Where,

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdYr} = \text{Annual weekday energy consumption (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{Wd} = \text{Average weekly weekday energy consumption (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$X = \text{Number of weekdays that are considered holidays and adjusted to weekend day average energy consumption}$$</th>
  </tr>
</tbody>
</table>

8. Calculate the total annual weekend day energy consumption (Worksheet: "Step 4. Results," cell E6.)

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdYr} = \overline{hWh}_{WEd} * (104 \hspace{2mm} weekend \hspace{2mm} days \hspace{2mm} per \hspace{2mm} year + X)$$</th>
    <td class="tg-0pky">(29)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdYr} = \text{Annual weekend day energy consumption (in kWh)}$$</th>
    <td class="tg-0pky"></th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEd} = \text{Average weekly weekend day energy consumption}$$</th>
    <td class="tg-0pky"></th>
  </tr>
  <tr>
    <td class="tg-0pky">$$X = \text{Number of weekdays that are considered holidays and adjusted to weekend day average energy consumption}$$</th>
  </tr>
</tbody>
</table>

9. Calculate total annual estimated energy consumption.

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{ann} = \overline{kWh}_{WdYr} + \overline{kWh}_{WEDYr}$$</th>
    <td class="tg-0pky">(30)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{ann} = \text{Annual energy consumption (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdYr} = \text{Annual weekday energy consumption (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdYr} = \text{Annual weekend day energy consumption (in kWh)}$$</th>
  </tr>
</tbody>
</table>

Equation (26) is the annual energy consumption of the measured circuits for a panelboard. If additional circuits were measured for the same panelboard with a different data logger be sure to consolidate the results (annual energy consumption) to obtain the total panelboard annual energy consumption. Additionally, if multiple panelboards were measured be sure to sum up the annual consumption of all panelboards to obtain the total system energy consumption.

### Fixture Inventory and Long-term Fixture On/Off Operation

The following equations are used to calculate the annual energy consumption of a <u>lighting fixture system</u>. This methodology does not require electrical measurements, only lighting runtime (operating schedule) of the fixtures. Runtime data is collected with a light logger that detects when a light source turns on and off. If multiple fixture types operate with the same schedule the same runtime data can be used for calculations. 


This calculation tool can be used for different fixture types within a single space. For example, an office space with five different types of fixtures. The number of fixtures of each type must be known as well as the respective power draw (refer to the manufacturer specifications of the lamps and ballasts).

1. Calculate power draw of the fixture type.

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$kW_{fix1} = \frac{N * W_{fix1}}{1000}$$</th>
    <td class="tg-0pky">(31)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$kW_{fix1} = \text{Total power draw of single fixture type 1 (in kW)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$W_{fix1} = \text{Wattage of fixture type 1 (in W)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$N = \text{Number of fixtures of that type with the same operating schedule}$$</th>
  </tr>
</tbody>
</table>

2. Convert fixture runtime measurements from seconds per hour to percent per hour (Worksheet: "Step 2. Percent Runtime Calcs").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\%_{int} = \frac{t_{int}}{3600}$$</th>
    <td class="tg-0pky">(32)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\%_{int} = \text{Percent per hour the fixtures are on}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$t_{int} = \text{Measured number of seconds the fixtures are on in each hour interval (in seconds)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$3600 = \text{Constant, number of seconds in one hour}$$</th>
  </tr>
</tbody>
</table>

3. Find the hourly average percentage for each day of the week the fixtures are on (Worksheet: "Step 3. Daily Avg Runtime Calcs").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\%_{hourly} = \frac{\sum_{1}^{n} \%_{int,n}}{n}$$</th>
    <td class="tg-0pky">(33)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\%_{hourly} = \text{Hourly average percentage the fixtures are on}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\%_{int} = \text{Percent per hour the fixtures are on}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$n = \text{Number of data points that have the same hour of day and day of week}$$</th>
  </tr>
</tbody>
</table>

4. Sum of runtime percentages for a given day of the week to determing the operating hours for that day (Worksheet: "Step 4. Results").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\%_{daily} = \sum_{h=0}^{23} \%_{hourly,h}$$</th>
    <td class="tg-0pky">(34)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\%_{daily} = \text{Daily average hours the fixtures are on}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\%_{hourly} = \text{Hourly average perdentage fixtures are on}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$h = \text{Hour of the day where 0 is 12:00 a.m. and 23 is 11:00 p.m.}$$</th>
  </tr>
</tbody>
</table>

5. Convert percentage to hours to determing hours per day fixtures are on in space being measured (Worksheet: "Step 4. Results").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$T_{daily} = \frac{\%_{daily}}{100}$$</th>
    <td class="tg-0pky">(35)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$T_{daily} = \text{Number of hours the fixtures are on for a given day (in hours)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\%_{daily} = \text{Daily average hours in percent per day the fixtures are on}$$</th>
  </tr>
</tbody>
</table>

6. Calculate the average energy use per weekday (Worksheet: "Step 4. Results").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{Wd,fix1} = \frac{\sum_{d=2}^{6} T_{wd,fix1,d}}{5} * kW_{fix1}$$</th>
    <td class="tg-0pky">(36)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{Wd,fix1} = \text{Average energy consumption during weekdays for fixture type 1 (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$kW_{fix1} = \text{Total fixture power from from Eq. 26 (in kW)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$T_{we,fix1,n} = \text{Number of hours the fixtures are on for a given d weeday (in hours)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$d = \text{Day of week (2 = Monday, 3 = Tuesday, ..., 6 = Friday)}$$</th>
  </tr>
</tbody>
</table>

7. Calculate the average energy use per weekend day (Worksheet: "Step 4. Results").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEd,fix1} = \frac{\sum_{d=1}^{7} T_{we,fix1,d}}{5} * kW_{fix1}$$</th>
    <td class="tg-0pky">(37)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEd,fix1} = \text{Average consumption during weekend days for fixture type 1 (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$kW_{fix1} = \text{Total fixture power draw from Eq. 26 (in kW)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$T_{we,fix1,d} = \text{Number of hours the fixtures are on for a given n weekend days (in hours)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$d = \text{Day of week (7 = Saturday, 1 = Sunday)}$$</th>
  </tr>
</tbody>
</table>

8. Calculate the annual weekday energy consumption for the foxture type (Worksheet: "Step 4. Results").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdYr,fix1} = \overline{kWh}_{Wd,fix1} * (261 \hspace{2mm} weekdays \hspace{2mm} per \hspace{2mm} year - X)$$</th>
    <td class="tg-0pky">(38)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdYr,fix1} = \text{Annual weekday energy consumption of fixture type 1 (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{Wd,fix1} = \text{Average energy consumption during weekdays for fixture type 1 (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$X = \text{Number of weekdays that are adjusted to use weekend day average energy consumption}$$</th>
  </tr>
</tbody>
</table>

9. Calculate the annual weekend energy consumption for the ficture type (Worksheet: "Step 4. Results").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEd,Yr,fix1} = \overline{kWh}_{WEd,fix1} * (104 \hspace{2mm} weekend \hspace{2mm} days \hspace{2mm} per \hspace{2mm} year + X)$$</th>
    <td class="tg-0pky">(39)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdYr,fix1} = \text{Annual weekend day energy consumption of fixture type 1 (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEd,fix1} = \text{Average energy consumption during weekend days for fixture type 1 (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$X = \text{Number of weekdays that are adjusted to use weekend average energy consumption}$$</th>
  </tr>
</tbody>
</table>

10. Calculate total annual estimated energy consumption for the fixture type (Worksheet: "Step 4. Results").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{ann,fix1} = \overline{kWh}_{WdYr,fix1} + \overline{kWh}_{WEdYr,fix1}$$</th>
    <td class="tg-0pky">(40)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{ann,fix1} = \text{Annual estimated energy consumption of fixture type 1 (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WdYr,fix1} = \text{Annual weekday energy consumption of fixture type 1 (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{WEdYr,fix1} = \text{Annual weekend day energy consumption of fixture type 1 (in kWh)}$$</th>
  </tr>
</tbody>
</table>

11. If multiple fixture types were measured find the sum of the annual estimated energy consumption for all fixture types (Worksheet: "Step 4. Results").

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{ann} = \sum_{i=1}^{n} \overline{kWh}_{ann,{fix_{n}}}$$</th>
    <td class="tg-0pky">(41)</th>
  </tr>
</tbody>
</table>

Where, 

<table class="equation-table">
<tbody>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{ann} = \text{Total annual energy of all measured fixture types (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$\overline{kWh}_{ann,fix1} = \text{Annual estimated energy consumption of each measured fixture type (in kWh)}$$</th>
  </tr>
  <tr>
    <td class="tg-0pky">$$n = \text{Number of fixture types measured}$$</th>
  </tr>
</tbody>
</table>

## Hourly Results Worksheet

Measurement data that is input in the calculation tools is used to generate an hourly energy consumption schedule for each hour in each day of the week. The schedule exists in the “Hourly Results” worksheet that is included in all four calculation tools. This data is useful to estimate the heating and cooling effects. CUNY BPL calculation tools do not calculate heating or cooling interactive effects.

## Additional Resources

For general information on Option A M&V guides, please read section 4.2 (starts on page 23) of “M&V Guidelines: Measurement and Verification for Performance-Based Contracts Version 4.0” from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2016/01/f28/mv_guide_4_0.pdf#page=23

## Resources

Richman, EE. (October 2012) “Standard Measurement and Verification Plan for Lighting Retrofit Projects for Buildings and Building Sites.” Richland, WA: Pacific Northwest National Laboratory. 
 
Richman, EE. (February 2016) “Measurement and Verification of Energy Savings and Performance from Advanced Lighting Controls.” Richland, WA: Pacific Northwest National Laboratory.