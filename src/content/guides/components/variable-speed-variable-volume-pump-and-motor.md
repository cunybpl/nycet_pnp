---
title: Variable-speed, Variable-volume Pump and Motor
type: component
excerpt: Operates at different speeds with a variable frequency drive to circulate liquid (water or glycol solution) through a piping network.
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
borrow_equipment_url: "https://nycenergytools.com/equipment-kits/pump-and-motor-kit-variable-speed/"
layout: guide
url: "/documents/components/variable-speed-variable-volume-pump-and-motor"
---

## General Overview

A variable-speed, variable-volume (VSVV) pump and motor circulate liquid (e.g., water or water and glycol solution) through a piping network where the flow rate fluctuates as required by the plant and systems they serve. Outdoor air temperature (OAT) is the independent variable that drives the pump speed since heating and cooling loads are generally affected by OAT. The pump motor is equipped with a variable frequency drive (VFD) which may be integrated in the pump and motor package or installed separately. Centrifugal pumps are the most common type of pumps used in buildings. 

Table 1 shows the plant and system configurations that may contain a VSVV pump and motor and the controlling variable. 

<div class="table-wrapper">
<table>
    <caption>Table 1. Plants and systems containing variable-speed, variable-volume pumps</caption>
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
</div>

## Evaluation of Energy Consumption

The primary energy source of a VSVV pump is the electricity used to run the pump motor. Table 2 provides a summary of measurements needed to quantify the annual energy consumption and operating characteristics of the VSVV pump and motor. 

<div class="table-wrapper">
<table>
<caption>
    
Table 2. Key values and measurements to evaluate energy consumption.[^1]
    
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
                <p>Electricity input to a variable-speed, variable-volume pump motor</p>
            </td>
            <td>
                <ul>
                    <li>Hourly power input to a VSVV pump motor at known speeds (e.g. 30%, 50%, 75%, 100%)</li>
                    <li>Average hourly outdoor air temperature (OAT)</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/true-rms-power">Hourly true RMS power</a> of pump motor that drives the pump (kW)</li>
                    <li><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor air temperature (F)</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Measurement Strategy

The measurement strategy for a variable-speed, variable-volume pump and motor is to measure power draw of the pump motor at various known speeds, develop a mathematical relationship between the power and speed, and then collect hourly OAT. Measurement locations are generically represented in Figure 1.

<!-- Will update image below after getting new image from Orlando -->
<a href="/images/components/2024_1023_VSVV pump component_figure 1.jpg">
<figure class="figure">
  <img src="/images/components/2024_1023_VSVV pump component_figure 1.jpg" class="figure-img img-fluid rounded" alt="Figure 1. Variable-speed, Variable-volume pump and motor measurement locations.">
  <figcaption class="figure-caption text-left">Figure 1. Variable-speed, Variable-volume pump and motor measurement locations (click on image to enlarge).</figcaption>
</figure>
</a>

### Measurement Equipment

Table 3 provides the equipment required to carry out the measurements of this component. 

<div class="table-wrapper">
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
                Provides a measurement of true RMS power from voltage and current inputs and records long-term power (kW) and energy (<a class="glossary-link" href="/glossary#kwh"><abbr title="Kilowatt Hour">kWh</abbr></a>) measurements. Requires ELOG19 software and a USB connection cable for programming and downloading data files.    
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
                <a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor Air Temperature (F)</a>
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Calculation Methodology

The general methodology for quantifying the energy consumption of a VSVV pump motor is determined by the true RMS power of the three-phase power supply either at the power main for the motor or at the three-phase input to the VFD. These values are regressed against outdoor air temperature to develop a temperature-dependent regression model. Depending on the variability of operations, daily or weekly models may be developed to better characterize the system. This model is then used with climate normal year data to estimate the typical energy use of the variable-speed, variable-volume pump.  

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