---
title: Constant-speed, Constant-volume Fan and Motor
type: component
excerpt: This type of fan circulates air at a single speed and can be either axial or centrifugal.
thumbnail_image: "/images/components/thumbnail-images/2024_0612_cscv fan component_thumbnail_RESIZED-01.jpg"
associated_systems:
  - Boiler
  - Condenser Water Loop
  - Constant-speed, Constant-volume Air Handling Unit
related_systems:
  - Boiler
  - Condenser Water Loop
  - Constant-speed, Constant-volume Air Handling Unit
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=electric-motors-and-drives"
layout: guide
url: "/documents/components/constant-speed-constant-volume-fan-and-motor"
---

## General Overview

A constant-speed, constant-volume (CSCV) fan uses a power-driven rotating impeller to circulate air at a single speed. Fans can be either axial or centrifugal. 

Table 1 shows the plant and system configurations that may contain a CSCV fan and motor and the most common respective controlling variables. 

<div class="table-wrapper">
<table>
    <caption>Table 1. Plants and systems containing constant-speed fans.</caption>
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
                <p>Wet-bulb temperature (F)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Air Handling Unit</p>
            </td>
            <td>
                <p>AHUs</p>
            </td>
            <td>
                <p>AHU Supply Fan</p>
            </td>
            <td>
                <p>Motor schedule and/or Outdoor air temperature (F)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Air Handling Unit</p>
            </td>
            <td>
                <p>AHUs</p>
            </td>
            <td>
                <p>AHU Return Fan</p>
            </td>
            <td>
                <p>Motor schedule and/or Outdoor air temperature (F)</p>
            </td>
        </tr>
        <tr>
            <td>
                <ul>
                <li>Hot Water Heating</li> 
                <li>Domestic Hot Water</li> 
                <li>Steam</li>
                </ul>
            </td>
            <td>
                <p>Boiler</p>
            </td>
            <td>
                <p>Burner fan</p>
            </td>
            <td>
                <p>Motor schedule and/or Outdoor air temperature (F)</p>
            </td>
        </tr>
    </tbody>
</table> 
</div>  

## Evaluation of Energy Consumption

The primary energy source for a CSCV fan is the electricity used to run the fan motor. Table 2 provides a summary of measurements needed to quantify the annual energy consumption and operating characteristics of the CSCV fan and motor.  

<div class="table-wrapper">
<table>
    <caption>Table 2. Key Values and measurements.</caption>
    <thead>
        <tr>
            <td width="30.073349633251834%">
                <p><strong>Component Quantification</strong></p>
            </td>
            <td width="33.251833740831295%">
                <p><strong>Values to be Quantified</strong></p>
            </td>
            <td width="36.67481662591687%">
                <p><strong>Measurement</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>Electricity usage of CSCV fan motor (kWh)</p>
            </td>
            <td>
                <p>Average hourly true RMS power of the motor</p>
            </td>
            <td>
                <a href="/documents/measurement-technique/true-rms-power"><p>True RMS power of motor that drives the fan (kW)</p></a>
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
                <a href="/documents/measurement-technique/motor-runtime"><p>Fan motor runtime (hours)</p></a>
            </td>
        </tr>
        <tr>
            <td>
                <p>Controlling variable, weather dependent</p>
            </td>
            <td>
                <p>Average hourly outdoor air temperature (OAT)</p>
            </td>
            <td>
                <a href="/documents/measurement-technique/outdoor-air-temperature"><p>Outdoor Air Temperature (F)</p></a>
            </td>
        </tr>
    </tbody>
</table> 
</div> 

### Measurement Strategy

The measurement strategy for a CSCV fan and motor is to do a one-time measurement of the true RMS power and long-term measurements of the operational schedule of the motor.  The approach assumes that the true RMS power stays constant throughout the measurement period. Because the motor runs at constant speed and is assumed to be under a constant load, it is either operating at full power (when on) or it is drawing no power (when off). A motor on/off data logger is used to record the operating schedule. The true RMS power is measured at main feed to the constant speed motor. Measurement points are generically represented in Figure 1. 

If the fans are in a modular configuration (assuming they all run at the same speed), then only one fan needs to be measured, provided substantiating documentation from the building automation system (BAS) shows that all cells are operating equally at the same time. If fans are further staged, all fans should be measured. 

In some cases, the operational schedule of the motor will be related to the heating or cooling load of the facility. OAT can be used as a proxy variable for the heating and cooling load. OAT can be measured onsite or data from a nearby weather station may also be used for OAT.

<a href="/images/components/Measurement-boundary-of-a-CSCV-fan.png">
<figure class="figure">
  <img src="/images/components/Measurement-boundary-of-a-CSCV-fan.png" class="figure-img img-fluid rounded" alt="Figure 1. Measurement boundary of a CSCV fan.">
  <figcaption class="figure-caption text-left">Figure 1. Measurement boundary of a CSCV fan.</figcaption>
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
                <li><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor Air Temperature (F)</a></li>
                <li><a href="/documents/measurement-technique/relative-humidity">Relative Humidity (%)</a></li>
                </ul>
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
                Onset HOBO Motor On/Off Data Logger (UX90-004)
            </td>
            <td width="33.333333333333336%">       
                Records when a motor is on and off, as well as runtime. Requires HOBOware software and a USB connection cable for programming and downloading data files.
            </td>
            <td width="33.333333333333336%">
                <a href="/documents/measurement-technique/motor-runtime">Motor Runtime (minutes)</a>
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/Fluke-345-300x300@2x.jpeg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/Fluke-345-300x300@2x.jpeg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Fluke 345 Power Quality Clamp Meter
            </td>
            <td width="33.333333333333336%">
                Multi-purpose electrical measurement tool used to take true RMS power readings over a short period of time.
            </td>
            <td width="33.333333333333336%">
                <a href="/documents/measurement-technique/true-rms-power">True RMS Power (kW)</a>
            </td>
        </tr>
        <tr>
            <td width="33.333333333333336%">
                <a href="https://nycenergytools.com/wp-content/uploads/2021/05/4-channel-logger-1.jpg">
                <figure class="figure">
                <img src="https://nycenergytools.com/wp-content/uploads/2021/05/4-channel-logger-1.jpg" class="figure-img img-fluid rounded" alt="">
                <figcaption class="figure-caption text-left"></figcaption>
                </figure>
                </a>
                Onset HOBO 4-Channel Analog Data Logger (UX120-006M)
            </td>
            <td width="33.333333333333336%">
                Used in conjunction with the CTV series of sensors. Records measurements from up to four CTV sensors. Requires HOBOware software and a USB connection cable for programming and downloading data files.
            </td>
            <td width="33.333333333333336%">
                <a href="/documents/measurement-technique/electrical-current">Electrical Current (Amps)</a>
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Calculation Methodology

The general methodology for quantifying the energy consumption of a CSCV fan motor is to measure the true RMS power of the motor. The estimated annual energy consumption of a CSCV fan is estimated using the simulated yearly schedule of the fan. Many CSCV fans run on a set daily or weekly schedule. 

However, the yearly schedule may be dependent on OAT. If so, the operating hours values can be regressed against OAT to develop a regression model. Depending on the variability of operations, daily or weekly models may be developed to better characterize the component. This model is then used with climate normal year data to estimate the typical annual operating schedule, which is in turn used in conjunction with the true RMS power to calculate the estimated annual electricity consumption.

<br></br>
<i>Click the button below to go to the calculators for this component.</i>
<br></br>

{{< calculation_methodology calculation_methodology_id=2 >}}

## Further Reading

- Boyd, BK.; McMordie Stoughton, KL.; Lewis, T. (2017). “Cooling Tower (Evaporative Cooling System) Measurement and Verification Protocol.” Golden, CO: National Renewable Energy Laboratory. https://www.nrel.gov/docs/fy18osti/70219.pdf.  

- Crowther, H.; Furlong, J. (2004). “Optimizing Chillers and Towers.” ASHRAE Journal, Vol. 46, No. 7, July 2004; pp. 34-40. 

- Morrison, F. (2014). “Saving Energy with Cooling Towers.” ASHRAE Journal, Vol. 56, No. 2, February 2014; pp. 34-40. 

- Tom, S. (July 2017). Cat. No. 11-808-616-01. “CHILLED WATER SYSTEM OPTIMIZER.” Farmington, Connecticut: Carrier Corporation.