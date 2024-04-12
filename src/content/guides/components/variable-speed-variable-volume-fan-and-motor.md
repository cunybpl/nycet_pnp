---
title: Variable-speed, Variable-volume Fan and Motor
type: component
excerpt: A variable speed fan and motor uses a power-driven rotating impeller to circulate air.
thumbnail_image: "images/plants/water-cooled-chilled-water-plant/chilled-water-plant-overview.jpeg"
associated_systems:
  - Boiler
  - Condenser Water Loop
  - Variable-speed, Variable-volume Air Handling Unit
related_systems:
  - Boiler
  - Condenser Water Loop
  - Variable-speed, Variable-volume Air Handling Unit
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=electric-motors-and-drives"
layout: guide
url: "/documents/components/variable-speed-variable-volume-fan-and-motor"
---

## General Overview

A variable speed fan and motor uses a power-driven rotating impeller to circulate air. Air flow rates fluctuate as required by the plant and system it serves.  Outdoor air temperature (OAT) is the independent variable that drives the fan speed. The heating and cooling loads are affected by OAT. Axial and centrifugal fans with a variable speed drive are the most common type of variable speed fans used in buildings.  

Table 1 shows the plant and system configurations that may contain variable-speed fans and motors and the most common respective controlling variables. 

<table>
    <caption>Table 1. Plants and systems containing variable-speed fans.</caption>
    <thead>
        <tr>
            <td>
                <p><strong>Plant</strong></p>
            </td>
            <td>
                <p><strong>System</strong></p>
            </td>
            <td>
                <p><strong>Component</strong></p>
            </td>
            <td>
                <p><strong>Controlling Variable</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>Air-cooled Chilled Water Plant</p>
            </td>
            <td>
                <p>Air-cooled Chiller</p>
            </td>
            <td>
                <p>Condenser Fan</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Water-cooled Chilled Water Plant</p>
            </td>
            <td>
                <p>Cooling Tower</p>
            </td>
            <td>
                <p>Cooling Tower Fan</p>
            </td>
            <td>
                <p>Wet Bulb Temperature (WBT)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>AHU</p>
            </td>
            <td>
                <p>AHUs</p>
            </td>
            <td>
                <p>AHU Supply Fan</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>AHU</p>
            </td>
            <td>
                <p>AHUs</p>
            </td>
            <td>
                <p>AHU Return Fan</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Hot Water Heating; Domestic Hot Water; Steam</p>
            </td>
            <td>
                <p>Boiler</p>
            </td>
            <td>
                <p>Burner Fan</p>
            </td>
            <td>
                <p>OAT</p>
            </td>
        </tr>
    </tbody>
</table>

## Key Values Needed to Assess Power Consumption for Variable-speed Fan and Motor
The primary energy source for a variable-speed fan is the electricity used to run the fan motor. Table 2 provides a summary of measurements needed to quantify the annual energy consumption and operating characteristics of the variable-speed fan and motor.  

<table>
    <caption>Table 2. Key Values and measurements.</caption>
    <thead>
        <tr>
            <td>
                <p><strong>Component Quantification</strong></p>
            </td>
            <td>
                <p><strong>Values to be Quantified</strong></p>
            </td>
            <td>
                <p><strong>Measurement</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>Electricity profile of a variable-speed fan motor</p>
            </td>
            <td>
                <p>Power input to the motor at known speeds (e.g., 30%, 50%, 75%, 100%)</p>
            </td>
            <td>
                <p>True RMS power of motor that drives the fan (kW)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Same as above^</p>
            </td>
            <td>
                <p>Hourly Average motor speed</p>
            </td>
            <td>
                <p>VFD speed trend from BAS</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Controlling variable, non-weather dependent</p>
            </td>
            <td>
                <p>Yearly operating schedule</p>
            </td>
            <td>
                <p>Fan motor runtime (h)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Controlling variable, weather dependent</p>
            </td>
            <td>
                <p>Average hourly outside air temperature (OAT)</p>
            </td>
            <td>
                <p>OAT (f)</p>
            </td>
        </tr>
    </tbody>
</table>

### Measuring Energy Consumption of Fan and Motor

The measurement boundary for quantifying energy consumption for a variable-speed fan and motor is shown in Figure 1 below. 

<a href="/images/components/Measurement-boundary-of-a-fan-motor_with_VFD.png">
<figure class="figure">
  <img src="" class="figure-img img-fluid rounded" alt="Figure 1. Measurement boundary of a CSCV fan.">
  <figcaption class="figure-caption text-left">Figure 1. Measurement boundary of a fan motor with VFD.</figcaption>
</figure>
</a>

The measurement strategy for a variable-speed fan and its motor is to measure power draw of the fan motor at various known speeds, develop a mathematical relationship between the power and speed, and then collect average hourly motor speed and associated controlling variable (OAT, WBT). Measurement points are generically represented in Figure 1. 

Further details about measurement tools and equipment associated with measurements in Table 2 can be found here: <link here FELL Kit for VSVV fan and motor>.  

{{< measurement_technique measurement_technique_id=1 >}}

{{< measurement_technique measurement_technique_id=4 >}}

{{< measurement_technique measurement_technique_id=3 >}}

{{< measurement_technique measurement_technique_id=6 >}}

### Calculation Methodology

The general methodology for quantifying the energy consumption of a variable-speed fan and motor is determined by the true RMS power of the 3-phase power supply either at the main electrical panel of the motor or at the three-phase input to the VFD. To develop a temperature-dependent regression model, these values are regressed against a controlling variable (OAT, WBT). Depending on the variability of operations, daily or weekly models may be developed to better characterize the component. This model is then used with climate normal year data to estimate the typical energy use of the variable-speed fan.  

A more detailed explanation of the calculation methodology can be found in <link to calculation methodology>. 
  
## References

Boyd, BK.; McMordie Stoughton, KL.; Lewis, T. (2017). “Cooling Tower (Evaporative Cooling System) Measurement and Verification Protocol.” Golden, CO: National Renewable Energy Laboratory. https://www.nrel.gov/docs/fy18osti/70219.pdf.  

Crowther, H.; Furlong, J. (2004). “Optimizing Chillers and Towers.” ASHRAE Journal, Vol. 46, No. 7; pp. 34-40. 

Morrison, F. (2014). “Saving Energy with Cooling Towers.” ASHRAE Journal, Vol. 56, No. 2; pp. 34-40. 

Tom, S. (July 2017). “CHILLED WATER SYSTEM OPTIMIZER.” Cat. No. 11-808-616-01. Farmington, Connecticut: Carrier Corporation.  
