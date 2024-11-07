---
title:  Lighting Plant and Systems Energy Consumption
type: calculation
layout: calculation_methodology
calculation_methodology_id: 3
excerpt: The equations and calculators in this page estimate the annual energy consumption of the lighting plant.
related_systems:
  - Electrical Distribution
  - Lighting Fixture
associated_calculators:
  - Lighting Current Circuit Breakers Calculator
  - Lighting Current Panelboard Calculator
  - Lighting Inventory Schedule Calculator
  - Lighting True RMS Power Panelboard Calculator
url: "/documents/calculation-methodology/lighting-plant-and-systems-energy-consumption"
---

## Introduction

The calculation tools developed by CUNY BPL are used to calculate annual energy consumption and not for estimating savings. All calculation tools start by using input data (lighting runtime, AC current, etc.) to calculate hourly energy (kWh). Then data is averaged by hour of day and day of the week to get an approximation of how light fixtures operate during any hour of the week. Weekends and weekdays are extrapolated and summed to obtain a full-year estimate. To calculate savings, use the calculation tools with pre- and post-retrofit data and compare the energy consumption results. 

The calculation tools will extrapolate data to a full year regardless of how much input data is used, but a minimum of six (6) weeks of data at one-hour intervals is required to adhere to Measurement and Verification standards. If the total fixture inventory for the project is known, data can be used by the calculation tools to determine how much of the lighting load was directly measured, but this data is not necessary for the calculation tools to work. This is useful for someone who only measured a sample of fixtures as part of a sampling plan and wants to compare the annual estimates to the total lighting load. 

All lighting calculation tools generate an average hourly energy schedule using the input data. The schedule can be used to determine the interactive heating and cooling effects associated with the lighting retrofit but this requires separate analysis. 

The first three methodologies are used when measuring electricity with data loggers and power meters to determine the annual energy consumption estimate of an <u>electrical distribution system</u>. The last methodology is used when measuring lighting runtime (operating schedule) to determine the annual energy consumption estimate of a <u>lighting fixture system</u>.

## Calculators

<div class="table-wrapper">
<table>
    <caption>Table 1. Lighting energy calculators</caption>
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
                <p><a href="/downloadables/lighting_power_panelboard_2023_0417.xlsx" download>Lighting True RMS Power Output from Electric Panelboard.xlsx</a></p>
            </td>
            <td>
                <p>Uses the runtime and power of the panelboard to calculate the annual anergy consumption of a lighting electrical distribution system.</p>
            </td>
            <td>
                <ul>
                    <a href="/documents/measurement-technique/lighting-fixture-runtime"><li>Hourly lighting runtime</li></a> 
                    <li>Expected fixture wattage</li>
                    <li>Fixture counts</li> 
                    <a href="/documents/measurement-technique/true-rms-power"><li>True RMS Power (total power draw) (kW)</li></a>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/downloadables/lighting_current_panelboard_2023_0816.xlsx" download>Lighting Electrical Current Output from Electric Panelboard.xlsx</a></p>
            </td>
            <td>
                <p>Uses voltage measurements alongside power, circuit amperage and current from the electrical panelboard to measure the total energy output from the system.</p>
            </td>
            <td>
                <ul>
                    <a href="/documents/measurement-technique/electrical-spot-measurement"><li>Circuit voltage (V)</li></a> 
                    <a href="/documents/measurement-technique/electrical-spot-measurement"><li>Power factor (kW)</li></a> 
                    <a href="/documents/measurement-technique/electrical-current"><li>Hourly current (amps)</li></a>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/downloadables/lighting_current_circuit_breakers_2023_0818.xlsx" download>Lighting Electrical Current from Circuit Breakers.xlsx</a></p>
            </td>
            <td>
                <p>Uses voltage measurements alongside power, circuit amperage and current from circuit breakers to measure the total energy output from the system.</p>
            </td>
            <td>
                <ul>
                    <a href="/documents/measurement-technique/electrical-spot-measurement"><li>Circuit voltage (V)</li></a> 
                    <a href="/documents/measurement-technique/electrical-spot-measurement"><li>Power factor (kW)</li></a> 
                    <a href="/documents/measurement-technique/electrical-current"><li>Hourly current (amps)</li></a>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><a href="/downloadables/lighting_inventory_schedule_2023_0417.xlsx" download>Lighting Inventory and Operating Schedule.xlsx</a></p>
            </td>
            <td>
                <p>Uses the panel energy use to calculate the operating schedule of the system.</p>
            </td>
            <td>
                <a href="/documents/measurement-technique/electrical-spot-measurement"><p>Lighting Panel Total Energy Use (kW)</p></a>
            </td>
        </tr>
    </tbody>
</table> 
</div>

## Lighting Energy Consumption

### Lighting True RMS Power Output from Electric Panelboard

The following equations are used to calculate the annual energy consumption of a <u>lighting electrical distribution system</u> where energy in kilowatt hours (kWh) is measured at the output end of an electrical panelboard or switchgear. It is assumed that data is collected for six (6) weeks at one-hour intervals with a data-logging power meter that has the capacity to measure three-phase power. 

1. Find hourly average energy use for each hour of each day of the week (Worksheet: "Step 2. Avg Energy Calcs," column J.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{d,h} = \frac{\sum_{1}^{N_{f}(d,h)} kWh_{n}}{N_{f}(d,h)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{d,h} =$ Average energy of each hour for each day of the week (in kWh)</p>
<p class="equation">$kWh_{n} =$ Measured hourly energy kWh from the data-logging power logger (in kWh)</p>
<p class="equation">$N_{f}(d,h) =$ Total number of measuremed data points that fall on day of week, d, and hour the day, h</p>

2. Find total daily energy consumption (Worksheet: "Step 3. Results," column C, "Step 3. Hourly Results.")

<p class="equation equation-center">\begin{equation} \overline{kWh}_{d} = \sum_{h = 0}^{23} \overline{kWh}_{d,h,n} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{d} =$ Sum of energy consumption for each day of the week (in kWh)</p>
<p class="equation">$\overline{kWh}_{d,h} =$ Average energy of each h hour for each day of the week (in kWh)</p>
<p class="equation">$h =$ Hour of the day where 0 is 12:00 a.m. and 23 is 11:00 p.m.</p>

3. Calculate the average energy consumption for weekdays (Worksheet: "Step 3. Results," cell D3.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{Wd} = \frac{\sum_{d = 2}^{6} \overline{kWh}_{w,d}}{5} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{Wd} =$ Average energy consumption for weekdays (in kWH)</p>
<p class="equation">$\overline{kWh}_{w,d} =$ Average energy of each n weekday (in kWh)</p>
<p class="equation">$d =$ day of week: (2 = Monday, 3 = Tuesday, ... 6 = Friday)</p>

4. Calculate the average energy consumption for weekend days (Worksheet: "Step 3. Results," cell D6.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WEd} = \frac{\overline{kWh}_{we,1} + \overline{kWh}_{we,7}}{2} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WEd} =$ Average energy consumption for each day of the week (in kWh)</p>
<p class="equation">$\overline{kWh}_{we,d} =$ Average energy of each n weekend day (in kWh)</p>
<p class="equation">$d =$ Day of week: (7 = Saturday, 1 = Sunday)</p>

5. Calculate the annual weekday energy consumption (Worksheet: "Step 3. Results," cell E3.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WdYr} = \overline{kWh}_{Wd} * (261 \hspace{2mm} weekdays \hspace{2mm} per \hspace{2mm} year - X) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WdYr} =$ Annual weekday energy consumption (in kWh)</p>
<p class="equation">$\overline{kWh}_{Wd} =$ Average weekday energy consumption (in kWh)</p>
<p class="equation">$X =$ Number of weekdays that are adjusted to use weekend day average energy consumption</p>

6. Calculate the total weekend day energy consumption (Worksheet: "Step 3. Results," cell E6.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WEdYr} = \overline{kWh}_{WEd} * (104 \hspace{2mm} weekend \hspace{2mm} days \hspace{2mm} per \hspace{2mm} year + X) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WEdYr} =$ Annual weekend day energy consumption (in kWh)</p>
<p class="equation">$\overline{kWh}_{Wd} =$ Average weekday day energy consumption (in kWh)</p>
<p class="equation">$X =$ Number of weekdays that are adjusted to use weekend day average energy consumption</p>

7. Calculate total annual estimate energy consumption (Worksheet: "Step 3. Results," cell F3.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{anm} = \overline{kWh}_{WdYr} + \overline{kWh}_{WEdYr} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{ann} =$ Annual energy consumption (in kWh)</p>
<p class="equation">$\overline{kWh}_{WdYr} =$ Annual weekday energy consumption (in kWh)</p>
<p class="equation">$\overline{kWh}_{WEdYr} =$ Annual weekend day energy consumption (in kWh)</p>

8. If more than one electric panel or switchgear was measured, sum the annual energy consumption of all panels to find the total energy consumption of the electrical distribution system. 

<p class="equation equation-center">\begin{equation} \overline{kWh} = \overline{kWh}_{{n}_{1}} + \overline{kWh}_{{n}_{2}} + ... \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh} =$ Total energy consumption for the electrical distribution system (in kWh)</p>
<p class="equation">$\overline{kWh}_{n} =$ Total energy consumption for each panel or switchgear(in kWh)</p>
<p class="equation">$n =$ Number of panels or switchgear measured</p>

### Lighting Electrical Current Output from Electric Panelboard

Lighting fixtures generally require single-phase power to operate but <u>electrical distribution systems</u> are commonly three-phase. This methodology only applies to a three-phase, four wire system (wye configuration), additionally the panelboard load must be balanced (i.e., all three electrical lines, or phases, must have the same current and line-to-neutral voltage.) For an unbalanced load, where voltage and current are not equal across the three lines, energy should be measured directly with a data-logging power logger capable of measuring a three-phase system, see section A.1. 

To estimate the energy consumption of the panelboard, including all fixtures served by it, current should be measured for all three electrical lines of the three-phase system. Current data should be at one-hour intervals and data should consist of an average sample of measurements[^1] for each one-hour interval. Power factor, line-to-line voltage, and true RMS power can be obtained from spot measurements with a handheld power meter. CUNY BPL recommends taking multiple spot measurements of those variables and averaging them (e.g., measure power factor at least three times at five-minute intervals and calculate the average), see equation (9). The average of the spot measurements helps reduce measurement uncertainty and should be used as inputs to the calculation tools. Equation (9) should be applied to power factor, voltage, and true RMS power.

<p class="equation equation-center">\begin{equation} \overline{PF} = \frac{PF_{t1} + PF_{t2} + PF_{t3} + PF_{tx}}{x} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{PF} =$ Average of measured power factor</p>
<p class="equation">$PF =$ Spot measurement of power factor at the panelboard</p>
<p class="equation">$t1 =$ First measurement</p>
<p class="equation">$t2 =$ Second measurement, at least five minutes after the first measurement</p>
<p class="equation">$t3 =$ Third measurement, at least five minutes after the second measurement</p>
<p class="equation">$x =$ Number of spot measurements taken, at least five minutes apart</p>

<p class="equation equation-center">\begin{equation} {V}_{avg,LL} = \frac{V_{t1}+V_{t2}+V_{t3}+V_{tx}}{x} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$V_{avg,LL} =$ Average line-to-line voltage</p>
<p class="equation">$V_{t1} =$ First measurement of voltage</p>
<p class="equation">$V_{t2} =$ Second measurement of voltage, at least five minutes after the first measurement</p>
<p class="equation">$V_{t3} =$ Third measurement of voltage, at least five minutes after the second measurement</p>
<p class="equation">$x =$ Number of spot measurements taken, at least five minutes apart</p>

1. Find the average current of the electrical distribution system for each hour interval. Current of all three phases is measured every hour, in this step the average current of the panelboard is calculated for each hour interval.

<p class="equation equation-center">\begin{equation} I_{h,avg} = \frac{I_{1}+I_{2}+I_{3}}{3} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$I_{h,avg} =$ Average current for each hour interval (in Amps)</p>
<p class="equation">$I_{1} =$ Hourly average current of line 1 (in Amps)</p>
<p class="equation">$I_{2} =$ Hourly average current of line 1 (in Amps)</p>
<p class="equation">$I_{3} =$ Hourly average current of line 3 (in Amps)</p>

Equation 11 calculates the three-phase power of the panelboard if line-to-line voltage is measured. If line-to-neutral voltage is measured (from hot wire to ground) the <u>square root of 3</u> should be replaced with 3 and the line-to-neutral voltage should be used.

2. Calculate three-phase power for each hour interval using the results from equation (8), (9) and (10) (i.e., average current for each hour interval, average voltage, and average power factor). (Worksheet: “Step 2. Power Calcs,” column E, G, I.)

<p class="equation equation-center">\begin{equation} \overline{kW}_{h,3P} = \frac{\sqrt{3} * I_{h,avg} * V_{LL,avg} * PF}{1000} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kW}_{h,3P} =$ Hourly three-phase power draw of the panelboard (in kW)</p>
<p class="equation">$I_{h,avg} =$ Average current for each hour interval (in Amps)</p>
<p class="equation">$V_{LL,avg} =$ Measured average line-to-line voltage (in V)</p>
<p class="equation">$PF =$ Measured average power factor</p>

<!-- 3. Calculate the hourly three-phase power of the panelboard by summing the single-phase power of each electrical line for each hour interval. (Worksheet: “Step 2. Power Calcs,” column J.) 

<p class="equation equation-center">\begin{equation} \overline{kW}_{h,3P} = \sum_{n=1}^{3} \overline{kW}_{h,n} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kW}_{h,3P} =$ Hourly three-phase power draw of the panelboard (in kW)</p>
<p class="equation">$\overline{kW}_{h,n} =$ Hourly single-phase power for electrical line n (in kW)</p> -->

3. Calculate average energy consumption for each hour of each day of the week (Worksheet: “Step 3. Avg Energy Calcs,” column C.) This equation helps to reduce the amount of data points to a week by taking the average of each hour for a given day of the week. In this step the hourly power draw (kW) gets converted to hourly energy consumption (kWh) because data is in one-hour intervals. kWh = kW ∗ h, where h = 1.

<p class="equation equation-center">\begin{equation} \overline{kWh}_{d,h} = \frac{\sum_{1}^{N_{f}(d,h)} kW_{h,3P}}{N_{f}(d,h)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{d,h} =$ Average energy consumption for each hour of each day of the week (in kW)</p>
<p class="equation">$\overline{kW}_{h,3P} =$ Hourly three-phase power draw of the panelboard (in kW)</p>
<p class="equation">$N_{f}(d,h) =$ Total number of data points that fall on day of week, d, and hour of the day, h</p>

4. Calculate total hourly energy consumption for a given day of the week (Worksheet: "Step 4. Results," column C.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{d,w} = \frac{\sum_{h=0}^{23} \overline{kWh}_{d,h}}{h} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{d,w} =$ Average hourly energy consumption for a given day of the week of the three-phase panelboard (in kWh)</p>
<p class="equation">$\overline{kWh}_{d,h} =$ Average energy consumption for each hour of each day of the week (in kWh)</p>
<p class="equation">$h =$ Hour of the day where 0 is 12:00 a.m. and 23 is 11:00 p.m.</p>

5. Calculate the average energy consumption for weekdays (Worksheet: "Step 4. Results," cell D3.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{Wd} = \frac{\sum_{d=2}^{6} \overline{kWh}_{w,d}}{5} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{Wd} =$ Average energy consumption for weekdays (in kWh)</p>
<p class="equation">$\overline{kWh}_{wd,n} =$ Average hourly energy consumption of each n weekday (in kWh)</p>
<p class="equation">$d =$ Day of week (2 = Monday, 3 = Tuesday, ..., 6 = Friday)</p>
<p class="equation">$24 =$ Constant, hours per day</p>
<p class="equation">$5 =$ Constant, weekdays per week</p>

6. Calculate the average energy consumption for weekend days (Worksheet: "Step 4. Results," cell D6.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WEd} = \frac{\overline{kWh}_{we,1} + \overline{kWh}_{we,7}}{2} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WEd} =$ Average energy consumption for a weekend day (in kWh)</p>
<p class="equation">$\overline{kWh}_{we,n} =$ Average energy consumption of each n weekend day (in kWh)</p>
<p class="equation">$n =$ Day of week (7 = Saturday, 1 = Sunday)</p>
<p class="equation">$2 =$ Constant, weekends per week</p>

7. Calculate the total annual weekday energy consumption (Worksheet: "Step 4. Results," cell E3.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WdYr} = \overline{kWh}_{Wd} * (261-X) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WdYr} =$ Estimated annual weekday energy consumption (in kWh)</p>
<p class="equation">$\overline{kWh}_{Wd} =$ Average energy consumption for weekdays (in kWh)</p>
<p class="equation">$X =$ Number of weekdays that are considered holidays and adjusted to weekend day average energy consumption</p>
<p class="equation">$261 =$ Constant, number of weekdays per year</p>

8. Calculate the total annual weekend day energy consumption (Worksheet: "Step 4. Results," cell E6.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WEdYr} = \overline{kWh} * (104+X) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WEdYr} =$ Annual weekend day energy consumption (in kWh)</p>
<p class="equation">$\overline{kWh}_{WEd} =$ Average weekend day energy consumption (in kWh)</p>
<p class="equation">$X =$ Number of weekdays that are considered holidays and adjusted to weekend day average energy consumption</p>
<p class="equation">$104 =$ Constant, number of weekend days per year</p>

9. Calculate total annual energy consumption of the panelboard

<p class="equation equation-center">\begin{equation} \overline{kWh}_{ann} = \overline{kWh}_{WdYr} + \overline{kWh}_{WEdYr} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{ann} =$ Estimated annual energy consumption of the panelboard (in kWh)</p>
<p class="equation">$\overline{kWh}_{WdYr} =$ Estimated annual weekday energy consumption (in kWh)</p>
<p class="equation">$\overline{kWh}_{WEdYr} =$ Estimated annual weekend day energy consumption (in kWh)</p>

10. If more than one panelboard was measured sum the annual energy consumption of all panels to find the total energy consumption of all measured panelboards.

<p class="equation equation-center">\begin{equation} \overline{kWh} = \overline{kWh}_{{n}_{1}} + \overline{kWh}_{{n}_{1}} + ... \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh} =$ Total energy consumption of all measured panelboards (in kWh)</p>
<p class="equation">$\overline{kWh}_{n} =$ Total energy consumption for each panelboard (in kWh)</p>
<p class="equation">$n =$ Number of panelboards measured</p>

### Lighting Electrical Current from Circuit Breakers

Lighting fixtures generally require single-phase power to operate but <u>electrical distribution systems</u> are commonly three-phase. When measuring individual circuits of a panelboard it is important to know what phase the circuit is connected to. This is because the proper line-to-neutral connection is required to accurately measure voltage for that circuit. 

The calculation tool requires the phase of the circuit to be specified to calculate annual energy consumption. If multiple circuits are measured and are connected to the same phase, then only the voltage of that phase is necessary Additionally, the user should note if the panelboard is balanced (i.e., all three electrical lines, or phases, must have the same current and line-to-line voltage.) If the panelboard is not balanced, then it must be specified in the calculation tool (see worksheet ‘Step 1.1 Circuit Raw Data’) 

The following equations are used to calculate the annual energy consumption of a lighting <u>electrical distribution system</u> where AC current is measured at the output of circuit breakers in an electrical panelboard. AC current should be measured using a data logger with current transformers (e.g., Onset HOBO 4-channel analog logger and the Onset CTV-x current transformer sensors) for one or more circuit breakers; a group of circuits can be measured with a single transformer. Current data should be at one-hour intervals and data should be averaged with a sample of measurements[^1] for each one-hour interval. Voltage is obtained from spot measurements (i.e., measured one time) with a power meter at the circuit breakers.  

It is assumed that multiple spot measurements are taken and averaged (e.g., measure line-to-neutral voltage for a circuit breaker three times at five-minute intervals and calculate the average) see equation (20). The average value should be used with these equations to reduce measurement uncertainty. In this scenario, the line-to-neutral voltage is measured for a single circuit. If measuring multiple circuits be sure to take multiple spot measurements of line-to-neutral voltage for all circuits. 

<p class="equation equation-center">\begin{equation} V_{LN,avg} = \frac{V_{t1,n} + V_{t2,n} + V_{t3,n} + V_{tx,n}}{x} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$n =$ The electrical line that was measured of the three-phase system</p>
<p class="equation">$V_{avg,n} =$ Average line-to-neutral voltage of a circuit in electrical line n</p>
<p class="equation">$V_{t1,n} =$ First measurement of voltage for electrical line n</p>
<p class="equation">$V_{t2,n} =$ Second measurement of voltage for electrical line n, at least five minutes after the first measurement</p>
<p class="equation">$V_{t2,n} =$ Third measurement of voltage for electrial line n, at least five minutes after the second measurement</p>
<p class="equation">$x =$ Number of spot measurements taken, at least five minutes apart</p>

1. For each circuit or group of circuits measured, calculate average power for each hour interval (Worksheet: “Step 2. Power Calcs.”) Power is calculated using line-to-neutral voltage and current of the circuit.

<p class="equation equation-center">\begin{equation} \overline{kW}_{h,n} = \frac{I_{n} * V_{LN,avg}}{1000} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kW}_{h,n} =$ Average hourly power for a circuit n (in kW)</p>
<p class="equation">$I_{n} =$ Measured average houry current for a circuit (in Amps)</p>
<p class="equation">$V_{I,N,avg} =$ Measured average line-to-neutral voltage for a circuit (in V)</p>

2. Calculate average energy use for each hour of each day of the week (Worksheet: “Step 3. Avg Energy Calcs, column C, D, E, F.”) In this step the hourly power draw (kW) gets converted to hourly energy consumption (kWh) because data is in one-hour intervals. kWh = kw * h, where h = 1.

<p class="equation equation-center">\begin{equation} \overline{kWh}_{d,h,c} = \frac{\sum_{1}^{N_{f}(d,h)} kW_{h}}{N_{f}(d,h)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{d,h,c} =$ Average energy of each hour for each day of the week for each circuit (in kWh)</p>
<p class="equation">$kW_{h} =$ Total power at each hour of each day of each week (in kW)</p>
<p class="equation">$N_{f} =$ Total number of measured data points that fall on day of week, d, and hour of the day, h</p>

3. Calculate the sum of average hourly energy of all circuits (Worksheet: "Step 3. Avg Energy Calc" column G.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{d,h,n} = \sum_{c=1}^{4} \overline{kWh}_{d,h,c} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{d,h} =$ Total average energy for all circuits of each hour for each day of the week (in kWh)</p>
<p class="equation">$\overline{kWh}_{d,h,c} =$ Total average energy for each hour for each day of the week for each circuit (in kWh)</p>
<p class="equation">$c =$ Circuit that was measured</p>

4. Calculate total daily energy consumption for a given day of the wekk (Worksheet: "Step 4. Results," column C.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{d,w} = \sum_{n=0}^{23} \overline{kWh}_{d,h} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{d,w} =$ Total average energy for each day of the week (in kWh)</p>
<p class="equation">$\overline{kWh}_{d,h} =$ Total average energy of each h hour for each day of the week (in kWh)</p>
<p class="equation">$h =$ Hour of the day where 0 is 12:00 a.m. and 23 is 11:00 p.m.</p>

5. Calculate the average energy consumption for weekdays in a week for all circuits (Worksheet: "Step 4. Results," cell D3.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WdCT} = \frac{\sum_{n=2}^{6} \overline{kWh}_{d,w}}{5} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WdCt} =$ Average energy on a weekday (in kWh)</p>
<p class="equation">$\overline{kWh}_{d,w} =$ Average hourly energy for each n weekday of the week (in kWh)</p>
<p class="equation">$n =$ Day of week (2 = Monday, 3 = Tuesday, ..., 6 = Friday)</p>
<p class="equation">$24 =$ Hours per day</p>

6. Calculate the average energy consumption for weekend days in a week for all circuits (Worksheet: "Step 4. Results," cell D6.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WEdCT} = \frac{\overline{kWh}_{1,w} + \overline{kWh}_{7,w}}{2} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WEdCT} =$ Average energy on a weekend day (in kWh)</p>
<p class="equation">$\overline{kWh}_{d,w} =$ Average hourly energy of each circuit for each n weekend day (in kWh)</p>
<p class="equation">$n =$ Day of week (7 = Saturday, 1 = Sunday)</p>
<p class="equation">$24 =$ Hours per day</p>

7. Calculate the total annual weekday energy consumption (Worksheet: "Step 4. Results," cell E3.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WdYr} = \overline{kWh}_{Wd} * (261 \hspace{2mm} weekdays \hspace{2mm} per \hspace{2mm} year - X) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WdYr} =$ Annual weekday energy consumption (in kWh)</p>
<p class="equation">$\overline{kWh}_{Wd} =$ Average weekly weekday energy consumption (in kWh)</p>
<p class="equation">$X =$ Number of weekdays that are considered holidays and adjusted to weekend day average energy consumption</p>

8. Calculate the total annual weekend day energy consumption (Worksheet: "Step 4. Results," cell E6.)

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WEdYr} = \overline{hWh}_{WEd} * (104 \hspace{2mm} weekend \hspace{2mm} days \hspace{2mm} per \hspace{2mm} year + X) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WEdYr} =$ Annual weekend day energy consumption (in kWh)</p>
<p class="equation">$\overline{kWh}_{WEd} =$ Average weekly weekend day energy consumption</p>
<p class="equation">$X =$ Number of weekdays that are considered holidays and adjusted to weekend day average energy consumption</p>

9. Calculate total annual estimated energy consumption.

<p class="equation equation-center">\begin{equation} \overline{kWh}_{ann} = \overline{kWh}_{WdYr} + \overline{kWh}_{WEDYr} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{ann} =$ Annual energy consumption (in kWh)</p>
<p class="equation">$\overline{kWh}_{WdYr} =$ Annual weekday energy consumption (in kWh)</p>
<p class="equation">$\overline{kWh}_{WEdYr} =$ Annual weekend day energy consumption (in kWh)</p>

Equation (26) is the annual energy consumption of the measured circuits for a panelboard. If additional circuits were measured for the same panelboard with a different data logger be sure to consolidate the results (annual energy consumption) to obtain the total panelboard annual energy consumption. Additionally, if multiple panelboards were measured be sure to sum up the annual consumption of all panelboards to obtain the total system energy consumption.

### Lighting Inventory and Operating Schedule

The following equations are used to calculate the annual energy consumption of a <u>lighting fixture system</u>. This methodology does not require electrical measurements, only lighting runtime (operating schedule) of the fixtures. Runtime data is collected with a light logger that detects when a light source turns on and off. If multiple fixture types operate with the same schedule the same runtime data can be used for calculations. 


This calculation tool can be used for different fixture types within a single space. For example, an office space with five different types of fixtures. The number of fixtures of each type must be known as well as the respective power draw (refer to the manufacturer specifications of the lamps and ballasts).

1. Calculate power draw of the fixture type.

<p class="equation equation-center">\begin{equation} kW_{fix1} = \frac{N * W_{fix1}}{1000} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$kW_{fix1} =$ Total power draw of single fixture type 1 (in kW)</p>
<p class="equation">$W_{fix1} =$ Wattage of fixture type 1 (in W)</p>
<p class="equation">$N =$ Number of fixtures of that type with the same operating schedule</p>

2. Convert fixture runtime measurements from seconds per hour to percent per hour (Worksheet: "Step 2. Percent Runtime Calcs").

<p class="equation equation-center">\begin{equation} \%_{int} = \frac{t_{int}}{3600} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\%_{int} =$ Percent per hour the fixtures are on</p>
<p class="equation">$t_{int} =$ Measured number of seconds the fixtures are on in each hour interval (in seconds)</p>
<p class="equation">$3600 =$ Constant, number of seconds in one hour</p>

3. Find the hourly average percentage for each day of the week the fixtures are on (Worksheet: "Step 3. Daily Avg Runtime Calcs").

<p class="equation equation-center">\begin{equation} \%_{hourly} = \frac{\sum_{1}^{n} \%_{int,n}}{n} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\%_{hourly} =$ Hourly average percentage the fixtures are on</p>
<p class="equation">$\%_{int} =$ Percent per hour the fixtures are on</p>
<p class="equation">$n =$ Number of data points that have the same hour of day and day of week</p>

4. Sum of runtime percentages for a given day of the week to determing the operating hours for that day (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} \%_{daily} = \sum_{h=0}^{23} \%_{hourly,h} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\%_{daily} =$ Daily average hours the fixtures are on</p>
<p class="equation">$\%_{hourly} =$ Hourly average percentage fixtures are on</p>
<p class="equation">$h =$ Hour of the day where 0 is 12:00 a.m. and 23 is 11:00 p.m.</p>

5. Convert percentage to hours to determing hours per day fixtures are on in space being measured (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} T_{daily} = \frac{\%_{daily}}{100} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$T_{daily} =$ Number of hours the fixtures are on for a given day (in hours)</p>
<p class="equation">$\%_{daily} =$ Daily average hours in percent per day the fixtures are on</p>

6. Calculate the average energy use per weekday (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} \overline{kWh}_{Wd,fix1} = \frac{\sum_{d=2}^{6} T_{Wd,fix1,d}}{5} * kW_{fix1} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{Wd,fix1} =$ Average energy consumption during weekdays for fixture type 1 (in kWh)</p>
<p class="equation">$kW_{fix1} =$ Total power draw of single fixture type 1 (in kW)</p>
<p class="equation">$T_{Wd,fix1,d} =$ Number of hours the fixtures are on for a given d weekday (in hours)</p>
<p class="equation">$d =$ Day of week (2 = Monday, 3 = Tuesday, ..., 6 = Friday)</p>

7. Calculate the average energy use per weekend day (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WEd,fix1} = \frac{T_{We,fix1,1} + T_{We,fix1,7}}{2} * kW_{fix1} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WEd,fix1} =$ Average consumption during weekend days for fixture type 1 (in kWh)</p>
<p class="equation">$kW_{fix1} =$ Total power draw of single fixture type 1 (in kW)</p>
<p class="equation">$T_{We,fix1,d} =$ Number of hours the fixtures are on for a given d weekend days (in hours)</p>
<p class="equation">$d =$ Day of week (7 = Saturday, 1 = Sunday)</p>

8. Calculate the annual weekday energy consumption for the fixture type (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WdYr,fix1} = \overline{kWh}_{Wd,fix1} * (261 \hspace{2mm} weekdays \hspace{2mm} per \hspace{2mm} year - X) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WdYr,fix1} =$ Annual weekday energy consumption of fixture type 1 (in kWh)</p>
<p class="equation">$\overline{kWh}_{Wd,fix1} =$ Average energy consumption during weekdays for fixture type 1 (in kWh)</p>
<p class="equation">$X =$ Number of weekdays that are adjusted to use weekend day average energy consumption</p>

9. Calculate the annual weekend energy consumption for the fixture type (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WEd,Yr,fix1} = \overline{kWh}_{WEd,fix1} * (104 \hspace{2mm} weekend \hspace{2mm} days \hspace{2mm} per \hspace{2mm} year + X) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WEdYr,fix1} =$ Annual weekend day energy consumption of fixture type 1 (in kWh)</p>
<p class="equation">$\overline{kWh}_{WEd,fix1} =$ Average energy consumption during weekend days for fixture type 1 (in kWh)</p>
<p class="equation">$X =$ Number of weekdays that are adjusted to use weekend average energy consumption</p>

10. Calculate total annual estimated energy consumption for the fixture type (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} \overline{kWh}_{ann,fix1} = \overline{kWh}_{WdYr,fix1} + \overline{kWh}_{WEdYr,fix1} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{ann,fix1} =$ Annual estimated energy consumption of fixture type 1 (in kWh)</p>
<p class="equation">$\overline{kWh}_{WdYr,fix1} =$ Annual weekday energy consumption of fixture type 1 (in kWh)</p>
<p class="equation">$\overline{kWh}_{WEdYr,fix1} =$ Annual weekend day energy consumption of fixture type 1 (in kWh)</p>

11. If multiple fixture types were measured find the sum of the annual estimated energy consumption for all fixture types (Worksheet: "Step 4. Results").

<p class="equation equation-center">\begin{equation} \overline{kWh}_{ann} = \sum_{i=1}^{n} \overline{kWh}_{ann,{fix_{n}}} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{ann} =$ Total annual energy of all measured fixture types (in kWh)</p>
<p class="equation">$\overline{kWh}_{ann,fix1} =$ Annual estimated energy consumption of each measured fixture type (in kWh)</p>
<p class="equation">$n =$ Number of fixture types measured</p>

## Hourly Results Worksheet

Measurement data that is input in the calculation tools is used to generate an hourly energy consumption schedule for each hour in each day of the week. The schedule exists in the “Hourly Results” worksheet that is included in all four calculation tools. This data is useful to estimate the heating and cooling effects. CUNY BPL calculation tools do not calculate heating or cooling interactive effects.

## Further Reading

- For general information on Option A M&V guides, please read section 4.2 (starts on page 23) of “M&V Guidelines: Measurement and Verification for Performance-Based Contracts Version 4.0” from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2016/01/f28/mv_guide_4_0.pdf#page=23

- Richman, EE. (October 2012) “Standard Measurement and Verification Plan for Lighting Retrofit Projects for Buildings and Building Sites.” Richland, WA: Pacific Northwest National Laboratory. 
 
- Richman, EE. (February 2016) “Measurement and Verification of Energy Savings and Performance from Advanced Lighting Controls.” Richland, WA: Pacific Northwest National Laboratory.

## Footnotes

[^1]: We reccomend taking a sample of measurements and find the average. The average value will be used to calculate annual energy consumption. As an example, the Onset HOBO 4-channel analog logger can measure a sample of current data at a predefined interval known as the sampling interval. If the logging interval is set to one-hour and the sampling interval is set to one-second, the logger will measure current every second for one hour then determine the average. The average will be stored in the logger as the one-hour interval measurement. This process will continue every hour for the duration of the measurement period.