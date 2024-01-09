---
title: Cooling Tower Fans Energy Consumption
type: calculation
layout: calculation_methodology
calculation_methodology_id: 1
excerpt: Measure the electricity consumed by the pump motor. Depending on the variability of operations, daily or weekly models may be developed to better characterize the component. The typical energy consumption of a constant-speed pump is estimated using the simulated yearly schedule of the pump. 
related_systems:
  - Chilled Water Loop
  - Condenser Water Loop
related_components:
  - Constant-Speed, Constant-Volume Pump and Motor
url: "/documents/calculation-methodology/cooling-tower-fans-energy-consumption"
---

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

4. Calculate operating hours (Worksheet: “Step 5 Daily Op Hrs”).

5. Calculate energy used for full year for each fan (Worksheet: “Step 6 Results”).

### Constant Speed Fans Using a Data-Logging Power Meter

This calculation is for a cooling tower with constant-speed fans. Measured input data is average hourly power draw (in kW) as measured by a DENT power logger for each fan in the cooling tower. 

1. Total energy for each hour (Worksheet: “Step 2 Energy Calcs”). Since the measured power value (kW) is the average for an hour, it is equivalent to the energy for the hour (kWh).

2. The remainder of the workbook is the same as the on/off logger workbook, and hence uses Equations 3 through 8 to calculate the total annual energy. 

### Constant Spped Fans Using a Current Sensor

