---
title: Variable-speed, Variable-volume Fan and Motor
type: component
excerpt: This type of fan uses a variable frequency drive (VFD) to regulate its speed to conserve energy. 
thumbnail_image: "/images/components/thumbnail-images/2024_0624_vsvv fan component_thumbnail_RESIZED-01.jpg"
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

A variable speed fan and motor uses a power-driven rotating impeller to circulate air. Air flow rates fluctuate as required by the plant and system it serves. Outdoor air temperature (OAT) is the independent variable that drives the fan speed. The heating and cooling loads are affected by OAT. Axial and centrifugal fans with a variable speed drive are the most common type of variable speed fans used in buildings.  

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
                <p>Outdoor air temperature (F)</p>
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
                <p>Wet bulb temperature (F)</p>
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
                <p>Outdoor air temperature (F)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Air Handling Plant</p>
            </td>
            <td>
                <p>AHUs</p>
            </td>
            <td>
                <p>AHU Return Fan</p>
            </td>
            <td>
                <p>Outdoor air temperature (F)</p>
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
                <p>Burner fan</p>
            </td>
            <td>
                <p>Outdoor air temperature (F)</p>
            </td>
        </tr>
    </tbody>
</table>

## Evaluation of Energy Consumption
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
                <p>Electricity usage of VSVV fan motor (kWh)</p>
            </td>
            <td>
                <p>Power input to the motor at known speeds (e.g., 30%, 50%, 75%, 100%)</p>
            </td>
            <td>
                <p><a href="/documents/measurement-technique/true-rms-power">True RMS power</a> of motor that drives the fan (kW)</p>
            </td>
        </tr>
        <tr>
<td>

Controlling variable, non-weather dependent[^1]

</td>
            <td>
                <p>Yearly operating schedule</p>
            </td>
            <td>
                <p><a href="/documents/measurement-technique/motor-runtime">Fan motor runtime (h)</a></p>
            </td>
        </tr>
        <tr>
<td>

Controlling variable, weather dependent[^2]

</td>
            <td>
                <p>Average hourly outdoor air temperature (OAT)</p>
            </td>
            <td>
                <p><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor air temperature (OAT)</a></p>
            </td>
        </tr>
    </tbody>
</table>

### Measurement Strategy

The measurement strategy for a variable-speed fan and its motor is to measure power draw of the fan motor at various known speeds, develop a mathematical relationship between the power and speed, and then collect average hourly motor speed and associated controlling variable (OAT, WBT). Measurement points are generically represented in Figure 1. 

<!-- Temporary image until new one given by Orlando -->
<a href="/images/components/Measurement-boundary-of-a-fan-motor-with-VFD.png">
<figure class="figure">
  <img src="/images/components/Measurement-boundary-of-a-fan-motor-with-VFD.png" class="figure-img img-fluid rounded" alt="Figure 1. VSVV fan measurement points.">
  <figcaption class="figure-caption text-left">Figure 1. VSVV fan measurement points.</figcaption>
</figure>
</a>

### Measurement Equipment

Table 3 provides the equipment required to carry out the measurements of this component. 

<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 3. Measurement equipment.</caption>
    <thead>
        <tr>
            <td width="33.333333333333336%">
                <p><strong>Equipment</strong></p>
            </td>
            <td width="33.333333333333336%">
                <p><strong>Description</strong></p>
            </td>
            <td width="33.333333333333336%">
                <p><strong>Measurement (Units)</strong></p>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="33.333333333333336%">
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/Energy_Logger_-_Elite_Pro-5.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/Energy_Logger_-_Elite_Pro-5.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                DENT ELITEproXC Portable Power Data Logger (EXCUNC)
                <br></br>
                DENT 16” RoCoil Flexible Rope Current Transformers (CT-R16-A4-U)
            </td>
            <td width="33.333333333333336%">   
                Provides a measurement of true RMS power from voltage and current inputs and records long-term power (kW) and energy (kWh) measurements. Requires ELOG19 software and a USB connection cable for programming and downloading data files.    
            </td>
            <td width="33.333333333333336%">
                <a href="/documents/measurement-technique/true-rms-power">True RMS Power (kW)</a>
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/MX2301-5.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/MX2301-5.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Onset HOBO Temperature/Relative Humidity Weatherproof Data Logger (MX2301)
            </td>
            <td width="33.333333333333336%">
                Records outdoor air temperature and relative humidity using internal sensors. Requires HOBOware software and a USB connection cable for programming and downloading data files.       
            </td>
            <td width="33.333333333333336%">
                <ul>
                    <li><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor Air Temperature (OAT)</a></li>
                    <li><a href="/documents/measurement-technique/relative-humidity">Relative Humidity (%)</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Calculation Methodology

The general methodology for quantifying the energy consumption of a variable-speed fan and motor is determined by the true RMS power of the 3-phase power supply either at the main electrical panel of the motor or at the three-phase input to the VFD. To develop a temperature-dependent regression model, these values are regressed against a controlling variable (OAT, WBT). Depending on the variability of operations, daily or weekly models may be developed to better characterize the component. This model is then used with climate normal year data to estimate the typical energy use of the variable-speed fan.  

<br></br>
<i>Click the button below to go to the calculators for this component.</i>
<br></br>

{{< calculation_methodology calculation_methodology_id=2 >}} 
  
## Further Reading

- Boyd, BK.; McMordie Stoughton, KL.; Lewis, T. (2017). “Cooling Tower (Evaporative Cooling System) Measurement and Verification Protocol.” Golden, CO: National Renewable Energy Laboratory. https://www.nrel.gov/docs/fy18osti/70219.pdf.  

- Crowther, H.; Furlong, J. (2004). “Optimizing Chillers and Towers.” ASHRAE Journal, Vol. 46, No. 7; pp. 34-40. 

- Morrison, F. (2014). “Saving Energy with Cooling Towers.” ASHRAE Journal, Vol. 56, No. 2; pp. 34-40. 

- Tom, S. (July 2017). “CHILLED WATER SYSTEM OPTIMIZER.” Cat. No. 11-808-616-01. Farmington, Connecticut: Carrier Corporation.

## Footnotes

[^1]: This variable should be measured to quantify the electricity usage of the VSVV fan if the operation is weather dependent.
[^2]: This variable should be measured to quantify the electricity usage of the VSVV fan if the operation is not weather dependent