---
title: Variable-speed, Variable-volume Pump and Motor
type: component
excerpt: A variable-speed, variable-volume (VSVV) pump and motor circulate liquid (e.g., water or water and glycol solution) through a piping network where the flow rate fluctuates as required by the plant and systems they serve.
thumbnail_image: "/images/components/thumbnail-images/2024_0606_vsvv pump component_thumbnail_RESIZED-01.jpg"
associated_systems:
  - Chilled Water Loop
  - Condenser Water Loop
  - Feedwater System
  - Hot Water Loop
  - Steam Condensate Recovery
  - Steam Distribution
related_systems:
  - Chilled Water Loop
  - Condenser Water Loop
  - Feedwater System
  - Hot Water Loop
  - Steam Condensate Recovery
  - Steam Distribution
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/pump-motor-kit-variable-speed/"
layout: guide
url: "/documents/components/variable-speed-variable-volume-pump-and-motor"
---

## General Overview

A variable-speed, variable-volume (VSVV) pump and motor circulate liquid (e.g., water or water and glycol solution) through a piping network where the flow rate fluctuates as required by the plant and systems they serve. Outdoor air temperature (OAT) is the independent variable that drives the pump speed since heating and cooling loads are generally affected by OAT. The pump motor is equipped with a variable frequency drive (VFD) which may be integrated in the pump and motor package or installed separately. Centrifugal pumps are the most common type of pumps used in buildings. 

Table 1 shows the plant and system configurations that may contain a VSVV pump and motor and the controlling variable. 

<table>
    <caption>Table 1. Plants and systems applicable to variable-speed pumps</caption>
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
                <p>Air-cooled chilled water plant</p>
            </td>
            <td>
                <p>Chilled water loop</p>
            </td>
            <td>
                <p>Primary chilled water pump</p>
            </td>
            <td>
                <p>Outdoor air temperature (F)</p>
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
                <p>Outdoor air temperature (F)</p>
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
                <p>Outdoor air temperature (F)</p>
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
                <p>Outdoor air temperature (F)</p>
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
                <p>Outdoor air temperature (F)</p>
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
                <p>Outdoor air temperature (F)</p>
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
                <p>Outdoor air tempearature (F)</p>
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
                <p>Outdoor air temperature (F)</p>
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
                <p>Outdoor air temperature (F)</p>
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
                <p>Outdoor air temperature (F)</p>
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

## Evaluation of Energy Consumption

The primary energy source of a VSVV pump is the electricity used to run the pump motor. Table 2 provides a summary of measurements needed to quantify the annual energy consumption and operating characteristics of the VSVV pump and motor. 

<table>
<caption>
    
Table 2. Key values and measurements[^1]
    
</caption>
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
                <p>Electricity input to a variable-speed pump motor</p>
            </td>
            <td>
                <ul>
                    <li>Hourly power input to a VSVV pump motor at known speeds (e.g. 30%, 50%, 75%, 100%)</li>
                    <li>Average hourly outside air temperature (OAT)</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/true-rms-power">True RMS power</a> of pump motor that drives the pump (kW)</li>
                    <li><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor air temperature (F)</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Measurement Strategy

The measurement strategy for a variable-speed pump and motor is to measure power draw of the pump motor at various known speeds, develop a mathematical relationship between the power and speed, and then collect hourly OAT. Measurement points are generically represented in Figure 1.

<!-- Will update image below after getting new image from Orlando -->
<a href="src/static/images/components/2024_0626_VSVV pump component_figure 1.jpg">
<figure class="figure">
  <img src="/images/components/2024_0626_VSVV pump component_figure 1.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Measurement boundary of a pump with a VFD.">
  <figcaption class="figure-caption text-left">Figure 1. Measurement boundary of a pump with a VFD.</figcaption>
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
                <a href="https://nycenergytools.com/equipment/energy-logger-2/">DENT ELITEproXC Portable Power Data Logger (EXCUNC)</a>
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
                <a href="https://nycenergytools.com/equipment/temp-rh-mx2301/">Onset HOBO Temperature/Relative Humidity Weatherproof Data Logger (MX2301)</a>
            </td>
            <td width="33.333333333333336%">
                Records outdoor air temperature and relative humidity using internal sensors. Requires HOBOware software and a USB connection cable for programming and downloading data files.       
            </td>
            <td width="33.333333333333336%">
                <a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor Air Temperature (F)</a>
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                <a href="https://nycenergytools.com/wp-content/uploads/2021/04/HOBO-UX90-Motor-On-Off-Logger_UX90-004.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/04/HOBO-UX90-Motor-On-Off-Logger_UX90-004.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                <a href="https://nycenergytools.com/equipment/motor-on-off-logger-ux90-004/">Onset HOBO Motor On/Off Data Logger (UX90-004)</a>
            </td>
            <td width="33.333333333333336%">   
                Records when a motor is on and off, as well as runtime. Requires HOBOware software and a USB connection cable for programming and downloading data files.    
            </td>
            <td width="33.333333333333336%">
                <a href="/documents/measurement-technique/motor-runtime">Motor Runtime (Minutes)</a>   
            </td>
        </tr>
    </tbody>
</table>

### Calculation Methodology

The general methodology for quantifying the energy consumption of a VSVV pump motor is determined by the true RMS power of the three-phase power supply either at the power main for the motor or at the three-phase input to the VFD. These values are regressed against outside air temperature to develop a temperature-dependent regression model. Depending on the variability of operations, daily or weekly models may be developed to better characterize the system. This model is then used with climate normal year data to estimate the typical energy use of the variable-speed pump.  

<br></br>
<i>Click the button below to go to the calculators for this component.</i>
<br></br>

{{< calculation_methodology calculation_methodology_id=6 >}} 

## Further Reading

- ​​Chaurette, J. (2003). In PUMP SYSTEM ANALYSIS AND CENTRIFUGAL PUMP SIZING (5th ed.). Retrieved November 2019, from https://www.pumpfundamentals.com/download/book/chapter4.pdf

- Satterfield, Z. (2010). Fundamentals of Hydraulics: Pressure. Tech Brief, 9(4), pp. 1-4. Retrieved November 21, 2019, from https://www.nesc.wvu.edu/files/d/5c5a9fd1-0f8b-48c5-9063-b55d12651b91/fund-of-hydr-pressure.pdf

- Taylor, S. T. (2002, February). Primary-only vs. primary-secondary variable flow systems. ASHRAE Journal, 25-29

- Trane. (2002). Variable-Primary-Flow Systems Revisited. Trane Engineers Newsletter, 31(4). Retrieved November 2019, from https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/education-training/engineers-newsletters/waterside-design/adm_apn005_en.pdf

## Footnotes

[^1]: Option 1: Measure hourly true RMS power of pump and motor and measure hourly OAT; Option 2: Measure hourly pump and motor speed and hourly OAT