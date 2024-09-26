---
title: Constant-speed, Constant-volume Pump and Motor
type: component
excerpt: Operates at a single speed to circulate liquid (water or glycol solution) through a piping network.
thumbnail_image: "/images/components/thumbnail-images/2024_0606_cscv pump component_thumbnail_RESIZED-01.jpg"
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
borrow_equipment_url: "https://nycenergytools.com/equipment/?_system_type=electric-motors-and-drives"
layout: guide
url: "/documents/components/constant-speed-constant-volume-pump-motor"
---

## General Overview

A constant-speed, constant-volume (CSCV) pump and motor operates at a single speed to circulate liquid (e.g., water, water, and glycol solution) through a piping network where the flow rate through the pump does not vary more than 5%. Centrifugal pumps are the most common type of pumps used.

Table 1 shows the plant and system configurations that may contain a CSCV pump and motor that operate based on a regular schedule (e.g., same time of day, same days of week).

<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 1. Plants and systems applicable to CSCV pumps and motors.</caption>
    <thead>
        <tr>
            <td width="30.073349633251834%">
                <p><strong>Plant</strong></p>
            </td>
            <td width="33.251833740831295%">
                <p><strong>System</strong></p>
            </td>
            <td width="36.67481662591687%">
                <p><strong>Component</strong></p>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fr-cell-handler " style="background-color: rgb(255, 255, 255);" width="30.073349633251834%" bgcolor="#e2efd9">
                <p>Air-cooled chilled water plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="33.251833740831295%" bgcolor="#e2efd9">
                <p>Chilled water loop</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="36.67481662591687%" bgcolor="#e2efd9">
                <p>Primary chilled water pump</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="30.073349633251834%" bgcolor="#e2efd9">
                <p>Water-cooled chilled water plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="33.251833740831295%" bgcolor="#e2efd9">
                <p>Condenser water loop</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="36.67481662591687%" bgcolor="#e2efd9">
                <p>Condenser water pump</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="30.073349633251834%" bgcolor="#e2efd9">
                <p>Water-cooled chilled water plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="33.251833740831295%" bgcolor="#e2efd9">
                <p>Chilled water loop</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="36.67481662591687%" bgcolor="#e2efd9">
                <p>Primary chilled water pump</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="30.073349633251834%" bgcolor="#e2efd9">
                <p>Water-cooled chilled water plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="33.251833740831295%" bgcolor="#e2efd9">
                <p>Chilled water loop</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="36.67481662591687%" bgcolor="#e2efd9">
                <p>Secondary chilled water pump</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="30.073349633251834%" bgcolor="#e2efd9">
                <p>Water-cooled chilled water plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="33.251833740831295%" bgcolor="#e2efd9">
                <p>Waterside economizer</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="36.67481662591687%" bgcolor="#e2efd9">
                <p>Waterside economizer pump (if present)</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="30.073349633251834%" bgcolor="#e2efd9">
                <p>Hot water plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="33.251833740831295%" bgcolor="#e2efd9">
                <p>Hot water boiler</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="36.67481662591687%" bgcolor="#e2efd9">
                <p>Makeup water pump</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="30.073349633251834%" bgcolor="#e2efd9">
                <p>Hot water plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="33.251833740831295%" bgcolor="#e2efd9">
                <p>Hot water loop</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="36.67481662591687%" bgcolor="#e2efd9">
                <p>Building loop pump</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="30.073349633251834%" bgcolor="#e2efd9">
                <p>Steam plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="33.251833740831295%" bgcolor="#e2efd9">
                <p>Steam boiler</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="36.67481662591687%" bgcolor="#e2efd9">
                <p>Makeup water pump</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="30.073349633251834%" bgcolor="#e2efd9">
                <p>Steam plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="33.251833740831295%" bgcolor="#e2efd9">
                <p>Feedwater tank</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="36.67481662591687%" bgcolor="#e2efd9">
                <p>Feedwater pump</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 255, 255);" width="30.073349633251834%" bgcolor="#e2efd9">
                <p>Service water plant</p>
            </td>
            <td style="background-color: rgb(255, 255, 255);" width="33.251833740831295%" bgcolor="#e2efd9">
                <p>Service hot water loop</p>
            </td>
            <td class="fr-cell-fixed " style="background-color: rgb(255, 255, 255);" width="36.67481662591687%" bgcolor="#e2efd9">
                <ul>
                <li>Service hot water</li> 
                <li>Recirculation pump</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Evaluation of Energy Consumption

The primary energy source for a CSCV pump is the electricity used to run the pump motor. Table 2 provides a summary of measurements needed to quantify the annual energy consumption and operating characteristics of the CSCV pump and motor.

<table width="100%" cellspacing="0" cellpadding="7">
    <caption>Table 2. Key values and measurements.</caption>
    <thead>
        <tr>
            <td width="28.571428571428573%">
                <p><strong>Component Quantification</strong></p>
            </td>
            <td width="34.76764199655766%">
                <p><strong>Values to be Quantified</strong></p>
            </td>
            <td width="36.660929432013766%">
                <p><strong>Measurement&nbsp;</strong></p>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fr-cell-handler " style="vertical-align: top;" width="28.571428571428573%" height="17">
                <p>Electricity usage of a CSCV pump motor</p>
            </td>
            <td style="vertical-align: top;" width="34.76764199655766%">
                <ul>
                    <li>Average hourly power input to the pump motor</li>
                    <li>Average hourly operating time for the pump motor</li>
                </ul>     
            </td>
            <td style="vertical-align: top;" width="36.660929432013766%">
                <ul>
                    <a href="/documents/measurement-technique/electrical-spot-measurement"><li>True RMS power of pump motor that drives the pump (kW)</li></a>
                    <a href="/documents/measurement-technique/motor-runtime"><li>Pump motor runtime</li></a>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Measurement Strategy

The measurement strategy for a CSCV pump and motor is to do a one-time measurement of the power draw and long-term measurements of the operational schedule of the motor. The approach assumes that the power draw stays constant throughout the measurement period. Because the motor runs at constant-speed and is under a constant load, it is either operating at full power (when on) or it is drawing no power (when off). A motor on/off data logger is used to record the operating schedule. The true RMS power is measured at the main feed to the constant-speed motor. Measurement points are generically represented in Figure 2.

<a href="/images/components/2024_0626_CSCV pump component_figure 1.jpg">
<figure class="figure">
  <img src="/images/components/2024_0626_CSCV pump component_figure 1.jpg" class="figure-img img-fluid rounded zoom" alt=" Figure 1. Measurement points for a CSCV pump motor.">
  <figcaption class="figure-caption text-left">Figure 1. Measurement points for a CSCV pump motor.</figcaption>
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
    </tbody>
</table>

### Calculation Methodology

<br></br>
<i>Click the button below to go to the calculators for this component.</i>
<br></br>

{{< calculation_methodology calculation_methodology_id=6 >}}

## Further Reading

- Evans , P. (2017, Sept 26). How a Chiller, Cooling Tower and Air Handling Unit work together. Retrieved from The Engineering Mindset.com: https://theengineeringmindset.com/chiller-cooling-tower-air-handling-unit-work-together/

- Evans, P. (2023, Jan 6). How Do Centrifugal Pumps Work. Retrieved from The Engineering Mindset.com: https://theengineeringmindset.com/how-do-centrifugal-pumps-work/