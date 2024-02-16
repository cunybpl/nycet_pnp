---
title: Variable-speed, Variable-volume Pump and Motor
type: component
excerpt: A variable-speed, variable-volume (VSVV) pump and motor circulate liquid (e.g., water or water and glycol solution) through a piping network where the flow rate fluctuates as required by the plant and systems they serve.
thumbnail_image: "images/plants/water-cooled-chilled-water-plant/chilled-water-plant-overview.jpeg"
associated_systems:
  - Condenser Water Loop
  - Chilled Water Loop
  - Hot Water Loop
  - Steam Distribution
  - Steam Condensate Recovery
related_systems:
  - Condenser Water Loop
  - Chilled Water Loop
  - Hot Water Loop
  - Steam Distribution
  - Steam Condensate Recovery
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=electric-motors-and-drives"
layout: guide
url: "/documents/components/variable-speed-variable-volume-pump-and-motor"
---

## General Overview

A variable-speed, variable-volume (VSVV) pump and motor circulate liquid (e.g., water or water and glycol solution) through a piping network where the flow rate fluctuates as required by the plant and systems they serve. Outdoor air temperature (OAT) is the independent variable that drives the pump speed since heating and cooling loads are generally affected by OAT. The pump motor is equipped with a variable frequency drive (VFD) which may be integrated in the pump and motor package or installed separately. Centrifugal pumps are the most common type of pumps used in buildings. 

Table 1 shows the plant and system configurations that may contain a VSVV pump and motor and the controlling variable. 

<table>
    <caption>Table 1. Plants systems applicable to variable-speed pumps</caption>
    <thead>
        <tr>
            <td bgcolor="#e7e6e6">
                <p><strong>Plant</strong></p>
            </td>
            <td bgcolor="#e7e6e6">
                <p><strong>System</strong></p>
            </td>
            <td bgcolor="#e7e6e6">
                <p><strong>Component</strong></p>
            </td>
            <td bgcolor="#e7e6e6">
                <p><strong>Controlling Variable</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>Air-cooled chilled water plant</p>
            </td>
            <td>
                <p>Chilled water loop</p>
            </td>
            <td>
                <p>Primary chilled water pump</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Water-cooled chilled water plant</p>
            </td>
            <td>
                <p>Condenser water loop</p>
            </td>
            <td>
                <p>Condenser water pump</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Water-cooled chilled water plant</p>
            </td>
            <td>
                <p>Chilled water loop</p>
            </td>
            <td>
                <p>Primary chilled water pump</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Water-cooled chilled water plant</p>
            </td>
            <td>
                <p>Chilled water loop</p>
            </td>
            <td>
                <p>Primary chilled water pump</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Water-cooled chilled water plant</p>
            </td>
            <td>
                <p>Chilled water loop</p>
            </td>
            <td>
                <p>Secondary chilled water pump</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Water-cooled chilled water plant</p>
            </td>
            <td>
                <p>Waterside economizer</p>
            </td>
            <td>
                <p>Waterside economizer pump (if present)</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Hot water plant</p>
            </td>
            <td>
                <p>Hot water boiler</p>
            </td>
            <td>
                <p>Makeup water pump</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Hot water plant</p>
            </td>
            <td>
                <p>Hot water loop</p>
            </td>
            <td>
                <p>Building Loop Pump</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Steam plant</p>
            </td>
            <td>
                <p>Steam Boiler</p>
            </td>
            <td>
                <p>Makeup water pump</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Steam plant</p>
            </td>
            <td>
                <p>Feedwater Tank</p>
            </td>
            <td>
                <p>Feedwater pump</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Service water plant</p>
            </td>
            <td>
                <p>Service hot water loop</p>
            </td>
            <td>
                <p>Service hot water; recirculation pump</p>
            </td>
            <td>
                <p>Occupancy schedule: time of day, day of week.</p>
            </td>
        </tr>
    </tbody>
</table>

## Key Values Needed to Assess Energy Consumption for Variable-speed Pump and Motor

The primary energy source of a VSVV pump is the electricity used to run the pump motor. Table 2 provides a summary of measurements needed to quantify the annual energy consumption and operating characteristics of the VSVV pump and motor. 

<table>
    <caption>Table 2. Key Values and measurements.</caption>
    <thead>
        <tr>
            <td bgcolor="#e7e6e6">
                <p><strong>Component Quantification</strong></p>
            </td>
            <td bgcolor="#e7e6e6">
                <p><strong>Values to be Quantified</strong></p>
            </td>
            <td bgcolor="#e7e6e6">
                <p><strong>Measurement</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>Electricity input to a variable-speed pump motor</p>
            </td>
            <td>
                <p>Power input to a VSVV pump motor at known speeds (e.g. 30%, 50%, 75%, 100%)</p>
            </td>
            <td>
                <p>True RMS power of pump motor that drives the pump (kW)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Same as above^</p>
            </td>
            <td>
                <p>Hourly average VSVV pump motor speed</p>
            </td>
            <td>
                <p>VFD speed trend from BAS</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Weather temperature</p>
            </td>
            <td>
                <p>Average hourly outside air temperature (OAT)</p>
            </td>
            <td>
                <p>OAT (F)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Non-weather dependent operating schedule for a variable-speed pump motor</p>
            </td>
            <td>
                <p>Yearly operating schedule</p>
            </td>
            <td>
                <p>Pump motor runtime</p>
            </td>
        </tr>
    </tbody>
</table>

### Measuring Energy Consumption of Pump and Motor

The measurement boundary for quantifying energy consumption for the VSVV pump motor is shown in Figure 1. 

<figure class="figure">
  <img src="/images/components/VSVV-pump-and-motor-figure1.png" class="figure-img img-fluid rounded" alt="Figure 1. Measurement boundary of a pump with a VFD.">
  <figcaption class="figure-caption text-left">Figure 1. Measurement boundary of a pump with a VFD.</figcaption>
</figure>

The measurement strategy for a variable-speed pump and motor is to measure power draw of the pump motor at various known speeds, develop a mathematical relationship between the power and speed, and then collect average hourly motor speed and associated OAT. Measurement points are generically represented in Figure 1.

Further details about measurement tools and equipment associated with measurements in Table 2 can be found here (link).

{{< measurement_technique measurement_technique_id=1 >}}

{{< measurement_technique measurement_technique_id=6 >}}

### Calculation Methodology

The general methodology for quantifying the energy consumption of a VSVV pump motor is determined by the true RMS power of the three-phase power supply either at the power main for the motor or at the three-phase input to the VFD. These values are regressed against outside air temperature to develop a temperature-dependent regression model. Depending on the variability of operations, daily or weekly models may be developed to better characterize the system. This model is then used with climate normal year data to estimate the typical energy use of the variable-speed pump.  
A more detailed explanation of the calculation methodology can be found in <link>.

## Key Values Needed to Assess Variable-Speed Pump Flow

Table 3 provides a summary of the values to measure to quanfity the flow rate through a variable-speed pump.

<table>
    <caption>Table 3. Key Values and measurements to quantify pump flow.</caption>
    <thead>
        <tr>
            <th>
                <p><strong>Component Quantification</strong></p>
            </th>
            <th>
                <p><strong>Values to be Quantified</strong></p>
            </th>
            <th>
                <p><strong>Measurement</strong></p>
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>Flow rate through a variable-speed pump</p>
            </td>
            <td>
                <p>Average hourly through a variable-speed pump</p>
            </td>
            <td>
                <p>Pump flow rate (GPM)</p>
                <p>If direct flow measurement is not feasible then develop a relationship between motor speed and flow using short-term measurements, and long-term measurements of motor speed:</p>
                <ul>
                  <li>Pump curve with motor speed</li>
                  <li>Short-term flow with motor speed</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>Weather temperature</p>
            </td>
            <td>
                <p>Average hourly average outside air temperature (OAT)</p>
            </td>
            <td>
                <p>OAT (F)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Non-weather dependent operating schedule for a variable-speed pump motor</p>
            </td>
            <td>
                <p>Yearly operating schedule</p>
            </td>
            <td>
                <p>Cuurent tansducer logging as a proxy for motor speed</p>
            </td>
        </tr>
    </tbody>
</table>

### Measuring Pump Flow of Pump and Motor

The measurement boundary for quantifying water flow rate across a variable-speed pump is shown in Figure 2.

<a href="">
<figure class="figure">
  <img src="" class="figure-img img-fluid rounded" alt="Figure 2. Measurement boundary to estimate flow through a variable-speed pump">
  <figcaption class="figure-caption text-left">Figure 2. Measurement boundary to estimate flow through a variable-speed pump</figcaption>
</figure>
</a>

The measurement of the VSVVV pump flow rate relies on having access to the specific pump curve for the pump, which is a function of the specific pump model, the impeller diameter, and the horsepower of the pump motor. This information is found on the nameplate of a packaged pump and motor or may be found in the as-built construction documentations. If this data can be accessed, short-term measurements of the pressure differential across the pump at several known speeds can be converted to feet of head, which then can be converted to flow rate using the pump curve. From this information a mathematical relationship can be developed between the pump motor speed and flow rate. Collect hourly average motor speed and associated OAT to develop a relationship between flow rate and OAT. 

If a pump curve is not available and a straight run of piping approximately 17 times the diameter of the pipe is accessible near the pump, flow rate can also be measured with an ultrasonic flow meter at several known motor speeds to develop the motor speed/flow relationship. Collect hourly average motor speed and associated OAT to develop a relationship between flow rate and OAT. 

If pump motor speed cannot be trended by the VFD or BAS, a current transducer and logger can be installed on one leg of the power supply to the motor. A relationship between short-term apparent current and known motor speeds can be developed and used as a proxy for motor speed in the relationships above. A CT and logger are also needed if the speed of the motor is based on the occupancy schedule of the building rather than the OAT. 

Measurement points are generically represented in Figure 2. 

Further details about measurement tools and equipment associated with measurements in Table 3  can be found here (link). 

{{< measurement_technique measurement_technique_id=11 >}}

{{< measurement_technique measurement_technique_id=6 >}}

### Calculation Methodology

As described above, the calculation methodology for VSVV pump flow rate is based on a series of relationships and long-term measurement of the motor speed as a proxy for flow. Average hourly flow rates at different OAT are developed and used with typical weather to develop temperature-dependent pump flows for times when the pumps are operating. The flow rate and operations of a pump are typically used to undertake calculations of the thermal energy being transferred by the plant or system the pump serves (e.g., chilled water plant, hot water boiler, etc.). 

A more detailed explanation of the calculation methodology can be found in <link>. 

## References

​​Chaurette, J. (2003). In PUMP SYSTEM ANALYSIS AND CENTRIFUGAL PUMP SIZING (5th ed.). Retrieved November 2019, from https://www.pumpfundamentals.com/download/book/chapter4.pdf 

​Satterfield, Z. (2010). Fundamentals of Hydraulics: Pressure. Tech Brief, 9(4), pp. 1-4. Retrieved November 21, 2019 , from https://www.nesc.wvu.edu/files/d/5c5a9fd1-0f8b-48c5-9063-b55d12651b91/fund-of-hydr-pressure.pdf 

​Taylor, S. T. (2002, February). Primary-only vs. primary-secondary variable flow systems. ASHRAE Journal, 25-29. 

​Trane. (2002). Variable-Primary-Flow Systems Revisited. Trane Engineers Newsletter, 31(4). Retrieved November 2019, from https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/education-training/engineers-newsletters/waterside-design/adm_apn005_en.pdf 