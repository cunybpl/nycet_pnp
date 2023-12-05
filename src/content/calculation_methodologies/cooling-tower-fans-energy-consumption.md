---
title: Cooling Tower Fans Energy Consumption
type: calculation
layout: calculation_methodology
calculation_methodology_id: 1
excerpt: Measure the electricity consumed by the pump motor. Depending on the variability of operations, daily or weekly models may be developed to better characterize the component. The typical energy consumption of a constant-speed pump is estimated using the simulated yearly schedule of the pump. 
related_measurement_techniques:
  - Electrical Energy
  - Motor Runtime
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=condenser-water-loop"
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

E(t) = average hourly fan motor energy on for each fan, f, kWh

t  = time index

On (t) = measured time that motor is on for each fan, f, seconds

P = one-time power measurement for each fan, f, kW

E(t) = total average energy of all fan motors, kWh

F = total number of fans

2. Wet-bulb temperature is calculated from the measured dry-bulb temperature and measured relative humidity with the following empirical equation (Worksheet: “Step 3 Wetbulb Calcs”)