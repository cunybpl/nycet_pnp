---
title: Constant-speed, Constant-volume Pump and Motor
type: component
excerpt: Operates at a single speed to circulate liquid (e.g., water, water, and glycol solution) through a piping network where the flow rate through the pump does not vary more than 5%. Centrifugal pumps are the most common type of pumps used.
thumbnail_image: "/images/components/thumbnail-images/2024_0606_cscv pump component_thumbnail.jpg"
associated_systems:
  - Chilled Water Loop
  - Condenser Water Loop
  - Hot Water Loop
  - Steam Condensate Recovery
  - Steam Distribution
related_systems:
  - Chilled Water Loop
  - Condenser Water Loop
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

### Calculation Methodology

{{< calculation_methodology calculation_methodology_id=6 >}}

## References
<!-- Must have emty line after the opeing div tag. If we use a numbered list to relate to in text citations, remove the div  -->
<div class="references">

Evans , P. (2017, Sept 26). How a Chiller, Cooling Tower and Air Handling Unit work together. Retrieved from The Engineering Mindset.com: https://theengineeringmindset.com/chiller-cooling-tower-air-handling-unit-work-together/

Evans, P. (2023, Jan 6). How Do Centrifugal Pumps Work. Retrieved from The Engineering Mindset.com: https://theengineeringmindset.com/how-do-centrifugal-pumps-work/

</div>